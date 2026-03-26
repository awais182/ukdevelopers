import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../../COMPANY_INFO';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [buttonPulse, setButtonPulse] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      if (scrolled && !isScrolled) {
        setButtonPulse(true);
        setTimeout(() => setButtonPulse(false), 800);
      }
      setIsScrolled(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const navLinks = [
    { name: 'Projects', path: '/projects' },
    { name: 'Payment Plans', path: '/payment-plans' },
    { name: 'Shariah', path: '/shariah' },
    { name: 'Coordinates', path: '/coordinates' },
    { name: 'Contact', path: '/contact' },
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Vision & Values', path: '/vision' },
    { name: 'Services', path: '/services' },
  ];

  const isHome = location.pathname === '/';

  return (
    <>
      {/* Top Bar - Contact Info */}
      {showTopBar && (
        <div className="fixed top-0 left-0 w-full z-50 bg-black/95 text-white font-sans border-b border-gold/10 backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-6">
            {/* Compact Layout */}
            <div className="flex items-center justify-between py-1.5 md:py-2 gap-2">
              {/* Mobile: Phone & Email with icons and text */}
              <div className="flex items-center gap-2 sm:gap-4 text-[7px] sm:text-[8px] md:text-[9px] font-semibold uppercase tracking-tight flex-1">
                <a 
                  href={`tel:${COMPANY_INFO.contact.phone.replace(/\s/g, '')}`}
                  className="text-gold/90 hover:text-white transition-colors duration-200 group flex items-center gap-0.5 sm:gap-1 whitespace-nowrap"
                  title="Click to call"
                >
                  <span className="group-hover:scale-110 transition-transform">📱</span>
                  <span>{COMPANY_INFO.contact.phone}</span>
                </a>
                <span className="hidden sm:inline text-gold/20">•</span>
                <a 
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="text-gold/90 hover:text-white transition-colors duration-200 group flex items-center gap-0.5 sm:gap-1 line-clamp-1"
                  title="Click to email"
                >
                  <span className="group-hover:scale-110 transition-transform">✉️</span>
                  <span className="line-clamp-1">{COMPANY_INFO.contact.email}</span>
                </a>
              </div>

              {/* Desktop: Address (link to Google Maps) */}
              <a
                href={COMPANY_INFO.office.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-1 text-[8px] text-gold/90 hover:text-white transition-colors duration-200 font-semibold uppercase tracking-tight group flex-shrink-0"
                title="Open office address on Google Maps"
              >
                <span className="group-hover:scale-110 transition-transform">📍</span>
                <span className="line-clamp-1">{COMPANY_INFO.office.fullAddress}</span>
              </a>

              {/* Right: Close Button */}
              <button
                onClick={() => setShowTopBar(false)}
                className="flex items-center justify-center w-4 h-4 text-gold/70 hover:text-gold transition-colors duration-200 flex-shrink-0 ml-auto md:ml-2"
                title="Close topbar"
                aria-label="Close notification bar"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className={`fixed left-0 right-0 w-full transition-all duration-500 ${showTopBar ? 'top-11 sm:top-12 md:top-11' : 'top-0'} z-40 ${isScrolled ? 'bg-white/95 py-3 md:py-3 shadow-lg border-b border-gold/20 animate-fade-in' : isHome ? 'bg-transparent py-3 md:py-4' : 'bg-white py-3 md:py-4 shadow-sm border-b border-gray-100'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group flex-shrink-0 hover:scale-105 transition-transform duration-300">
            <img src="/assets/logos_and_other_images/navlogo.png" alt="UK Developers" className="w-9 md:w-12 h-9 md:h-12 object-contain" />
            <div className="flex flex-col hidden sm:flex">
              <span className={`font-black text-base md:text-xl tracking-tighter leading-tight transition-colors duration-300 ${!isScrolled && isHome ? 'text-white group-hover:text-gold' : 'text-black group-hover:text-gold'}`}>DEVELOPERS</span>
              <span className="text-gold text-[6px] md:text-[7px] tracking-[0.2em] font-bold uppercase italic">Developing more than expectations</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 flex-wrap justify-center">
            {/* Home Link */}
            <Link
              to="/"
              className={`text-[9px] lg:text-[10px] xl:text-[11px] font-black tracking-[0.2em] uppercase transition-all hover:text-gold relative group whitespace-nowrap ${
                location.pathname === '/' ? 'text-gold' : (!isScrolled && isHome ? 'text-white' : 'text-black')
              }`}
            >
              Home
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-gold transition-all duration-300 ${location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            {/* Company Dropdown */}
            <div className="relative group">
              <button
                className={`text-[9px] lg:text-[10px] xl:text-[11px] font-black tracking-[0.2em] uppercase transition-all hover:text-gold relative flex items-center gap-1 pb-0.5 whitespace-nowrap ${
                  companyLinks.some(link => location.pathname === link.path) ? 'text-gold' : (!isScrolled && isHome ? 'text-white' : 'text-black')
                }`}
              >
                Company
                <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-sm overflow-hidden border border-gold/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-max">
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 lg:px-5 xl:px-6 py-2 lg:py-2.5 xl:py-3 text-[9px] lg:text-[9.5px] xl:text-[10px] font-black tracking-[0.2em] uppercase transition-all border-b border-gold/10 last:border-b-0 hover:bg-gold/95 hover:text-black whitespace-nowrap ${
                      location.pathname === link.path ? 'bg-gold text-black' : 'text-black'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[9px] lg:text-[10px] xl:text-[11px] font-black tracking-[0.2em] uppercase transition-all hover:text-gold relative group whitespace-nowrap ${
                  location.pathname === link.path ? 'text-gold' : (!isScrolled && isHome ? 'text-white' : 'text-black')
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-gold transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}

            <Link to="/contact" className={`bg-gold hover:bg-black hover:shadow-lg hover:shadow-gold/50 text-white px-4 lg:px-6 xl:px-7 py-2 lg:py-2.5 xl:py-3 text-[8px] lg:text-[9px] xl:text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-xl whitespace-nowrap ${buttonPulse ? 'animate-ping' : ''}`}>
              Inquire Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button type="button" aria-label="Toggle menu" className={`${!isScrolled && isHome ? 'text-white' : 'text-black'} md:hidden transition-colors`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gold/20 absolute w-full left-0 shadow-2xl overflow-y-auto max-h-[90vh] animate-in slide-in-from-top">
            <div className="flex flex-col space-y-0 p-4 sm:p-6">
              {/* Mobile Home */}
              <Link
                to="/"
                className="text-black text-base sm:text-lg font-black uppercase tracking-[0.2em] hover:text-gold hover:bg-gold/5 transition-all px-3 py-3 sm:py-4 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Company Dropdown */}
              <div>
                <button
                  className="text-black text-base sm:text-lg font-black uppercase tracking-[0.2em] hover:text-gold hover:bg-gold/5 transition-all px-3 py-3 sm:py-4 border-b border-gray-100 w-full text-left flex items-center justify-between"
                  onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
                >
                  Company
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isCompanyDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isCompanyDropdownOpen && (
                  <div className="bg-gray-50 border-b border-gray-100">
                    {companyLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="text-black text-sm sm:text-base font-black uppercase tracking-[0.15em] hover:text-gold hover:bg-gold/5 transition-all px-6 sm:px-8 py-2.5 sm:py-3 border-b border-gray-100 last:border-b-0 block"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsCompanyDropdownOpen(false);
                        }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Other Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-black text-base sm:text-lg font-black uppercase tracking-[0.2em] hover:text-gold hover:bg-gold/5 transition-all px-3 py-3 sm:py-4 border-b border-gray-100 last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <Link 
                to="/contact" 
                className="bg-gold text-white text-center font-black uppercase tracking-[0.2em] text-sm sm:text-base py-4 sm:py-5 hover:bg-black transition-all mt-4 sm:mt-6"
                onClick={() => setIsMenuOpen(false)}
              >
                Inquire Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
