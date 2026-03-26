import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_BRIEF, COMPANY_INFO } from '../../COMPANY_INFO';
import { EXECUTIVES } from '../../constants';
import SEO from '../../components/common/SEO';

const About: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="pt-20 sm:pt-24 font-sans bg-white">
      <SEO
        title="About UK Developers | 27-Year Legacy in Real Estate"
        description="UK Developers is a trusted real estate developer with 27 years of heritage. Pioneering modern construction in heritage zones with Shariah-compliant principles."
        keywords="UK Developers, Lahore Real Estate, Heritage Construction, Shariah Compliance, Core Values"
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
              <span className="text-gold text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.6em]">Our Story</span>
              <div className="h-[2px] w-8 sm:w-12 bg-gold"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6 sm:mb-8 leading-tight">
              27 Years of <span className="text-gold">Legacy</span> & Excellence
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed px-2 sm:px-0">
              From the historic Azam Cloth Market to modern corridors—UK Developers builds more than projects. We build legacies.
            </p>
          </div>
        </div>
      </section>

      {/* Company Brief Section */}
      <section className="py-14 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Opening Statement */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <div className="inline-block mb-4 sm:mb-6">
                <span className="text-gold text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.6em]">Who We Are</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black uppercase tracking-tight mb-6 sm:mb-8 leading-tight">
                A Trusted Real Estate <span className="text-gold">Pioneer</span>
              </h2>
              <div className="space-y-6">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
                  <span className="font-black text-black">UK Developers</span> is a trusted real estate development company with a <span className="font-black text-gold">27-year legacy</span> rooted in the historic <span className="font-black">Azam Cloth Market (Old City)</span>. With <span className="font-black text-gold">12+ successfully delivered commercial projects</span>, UK Developers is recognized as a <span className="font-black">pioneer of modern high-rise construction in heritage commercial zones</span>, setting benchmarks in <span className="font-black text-gold">quality, delivery, and integrity</span>.
                </p>
              </div>
            </div>

            {/* Philosophy Statement */}
            <div className="bg-gradient-to-r from-gold/10 to-yellow-100/10 border-l-4 border-gold p-6 sm:p-8 md:p-10 rounded-r-lg mb-12 sm:mb-16 md:mb-20">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black uppercase tracking-tight mb-4 sm:mb-6">
                Our Foundation
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-gray-800">
                Driven by <span className="font-black text-gold">Islamic Shariah-compliant principles (No Riba)</span>, UK Developers combines <span className="font-black">ethical development, transparent transactions, and future-ready architecture</span>—expanding today from the Old City to prime modern corridors such as <span className="font-black text-gold">Pine Avenue Road</span> and planned residential communities like <span className="font-black text-gold">Ittehad Town</span>.
              </p>
            </div>

            {/* Benchmarks */}
            <div className="bg-black text-white rounded-lg p-6 sm:p-8 md:p-12 lg:p-16">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-8 sm:mb-10 text-center">
                Our <span className="text-gold">Benchmarks</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                {['Quality', 'Delivery', 'Integrity'].map((benchmark, idx) => (
                  <div
                    key={idx}
                    className="text-center group"
                    style={{
                      animation: isLoaded ? `slideUp 0.6s ease-out ${idx * 150}ms forwards` : 'none',
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
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/40 transition-colors">
                        <span className="text-3xl font-black text-gold">✓</span>
                      </div>
                    </div>
                    <h4 className="text-2xl font-black uppercase tracking-[0.2em] text-white group-hover:text-gold transition-colors">
                      {benchmark}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership Section - Founder (Haji Muhammad Ishaq) above, 4 in row below */}
      <section id="executives" className="py-14 sm:py-20 md:py-24 lg:py-32 bg-gray-50 font-sans">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-14 md:mb-16">
              <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <div className="h-[2px] w-8 sm:w-12 bg-gold"></div>
                <span className="text-gold text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.6em]">Our Leadership</span>
                <div className="h-[2px] w-8 sm:w-12 bg-gold"></div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black uppercase tracking-tight mb-4 sm:mb-6 leading-tight">
                Executive <span className="text-gold">Team</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-0">
                Meet the visionary leaders steering UK Developers' legacy of excellence and Shariah-compliant development in Lahore.
              </p>
            </div>

            {/* Founder - Haji Muhammad Ishaq: single card centered on top, well aligned */}
            {EXECUTIVES.filter(e => e.id === 6).map((exec) => (
              <div key={exec.id} className="mb-10 sm:mb-14 md:mb-16">
                <div className="flex justify-center">
                  <Link
                    to={`/team/${exec.id}`}
                    className="group block w-full max-w-xs sm:max-w-sm md:max-w-lg"
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-xl border-b-4 border-gold hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 aspect-[3/4] max-h-[400px] sm:max-h-[420px] md:max-h-[480px] bg-gray-100 mx-auto">
                      <img
                        src={exec.imageUrl}
                        alt={exec.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white">
                        <p className="text-gold text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]">{exec.role}</p>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight">{exec.name}</h3>
                      </div>
                    </div>
                    <p className="text-center text-gray-600 text-xs sm:text-sm mt-3 sm:mt-4 group-hover:text-gold transition-colors">View profile →</p>
                  </Link>
                </div>
              </div>
            ))}

            {/* Chairman & other executives - in a row below (responsive: 1 col mobile, 2 cols tablet, 4 cols desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
              {EXECUTIVES.filter(e => e.id !== 6).map((exec) => (
                <Link
                  key={exec.id}
                  to={`/team/${exec.id}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg border-b-4 border-gold/70 hover:border-gold hover:shadow-xl hover:shadow-gold/15 transition-all duration-300 aspect-[3/4] min-h-[280px] sm:min-h-[320px]">
                    <img
                      src={exec.imageUrl}
                      alt={exec.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 text-white">
                      <p className="text-gold text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">{exec.role}</p>
                      <h3 className="text-base sm:text-lg md:text-xl font-black uppercase tracking-tight line-clamp-2">{exec.name}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-[10px] sm:text-xs mt-2 sm:mt-3 group-hover:text-gold transition-colors text-center sm:text-left">View profile →</p>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10 sm:mt-12">
              <Link
                to="/team"
                className="inline-block bg-gold hover:bg-black text-black hover:text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm transition-all shadow-lg rounded"
              >
                View Full Leadership Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-14 sm:py-20 md:py-28 bg-white text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
            Explore our complete vision, core values, and brand promise in our dedicated section.
          </p>
          <Link
            to="/vision"
            className="inline-block bg-gold hover:bg-black text-black hover:text-white px-10 py-4 font-black uppercase tracking-[0.3em] text-sm transition-all shadow-lg rounded"
          >
            View Vision & Values
          </Link>

          {/* Social Media Links */}
          <div className="mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-gray-200">
            <p className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-6 sm:mb-8">Connect With Us</p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white hover:bg-gold p-3 sm:p-3.5 border border-gold rounded transition-all" title="Facebook">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white hover:bg-gold p-3 sm:p-3.5 border border-gold rounded transition-all" title="Instagram">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href={COMPANY_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white hover:bg-gold p-3 sm:p-3.5 border border-gold rounded transition-all" title="LinkedIn">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a href={COMPANY_INFO.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white hover:bg-gold p-3 sm:p-3.5 border border-gold rounded transition-all" title="X (Twitter)">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.808l-8.331 9.518L24 21.75h-7.593l-5.447-7.132-6.234 7.132h-3.81l8.973-10.251L0 2.25h7.593l4.915 6.483L17.293 2.25h.951zm-1.524 19.5h2.094L5.323 5.402H3.11l13.609 16.348z" />
                </svg>
              </a>
              <a href={COMPANY_INFO.social.youtube} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white hover:bg-gold p-3 sm:p-3.5 border border-gold rounded transition-all" title="YouTube">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a href={COMPANY_INFO.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white hover:bg-gold p-3 sm:p-3.5 border border-gold rounded transition-all" title="WhatsApp">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Journey */}
      <section className="py-14 sm:py-20 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-14 md:mb-16">
              <span className="text-gold text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.6em] block mb-4 sm:mb-6">Our Growth</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black uppercase tracking-tight mb-4 sm:mb-6 leading-tight">
                From Heritage to <span className="text-gold">Innovation</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg px-2 sm:px-0">Our expansion journey across Lahore's most prestigious locations</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Old City */}
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border-l-4 border-gold hover:shadow-xl transition-shadow">
                <div className="text-3xl font-black text-gold mb-4">▣</div>
                <h3 className="text-2xl font-black text-black uppercase tracking-tight mb-3">
                  Historic Origins
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Azam Cloth Market (Old City) — Where our 27-year legacy began, setting foundations for excellence.
                </p>
              </div>

              {/* Pine Avenue Road */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-gold hover:shadow-xl transition-shadow">
                <div className="text-3xl font-black text-gold mb-4">▣</div>
                <h3 className="text-2xl font-black text-black uppercase tracking-tight mb-3">
                  Modern Corridors
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Pine Avenue Road — Expanding into prime modern commercial spaces with world-class developments.
                </p>
              </div>

              {/* Ittehad Town */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-gold hover:shadow-xl transition-shadow">
                <div className="text-3xl font-black text-gold mb-4">▣</div>
                <h3 className="text-2xl font-black text-black uppercase tracking-tight mb-3">
                  Future Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ittehad Town — Creating planned residential communities that redefine luxury living standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shariah Compliance Highlight */}
      <section className="py-14 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-r from-black to-black text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 bg-gold/20 rounded-full border border-gold/40">
              <span className="text-gold text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em]">Islamic Principles</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-6 sm:mb-8 leading-tight">
              Shariah-Compliant <span className="text-gold">Development</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
              UK Developers operates under <span className="font-black">Islamic Shariah-compliant principles with No Riba</span>. We believe in ethical development, transparent transactions, and building community wealth through legitimate enterprise—honoring both financial success and moral responsibility.
            </p>
            <div className="mt-12">
              <Link
                to="/shariah"
                className="inline-block bg-gold text-black px-10 py-4 font-black uppercase tracking-[0.3em] text-sm hover:bg-white transition-all shadow-lg rounded"
              >
                Learn More About Our Shariah Compliance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 sm:py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black uppercase tracking-tight mb-6 sm:mb-8">
            Experience Our <span className="text-gold">Legacy</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0">
            Explore our portfolio of 17 landmark projects and discover why thousands of families choose UK Developers.
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

export default About;
