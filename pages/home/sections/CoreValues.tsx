// pages/home/sections/CoreValues.tsx - Updated with brand theme

import React, { useState, useEffect } from 'react';
import { COMPANY_CORE_VALUES } from '../../../COMPANY_INFO';

const CoreValues: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="py-14 sm:py-20 md:py-24 lg:py-32 bg-white font-sans">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="h-[2px] w-8 sm:w-12 bg-gold"></div>
              <span className="text-gold text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.6em]">Foundational Principles</span>
              <div className="h-[2px] w-8 sm:w-12 bg-gold"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase tracking-tight mb-6 sm:mb-8 leading-tight">
              {COMPANY_CORE_VALUES.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-3xl mx-auto text-gray-600 px-2 sm:px-0">
              {COMPANY_CORE_VALUES.introduction}
            </p>
          </div>

          {/* Core Values Grid - 2x3 Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {COMPANY_CORE_VALUES.values.map((value, idx) => (
              <div
                key={value.id}
                className="group relative"
                style={{
                  animation: isLoaded ? `slideUp 0.6s ease-out ${idx * 100}ms forwards` : 'none',
                  opacity: isLoaded ? 1 : 0,
                }}
              >
                <style>{`
                  @keyframes slideUp {
                    from {
                      opacity: 0;
                      transform: translateY(40px);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `}</style>

                {/* Card */}
                <div className="h-full bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-gold p-6 sm:p-8 md:p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/20 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gold/5 rounded-lg">
                  
                  {/* Icon/Number */}
                  <div className="absolute top-6 right-6 text-5xl font-black text-gold/20 group-hover:text-gold/40 transition-colors">
                    ▣
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-5 text-black group-hover:text-gold transition-colors duration-300 pr-8">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base md:text-lg font-light leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-gold/0 via-gold/100 to-gold/0 w-0 group-hover:w-full transition-all duration-500 rounded-b-lg"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Commitment Statement */}
          <div className="mt-12 sm:mt-16 md:mt-20 pt-12 sm:pt-16 md:pt-20 border-t-2 border-gold/20">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-gold/5 to-black/3 border-l-4 border-gold rounded-lg p-6 sm:p-8 md:p-12 lg:p-14">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 sm:mb-6 text-black">
                Our <span className="text-gold">Commitment</span>
              </h3>
              <p className="text-lg font-light leading-relaxed text-gray-700">
                These core values are not mere statements—they are the bedrock of our operations. Every project, every interaction, every decision is filtered through these principles. At UK Developers, we don't just build structures; we build trust, create value, and leave legacies that our stakeholders can be proud of.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;