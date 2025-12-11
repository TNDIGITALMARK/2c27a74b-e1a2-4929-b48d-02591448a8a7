'use client';

import Link from 'next/link';
import { Navigation } from '@/components/layout/navigation';
import {
  ShoppingCart,
  Check,
  Sparkles,
  Building2,
  Award,
  ShoppingBag,
  Palette,
  Zap
} from 'lucide-react';

// Define template offerings based on user requirements
const templateOfferings = [
  {
    id: 'starter',
    name: 'Starter Site',
    price: 149,
    icon: Sparkles,
    tagline: 'Perfect for getting started quickly',
    description: 'A simple, ready-to-go template ideal for small projects or personal websites.',
    whoFor: [
      'Freelancers, bloggers, or side projects',
      'People who need a professional online presence quickly'
    ],
    whyGetIt: [
      'Fast setup, minimal hassle',
      'Affordable entry point',
      'Fully editable after purchase'
    ],
    included: [
      '1–3 pages (Home, About, Contact)',
      'Mobile-friendly design',
      'Basic color & font customization',
      'Setup guide included'
    ],
    gradient: 'from-blue-500 to-indigo-600',
    accentColor: 'blue'
  },
  {
    id: 'small-business',
    name: 'Small Business',
    price: 249,
    icon: Building2,
    tagline: 'Grow your business presence',
    description: 'A more feature-rich template for small business owners.',
    whoFor: [
      'Local shops, consultants, or small service providers',
      'Businesses wanting a professional online presence quickly'
    ],
    whyGetIt: [
      'Includes extra pages (Services, Testimonials, Blog)',
      'Easy to customize to match your branding',
      'Affordable alternative to a full custom site'
    ],
    included: [
      '4–6 pages',
      'Contact form & Google Maps integration',
      'Editable colors, fonts, and images',
      'Setup guide & instructions'
    ],
    gradient: 'from-emerald-500 to-teal-600',
    accentColor: 'emerald',
    popular: true
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 399,
    icon: Award,
    tagline: 'Establish credibility and trust',
    description: 'A premium template with professional layouts suitable for growing businesses.',
    whoFor: [
      'Companies looking to establish credibility',
      'Professionals who need a polished, multi-page website'
    ],
    whyGetIt: [
      'Modern design optimized for conversions',
      'Supports multiple content types (portfolio, services, testimonials)',
      'Fast, clean setup'
    ],
    included: [
      '6–8 pages',
      'Advanced contact forms',
      'SEO basics included',
      'Editable layouts and sections'
    ],
    gradient: 'from-purple-500 to-pink-600',
    accentColor: 'purple'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Ready',
    price: 499,
    icon: ShoppingBag,
    tagline: 'Start selling online today',
    description: 'A template built for online stores or selling products/services.',
    whoFor: [
      'Retail shops, boutiques, or online entrepreneurs',
      'Businesses wanting a fully functional online store quickly'
    ],
    whyGetIt: [
      'Includes product pages, cart, and checkout',
      'Fully responsive for all devices',
      'Ready to add your products immediately'
    ],
    included: [
      'Up to 10 pages',
      'E-commerce integration (Shopify / WooCommerce / HTML ready)',
      'Product gallery templates',
      'Customizable product layouts'
    ],
    gradient: 'from-orange-500 to-red-600',
    accentColor: 'orange'
  },
  {
    id: 'creative',
    name: 'Creative / Portfolio',
    price: 299,
    icon: Palette,
    tagline: 'Showcase your work beautifully',
    description: 'A visually striking template for creatives to showcase work.',
    whoFor: [
      'Designers, photographers, artists, agencies',
      'Anyone who wants to display work in a professional way'
    ],
    whyGetIt: [
      'Modern, minimalist, and mobile-friendly',
      'Easy to update with new projects or media',
      'Highlights your creative skills to attract clients'
    ],
    included: [
      '4–6 pages (Portfolio, About, Contact, Blog optional)',
      'Gallery layouts, sliders, and image optimization',
      'Editable colors, fonts, and images',
      'Setup instructions'
    ],
    gradient: 'from-pink-500 to-rose-600',
    accentColor: 'pink'
  },
  {
    id: 'custom',
    name: 'Custom Website',
    price: 799,
    priceLabel: 'From £799',
    icon: Zap,
    tagline: 'Built exactly for you',
    description: 'A fully bespoke website built from scratch to your exact specifications.',
    whoFor: [
      'Businesses or individuals wanting a unique online presence',
      'Projects that need advanced functionality or custom branding'
    ],
    whyGetIt: [
      'Totally unique design tailored to your brand',
      'Scalable for future growth',
      'Includes hands-on support and full handover'
    ],
    included: [
      'Unlimited pages & custom layouts',
      'Mobile-first, SEO-optimized design',
      'Optional e-commerce, booking systems, or other features',
      '1:1 consultation, revisions, and support',
      'Full handover with documentation'
    ],
    gradient: 'from-violet-500 to-purple-600',
    accentColor: 'violet',
    featured: true
  }
];

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20 md:py-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary">Website Templates & Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Choose Your Perfect
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Website Solution
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            From ready-to-launch templates to fully custom websites, we have the perfect solution
            to bring your online vision to life. Professional quality, affordable prices.
          </p>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templateOfferings.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Templates?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast Setup</h3>
              <p className="text-gray-600">
                Get your website live in hours, not weeks. All templates come with easy setup guides.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-md">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fully Customizable</h3>
              <p className="text-gray-600">
                Every template is completely editable. Change colors, fonts, images, and content to match your brand.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-md">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Quality</h3>
              <p className="text-gray-600">
                Designed by experts to look polished and convert visitors into customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Launch Your Website?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Choose a template above or contact us to discuss a custom solution tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-xl inline-flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Get Started Today
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              Learn More
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

function TemplateCard({ template }: { template: typeof templateOfferings[0] }) {
  const Icon = template.icon;

  return (
    <div className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${
      template.featured ? 'lg:col-span-3 lg:row-span-1' : ''
    } ${template.popular ? 'ring-2 ring-primary' : ''}`}>
      {/* Popular Badge */}
      {template.popular && (
        <div className="absolute top-4 right-4 z-10 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          Most Popular
        </div>
      )}

      {/* Featured Badge */}
      {template.featured && (
        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
          Premium Custom
        </div>
      )}

      {/* Gradient Header */}
      <div className={`bg-gradient-to-br ${template.gradient} p-8 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
        <div className="relative z-10">
          <Icon className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold mb-2">{template.name}</h3>
          <p className="text-white/90 text-sm mb-4">{template.tagline}</p>
          <div className="text-3xl font-bold">
            £{template.price}
            {template.priceLabel && <span className="text-sm font-normal ml-1">+</span>}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 ${template.featured ? 'lg:p-8' : ''}`}>
        {/* Description */}
        <p className="text-gray-700 font-medium mb-6 leading-relaxed">
          {template.description}
        </p>

        {/* Who It's For */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Who it's for:</h4>
          <ul className="space-y-2">
            {template.whoFor.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Get It */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Why get it:</h4>
          <ul className="space-y-2">
            {template.whyGetIt.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                <Sparkles className={`w-4 h-4 text-${template.accentColor}-500 flex-shrink-0 mt-0.5`} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Included */}
        <div className="mb-8 p-4 bg-gray-50 rounded-xl">
          <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Included:</h4>
          <ul className="space-y-2">
            {template.included.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Link
          href={`/contact?template=${template.id}`}
          className={`block w-full py-4 bg-gradient-to-r ${template.gradient} text-white rounded-xl font-bold text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2`}
        >
          <ShoppingCart className="w-5 h-5" />
          {template.id === 'custom' ? 'Request Custom Quote' : `Buy ${template.name}`}
        </Link>
      </div>
    </div>
  );
}
