
import React from 'react';
import { Link } from 'react-router-dom';

const ContactCTA: React.FC = () => {
  return (
    <section className="bg-gold py-12 sm:py-16 md:py-24 relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 w-64 h-full bg-black/5 -skew-x-12 transform translate-x-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
          <div className="mb-0 md:mb-0 max-w-2xl text-center md:text-left w-full md:w-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-black mb-4 sm:mb-6 uppercase tracking-tight">Start Your Legacy Today</h2>
            <p className="text-black/80 text-base sm:text-lg md:text-xl font-bold uppercase tracking-wide">
              Consult with our experts for your next landmark.
            </p>
          </div>
          <Link to="/contact" className="w-full sm:w-auto text-center bg-black text-gold hover:bg-black/90 px-8 sm:px-14 py-4 sm:py-6 font-black uppercase tracking-[0.25em] md:tracking-[0.3em] transition-all shadow-2xl hover:scale-105 transform rounded-sm text-sm sm:text-base">
            Connect Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
