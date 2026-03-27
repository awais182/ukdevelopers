
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../../COMPANY_INFO';
import './Footer.css';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: COMPANY_INFO.social.facebook,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: COMPANY_INFO.social.instagram,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: COMPANY_INFO.social.linkedin,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      ),
    },
    {
      name: 'X (Twitter)',
      url: COMPANY_INFO.social.twitter,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.808l-8.331 9.518L24 21.75h-7.593l-5.447-7.132-6.234 7.132h-3.81l8.973-10.251L0 2.25h7.593l4.915 6.483L17.293 2.25h.951zm-1.524 19.5h2.094L5.323 5.402H3.11l13.609 16.348z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      url: COMPANY_INFO.social.whatsapp,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      url: COMPANY_INFO.social.youtube,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      url: COMPANY_INFO.social.tiktok,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16.546 5.011c-.374-.207-.78-.346-1.206-.405-.428-.061-.855-.031-1.18.09.007.333.007 1.555.007 1.889 0 2.415 0 5.404 3.29 5.404.03 0 .059 0 .089-.001v3.228c-.292.04-.586.063-.879.071-2.002.058-3.31-1.234-3.652-1.606-.62-.696-1.104-1.734-1.255-2.85-.252-2.056.152-4.117 1.121-5.8.968-1.687 2.495-2.904 4.18-3.51z" />
        </svg>
      ),
    }
  ];

  return (
    <footer className="bg-corporate-dark border-t border-gold/20 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 font-sans">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-14 md:gap-16 mb-12 sm:mb-16 md:mb-20">
          <div className="col-span-1 md:col-span-2 group">
            <div className="flex items-center space-x-3 mb-8 animate-in slide-in-from-left">
              <img src="/assets/logos_and_other_images/navlogo.png" alt="UK Developers" className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300" />
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl tracking-tighter uppercase group-hover:text-gold transition-colors duration-300">Developers</span>
                <span className="text-gold text-[8px] tracking-[0.25em] font-bold uppercase italic">Developing more than expectations</span>
              </div>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 sm:mb-10 leading-relaxed text-xs sm:text-sm hover:text-gray-200 transition-colors duration-300">
              With a 27-year legacy rooted in heritage, UK Developers is Lahore's premier real estate developer. Specializing in luxury residential and high-end commercial spaces, guided by Islamic Shariah-compliant principles.
            </p>
         
            
            {/* Social Media Section */}
            <div className="flex flex-col space-y-4">
              <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em]">Follow our journey</span>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, idx) => (
                  <a 
                    key={social.name} 
                    href={social.url} 
                    aria-label={social.name}
                    className="w-12 h-12 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-white hover:border-gold hover:shadow-lg hover:shadow-gold/50 transition-all duration-300 transform hover:scale-110 social-link"
                    data-index={idx}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-in slide-in-from-top delay-200">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-xs mb-8 flex items-center group">
              <span className="w-6 h-[2px] bg-gold mr-3 group-hover:w-10 transition-all duration-300"></span>
              Navigation
            </h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Projects', 'Services', 'Shariah', 'Contact'].map((item, idx) => (
                <li key={item} className={`nav-item delay-${300 + idx * 60}`}>
                  <Link to={`/${item === 'Home' ? '' : item.toLowerCase()}`} className="text-gray-400 hover:text-gold hover:translate-x-2 transition-all text-xs font-bold uppercase tracking-widest duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-in slide-in-from-right delay-400">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-xs mb-8 flex items-center group">
              <span className="w-6 h-[2px] bg-gold mr-3 group-hover:w-10 transition-all duration-300"></span>
              Contact
            </h4>
            <ul className="space-y-6 text-xs text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
              <li className="flex items-start space-x-4 hover:text-gold transition-colors cursor-pointer duration-300 group">
                <span className="text-gold text-lg group-hover:scale-125 transition-transform">📍</span>
                <a 
                  href={COMPANY_INFO.office.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline normal-case"
                >
                  CS-12, Falcon, Downtown, Fazaia Housing scheme, Phase-1, Block H, Raiwind Road, Lahore, Pakistan
                </a>
              </li>
              {/* coordinates removed per design: only show address (links open Google Maps) */}
              <li className="flex items-start space-x-4 hover:text-gold transition-colors cursor-pointer duration-300 group">
                <span className="text-gold text-lg group-hover:scale-125 transition-transform">📞</span>
                <a 
                  href={`tel:${COMPANY_INFO.contact.phone.replace(/\s/g, '')}`}
                  className="hover:underline"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
              </li>
              <li className="flex items-start space-x-4 hover:text-gold transition-colors cursor-pointer duration-300 group">
                <span className="text-gold text-lg group-hover:scale-125 transition-transform">✉️</span>
                <a 
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="lowercase hover:underline"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 sm:pt-10 flex flex-col md:flex-row items-center justify-center md:justify-between text-gray-500 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.4em] animate-in fade-in text-center md:text-left footer-bottom delay-600">
          <p className="hover:text-gold transition-colors duration-300">© 2024 UK Developers. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 sm:mt-6 md:mt-0">
            <a href="#" className="hover:text-gold hover:underline transition-all duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-gold hover:underline transition-all duration-300">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
