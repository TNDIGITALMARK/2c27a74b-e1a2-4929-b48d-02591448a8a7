'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/layout/navigation';
import {
  Target,
  TrendingUp,
  Users,
  ShoppingCart,
  Globe,
  Award,
  ExternalLink,
  CheckCircle,
  Star,
  Calendar,
  Filter
} from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'ecommerce' | 'saas' | 'corporate' | 'creative' | 'restaurant' | 'startup';
  description: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  features: string[];
  technologies: string[];
  duration: string;
  year: string;
  image: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: 'fashion-ecommerce',
    title: 'Luxury Fashion E-Commerce Platform',
    client: 'Elite Fashion Boutique',
    category: 'ecommerce',
    description: 'Complete e-commerce transformation for a luxury fashion brand, featuring advanced product filtering, virtual try-on, and personalized recommendations.',
    challenge: 'The client had an outdated website with poor mobile experience and no modern e-commerce features. They were losing sales to competitors with better online experiences.',
    solution: 'We built a cutting-edge e-commerce platform with React/Next.js, integrated AI-powered recommendations, implemented virtual try-on technology, and created a seamless mobile shopping experience.',
    results: [
      { metric: 'Sales Increase', value: '350%', description: 'Year-over-year revenue growth' },
      { metric: 'Mobile Traffic', value: '75%', description: 'Of all website visits' },
      { metric: 'Cart Abandonment', value: '-45%', description: 'Reduction in abandoned carts' },
      { metric: 'Customer Rating', value: '4.9/5', description: 'Average customer satisfaction' }
    ],
    features: [
      'AI-Powered Product Recommendations',
      'Virtual Try-On Technology',
      'Advanced Search & Filtering',
      'Wishlist & Save for Later',
      'Multi-Currency Support',
      'Real-Time Inventory Management'
    ],
    technologies: ['Next.js', 'React', 'Stripe', 'PostgreSQL', 'AWS', 'TensorFlow'],
    duration: '12 weeks',
    year: '2024',
    image: '/portfolio/fashion-ecommerce.jpg',
    testimonial: {
      quote: 'The new platform exceeded our expectations. Sales have tripled, and our customers love the shopping experience.',
      author: 'Sarah Mitchell',
      position: 'CEO, Elite Fashion Boutique'
    }
  },
  {
    id: 'saas-dashboard',
    title: 'Enterprise SaaS Analytics Platform',
    client: 'DataFlow Technologies',
    category: 'saas',
    description: 'Comprehensive SaaS platform with real-time analytics, team collaboration, and subscription management for B2B customers.',
    challenge: 'The company needed a scalable platform to handle thousands of users with real-time data processing and complex visualizations.',
    solution: 'Built a robust SaaS platform with real-time data pipelines, interactive dashboards, role-based access control, and automated billing.',
    results: [
      { metric: 'Active Users', value: '5,000+', description: 'Paying subscribers' },
      { metric: 'Uptime', value: '99.9%', description: 'System reliability' },
      { metric: 'ARR', value: '$1.2M', description: 'Annual recurring revenue' },
      { metric: 'NPS Score', value: '72', description: 'Customer satisfaction' }
    ],
    features: [
      'Real-Time Analytics Dashboard',
      'Team Collaboration Tools',
      'API Integration Hub',
      'Automated Billing & Invoicing',
      'Role-Based Access Control',
      'White-Label Options'
    ],
    technologies: ['React', 'Node.js', 'WebSocket', 'Redis', 'MongoDB', 'Stripe'],
    duration: '16 weeks',
    year: '2024',
    image: '/portfolio/saas-dashboard.jpg',
    testimonial: {
      quote: 'This platform has become the backbone of our business. The team delivered beyond what we thought was possible.',
      author: 'Michael Chen',
      position: 'CTO, DataFlow Technologies'
    }
  },
  {
    id: 'restaurant-reservations',
    title: 'Fine Dining Reservation System',
    client: 'The Grand Table Restaurant',
    category: 'restaurant',
    description: 'Elegant restaurant website with integrated reservation system, event management, and digital menu showcase.',
    challenge: 'Manual reservation management was inefficient, leading to double bookings and lost revenue. The restaurant needed a modern digital presence.',
    solution: 'Created a beautiful website with smart reservation system, automated reminders, event booking, and integrated with their POS system.',
    results: [
      { metric: 'Reservations', value: '200%', description: 'Increase in online bookings' },
      { metric: 'No-Shows', value: '-60%', description: 'Reduction with automated reminders' },
      { metric: 'Event Bookings', value: '$50K+', description: 'Additional monthly revenue' },
      { metric: 'Reviews', value: '5.0★', description: 'Google & Yelp ratings' }
    ],
    features: [
      'Smart Table Management',
      'Automated Booking Confirmations',
      'Event & Private Dining Booking',
      'Digital Menu with Allergen Info',
      'Customer Loyalty Program',
      'POS Integration'
    ],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Twilio', 'Square'],
    duration: '8 weeks',
    year: '2024',
    image: '/portfolio/restaurant.jpg',
    testimonial: {
      quote: 'Our online presence has transformed our business. We're booked solid weeks in advance now.',
      author: 'Chef Antoine Bernard',
      position: 'Owner, The Grand Table'
    }
  },
  {
    id: 'corporate-website',
    title: 'Global Consulting Firm Website',
    client: 'Strategic Solutions Group',
    category: 'corporate',
    description: 'Professional corporate website with client portal, knowledge base, and lead generation system for a top-tier consulting firm.',
    challenge: 'The firm needed to establish thought leadership, generate quality leads, and provide a secure client portal for ongoing projects.',
    solution: 'Developed a sophisticated corporate website with integrated CRM, secure client portal, content management system, and advanced lead scoring.',
    results: [
      { metric: 'Lead Quality', value: '180%', description: 'Increase in qualified leads' },
      { metric: 'Content Engagement', value: '4.5min', description: 'Average time on site' },
      { metric: 'Client Satisfaction', value: '96%', description: 'Portal usage rating' },
      { metric: 'Fortune 500', value: '12', description: 'New enterprise clients' }
    ],
    features: [
      'Secure Client Portal',
      'Knowledge Base & Resources',
      'Lead Scoring System',
      'Team Directory & Expertise',
      'Case Study Showcase',
      'Multi-Language Support'
    ],
    technologies: ['Next.js', 'Auth0', 'Salesforce', 'Contentful', 'AWS'],
    duration: '14 weeks',
    year: '2023',
    image: '/portfolio/corporate.jpg',
    testimonial: {
      quote: 'The website positions us as industry leaders. Lead quality has improved dramatically.',
      author: 'Jennifer Roberts',
      position: 'Managing Partner, Strategic Solutions Group'
    }
  },
  {
    id: 'creative-portfolio',
    title: 'Award-Winning Creative Portfolio',
    client: 'Studio Lumina',
    category: 'creative',
    description: 'Stunning portfolio website for a creative agency, featuring immersive project showcases and interactive case studies.',
    challenge: 'The agency needed a portfolio that would wow potential clients and showcase their creative work in the best possible way.',
    solution: 'Created an immersive, visually stunning portfolio with smooth animations, full-screen project showcases, and interactive case studies.',
    results: [
      { metric: 'Inquiries', value: '250%', description: 'Increase in project requests' },
      { metric: 'Awards', value: '3', description: 'Design awards won' },
      { metric: 'Client Tier', value: '+40%', description: 'Increase in project budgets' },
      { metric: 'Conversion', value: '32%', description: 'Inquiry to client rate' }
    ],
    features: [
      'Immersive Project Galleries',
      'Smooth Page Transitions',
      'Interactive Case Studies',
      'Video Backgrounds',
      'Client Testimonials',
      'Contact Form with Portfolio Request'
    ],
    technologies: ['Next.js', 'Framer Motion', 'GSAP', 'Sanity CMS', 'Vercel'],
    duration: '10 weeks',
    year: '2024',
    image: '/portfolio/creative.jpg',
    testimonial: {
      quote: 'This website is our best sales tool. Clients are impressed before we even present.',
      author: 'Marcus Lee',
      position: 'Creative Director, Studio Lumina'
    }
  },
  {
    id: 'startup-platform',
    title: 'Tech Startup MVP Launch',
    client: 'CloudSync Technologies',
    category: 'startup',
    description: 'Rapid MVP development for a tech startup, from concept to launch in 8 weeks with integrated payment and user management.',
    challenge: 'The startup needed to validate their idea quickly with a functional MVP while keeping development costs under control.',
    solution: 'Built a lean but powerful MVP using modern tech stack, focused on core features, and integrated essential third-party services.',
    results: [
      { metric: 'Launch Speed', value: '8 weeks', description: 'From concept to launch' },
      { metric: 'Beta Users', value: '500+', description: 'In first month' },
      { metric: 'Funding Round', value: '$2M', description: 'Seed funding raised' },
      { metric: 'User Growth', value: '30%', description: 'Month-over-month' }
    ],
    features: [
      'User Authentication',
      'Subscription Management',
      'Dashboard & Analytics',
      'API Integration',
      'Email Notifications',
      'Admin Panel'
    ],
    technologies: ['Next.js', 'Supabase', 'Stripe', 'Tailwind CSS', 'Vercel'],
    duration: '8 weeks',
    year: '2024',
    image: '/portfolio/startup.jpg',
    testimonial: {
      quote: 'They helped us launch fast and professionally. The MVP was exactly what we needed to raise funding.',
      author: 'Alex Thompson',
      position: 'Founder, CloudSync Technologies'
    }
  }
];

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'ecommerce', label: 'E-Commerce' },
  { value: 'saas', label: 'SaaS' },
  { value: 'corporate', label: 'Corporate' },
  { value: 'creative', label: 'Creative' },
  { value: 'restaurant', label: 'Restaurant' },
  { value: 'startup', label: 'Startup' }
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? caseStudies
    : caseStudies.filter(cs => cs.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-accent/10 py-20">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            Our Work
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfolio & Case Studies
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real projects, real results. See how we've helped businesses achieve their goals
            with custom web solutions that drive growth and success.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="border-b bg-white sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto py-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
            <div className="flex gap-2">
              {categories.map(cat => (
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
          <div className="mt-3 text-sm text-gray-600">
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto space-y-20">
          {filteredProjects.map((study, idx) => (
            <div key={study.id} className={`${idx % 2 === 1 ? 'bg-gray-50' : ''} ${idx % 2 === 1 ? 'py-16 -mx-[100vw] px-[100vw]' : ''}`}>
              <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Image */}
                  <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden shadow-xl">
                      <div className="h-full flex items-center justify-center p-8">
                        <div className="text-center">
                          <Target className="w-20 h-20 text-primary mx-auto mb-4" />
                          <p className="text-xl font-bold text-gray-700 mb-2">{study.title}</p>
                          <p className="text-gray-600">{study.client}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3">
                      {study.category.toUpperCase()}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{study.description}</p>

                    {/* Challenge & Solution */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 mb-2">The Challenge</h3>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 mb-2">Our Solution</h3>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.results.map((result, ridx) => (
                        <div key={ridx} className="bg-white p-4 rounded-lg border-2 border-primary/20">
                          <div className="text-2xl font-bold text-primary mb-1">{result.value}</div>
                          <div className="text-xs font-semibold text-gray-900 mb-1">{result.metric}</div>
                          <div className="text-xs text-gray-600">{result.description}</div>
                        </div>
                      ))}
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{study.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                    </div>

                    {/* Testimonial */}
                    {study.testimonial && (
                      <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary mb-6">
                        <Star className="w-6 h-6 text-primary mb-3 fill-primary" />
                        <p className="text-gray-700 italic mb-3">"{study.testimonial.quote}"</p>
                        <p className="text-sm font-semibold text-gray-900">{study.testimonial.author}</p>
                        <p className="text-xs text-gray-600">{study.testimonial.position}</p>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-700 mb-2">Technologies Used:</p>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, tidx) => (
                          <span key={tidx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create a custom solution that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              Start Your Project
            </Link>
            <Link
              href="/custom"
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Learn About Custom Development
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
