import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <Features />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
