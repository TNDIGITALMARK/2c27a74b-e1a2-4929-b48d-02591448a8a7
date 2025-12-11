'use client';

import Link from 'next/link';
import { Navigation } from '@/components/layout/navigation';
import {
  Sparkles,
  Code2,
  Palette,
  Zap,
  Shield,
  Users,
  TrendingUp,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  Award,
  Target
} from 'lucide-react';

export default function CustomWebsitePage() {
  const services = [
    {
      icon: Code2,
      title: 'Custom Development',
      description: 'Bespoke websites built from scratch using the latest technologies',
      features: ['React/Next.js', 'Custom CMS', 'API Integration', 'Database Design']
    },
    {
      icon: Palette,
      title: 'Unique Design',
      description: 'Original designs that perfectly capture your brand identity',
      features: ['Brand Analysis', 'UI/UX Design', 'Prototyping', 'Design System']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast websites optimized for speed and conversions',
      features: ['Speed Optimization', 'SEO Setup', 'Analytics', 'Performance Monitoring']
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Enterprise-grade security with ongoing support and updates',
      features: ['SSL Certificates', 'Security Audits', 'Regular Backups', 'Updates']
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Discovery & Planning',
      description: 'We dive deep into your business goals, target audience, and requirements to create a comprehensive project plan.',
      duration: '1-2 weeks',
      deliverables: ['Project Scope', 'Sitemap', 'Timeline', 'Budget']
    },
    {
      step: '2',
      title: 'Design Phase',
      description: 'Our designers create stunning mockups and prototypes that bring your vision to life.',
      duration: '2-3 weeks',
      deliverables: ['Wireframes', 'Visual Designs', 'Interactive Prototypes', 'Design System']
    },
    {
      step: '3',
      title: 'Development',
      description: 'Expert developers build your website using modern technologies and best practices.',
      duration: '4-8 weeks',
      deliverables: ['Responsive Website', 'CMS Setup', 'Testing', 'Quality Assurance']
    },
    {
      step: '4',
      title: 'Launch & Support',
      description: 'We deploy your website and provide ongoing support to ensure continued success.',
      duration: 'Ongoing',
      deliverables: ['Deployment', 'Training', 'Documentation', 'Maintenance']
    }
  ];

  const portfolioExamples = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      client: 'Fashion Retail Brand',
      description: 'Multi-vendor marketplace with advanced filtering, user accounts, and integrated payment processing.',
      results: ['300% increase in online sales', '50K+ monthly visitors', '4.8★ customer rating'],
      image: '/portfolio/ecommerce.jpg',
      tags: ['E-Commerce', 'React', 'Stripe', 'Multi-Vendor']
    },
    {
      id: 2,
      title: 'SaaS Platform',
      client: 'B2B Software Company',
      description: 'Complete SaaS platform with user management, subscription billing, and analytics dashboard.',
      results: ['1000+ active users', '95% uptime', '$500K ARR'],
      image: '/portfolio/saas.jpg',
      tags: ['SaaS', 'Dashboard', 'API', 'Analytics']
    },
    {
      id: 3,
      title: 'Restaurant Website',
      client: 'Fine Dining Restaurant',
      description: 'Elegant website with online reservations, menu showcase, and event booking system.',
      results: ['200% booking increase', '80% mobile traffic', '5★ reviews'],
      image: '/portfolio/restaurant.jpg',
      tags: ['Restaurant', 'Reservations', 'Mobile-First']
    },
    {
      id: 4,
      title: 'Corporate Website',
      client: 'Consulting Firm',
      description: 'Professional corporate website with service showcases, team profiles, and client portal.',
      results: ['150% lead increase', 'Fortune 500 clients', 'Industry awards'],
      image: '/portfolio/corporate.jpg',
      tags: ['Corporate', 'B2B', 'Lead Generation']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-accent/10 py-20 md:py-32">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Custom Website Development
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Build Your Dream Website
            <br />
            <span className="text-primary">Exactly How You Want It</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Work with our expert developers and designers to create a completely custom website
            tailored to your unique needs. No templates, no limitations – just your vision brought to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg inline-flex items-center justify-center gap-2"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg font-semibold text-lg hover:bg-primary/5 transition-colors"
            >
              View Our Work
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-primary mb-2" />
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Custom Projects</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-primary mb-2" />
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-primary mb-2" />
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="w-10 h-10 text-primary mb-2" />
              <div className="text-2xl font-bold text-gray-900">$2M+</div>
              <div className="text-sm text-gray-600">Revenue Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive custom development services from concept to launch
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that delivers exceptional results every time
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {process.map((phase, idx) => (
              <div key={idx} className="relative">
                {idx < process.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-primary/20 hidden md:block"></div>
                )}
                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">
                      {phase.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                        <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                          <Clock className="w-4 h-4" />
                          {phase.duration}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{phase.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {phase.deliverables.map((deliverable, didx) => (
                          <span key={didx} className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Examples */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real projects that delivered exceptional results for our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioExamples.map(example => (
              <div key={example.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden group">
                {/* Preview */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center p-6">
                    <Target className="w-16 h-16 text-primary mx-auto mb-3" />
                    <p className="text-lg font-bold text-gray-700">{example.title}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">{example.client}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{example.title}</h3>
                  <p className="text-gray-600 mb-4">{example.description}</p>

                  {/* Results */}
                  <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-xs font-semibold text-gray-700 mb-2">Results:</p>
                    <div className="space-y-1">
                      {example.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {example.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              View Full Portfolio
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-xl inline-flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Request a Quote
            </Link>
            <a
              href="mailto:hello@webmarket.com"
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">&copy; 2024 WebMarket. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
