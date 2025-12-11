import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/layout/navigation';
import { PortfolioCard } from '@/components/marketplace/portfolio-card';
import { getDeveloperById } from '@/lib/data/mock-data';
import {
  Star,
  MapPin,
  Clock,
  CheckCircle,
  MessageSquare,
  ArrowLeft,
  Award,
  Briefcase
} from 'lucide-react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DeveloperProfilePage({ params }: PageProps) {
  const { id } = await params;
  const developer = getDeveloperById(id);

  if (!developer) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="container mx-auto py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Marketplace
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Developer Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center">
                <div className="text-7xl mb-4">{developer.avatar}</div>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">{developer.name}</h1>
                <p className="text-gray-600 mb-4">{developer.title}</p>

                {/* Rating */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="w-5 h-5 fill-warning text-warning" />
                  <span className="font-bold text-lg">{developer.rating}</span>
                  <span className="text-gray-500">({developer.reviewCount} reviews)</span>
                </div>

                {/* Availability Badge */}
                <span
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                    developer.availability === 'Available'
                      ? 'bg-success/10 text-success'
                      : developer.availability === 'Limited'
                      ? 'bg-warning/10 text-warning'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-current"></span>
                  {developer.availability}
                </span>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {developer.completedProjects}
                    </div>
                    <div className="text-xs text-gray-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{developer.responseTime}</div>
                    <div className="text-xs text-gray-600">Response Time</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <button className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Contact Developer
                  </button>
                  <button className="w-full px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                    Request Quote
                  </button>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Pricing
              </h3>
              <div className="mb-2">
                <div className="text-xs text-gray-600 mb-1">Starting at</div>
                <div className="text-3xl font-bold text-gray-900">
                  ${developer.startingPrice.toLocaleString()}
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                Final pricing depends on project scope and complexity. Contact for detailed quote.
              </p>
            </div>

            {/* Location & Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">{developer.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">Responds in {developer.responseTime}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-gray-700">Verified Profile</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-700 leading-relaxed">{developer.bio}</p>
            </div>

            {/* Specializations */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Specializations
              </h2>
              <div className="flex flex-wrap gap-3">
                {developer.specialization.map((spec, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {developer.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Portfolio */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Portfolio</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {developer.portfolio.map((item) => (
                  <PortfolioCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Client Reviews</h2>
              <div className="space-y-6">
                {/* Sample Testimonials */}
                <div className="border-l-4 border-primary pl-6 py-2">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3">
                    "Absolutely fantastic work! {developer.name} delivered beyond our expectations. The website is beautiful, fast, and exactly what we needed."
                  </p>
                  <p className="text-sm text-gray-600 font-medium">- Happy Client</p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3">
                    "Professional, responsive, and highly skilled. Would definitely work with {developer.name} again on future projects!"
                  </p>
                  <p className="text-sm text-gray-600 font-medium">- Satisfied Customer</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-lg shadow-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-3">Ready to Start Your Project?</h3>
              <p className="mb-6 text-white/90">
                Get in touch with {developer.name} to discuss your requirements and get a custom quote.
              </p>
              <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
