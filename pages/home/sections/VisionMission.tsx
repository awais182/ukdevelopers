// pages/home/sections/VisionMission.tsx - Updated with brand theme

import React, { useState, useEffect } from 'react';
import { COMPANY_VISION } from '../../../COMPANY_INFO';

const VisionMission: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // SVG Line Icons
  const IconOffice = () => (
    <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );

  const IconTimer = () => (
    <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const IconHandshake = () => (
    <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.646 7.23a2 2 0 01-1.789 1.106H7m0 0a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4a2 2 0 012-2h2.996a1 1 0 01.894.553l.812 1.62" />
    </svg>
  );

  const IconGrowth = () => (
    <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );

  const getMissionIcon = (emoji: string) => {
    switch (emoji) {
      case '🏢':
        return <IconOffice />;
      case '⏰':
        return <IconTimer />;
      case '🤝':
        return <IconHandshake />;
      case '📈':
        return <IconGrowth />;
      default:
        return <IconOffice />;
    }
  };

  return (
    <>
      {/* Our Vision Section */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="h-[2px] w-12 bg-gold"></div>
                <span className="text-gold text-[10px] font-black uppercase tracking-[0.6em]">Strategic Direction</span>
                <div className="h-[2px] w-12 bg-gold"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-8 sm:mb-10 leading-tight">
                {COMPANY_VISION.vision.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mx-auto text-gray-200 px-2 sm:px-0">
                {COMPANY_VISION.vision.statement}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Vision Section */}
      <section className="py-14 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="h-[2px] w-12 bg-gold"></div>
                <span className="text-gold text-[10px] font-black uppercase tracking-[0.6em]">International Ambition</span>
                <div className="h-[2px] w-12 bg-gold"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-8 sm:mb-10 leading-tight">
                {COMPANY_VISION.globalVision.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mx-auto text-gray-200 px-2 sm:px-0">
                {COMPANY_VISION.globalVision.statement}
              </p>
            </div>
            
            {/* Expansion Map */}
            <div className="mt-16 pt-16 border-t border-gold/30">
              <h3 className="text-3xl font-black uppercase tracking-tight mb-10 text-center">
                Our Global <span className="text-gold">Expansion</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { region: 'Pakistan', desc: 'Lahore headquarters with regional presence across major cities' },
                  { region: 'UAE Operations', desc: 'Regional hub serving overseas investors and Gulf markets' },
                  { region: 'Global Network', desc: 'Expanding presence with ethical development standards' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="text-center p-6 border-b-2 border-gold hover:border-gold transition-all"
                    style={{
                      animation: isLoaded ? `slideUp 0.6s ease-out ${idx * 100}ms forwards` : 'none',
                      opacity: isLoaded ? 1 : 0,
                    }}
                  >
                    <style>{`
                      @keyframes slideUp {
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
                    <div className="text-4xl font-black text-gold mb-4">→</div>
                    <h4 className="text-2xl font-black uppercase tracking-widest mb-3">{item.region}</h4>
                    <p className="text-gray-300 font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission in Action Section */}
      <section className="py-14 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="h-[2px] w-12 bg-gold"></div>
                <span className="text-gold text-[10px] font-black uppercase tracking-[0.6em]">Operational Excellence</span>
                <div className="h-[2px] w-12 bg-gold"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase tracking-tight mb-6 sm:mb-8 leading-tight">
                {COMPANY_VISION.missionInAction.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
                {COMPANY_VISION.missionInAction.description}
              </p>
            </div>

            {/* Mission Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {COMPANY_VISION.missionInAction.pillars.map((pillar, idx) => (
                <div
                  key={pillar.id}
                  className="group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-gold p-8 md:p-10 rounded-lg transition-all duration-500 hover:shadow-2xl hover:shadow-gold/20 hover:-translate-y-1"
                  style={{
                    animation: isLoaded ? `slideUp 0.6s ease-out ${idx * 120}ms forwards` : 'none',
                    opacity: isLoaded ? 1 : 0,
                  }}
                >
                  <style>{`
                    @keyframes slideUp {
                      from {
                        opacity: 0;
                        transform: translateY(30px);
                      }
                      to {
                        opacity: 1;
                        transform: translateY(0);
                      }
                    }
                  `}</style>

                  {/* Icon */}
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                    {getMissionIcon(pillar.icon)}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight mb-4 group-hover:text-gold transition-colors duration-300">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-light text-base leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Accent Line */}
                  <div className="h-[2px] w-0 bg-gradient-to-r from-gold to-transparent group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>

            {/* Core Focus */}
            <div className="mt-20 pt-20 border-t-2 border-gold/20">
              <div className="bg-gradient-to-r from-gold/5 to-black/3 p-12 md:p-16 rounded-lg border-l-4 border-gold">
                <h3 className="text-3xl font-black text-black uppercase tracking-tight mb-6">
                  Our <span className="text-gold">Commitment</span>
                </h3>
                <p className="text-lg text-gray-700 font-light leading-relaxed max-w-3xl">
                  Every project, every investment, every decision at UK Developers is guided by our mission to deliver ethical, quality developments. We believe success is measured not just by profit, but by the trust of our stakeholders and the lasting impact we create.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionMission;