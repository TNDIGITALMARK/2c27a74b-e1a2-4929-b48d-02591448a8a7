'use client';

import Link from 'next/link';
import { Navigation } from '@/components/layout/navigation';
import {
  Heart,
  Target,
  Users,
  Award,
  TrendingUp,
  Shield,
  Zap,
  Code2,
  Palette,
  Rocket,
  Star,
  CheckCircle,
  Globe,
  MessageSquare
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Client-First Approach',
      description: 'Your success is our success. We build lasting relationships through exceptional service and dedication to your goals.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We never compromise on quality. Every project receives our full attention and expertise to deliver outstanding results.'
    },
    {
      icon: Zap,
      title: 'Innovation & Speed',
      description: 'We leverage the latest technologies and agile methodologies to deliver cutting-edge solutions quickly.'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'Clear communication, honest timelines, and transparent pricing. No surprises, just results.'
    }
  ];

  const team = [
    {
      name: 'Alex Rivera',
      role: 'Founder & Lead Developer',
      bio: '10+ years building web applications for startups and enterprises. Passionate about creating elegant solutions to complex problems.',
      expertise: ['Full-Stack Development', 'System Architecture', 'Technical Leadership']
    },
    {
      name: 'Sarah Chen',
      role: 'Senior Designer',
      bio: 'Award-winning designer with a keen eye for detail and user experience. Creating beautiful, functional designs that users love.',
      expertise: ['UI/UX Design', 'Brand Identity', 'Prototyping']
    },
    {
      name: 'Marcus Thompson',
      role: 'E-Commerce Specialist',
      bio: 'E-commerce expert who has helped businesses generate millions in online revenue through optimized shopping experiences.',
      expertise: ['E-Commerce', 'Conversion Optimization', 'Payment Integration']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Project Manager',
      bio: 'Organized, detail-oriented PM ensuring every project runs smoothly from kickoff to launch and beyond.',
      expertise: ['Project Management', 'Client Relations', 'Agile Methodology']
    }
  ];

  const stats = [
    { icon: Users, value: '200+', label: 'Happy Clients' },
    { icon: Rocket, value: '350+', label: 'Projects Delivered' },
    { icon: Globe, value: '15+', label: 'Countries Served' },
    { icon: Star, value: '4.9/5', label: 'Average Rating' }
  ];

  const whyChooseUs = [
    {
      title: 'Proven Track Record',
      description: 'Over 350 successful projects delivered across various industries with 98% client satisfaction.'
    },
    {
      title: 'End-to-End Service',
      description: 'From initial concept to post-launch support, we handle every aspect of your web project.'
    },
    {
      title: 'Modern Technology Stack',
      description: 'We use cutting-edge technologies ensuring your website is fast, secure, and scalable.'
    },
    {
      title: 'Transparent Pricing',
      description: 'Clear, upfront pricing with no hidden fees. You know exactly what you\'re getting.'
    },
    {
      title: 'Fast Turnaround',
      description: 'Efficient processes and agile methodology mean faster delivery without compromising quality.'
    },
    {
      title: 'Ongoing Support',
      description: 'We don't disappear after launch. Comprehensive support and maintenance packages available.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-accent/10 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Building Digital Experiences
            <br />
            <span className="text-primary">That Drive Results</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We're a team of passionate developers and designers dedicated to creating exceptional
            websites that help businesses grow and succeed online.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Target className="w-4 h-4" />
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Empowering Businesses Through Technology
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At WebMarket, we believe every business deserves a professional online presence
                that reflects their quality and values. Our mission is to make world-class web
                development accessible and affordable for businesses of all sizes.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Since our founding in 2020, we've helped hundreds of businesses transform their
                digital presence and achieve their growth goals. From small startups to established
                enterprises, we bring the same level of dedication and expertise to every project.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Work With Us
                </Link>
                <Link
                  href="/portfolio"
                  className="px-6 py-3 bg-white border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                >
                  View Our Work
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <Code2 className="w-24 h-24 text-primary mx-auto mb-4" />
                  <p className="text-xl font-bold text-gray-700">Building Excellence</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-xl max-w-xs">
                <Star className="w-8 h-8 mb-2 fill-white" />
                <p className="text-2xl font-bold mb-1">4.9/5</p>
                <p className="text-sm opacity-90">Average client rating across 200+ projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Talented professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                {/* Avatar Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Users className="w-20 h-20 text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="space-y-1">
                    {member.expertise.map((skill, sidx) => (
                      <div key={sidx} className="flex items-center gap-2 text-xs text-gray-700">
                        <CheckCircle className="w-3 h-3 text-success flex-shrink-0" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose WebMarket?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What sets us apart from other web development agencies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-gray-600 text-sm">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Skills */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Experience</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Full-Stack Development</h3>
                    <p className="text-gray-600 text-sm">Expert in React, Next.js, Node.js, Python, and modern web technologies</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Palette className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">UI/UX Design</h3>
                    <p className="text-gray-600 text-sm">Creating beautiful, intuitive interfaces that users love</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">E-Commerce Solutions</h3>
                    <p className="text-gray-600 text-sm">Building stores that convert visitors into customers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Security & Performance</h3>
                    <p className="text-gray-600 text-sm">Enterprise-grade security and blazing-fast performance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Skills</h2>
              <div className="space-y-4">
                {[
                  { skill: 'React & Next.js', level: 95 },
                  { skill: 'UI/UX Design', level: 90 },
                  { skill: 'E-Commerce Development', level: 92 },
                  { skill: 'Backend Development', level: 88 },
                  { skill: 'Mobile Responsive Design', level: 96 },
                  { skill: 'SEO & Performance', level: 90 }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-900">{item.skill}</span>
                      <span className="text-primary font-semibold">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to take your online presence to the next level? Get in touch and let's discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-xl inline-flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Get in Touch
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
          <p className="text-gray-400">&copy; 2024 WebMarket. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
