import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/layout/navigation';
import { TestimonialCard } from '@/components/marketplace/testimonial-card';
import { testimonials } from '@/lib/data/mock-data';
import {
  Search,
  Users,
  Rocket,
  CheckCircle,
  Star,
  MessageSquare,
  Shield,
  Zap,
  ArrowRight
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/10 py-20 md:py-32">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Get Your Dream Website
            <br />
            <span className="text-primary">Built by Experts</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect with skilled web developers and designers who'll bring your vision to life.
            From e-commerce to portfolios, get a professional website without the hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/start-project"
              className="px-8 py-4 bg-white text-black rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Your Project
            </Link>
            <Link
              href="#developers"
              className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg font-semibold text-lg hover:bg-accent transition-colors"
            >
              Browse Developers
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">100+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-gray-600">Expert Developers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">4.8</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">95%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting your professional website is easier than you think
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Describe Your Project</h3>
              <p className="text-gray-600">
                Tell us about your business and what kind of website you need. Our smart matching system finds the perfect developers for you.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Select Your Expert</h3>
              <p className="text-gray-600">
                Review portfolios, ratings, and pricing. Connect directly with developers and discuss your project.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Launch Your Site</h3>
              <p className="text-gray-600">
                Track progress with milestone updates. Payment is secured in escrow until you're satisfied with the final result.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from real businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Malis Website Madness?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The smartest way to get your website built
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-gray-600 text-sm">
                Your payment is held in escrow until you're satisfied
              </p>
            </div>

            <div className="text-center">
              <Star className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Verified Experts</h3>
              <p className="text-gray-600 text-sm">
                All developers are vetted and rated by real clients
              </p>
            </div>

            <div className="text-center">
              <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Direct Communication</h3>
              <p className="text-gray-600 text-sm">
                Chat directly with developers throughout the project
              </p>
            </div>

            <div className="text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Fast Turnaround</h3>
              <p className="text-gray-600 text-sm">
                Most projects completed in 4-8 weeks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses who've launched successful websites through our platform
          </p>
          <div className="flex justify-center">
            <Link
              href="/start-project"
              className="px-8 py-4 bg-white text-black rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              Start Your Project Now
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo.png"
                  alt="Malis Website Madness"
                  width={40}
                  height={40}
                  className="object-contain brightness-0 invert"
                />
                <span className="font-bold text-lg">Malis Website Madness</span>
              </div>
              <p className="text-gray-400 text-sm">
                Connecting businesses with talented web developers since 2024.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">For Clients</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/start-project" className="text-gray-400 hover:text-white">Start a Project</Link></li>
                <li><Link href="#developers" className="text-gray-400 hover:text-white">Browse Developers</Link></li>
                <li><Link href="#how-it-works" className="text-gray-400 hover:text-white">How It Works</Link></li>
                <li><Link href="#pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">For Developers</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#join" className="text-gray-400 hover:text-white">Join Platform</Link></li>
                <li><Link href="#benefits" className="text-gray-400 hover:text-white">Benefits</Link></li>
                <li><Link href="#resources" className="text-gray-400 hover:text-white">Resources</Link></li>
                <li><Link href="#support" className="text-gray-400 hover:text-white">Support</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="#contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                <li><Link href="#blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                <li><Link href="#careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Malis Website Madness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
