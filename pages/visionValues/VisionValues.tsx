import React from 'react';
import { Link } from 'react-router-dom';
import CoreValues from '../home/sections/CoreValues';
import BrandPromise from '../home/sections/BrandPromise';
import VisionMission from '../home/sections/VisionMission';
import SEO from '../../components/common/SEO';

const VisionValues: React.FC = () => {
  return (
    <div className="font-sans bg-white">
      <SEO
        title="Vision & Values | UK Developers"
        description="Discover UK Developers' vision, core values, and commitment to excellence. Our mission is to build legacies through ethical development and Shariah-compliant principles."
        keywords="Company Vision, Core Values, Shariah Compliant, Ethical Development, Real Estate Values"
      />

      {/* Hero Section */}
      <section className="relative py-14 sm:py-20 md:py-32 bg-gradient-to-r from-corporate-black to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="h-[2px] w-8 sm:w-12 bg-gold"></div>
              <span className="text-gold text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.6em]">Our Purpose</span>
              <div className="h-[2px] w-8 sm:w-12 bg-gold"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6 sm:mb-8 leading-tight">
              Vision & <span className="text-gold">Values</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed px-2 sm:px-0">
              Guiding principles that shape every project and decision at UK Developers.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Sections */}
      <VisionMission />

      {/* Core Values Section */}
      <CoreValues />

      {/* Brand Promise Section */}
      <BrandPromise />

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight mb-8">
            Living Our <span className="text-gold">Values</span>
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Every project is a testament to our commitment to quality, integrity, and ethical development. Explore our portfolio today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="bg-gold hover:bg-black text-black hover:text-white px-10 py-4 font-black uppercase tracking-[0.3em] text-sm transition-all shadow-lg rounded"
            >
              View Our Projects
            </Link>
            <Link
              to="/contact"
              className="border-2 border-gold hover:bg-gold text-black px-10 py-4 font-black uppercase tracking-[0.3em] text-sm transition-all rounded"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionValues;
