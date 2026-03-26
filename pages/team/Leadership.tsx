import React from 'react';
import { Link } from 'react-router-dom';
import { EXECUTIVES } from '../../constants';
import SEO from '../../components/common/SEO';

const Leadership: React.FC = () => {
  const founder = EXECUTIVES.find(e => e.id === 6);
  const others = EXECUTIVES.filter(e => e.id !== 6);

  return (
    <div className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 font-sans bg-white min-h-screen">
      <SEO
        title="Leadership Team | UK Developers"
        description="Meet the executive leadership at UK Developers—Chairman, CEO, Directors, and COO steering 27 years of Shariah-compliant real estate excellence in Lahore."
        keywords="UK Developers Leadership, Lahore Real Estate Executives, Pakistan Property Team, Chairman CEO Directors"
      />
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
            <div className="h-[2px] w-8 sm:w-12 bg-gold"></div>
            <span className="text-gold text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.6em]">Our Team</span>
            <div className="h-[2px] w-8 sm:w-12 bg-gold"></div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 sm:mb-6">
            Executive <span className="text-gold">Leadership</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            Meet the visionary leaders steering UK Developers' legacy of excellence and Shariah-compliant development in Lahore.
          </p>
        </div>

        {/* Founder - prominent on top when on full team page */}
        {founder && (
          <div className="flex justify-center mb-10 sm:mb-14 md:mb-16">
            <Link to={`/team/${founder.id}`} className="group block w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
              <div className="relative overflow-hidden rounded-lg shadow-xl border-b-4 border-gold hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 aspect-[3/4] max-h-[380px] sm:max-h-[420px] md:max-h-[480px] bg-gray-100">
                <img src={founder.imageUrl} alt={founder.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white">
                  <p className="text-gold text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]">{founder.role}</p>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight">{founder.name}</h2>
                </div>
              </div>
              <p className="text-center text-gray-600 text-xs sm:text-sm mt-3 sm:mt-4 group-hover:text-gold transition-colors">View profile →</p>
            </Link>
          </div>
        )}

        {/* Other executives - responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {others.map((exec) => (
            <Link key={exec.id} to={`/team/${exec.id}`} className="group block">
              <div className="relative overflow-hidden rounded-lg shadow-lg border-b-4 border-gold/70 hover:border-gold hover:shadow-xl hover:shadow-gold/15 transition-all duration-300 aspect-[3/4] min-h-[260px] sm:min-h-[300px] md:min-h-[320px]">
                <img src={exec.imageUrl} alt={exec.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 text-white">
                  <p className="text-gold text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">{exec.role}</p>
                  <h3 className="text-base sm:text-lg md:text-xl font-black uppercase tracking-tight line-clamp-2">{exec.name}</h3>
                </div>
              </div>
              <div className="mt-2 sm:mt-3 space-y-1">
                <p className="text-gray-600 text-[10px] sm:text-xs line-clamp-2 group-hover:text-gold transition-colors">{exec.bio}</p>
                <span className="text-gold text-[10px] sm:text-xs font-black uppercase tracking-wider">View Full Profile →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Link to="/about#executives" className="inline-block text-gold hover:text-black font-black uppercase text-[10px] sm:text-xs tracking-[0.2em] border-b-2 border-gold hover:border-black transition-all">
            ← Back to About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
