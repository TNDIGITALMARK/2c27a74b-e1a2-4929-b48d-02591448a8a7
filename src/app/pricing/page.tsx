'use client';

import Link from 'next/link';
import { Navigation } from '@/components/layout/navigation';
import {
  Check,
  X,
  Star,
  Zap,
  Sparkles,
  Clock,
  Shield,
  MessageSquare,
  Settings,
  TrendingUp,
  Award,
  DollarSign
} from 'lucide-react';

export default function PricingPage() {
  const templatePackages = [
    {
      name: 'Starter Template',
      price: 199,
      originalPrice: null,
      description: 'Perfect for small businesses and personal projects',
      features: [
        'Choose from 15+ templates',
        'Up to 5 pages',
        'Mobile responsive design',
        'Basic customization (colors, fonts)',
        'Contact form',
        'SEO basics',
        '30-day support',
        'One round of revisions'
      ],
      notIncluded: [
        'Custom features',
        'E-commerce functionality',
        'Advanced integrations',
        'Priority support'
      ],
      popular: false,
      cta: 'Choose Template',
      link: '/templates'
    },
    {
      name: 'Professional Template',
      price: 399,
      originalPrice: null,
      description: 'Most popular choice for growing businesses',
      features: [
        'All Starter features',
        'Choose from all templates',
        'Up to 10 pages',
        'Advanced customization',
        'Blog functionality',
        'Analytics integration',
        '90-day support',
        'Three rounds of revisions',
        'Speed optimization',
        'Social media integration'
      ],
      notIncluded: [
        'E-commerce setup',
        'Custom development',
        'Ongoing maintenance'
      ],
      popular: true,
      cta: 'Get Started',
      link: '/templates'
    },
    {
      name: 'Premium Template',
      price: 699,
      originalPrice: null,
      description: 'Complete solution with advanced features',
      features: [
        'All Professional features',
        'Unlimited pages',
        'Premium templates',
        'E-commerce ready (up to 50 products)',
        'Payment gateway integration',
        'Advanced SEO setup',
        '6-month support',
        'Unlimited revisions',
        'Priority support',
        'Content migration',
        'Training session included'
      ],
      notIncluded: [
        'Custom features development',
        'Ongoing content updates'
      ],
      popular: false,
      cta: 'Go Premium',
      link: '/templates'
    }
  ];

  const customPackages = [
    {
      name: 'Custom Starter',
      price: 2499,
      priceLabel: 'Starting at',
      description: 'Fully custom website built from scratch',
      features: [
        'Custom design & development',
        'Up to 10 pages',
        'Unique UI/UX design',
        'Mobile responsive',
        'Contact forms',
        'Basic integrations',
        'CMS setup',
        '3-month support',
        'Project manager assigned',
        'Regular progress updates'
      ],
      duration: '6-8 weeks',
      bestFor: 'Small businesses, portfolios, service websites'
    },
    {
      name: 'Custom Professional',
      price: 4999,
      priceLabel: 'Starting at',
      description: 'Advanced custom solution with complex features',
      features: [
        'All Custom Starter features',
        'Up to 20 pages',
        'Advanced custom features',
        'User authentication',
        'Database design',
        'API integrations',
        'Payment processing',
        '6-month support',
        'Security audit',
        'Performance optimization'
      ],
      duration: '8-12 weeks',
      bestFor: 'E-commerce, SaaS platforms, corporate websites'
    },
    {
      name: 'Custom Enterprise',
      price: 9999,
      priceLabel: 'Starting at',
      description: 'Enterprise-grade custom solution',
      features: [
        'All Custom Professional features',
        'Unlimited pages',
        'Complex system architecture',
        'Multi-user roles & permissions',
        'Advanced analytics',
        'Third-party integrations',
        'Scalable infrastructure',
        '12-month support',
        'Dedicated team',
        'Priority support',
        'Training & documentation'
      ],
      duration: '12-16 weeks',
      bestFor: 'Large businesses, platforms, marketplaces'
    }
  ];

  const addOns = [
    { name: 'Professional Setup & Configuration', price: 99, icon: Settings },
    { name: 'Content Writing (per page)', price: 149, icon: MessageSquare },
    { name: 'Advanced SEO Optimization', price: 199, icon: TrendingUp },
    { name: 'Speed & Performance Optimization', price: 149, icon: Zap },
    { name: 'Monthly Maintenance Package', price: 99, icon: Shield },
    { name: 'Training Session (1 hour)', price: 79, icon: Award },
    { name: 'Logo Design', price: 299, icon: Sparkles },
    { name: 'Additional Page', price: 99, icon: DollarSign }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-accent/10 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your business. No hidden fees, no surprises.
            All prices are one-time payments with optional ongoing support.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-success" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-success" />
              <span>Lifetime updates</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-success" />
              <span>Money-back guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Template Packages */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Template-Based Websites
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick, affordable solutions using our premium templates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {templatePackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden ${
                  pkg.popular ? 'border-4 border-primary scale-105' : 'border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-primary text-white text-center py-2 font-semibold text-sm">
                    ⭐ Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-primary">${pkg.price}</span>
                      <span className="text-gray-600">one-time</span>
                    </div>
                  </div>

                  <Link
                    href={pkg.link}
                    className={`block w-full py-3 rounded-lg font-semibold text-center mb-6 transition-all ${
                      pkg.popular
                        ? 'bg-primary text-white hover:opacity-90'
                        : 'bg-white border-2 border-primary text-primary hover:bg-primary/5'
                    }`}
                  >
                    {pkg.cta}
                  </Link>

                  <div className="space-y-3 mb-6">
                    <p className="text-xs font-bold text-gray-700 uppercase">Included:</p>
                    {pkg.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {pkg.notIncluded.length > 0 && (
                    <div className="space-y-2 pt-6 border-t border-gray-200">
                      <p className="text-xs font-bold text-gray-700 uppercase">Not Included:</p>
                      {pkg.notIncluded.map((item, nidx) => (
                        <div key={nidx} className="flex items-start gap-2">
                          <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-500">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Custom Website Development
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fully bespoke solutions built exactly to your specifications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {customPackages.map((pkg, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-200">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>

                  <div className="mb-6">
                    <div className="text-sm text-gray-600 mb-1">{pkg.priceLabel}</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-primary">${pkg.price}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>Timeline: {pkg.duration}</span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full py-3 bg-primary text-white rounded-lg font-semibold text-center mb-6 hover:opacity-90 transition-opacity"
                  >
                    Request Quote
                  </Link>

                  <div className="space-y-3 mb-6">
                    <p className="text-xs font-bold text-gray-700 uppercase">Included:</p>
                    {pkg.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-xs font-bold text-gray-700 uppercase mb-2">Best For:</p>
                    <p className="text-sm text-gray-600">{pkg.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Optional Add-Ons
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enhance your package with these professional services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {addOns.map((addon, idx) => {
              const Icon = addon.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                  <Icon className="w-10 h-10 text-primary mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">{addon.name}</h3>
                  <div className="text-2xl font-bold text-primary mb-3">+${addon.price}</div>
                  <button className="w-full px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors text-sm">
                    Add to Package
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Template vs Custom Comparison
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Not sure which option is right for you? Here's a quick comparison
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-gray-900 font-bold">Feature</th>
                    <th className="px-6 py-4 text-center text-gray-900 font-bold">Templates</th>
                    <th className="px-6 py-4 text-center text-gray-900 font-bold">Custom</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: 'Price Range', template: '$199 - $699', custom: '$2,499+' },
                    { feature: 'Timeline', template: '1-2 weeks', custom: '6-16 weeks' },
                    { feature: 'Design Flexibility', template: 'Moderate', custom: 'Unlimited' },
                    { feature: 'Unique Design', template: '❌', custom: '✅' },
                    { feature: 'Custom Features', template: 'Limited', custom: 'Unlimited' },
                    { feature: 'E-Commerce', template: 'Basic', custom: 'Advanced' },
                    { feature: 'Scalability', template: 'Good', custom: 'Excellent' },
                    { feature: 'Best For', template: 'Quick launch', custom: 'Unique needs' }
                  ].map((row, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 text-gray-900 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{row.template}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{row.custom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pricing FAQs
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'Are these prices one-time or recurring?',
                a: 'All our website development prices are one-time payments. You own the website outright. Maintenance packages are optional and billed monthly.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and bank transfers. For custom projects over $5,000, we offer payment plans with 50% upfront and 50% on completion.'
              },
              {
                q: 'Do you offer refunds?',
                a: 'Yes! We offer a 30-day money-back guarantee for template packages. For custom projects, we refund the deposit if we cancel before design approval.'
              },
              {
                q: 'What happens after my website is live?',
                a: 'You receive full ownership of your website. We provide documentation and training. Optional maintenance packages are available starting at $99/month.'
              },
              {
                q: 'Can I upgrade my package later?',
                a: 'Absolutely! You can upgrade from a template to custom development, or add features anytime. We credit your original payment toward the upgrade.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is here to help you choose the perfect package for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              Contact Us
            </Link>
            <Link
              href="/templates"
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Browse Templates
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">&copy; 2024 Malis Website Madness. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
