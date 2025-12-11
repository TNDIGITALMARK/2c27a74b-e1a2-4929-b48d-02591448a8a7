'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Code2 className="w-6 h-6 text-primary" />
            <span className="text-gray-900">WebMarket</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Marketplace
            </Link>
            <Link
              href="/start-project"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Start a Project
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              How It Works
            </Link>
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/start-project"
              className="px-4 py-2 text-primary hover:bg-accent rounded-lg font-medium transition-colors"
            >
              Get a Website
            </Link>
            <Link
              href="#join-developer"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Join as Developer
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary transition-colors font-medium px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Marketplace
              </Link>
              <Link
                href="/start-project"
                className="text-gray-700 hover:text-primary transition-colors font-medium px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start a Project
              </Link>
              <Link
                href="#how-it-works"
                className="text-gray-700 hover:text-primary transition-colors font-medium px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <div className="flex flex-col gap-2 mt-2 pt-4 border-t border-gray-200">
                <Link
                  href="/start-project"
                  className="px-4 py-2 text-center text-primary bg-accent rounded-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Website
                </Link>
                <Link
                  href="#join-developer"
                  className="px-4 py-2 text-center bg-primary text-primary-foreground rounded-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join as Developer
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
