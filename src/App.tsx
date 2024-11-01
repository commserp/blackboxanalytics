import React from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Packages } from './components/Packages';
import { GeopoliticalService } from './components/services/GeopoliticalService';
import { CyberSecurityService } from './components/services/CyberSecurityService';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Packages />
      <GeopoliticalService />
      <CyberSecurityService />
      <Footer />
    </div>
  );
}