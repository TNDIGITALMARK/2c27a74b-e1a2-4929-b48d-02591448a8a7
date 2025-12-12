'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="Malis Website Madness"
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="font-bold text-lg text-gray-900 hidden sm:inline">
              Malis Website Madness
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/templates"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Templates
            </Link>
            <Link
              href="/custom"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Custom
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Portfolio
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/forms"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Forms
            </Link>
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-4 py-2 text-primary hover:bg-accent rounded-lg font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/templates"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get Started
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
                href="/templates"
                className="text-gray-700 hover:text-primary transition-colors font-medium px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Templates
              </Link>
              <Link
                href="/custom"
                className="text-gray-700 hover:text-primary transition-colors font-medium px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Custom
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-700 hover:text-primary transition-colors font-medium px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-primary transition-colors font-medium px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary transition-colors font-medium px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/forms"
                className="text-gray-700 hover:text-primary transition-colors font-medium px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Forms
              </Link>
              <div className="flex flex-col gap-2 mt-2 pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="px-4 py-2 text-center text-primary bg-accent rounded-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/templates"
                  className="px-4 py-2 text-center bg-primary text-primary-foreground rounded-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
