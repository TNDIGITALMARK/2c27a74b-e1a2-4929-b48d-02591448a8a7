'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/layout/navigation';
import { templates, templateCategories, sortOptions, Template } from '@/lib/data/templates';
import {
  Search,
  Filter,
  SlidersHorizontal,
  ShoppingCart,
  MessageSquare,
  ExternalLink,
  Check,
  Star
} from 'lucide-react';

export default function TemplatesCatalogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('popularity');
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort templates
  const filteredTemplates = useMemo(() => {
    let result = [...templates];

    // Apply category filter
    if (selectedCategory !== 'all') {
      result = result.filter(t => t.category === selectedCategory);
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(t =>
        t.name.toLowerCase().includes(query) ||
        t.description.toLowerCase().includes(query) ||
        t.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Apply sorting
    switch (selectedSort) {
      case 'popularity':
        result.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, selectedSort]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-accent/10 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Website Templates
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Choose from our collection of professionally designed templates.
            Each template is fully customizable and ready to launch.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Sort Section */}
      <section className="border-b bg-white sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
              <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
              <div className="flex gap-2">
                {templateCategories.map(cat => (
                  <button
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                      selectedCategory === cat.value
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <SlidersHorizontal className="w-5 h-5 text-gray-500" />
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all w-full md:w-auto"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-12">
        <div className="container mx-auto">
          {filteredTemplates.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-4">No templates found</p>
              <p className="text-gray-500">Try adjusting your filters or search query</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTemplates.map(template => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Can't find the perfect template? Our expert developers can build a custom website tailored exactly to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/custom"
              className="px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              Request Custom Website
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
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

function TemplateCard({ template }: { template: Template }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Preview Image */}
      <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <p className="text-sm text-gray-600 font-medium">{template.name}</p>
            <p className="text-xs text-gray-500 mt-1">{template.category.toUpperCase()}</p>
          </div>
        </div>
        {/* Popularity Badge */}
        {template.popularity >= 90 && (
          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
            Popular
          </div>
        )}
        {/* Hover Preview Button */}
        <Link
          href={`/templates/${template.id}`}
          className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <div className="bg-white text-primary px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
            <ExternalLink className="w-4 h-4" />
            View Details
          </div>
        </Link>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{template.name}</h3>
            <div className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
              {template.category.toUpperCase()}
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">${template.price}</div>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {template.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-700 mb-2">Key Features:</p>
          <div className="flex flex-wrap gap-1">
            {template.features.slice(0, 4).map((feature, idx) => (
              <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded flex items-center gap-1">
                <Check className="w-3 h-3 text-success" />
                {feature}
              </span>
            ))}
            {template.features.length > 4 && (
              <span className="text-xs text-primary font-medium px-2 py-1">
                +{template.features.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Pages Included */}
        <div className="mb-4 pb-4 border-b border-gray-200">
          <p className="text-xs font-semibold text-gray-700 mb-1">
            Includes {template.pages.length} pages
          </p>
          <p className="text-xs text-gray-500">{template.pages.join(', ')}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link
            href={`/templates/${template.id}/checkout`}
            className="flex-1 px-4 py-3 bg-primary text-white rounded-lg font-semibold text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Buy Now
          </Link>
          <Link
            href={`/templates/${template.id}/request`}
            className="px-4 py-3 bg-white border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors flex items-center justify-center"
            title="Request Modification"
          >
            <MessageSquare className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
