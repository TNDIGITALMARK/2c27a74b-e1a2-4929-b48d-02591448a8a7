'use client';

import { useState, useEffect } from 'react';
import { Navigation } from '@/components/layout/navigation';
import {
  Mail,
  Phone,
  Calendar,
  DollarSign,
  Briefcase,
  FileText,
  Trash2,
  Eye,
  EyeOff,
  Filter,
  Search,
  Download
} from 'lucide-react';

interface FormSubmission {
  id: string;
  formType: 'contact' | 'start-project';
  formData: any;
  status: 'new' | 'read' | 'responded' | 'archived';
  createdAt: string;
  updatedAt: string;
}

export default function FormsPage() {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'contact' | 'start-project'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  useEffect(() => {
    filterSubmissions();
  }, [submissions, searchTerm, filterType]);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/form-submissions');
      const result = await response.json();

      if (result.success) {
        setSubmissions(result.submissions);
      } else {
        setError(result.error || 'Failed to load submissions');
      }
    } catch (err) {
      console.error('Error fetching submissions:', err);
      setError('Failed to load form submissions');
    } finally {
      setLoading(false);
    }
  };

  const filterSubmissions = () => {
    let filtered = submissions;

    // Filter by type
    if (filterType !== 'all') {
      filtered = filtered.filter(s => s.formType === filterType);
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(s => {
        const data = s.formData;
        return (
          data.name?.toLowerCase().includes(term) ||
          data.email?.toLowerCase().includes(term) ||
          data.businessName?.toLowerCase().includes(term) ||
          data.message?.toLowerCase().includes(term) ||
          data.description?.toLowerCase().includes(term)
        );
      });
    }

    setFilteredSubmissions(filtered);
  };

  const deleteSubmission = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) {
      return;
    }

    try {
      const response = await fetch(`/api/form-submissions?id=${id}`, {
        method: 'DELETE'
      });

      const result = await response.json();

      if (result.success) {
        setSubmissions(submissions.filter(s => s.id !== id));
      } else {
        alert('Failed to delete submission: ' + result.error);
      }
    } catch (err) {
      console.error('Error deleting submission:', err);
      alert('Failed to delete submission');
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const exportToJSON = () => {
    const dataStr = JSON.stringify(filteredSubmissions, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `form-submissions-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="container mx-auto py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Form Submissions</h1>
          <p className="text-gray-600">View and manage all contact and project request forms</p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search submissions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              />
            </div>

            {/* Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value as any)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none appearance-none"
              >
                <option value="all">All Forms</option>
                <option value="contact">Contact Forms</option>
                <option value="start-project">Project Requests</option>
              </select>
            </div>

            {/* Export */}
            <button
              onClick={exportToJSON}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <Download className="w-5 h-5" />
              Export JSON
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{submissions.length}</div>
              <div className="text-sm text-gray-600">Total Submissions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {submissions.filter(s => s.formType === 'contact').length}
              </div>
              <div className="text-sm text-gray-600">Contact Forms</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">
                {submissions.filter(s => s.formType === 'start-project').length}
              </div>
              <div className="text-sm text-gray-600">Project Requests</div>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-primary"></div>
            <p className="mt-4 text-gray-600">Loading submissions...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
            <p className="text-destructive font-semibold">{error}</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredSubmissions.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Submissions Found</h3>
            <p className="text-gray-600">
              {searchTerm || filterType !== 'all'
                ? 'Try adjusting your search or filter criteria'
                : 'Form submissions will appear here once received'}
            </p>
          </div>
        )}

        {/* Submissions List */}
        {!loading && !error && filteredSubmissions.length > 0 && (
          <div className="space-y-4">
            {filteredSubmissions.map((submission) => (
              <div
                key={submission.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Submission Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            submission.formType === 'contact'
                              ? 'bg-primary/10 text-primary'
                              : 'bg-success/10 text-success'
                          }`}
                        >
                          {submission.formType === 'contact' ? 'Contact Form' : 'Project Request'}
                        </span>
                        <span className="text-sm text-gray-500">
                          {new Date(submission.createdAt).toLocaleString()}
                        </span>
                      </div>

                      {/* Contact Form Summary */}
                      {submission.formType === 'contact' && (
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-gray-900">
                            <Mail className="w-4 h-4 text-gray-400" />
                            <span className="font-semibold">{submission.formData.name}</span>
                            <span className="text-gray-500">({submission.formData.email})</span>
                          </div>
                          {submission.formData.serviceType && (
                            <div className="flex items-center gap-2 text-gray-600">
                              <Briefcase className="w-4 h-4 text-gray-400" />
                              <span>{submission.formData.serviceType}</span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Project Request Summary */}
                      {submission.formType === 'start-project' && (
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-gray-900">
                            <Briefcase className="w-4 h-4 text-gray-400" />
                            <span className="font-semibold">{submission.formData.businessName}</span>
                          </div>
                          {submission.formData.projectType && (
                            <div className="flex items-center gap-2 text-gray-600">
                              <FileText className="w-4 h-4 text-gray-400" />
                              <span>{submission.formData.projectType}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleExpand(submission.id)}
                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        title={expandedId === submission.id ? 'Collapse' : 'Expand'}
                      >
                        {expandedId === submission.id ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                      <button
                        onClick={() => deleteSubmission(submission.id)}
                        className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedId === submission.id && (
                  <div className="px-6 pb-6 pt-4 border-t border-gray-200 bg-gray-50">
                    {submission.formType === 'contact' ? (
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-600">Email:</span>
                              <span className="font-medium">{submission.formData.email}</span>
                            </div>
                            {submission.formData.phone && (
                              <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-600">Phone:</span>
                                <span className="font-medium">{submission.formData.phone}</span>
                              </div>
                            )}
                            {submission.formData.budget && (
                              <div className="flex items-center gap-2">
                                <DollarSign className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-600">Budget:</span>
                                <span className="font-medium">{submission.formData.budget}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Message</h4>
                          <p className="text-sm text-gray-700 bg-white p-4 rounded-lg border border-gray-200">
                            {submission.formData.message || 'No message provided'}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Project Details</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                              <Briefcase className="w-4 h-4 text-gray-400 mt-0.5" />
                              <div>
                                <span className="text-gray-600">Business Type:</span>
                                <span className="font-medium ml-2">{submission.formData.businessType}</span>
                              </div>
                            </div>
                            {submission.formData.budget && (
                              <div className="flex items-start gap-2">
                                <DollarSign className="w-4 h-4 text-gray-400 mt-0.5" />
                                <div>
                                  <span className="text-gray-600">Budget:</span>
                                  <span className="font-medium ml-2">{submission.formData.budget}</span>
                                </div>
                              </div>
                            )}
                            {submission.formData.timeline && (
                              <div className="flex items-start gap-2">
                                <Calendar className="w-4 h-4 text-gray-400 mt-0.5" />
                                <div>
                                  <span className="text-gray-600">Timeline:</span>
                                  <span className="font-medium ml-2">{submission.formData.timeline}</span>
                                </div>
                              </div>
                            )}
                          </div>
                          {submission.formData.features && submission.formData.features.length > 0 && (
                            <div className="mt-4">
                              <h5 className="font-semibold text-gray-900 mb-2">Required Features</h5>
                              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {submission.formData.features.map((feature: string, idx: number) => (
                                  <li key={idx}>{feature}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Additional Details</h4>
                          <p className="text-sm text-gray-700 bg-white p-4 rounded-lg border border-gray-200">
                            {submission.formData.description || 'No additional details provided'}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
