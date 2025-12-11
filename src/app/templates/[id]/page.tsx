'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Navigation } from '@/components/layout/navigation';
import { templates } from '@/lib/data/templates';
import {
  ArrowLeft,
  Check,
  Star,
  ShoppingCart,
  MessageSquare,
  ExternalLink,
  Layout,
  Palette,
  Type,
  Image as ImageIcon,
  Zap,
  Shield,
  Clock,
  Heart
} from 'lucide-react';

export default function TemplateDetailPage() {
  const params = useParams();
  const templateId = params.id as string;
  const template = templates.find(t => t.id === templateId);

  const [selectedCustomizations, setSelectedCustomizations] = useState<string[]>([]);

  if (!template) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Template Not Found</h1>
          <Link href="/templates" className="text-primary hover:underline">
            Back to Templates
          </Link>
        </div>
      </div>
    );
  }

  const addOns = [
    { id: 'setup', name: 'Professional Setup', price: 99, description: 'We set up and configure everything for you' },
    { id: 'content', name: 'Content Writing', price: 199, description: 'Professional copywriting for all pages' },
    { id: 'seo', name: 'SEO Optimization', price: 149, description: 'Advanced SEO setup and optimization' },
    { id: 'speed', name: 'Speed Optimization', price: 99, description: 'Performance tuning and optimization' },
    { id: 'training', name: 'Training Session', price: 79, description: '1-hour video training on using your site' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Back Button */}
      <div className="border-b bg-gray-50">
        <div className="container mx-auto py-4">
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Templates
          </Link>
        </div>
      </div>

      {/* Header Section */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Template Info */}
            <div>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                {template.category.toUpperCase()}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {template.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {template.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-gray-700 font-medium">{template.popularity}% Satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layout className="w-5 h-5 text-primary" />
                  <span className="text-gray-700 font-medium">{template.pages.length} Pages</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-gray-700 font-medium">Quick Setup</span>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Starting at</p>
                    <p className="text-4xl font-bold text-primary">${template.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">One-time payment</p>
                    <p className="text-xs text-gray-500">Lifetime updates</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link
                    href={`/templates/${template.id}/checkout`}
                    className="flex-1 px-6 py-4 bg-primary text-white rounded-lg font-semibold text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Buy Now
                  </Link>
                  <Link
                    href={`/templates/${template.id}/request`}
                    className="px-6 py-4 bg-white border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Request Modification
                  </Link>
                </div>

                <div className="mt-4 flex items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    Secure Payment
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    24h Delivery
                  </div>
                </div>
              </div>
            </div>

            {/* Preview Image */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-12 h-12 text-primary" />
                    </div>
                    <p className="text-xl text-gray-700 font-bold mb-2">{template.name}</p>
                    <p className="text-gray-600">Preview Image</p>
                  </div>
                </div>
              </div>
              {template.popularity >= 90 && (
                <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  ⭐ Most Popular
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {template.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pages Included Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Included Pages</h2>
          <p className="text-gray-600 mb-8">This template includes {template.pages.length} professionally designed pages:</p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {template.pages.map((page, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-2">
                  <Layout className="w-5 h-5 text-primary" />
                  <span className="font-medium text-gray-900">{page}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Customization Options</h2>
          <p className="text-gray-600 mb-8">Fully customize this template to match your brand:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {template.customizationOptions.map((option, idx) => {
              const icons = {
                'Colors': Palette,
                'Fonts': Type,
                'Typography': Type,
                'Images': ImageIcon,
                'Logo': ImageIcon,
                'Content': Layout,
                'Layouts': Layout,
                'Brand colors': Palette,
                'Branding': Palette,
              };
              const Icon = Object.entries(icons).find(([key]) =>
                option.toLowerCase().includes(key.toLowerCase())
              )?.[1] || Palette;

              return (
                <div key={idx} className="flex items-start gap-3 p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{option}</h3>
                    <p className="text-sm text-gray-600">Fully customizable</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Optional Add-Ons</h2>
          <p className="text-gray-600 mb-8">Enhance your template with these professional services:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map(addon => (
              <div key={addon.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-gray-900 text-lg">{addon.name}</h3>
                  <span className="text-primary font-bold text-xl">+${addon.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                <button className="w-full px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors">
                  Add to Order
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Purchase this template now and launch your professional website within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/templates/${template.id}/checkout`}
              className="px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-xl inline-flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Buy Now - ${template.price}
            </Link>
            <Link
              href={`/templates/${template.id}/request`}
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Request Modifications
            </Link>
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
