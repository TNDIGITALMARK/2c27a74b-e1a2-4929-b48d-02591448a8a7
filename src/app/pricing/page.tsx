'use client';

import Link from 'next/link';
import { Navigation } from '@/components/layout/navigation';
import {
  Check,
  X,
  Star,
  Zap,
  Sparkles,
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
      name: 'Starter Site',
      price: 20,
      originalPrice: null,
      description: 'Perfect for getting started quickly',
      features: [
        'Choose from basic templates',
        'Up to 3 pages',
        'Mobile responsive design',
        'Basic customization',
        'Contact form',
        'SEO basics',
        '14-day support'
      ],
      notIncluded: [
        'Custom features',
        'E-commerce functionality',
        'Advanced integrations',
        'Priority support'
      ],
      popular: false,
      cta: 'Get Started',
      link: '/templates'
    },
    {
      name: 'Small Business',
      price: 45,
      originalPrice: null,
      description: 'Ideal for small businesses and startups',
      features: [
        'Choose from 20+ templates',
        'Up to 5 pages',
        'Mobile responsive design',
        'Advanced customization',
        'Contact form',
        'SEO optimization',
        '30-day support',
        'Two rounds of revisions'
      ],
      notIncluded: [
        'E-commerce setup',
        'Custom development',
        'Advanced integrations'
      ],
      popular: false,
      cta: 'Choose Plan',
      link: '/templates'
    },
    {
      name: 'Professional',
      price: 60,
      originalPrice: null,
      description: 'Most popular for growing businesses',
      features: [
        'All Small Business features',
        'Up to 10 pages',
        'Blog functionality',
        'Analytics integration',
        'Social media integration',
        '60-day support',
        'Three rounds of revisions',
        'Speed optimization'
      ],
      notIncluded: [
        'E-commerce functionality',
        'Custom features',
        'Priority support'
      ],
      popular: true,
      cta: 'Get Started',
      link: '/templates'
    },
    {
      name: 'Creative / Portfolio',
      price: 75,
      originalPrice: null,
      description: 'Perfect for creatives and portfolios',
      features: [
        'All Professional features',
        'Premium portfolio templates',
        'Image galleries & lightbox',
        'Project showcase sections',
        'Testimonials module',
        '90-day support',
        'Unlimited revisions',
        'Custom design tweaks'
      ],
      notIncluded: [
        'E-commerce functionality',
        'Custom development'
      ],
      popular: false,
      cta: 'Choose Portfolio',
      link: '/templates'
    },
    {
      name: 'E-Commerce Ready',
      price: 75,
      originalPrice: null,
      description: 'Complete online store solution',
      features: [
        'All Professional features',
        'E-commerce templates',
        'Up to 50 products',
        'Payment gateway integration',
        'Shopping cart & checkout',
        'Inventory management',
        '90-day support',
        'Product upload assistance'
      ],
      notIncluded: [
        'Custom features development',
        'Ongoing product management'
      ],
      popular: false,
      cta: 'Start Selling',
      link: '/templates'
    },
    {
      name: 'Custom Website',
      price: 100,
      originalPrice: null,
      description: 'Fully custom built to your exact needs',
      features: [
        'Fully custom design',
        'Unlimited pages',
        'Bespoke functionality',
        'Advanced integrations',
        'Priority development',
        '6-month support',
        'Unlimited revisions',
        'SEO & performance optimization',
        'Training included'
      ],
      notIncluded: [],
      popular: false,
      cta: 'Go Custom',
      link: '/contact'
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
            Affordable Website Packages
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Professional websites starting from just £20. No hidden fees, no surprises.
            All prices are one-time payments with optional ongoing support.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600 flex-wrap">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-success" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-success" />
              <span>Fast delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-success" />
              <span>Quality guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Template Packages */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Website Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Affordable, professional websites for every need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-primary">£{pkg.price}</span>
                      <span className="text-gray-600">one-time</span>
                    </div>
                  </div>

                  <Link
                    href={pkg.link}
                    className={`block w-full py-2.5 rounded-lg font-semibold text-center mb-4 transition-all text-sm ${
                      pkg.popular
                        ? 'bg-primary text-white hover:opacity-90'
                        : 'bg-white border-2 border-primary text-primary hover:bg-primary/5'
                    }`}
                  >
                    {pkg.cta}
                  </Link>

                  <div className="space-y-2 mb-4">
                    <p className="text-xs font-bold text-gray-700 uppercase">Included:</p>
                    {pkg.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {pkg.notIncluded.length > 0 && (
                    <div className="space-y-2 pt-4 border-t border-gray-200">
                      <p className="text-xs font-bold text-gray-700 uppercase">Not Included:</p>
                      {pkg.notIncluded.map((item, nidx) => (
                        <div key={nidx} className="flex items-start gap-2">
                          <X className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-500">{item}</span>
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
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{addon.name}</h3>
                  <div className="text-2xl font-bold text-primary mb-3">+£{addon.price}</div>
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
              Package Comparison
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compare features across all our packages to find the perfect fit
            </p>
          </div>

          <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-gray-900 font-bold">Feature</th>
                    <th className="px-4 py-3 text-center text-gray-900 font-bold">Starter</th>
                    <th className="px-4 py-3 text-center text-gray-900 font-bold">Small Biz</th>
                    <th className="px-4 py-3 text-center text-gray-900 font-bold">Pro</th>
                    <th className="px-4 py-3 text-center text-gray-900 font-bold">Portfolio</th>
                    <th className="px-4 py-3 text-center text-gray-900 font-bold">E-Com</th>
                    <th className="px-4 py-3 text-center text-gray-900 font-bold">Custom</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: 'Price', starter: '£20', smallBiz: '£45', pro: '£60', portfolio: '£75', ecom: '£75', custom: '£100' },
                    { feature: 'Pages', starter: '3', smallBiz: '5', pro: '10', portfolio: '10+', ecom: '10+', custom: 'Unlimited' },
                    { feature: 'Support', starter: '14 days', smallBiz: '30 days', pro: '60 days', portfolio: '90 days', ecom: '90 days', custom: '6 months' },
                    { feature: 'Revisions', starter: '1', smallBiz: '2', pro: '3', portfolio: 'Unlimited', ecom: 'Basic', custom: 'Unlimited' },
                    { feature: 'E-Commerce', starter: '❌', smallBiz: '❌', pro: '❌', portfolio: '❌', ecom: '✅', custom: '✅' },
                    { feature: 'Custom Design', starter: '❌', smallBiz: '❌', pro: '❌', portfolio: 'Partial', ecom: '❌', custom: '✅' },
                    { feature: 'SEO', starter: 'Basic', smallBiz: 'Standard', pro: 'Advanced', portfolio: 'Advanced', ecom: 'Advanced', custom: 'Premium' }
                  ].map((row, idx) => (
                    <tr key={idx}>
                      <td className="px-4 py-3 text-gray-900 font-medium">{row.feature}</td>
                      <td className="px-4 py-3 text-center text-gray-700">{row.starter}</td>
                      <td className="px-4 py-3 text-center text-gray-700">{row.smallBiz}</td>
                      <td className="px-4 py-3 text-center text-gray-700">{row.pro}</td>
                      <td className="px-4 py-3 text-center text-gray-700">{row.portfolio}</td>
                      <td className="px-4 py-3 text-center text-gray-700">{row.ecom}</td>
                      <td className="px-4 py-3 text-center text-gray-700">{row.custom}</td>
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
                a: 'All our website prices are one-time payments. You own the website outright. Maintenance packages are optional and billed monthly.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and bank transfers. Payment is required upfront for packages under £100.'
              },
              {
                q: 'Do you offer refunds?',
                a: 'Yes! We offer a 14-day money-back guarantee if you\'re not satisfied with your website. Terms and conditions apply.'
              },
              {
                q: 'What happens after my website is live?',
                a: 'You receive full ownership of your website. We provide documentation and basic training. Optional maintenance packages are available starting at £99/month.'
              },
              {
                q: 'Can I upgrade my package later?',
                a: 'Absolutely! You can upgrade to a higher package or add features anytime. We credit your original payment toward the upgrade.'
              },
              {
                q: 'How long does it take to get my website?',
                a: 'Delivery times vary by package. Starter sites take 3-5 days, while custom websites take 2-4 weeks depending on complexity.'
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
