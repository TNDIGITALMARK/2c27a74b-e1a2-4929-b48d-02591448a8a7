'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/layout/navigation';
import { DeveloperCard } from '@/components/marketplace/developer-card';
import { developers, getDevelopersBySpecialization } from '@/lib/data/mock-data';
import { ArrowLeft, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

type ProjectType = 'ecommerce' | 'restaurant' | 'portfolio' | 'business' | 'other';

export default function StartProjectPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    projectType: '' as ProjectType | '',
    budget: '',
    timeline: '',
    features: [] as string[],
    description: ''
  });
  const [matchedDevelopers, setMatchedDevelopers] = useState(developers.slice(0, 4));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleNext = async () => {
    if (step === 2) {
      // Match developers based on project type
      let matched = developers;
      if (formData.projectType === 'ecommerce') {
        matched = getDevelopersBySpecialization('E-commerce');
      } else if (formData.projectType === 'restaurant') {
        matched = getDevelopersBySpecialization('Restaurant');
      } else if (formData.projectType === 'portfolio') {
        matched = getDevelopersBySpecialization('Portfolio');
      } else if (formData.projectType === 'business') {
        matched = getDevelopersBySpecialization('Business');
      }
      setMatchedDevelopers(matched.slice(0, 4));

      // Send email with project details
      setIsSubmitting(true);
      setError('');

      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            formType: 'start-project',
            formData: formData,
          }),
        });

        const result = await response.json();

        if (result.success) {
          setSubmitted(true);
        } else {
          setError(result.error || 'Failed to send project request.');
        }
      } catch (err) {
        console.error('Error submitting form:', err);
        setError('Failed to send project request. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const toggleFeature = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="container mx-auto py-12">
        {/* Progress Indicator */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    s < step
                      ? 'bg-success text-white'
                      : s === step
                      ? 'bg-primary text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {s < step ? <CheckCircle className="w-6 h-6" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      s < step ? 'bg-success' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3 text-sm font-medium">
            <span className={step >= 1 ? 'text-primary' : 'text-gray-500'}>Project Details</span>
            <span className={step >= 2 ? 'text-primary' : 'text-gray-500'}>Requirements</span>
            <span className={step >= 3 ? 'text-primary' : 'text-gray-500'}>Match Developers</span>
          </div>
        </div>

        {/* Step 1: Project Details */}
        {step === 1 && (
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold text-gray-900">Tell Us About Your Project</h1>
            </div>
            <p className="text-gray-600 mb-8">
              Let's start with the basics. This helps us match you with the perfect developer.
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g., Bella's Boutique"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What type of business do you have?
                </label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select business type</option>
                  <option value="retail">Retail Store</option>
                  <option value="restaurant">Restaurant/Cafe</option>
                  <option value="service">Service Business</option>
                  <option value="professional">Professional Services</option>
                  <option value="creative">Creative/Agency</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  What type of website do you need?
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { value: 'ecommerce', label: 'E-commerce Store', icon: '🛍️' },
                    { value: 'restaurant', label: 'Restaurant Website', icon: '🍽️' },
                    { value: 'portfolio', label: 'Portfolio/Gallery', icon: '🎨' },
                    { value: 'business', label: 'Business Website', icon: '💼' },
                    { value: 'other', label: 'Other', icon: '✨' },
                  ].map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: type.value as ProjectType })}
                      className={`p-4 border-2 rounded-lg text-left transition-all ${
                        formData.projectType === type.value
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-primary/50'
                      }`}
                    >
                      <div className="text-3xl mb-2">{type.icon}</div>
                      <div className="font-medium text-gray-900">{type.label}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button
                onClick={handleNext}
                disabled={!formData.businessName || !formData.businessType || !formData.projectType}
                className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                Continue
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Requirements */}
        {step === 2 && (
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Project Requirements</h1>
            <p className="text-gray-600 mb-8">
              Help us understand your needs, timeline, and budget.
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  <option value="1000-2500">$1,000 - $2,500</option>
                  <option value="2500-5000">$2,500 - $5,000</option>
                  <option value="5000-8000">$5,000 - $8,000</option>
                  <option value="8000-15000">$8,000 - $15,000</option>
                  <option value="15000+">$15,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select timeline</option>
                  <option value="2-4 weeks">2-4 weeks</option>
                  <option value="4-6 weeks">4-6 weeks</option>
                  <option value="6-8 weeks">6-8 weeks</option>
                  <option value="8-12 weeks">8-12 weeks</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Required Features (select all that apply)
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Online Store',
                    'Payment Processing',
                    'Booking System',
                    'Contact Forms',
                    'Blog',
                    'Photo Gallery',
                    'Customer Accounts',
                    'Search Functionality',
                    'Mobile App',
                    'Social Media Integration',
                    'Email Marketing',
                    'Analytics Dashboard'
                  ].map((feature) => (
                    <button
                      key={feature}
                      type="button"
                      onClick={() => toggleFeature(feature)}
                      className={`p-3 border-2 rounded-lg text-left text-sm transition-all ${
                        formData.features.includes(feature)
                          ? 'border-primary bg-primary/5 text-primary font-medium'
                          : 'border-gray-200 text-gray-700 hover:border-primary/50'
                      }`}
                    >
                      {feature}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details (Optional)
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell us more about your vision, design preferences, or any specific requirements..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={handleBack}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.budget || !formData.timeline || isSubmitting}
                className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting ? 'Processing...' : 'Find Developers'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Matched Developers */}
        {step === 3 && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              {submitted && (
                <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-success">Project request sent successfully!</p>
                    <p className="text-sm text-success/80">We've emailed your project details and will get back to you soon.</p>
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center gap-3">
                  <div className="w-6 h-6 text-destructive flex-shrink-0">⚠️</div>
                  <div>
                    <p className="font-semibold text-destructive">Error sending project request</p>
                    <p className="text-sm text-destructive/80">{error}</p>
                  </div>
                </div>
              )}

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                We Found {matchedDevelopers.length} Perfect Matches!
              </h1>
              <p className="text-gray-600 mb-6">
                These developers specialize in {formData.projectType} websites and match your budget and timeline.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Your Project Summary:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Business:</span>{' '}
                    <span className="font-medium text-gray-900">{formData.businessName}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Type:</span>{' '}
                    <span className="font-medium text-gray-900">{formData.projectType}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Budget:</span>{' '}
                    <span className="font-medium text-gray-900">${formData.budget}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Timeline:</span>{' '}
                    <span className="font-medium text-gray-900">{formData.timeline}</span>
                  </div>
                </div>
                {formData.features.length > 0 && (
                  <div className="mt-4">
                    <span className="text-gray-600 text-sm">Features:</span>{' '}
                    <span className="font-medium text-gray-900 text-sm">
                      {formData.features.join(', ')}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {matchedDevelopers.map((developer) => (
                <DeveloperCard key={developer.id} developer={developer} />
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={handleBack}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
              <Link
                href="/"
                className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Browse All Developers
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
