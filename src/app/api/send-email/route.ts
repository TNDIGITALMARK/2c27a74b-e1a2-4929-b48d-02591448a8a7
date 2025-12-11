import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, formData } = body;

    // Configure nodemailer with Outlook SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: 'websitemaker2025@outlook.com',
        pass: process.env.OUTLOOK_APP_PASSWORD || '', // Store password in environment variable
      },
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false,
      },
    });

    // Generate email content based on form type
    let emailSubject = '';
    let emailHtml = '';

    if (formType === 'contact') {
      emailSubject = `New Contact Form Submission - ${formData.serviceType || 'General Inquiry'}`;
      emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 3px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 15px;">Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; background: #f3f4f6; font-weight: bold; width: 150px;">Name:</td>
                <td style="padding: 8px; background: #fff;">${formData.name || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Email:</td>
                <td style="padding: 8px; background: #fff;">${formData.email || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Phone:</td>
                <td style="padding: 8px; background: #fff;">${formData.phone || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Service Type:</td>
                <td style="padding: 8px; background: #fff;">${formData.serviceType || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Budget:</td>
                <td style="padding: 8px; background: #fff;">${formData.budget || 'Not specified'}</td>
              </tr>
            </table>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Project Details</h3>
            <div style="padding: 15px; background: #f9fafb; border-left: 4px solid #2563eb;">
              ${formData.message || 'No message provided'}
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from the WebMarket contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `;
    } else if (formType === 'start-project') {
      emailSubject = `New Project Request - ${formData.businessName}`;
      emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 3px solid #2563eb; padding-bottom: 10px;">
            New Project Request
          </h2>

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 15px;">Business Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; background: #f3f4f6; font-weight: bold; width: 150px;">Business Name:</td>
                <td style="padding: 8px; background: #fff;">${formData.businessName || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Business Type:</td>
                <td style="padding: 8px; background: #fff;">${formData.businessType || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Project Type:</td>
                <td style="padding: 8px; background: #fff;">${formData.projectType || 'N/A'}</td>
              </tr>
            </table>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 15px;">Project Requirements</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; background: #f3f4f6; font-weight: bold; width: 150px;">Budget:</td>
                <td style="padding: 8px; background: #fff;">${formData.budget || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Timeline:</td>
                <td style="padding: 8px; background: #fff;">${formData.timeline || 'N/A'}</td>
              </tr>
            </table>
          </div>

          ${formData.features && formData.features.length > 0 ? `
            <div style="margin: 20px 0;">
              <h3 style="color: #333; margin-bottom: 10px;">Required Features</h3>
              <div style="padding: 15px; background: #f9fafb; border-left: 4px solid #2563eb;">
                <ul style="margin: 0; padding-left: 20px;">
                  ${formData.features.map((f: string) => `<li>${f}</li>`).join('')}
                </ul>
              </div>
            </div>
          ` : ''}

          ${formData.description ? `
            <div style="margin: 20px 0;">
              <h3 style="color: #333; margin-bottom: 10px;">Additional Details</h3>
              <div style="padding: 15px; background: #f9fafb; border-left: 4px solid #2563eb;">
                ${formData.description}
              </div>
            </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from the WebMarket Start Project form.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `;
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid form type' },
        { status: 400 }
      );
    }

    // Send email
    const info = await transporter.sendMail({
      from: 'websitemaker2025@outlook.com',
      to: 'websitemaker2025@outlook.com',
      subject: emailSubject,
      html: emailHtml,
    });

    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      messageId: info.messageId,
    });
  } catch (error) {
    console.error('Error sending email:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
