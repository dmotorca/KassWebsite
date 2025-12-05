'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Smooth-scroll helper for one-page navigation
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-pink-500/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* ---------- LOGO / BRANDING ---------- */}
        <button
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold text-pink-400 hover:text-pink-300 transition-all"
        >
          Blossom Nails
        </button>

        {/* ---------- DESKTOP NAV LINKS ---------- */}
        <div className="hidden md:flex gap-8 text-gray-300 font-medium text-lg">
          <button
            onClick={() => scrollToSection('services')}
            className="hover:text-pink-400 transition font-bold"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="hover:text-pink-400 transition font-bold"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-pink-400 transition font-bold"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-pink-400 transition font-bold"
          >
            Contact
          </button>
        </div>

        {/* ---------- MOBILE MENU BUTTON ---------- */}
        <button
          className="md:hidden text-pink-300 hover:text-pink-400 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ---------- MOBILE DROPDOWN MENU ---------- */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 border-t border-pink-500/20 px-6 py-4 flex flex-col gap-4 text-gray-200 text-lg font-bold"
        >
          <button
            onClick={() => scrollToSection('services')}
            className="hover:text-pink-400 transition"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="hover:text-pink-400 transition"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-pink-400 transition"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-pink-400 transition"
          >
            Contact
          </button>
        </motion.div>
      )}
    </nav>
  );
}
