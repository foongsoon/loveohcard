"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bird } from 'lucide-react'; // Using Bird as a stand-in for Dove

const navLinks = [
  { href: '#home', label: '首页' },
  { href: '#services', label: '服务' },
  { href: '#resources', label: '资源' },
  { href: '#contact', label: '联系我们' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full py-4 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-background/98 shadow-lg' : 'bg-background/95 shadow-md'
      }`}
    >
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-5">
        <Link href="#home" className="flex items-center">
          <Bird className="mr-2.5 h-10 w-10 text-primary" />
          <div className="text-2xl font-bold tracking-wide text-foreground font-headline">
            心灵<span className="text-secondary">捕手</span>
          </div>
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-3 py-2 text-lg font-semibold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden mt-4 bg-background/95 shadow-md">
          <ul className="flex flex-col items-center space-y-2 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full rounded-full px-4 py-2 text-center text-lg font-semibold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
