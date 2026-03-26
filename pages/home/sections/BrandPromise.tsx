// pages/home/sections/BrandPromise.tsx - Minimalist professional design

import React, { useState, useEffect } from 'react';
import { COMPANY_BRAND_PROMISE } from '../../../COMPANY_INFO';

const BrandPromise: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // SVG Line Icons
  const IconScale = () => (
    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
  );

  const IconCalendar = () => (
    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );

  const IconVision = () => (
    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );

  const IconStar = () => (
    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const pillars = [
    { icon: IconScale, title: COMPANY_BRAND_PROMISE.pillars[0].title, desc: COMPANY_BRAND_PROMISE.pillars[0].description },
    { icon: IconCalendar, title: COMPANY_BRAND_PROMISE.pillars[1].title, desc: COMPANY_BRAND_PROMISE.pillars[1].description },
    { icon: IconVision, title: COMPANY_BRAND_PROMISE.pillars[2].title, desc: COMPANY_BRAND_PROMISE.pillars[2].description },
    { icon: IconStar, title: COMPANY_BRAND_PROMISE.pillars[3].title, desc: COMPANY_BRAND_PROMISE.pillars[3].description },
  ];

  return (
    <section className="py-14 sm:py-20 md:py-24 lg:py-32 bg-white text-black font-sans">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="h-[1px] w-8 sm:w-12 bg-gold"></div>
              <span className="text-gold text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.6em]">Our Commitment</span>
              <div className="h-[1px] w-8 sm:w-12 bg-gold"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6 sm:mb-8 leading-tight text-black">
              {COMPANY_BRAND_PROMISE.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-3xl mx-auto text-gray-700 px-2 sm:px-0">
              {COMPANY_BRAND_PROMISE.introduction}
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="group relative"
                  style={{
                    animation: isLoaded ? `fadeInUp 0.6s ease-out ${idx * 100}ms forwards` : 'none',
                    opacity: isLoaded ? 1 : 0,
                  }}
                >
                  <style>{`
                    @keyframes fadeInUp {
                      from {
                        opacity: 0;
                        transform: translateY(20px);
                      }
                      to {
                        opacity: 1;
                        transform: translateY(0);
                      }
                    }
                  `}</style>

                  {/* Card */}
                  <div className="p-6 sm:p-8 border border-gold/30 hover:border-gold/60 transition-all duration-500 bg-gray-50 hover:bg-gray-100 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-black group-hover:text-gold transition-colors duration-300">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm font-light leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {pillar.desc}
                    </p>

                    {/* Bottom line indicator */}
                    <div className="mt-6 pt-6 border-t border-gold/20 group-hover:border-gold/40 transition-all duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Statement */}
          <div className="mt-20 pt-16 border-t border-gold/20 text-center">
            <p className="text-base font-light leading-relaxed text-gray-600 max-w-3xl mx-auto">
              These core promises define our relationship with every client. We stand behind them not just in words, but in every project we deliver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPromise;