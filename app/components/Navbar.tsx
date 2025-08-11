'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-48 h-12"
            >
              <Image
                src="/images/logo.png"
                alt="SCRPTBLE"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">
              Projects
            </Link>
            <Link href="/careers" className="text-gray-600 hover:text-gray-900 transition-colors">
              Careers
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className="text-gray-600 hover:text-gray-900" onClick={() => setMobileOpen(!mobileOpen)}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
            <div className="w-64 bg-white h-full shadow-lg p-6 flex flex-col space-y-6">
              <button className="self-end text-gray-600 hover:text-gray-900 mb-4" onClick={() => setMobileOpen(false)}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setMobileOpen(false)}>
                About
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setMobileOpen(false)}>
                Services
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setMobileOpen(false)}>
                Projects
              </Link>
              <Link href="/careers" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setMobileOpen(false)}>
                Careers
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar; 
