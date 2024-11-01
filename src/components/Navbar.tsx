import React from 'react';
import { Logo } from './Logo';
import { AnimatedTagline } from './AnimatedTagline';

export function Navbar() {
  const navItems = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'packages', label: 'Intelligence Packages', href: '#packages' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  const handleGetStarted = () => {
    const packagesSection = document.getElementById('packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <AnimatedTagline className="bg-gradient-to-r from-black via-red-900/20 to-black py-1" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={item.href}
                className={`
                  text-white/80 hover:text-red-600 
                  transition-all duration-300
                  relative group
                  animate-fade-in
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
            <button 
              onClick={handleGetStarted}
              className="
                px-4 py-2 
                bg-red-600 hover:bg-red-700 
                rounded 
                transition-all duration-300
                transform hover:scale-105
                animate-fade-in
                relative overflow-hidden group
              " 
              style={{ animationDelay: '500ms' }}
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}