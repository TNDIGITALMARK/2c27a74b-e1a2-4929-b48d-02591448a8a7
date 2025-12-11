'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/layout/navigation';
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Search,
  ShoppingCart,
  Settings,
  CreditCard,
  Shield,
  Clock,
  MessageSquare
} from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Questions', icon: HelpCircle },
    { value: 'templates', label: 'Templates', icon: ShoppingCart },
    { value: 'custom', label: 'Custom Projects', icon: Settings },
    { value: 'payment', label: 'Payment & Pricing', icon: CreditCard },
    { value: 'delivery', label: 'Delivery & Timeline', icon: Clock },
    { value: 'modifications', label: 'Modifications', icon: Settings },
    { value: 'support', label: 'Support', icon: Shield }
  ];

  const faqs: FAQ[] = [
    // Templates
    {
      category: 'templates',
      question: 'What is included with a template purchase?',
      answer: 'Each template includes all the pages shown in the preview, source code, installation instructions, and basic customization support. You also get lifetime updates and 30 days of technical support.'
    },
    {
      category: 'templates',
      question: 'Can I customize the templates?',
      answer: 'Absolutely! All our templates are fully customizable. You can change colors, fonts, images, content, and layouts. If you need advanced customization beyond what\'s included, you can purchase our customization service or upgrade to a custom project.'
    },
    {
      category: 'templates',
      question: 'How do I know which template is right for me?',
      answer: 'Browse our template catalog and use the category filters to narrow down options for your industry. Each template includes a detailed feature list and demo. If you\'re unsure, contact us and we\'ll help you choose the perfect template for your needs.'
    },
    {
      category: 'templates',
      question: 'Can I use a template for multiple websites?',
      answer: 'Our standard license allows you to use the template for one website. If you need to use it for multiple sites, please contact us about our multi-site license options.'
    },
    {
      category: 'templates',
      question: 'Do templates come with e-commerce functionality?',
      answer: 'Some of our premium templates include basic e-commerce features. For full-featured online stores with payment processing, inventory management, and advanced features, we recommend our e-commerce templates or custom development.'
    },

    // Custom Projects
    {
      category: 'custom',
      question: 'What is the difference between templates and custom websites?',
      answer: 'Templates are pre-designed websites that can be customized with your content and branding. Custom websites are built from scratch specifically for you, with unique designs and features tailored to your exact requirements. Custom projects take longer but offer complete flexibility.'
    },
    {
      category: 'custom',
      question: 'How long does a custom project take?',
      answer: 'Timeline varies based on complexity. Simple custom sites take 6-8 weeks, medium complexity projects take 8-12 weeks, and large enterprise solutions can take 12-16 weeks or more. We provide a detailed timeline during the proposal phase.'
    },
    {
      category: 'custom',
      question: 'Do I own the code for my custom website?',
      answer: 'Yes! Upon final payment, you receive full ownership of all code, designs, and assets. We provide complete source code and documentation so you can maintain or modify your website in the future.'
    },
    {
      category: 'custom',
      question: 'Can you work with my existing brand guidelines?',
      answer: 'Absolutely! We can work with your existing brand guidelines, style guide, and design assets to ensure your website perfectly matches your brand identity. Just provide us with your brand materials during the discovery phase.'
    },
    {
      category: 'custom',
      question: 'What technologies do you use for custom projects?',
      answer: 'We use modern, proven technologies including React, Next.js, Node.js, Python, and various databases. The specific tech stack is chosen based on your project requirements, scalability needs, and budget.'
    },

    // Payment & Pricing
    {
      category: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, Amex), PayPal, bank transfers, and cryptocurrency for larger projects. For custom projects over $5,000, we offer payment plans.'
    },
    {
      category: 'payment',
      question: 'Do you offer payment plans?',
      answer: 'Yes! For custom projects over $5,000, we offer payment plans with 50% upfront and 50% upon completion. For larger projects, we can structure milestone-based payments throughout the development process.'
    },
    {
      category: 'payment',
      question: 'Are there any hidden fees?',
      answer: 'No hidden fees! Our pricing is completely transparent. The quoted price includes everything specified in the proposal. The only additional costs would be optional add-ons you choose, third-party services (like hosting), or scope changes you request.'
    },
    {
      category: 'payment',
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for template purchases. For custom projects, deposits are refundable if we cancel before design approval. After design approval, refunds are provided only if we fail to deliver as per the agreed contract.'
    },
    {
      category: 'payment',
      question: 'What is included in the ongoing maintenance packages?',
      answer: 'Maintenance packages include security updates, bug fixes, content updates (limited hours per month), backup management, uptime monitoring, and priority support. Packages start at $99/month and scale based on your needs.'
    },

    // Delivery & Timeline
    {
      category: 'delivery',
      question: 'How quickly can you deliver a template website?',
      answer: 'Template websites can typically be delivered within 1-2 weeks. This includes setup, customization, content integration, and testing. Express delivery (3-5 days) is available for an additional fee.'
    },
    {
      category: 'delivery',
      question: 'What happens if the project takes longer than expected?',
      answer: 'If delays are on our end, there\'s no additional charge - we honor our original quote. If delays are due to client feedback cycles or scope changes, we\'ll discuss timeline adjustments and any associated costs upfront.'
    },
    {
      category: 'delivery',
      question: 'Can I launch my site before it\'s 100% complete?',
      answer: 'Yes! We can do a phased launch where we deploy essential pages first and add additional features post-launch. This is common for clients who want to start generating traffic while we complete secondary features.'
    },
    {
      category: 'delivery',
      question: 'Do you provide hosting?',
      answer: 'We can recommend and set up hosting with providers like Vercel, Netlify, or AWS. Hosting costs are separate from development fees. We can also manage hosting for you as part of our maintenance packages.'
    },
    {
      category: 'delivery',
      question: 'What do I need to provide to get started?',
      answer: 'For templates: your logo, content, and images. For custom projects: brand guidelines, content, reference websites you like, any specific requirements, and access to services we need to integrate with.'
    },

    // Modifications
    {
      category: 'modifications',
      question: 'Can I request modifications to a template after purchase?',
      answer: 'Yes! Template packages include a set number of revision rounds. Additional modifications can be purchased as needed. For extensive changes, consider our custom modification service or upgrading to a custom project.'
    },
    {
      category: 'modifications',
      question: 'What counts as a modification vs a new feature?',
      answer: 'Modifications are changes to existing template features (colors, layout adjustments, content changes). New features are additions not included in the original template (e-commerce, member portals, custom integrations). New features are quoted separately.'
    },
    {
      category: 'modifications',
      question: 'How many revisions are included?',
      answer: 'Template packages include 1-3 revision rounds depending on the tier. Custom projects include unlimited revisions during the design phase, and 3 rounds during development. Additional revisions can be purchased if needed.'
    },
    {
      category: 'modifications',
      question: 'Can I make changes myself after the site is delivered?',
      answer: 'Absolutely! We provide documentation and training. For template sites, content changes are easy through the CMS. For more complex changes, you can hire any developer or continue working with us on an hourly basis.'
    },
    {
      category: 'modifications',
      question: 'What if I want to add features later?',
      answer: 'We\'re happy to add new features anytime! Contact us with what you need, and we\'ll provide a quote. Existing clients receive priority scheduling and preferred rates for additional work.'
    },

    // Support
    {
      category: 'support',
      question: 'What kind of support do you provide after launch?',
      answer: 'All projects include post-launch support ranging from 30 days to 12 months depending on your package. Support includes bug fixes, technical questions, and basic guidance. Extended support and maintenance packages are available.'
    },
    {
      category: 'support',
      question: 'How quickly do you respond to support requests?',
      answer: 'Standard support receives responses within 24-48 hours. Priority support (included with maintenance packages) receives responses within 4 hours on business days. Emergency support is available for critical issues.'
    },
    {
      category: 'support',
      question: 'Do you offer training on how to use my website?',
      answer: 'Yes! All custom projects include a training session. Template projects can add training as an optional add-on. We provide video tutorials and documentation for managing your content and basic site features.'
    },
    {
      category: 'support',
      question: 'What happens if something breaks after the warranty period?',
      answer: 'We offer hourly support for any issues that arise after your included support period. We also have maintenance packages that include ongoing support, updates, and monitoring at a fixed monthly rate.'
    },
    {
      category: 'support',
      question: 'Can I get help with marketing and SEO?',
      answer: 'We offer SEO setup as an add-on which includes technical SEO, meta tags, and search engine submission. For ongoing marketing and SEO, we can recommend trusted partners or include it as part of an expanded maintenance package.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-accent/10 py-20">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            Help Center
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Find answers to common questions about our templates, custom projects, pricing, and support.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b bg-white sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto py-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            {categories.map(cat => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat.value
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>
          <div className="mt-3 text-sm text-gray-600">
            Showing {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-16">
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600 mb-2">No questions found</p>
              <p className="text-gray-500">Try adjusting your search or category filter</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Can't find what you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg inline-flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Contact Us
            </Link>
            <a
              href="mailto:hello@webmarket.com"
              className="px-8 py-4 bg-white border-2 border-primary text-primary rounded-lg font-semibold text-lg hover:bg-primary/5 transition-colors"
            >
              Email Support
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Helpful Resources
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link
              href="/templates"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center group border border-gray-200"
            >
              <ShoppingCart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Browse Templates</h3>
              <p className="text-sm text-gray-600">Explore our template collection</p>
            </Link>

            <Link
              href="/pricing"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center group border border-gray-200"
            >
              <CreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">View Pricing</h3>
              <p className="text-sm text-gray-600">See our pricing options</p>
            </Link>

            <Link
              href="/portfolio"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center group border border-gray-200"
            >
              <Settings className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Portfolio</h3>
              <p className="text-sm text-gray-600">See our previous work</p>
            </Link>

            <Link
              href="/about"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center group border border-gray-200"
            >
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">About Us</h3>
              <p className="text-sm text-gray-600">Learn about our team</p>
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
