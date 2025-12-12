import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const SUBMISSIONS_FILE = path.join(process.cwd(), 'data', 'form-submissions.json');

// Ensure data directory exists
async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Read submissions from file
async function readSubmissions() {
  try {
    await ensureDataDirectory();
    const data = await fs.readFile(SUBMISSIONS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // File doesn't exist yet, return empty array
    return [];
  }
}

// Write submissions to file
async function writeSubmissions(submissions: any[]) {
  await ensureDataDirectory();
  await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
}

// GET - Retrieve all form submissions
export async function GET(request: NextRequest) {
  try {
    const submissions = await readSubmissions();

    // Sort by date, newest first
    submissions.sort((a: any, b: any) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return NextResponse.json({
      success: true,
      submissions,
      total: submissions.length
    });
  } catch (error) {
    console.error('Error reading submissions:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to retrieve submissions',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// POST - Save a new form submission
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, formData } = body;

    if (!formType || !formData) {
      return NextResponse.json(
        { success: false, error: 'Missing formType or formData' },
        { status: 400 }
      );
    }

    // Read existing submissions
    const submissions = await readSubmissions();

    // Create new submission
    const newSubmission = {
      id: `submission-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      formType,
      formData,
      status: 'new',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Add to submissions array
    submissions.push(newSubmission);

    // Save back to file
    await writeSubmissions(submissions);

    return NextResponse.json({
      success: true,
      message: 'Form submission saved successfully',
      submission: newSubmission
    });
  } catch (error) {
    console.error('Error saving submission:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to save submission',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// DELETE - Delete a specific submission
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Missing submission ID' },
        { status: 400 }
      );
    }

    // Read existing submissions
    const submissions = await readSubmissions();

    // Filter out the submission to delete
    const filteredSubmissions = submissions.filter((s: any) => s.id !== id);

    if (filteredSubmissions.length === submissions.length) {
      return NextResponse.json(
        { success: false, error: 'Submission not found' },
        { status: 404 }
      );
    }

    // Save back to file
    await writeSubmissions(filteredSubmissions);

    return NextResponse.json({
      success: true,
      message: 'Submission deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting submission:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to delete submission',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
