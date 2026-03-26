
import React, { useState, useEffect } from 'react';
import { SERVICES } from '../../constants';
import SEO from '../../components/common/SEO';

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('services-grid');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const getRandomSide = (index: number) => {
    const sides = ['Top', 'Bottom', 'Left', 'Right'];
    return sides[index % 4];
  };

  // SVG Line Icons for services
  const IconBuilding = () => (
    <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );

  const IconConstruction = () => (
    <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
  );

  const IconDesign = () => (
    <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  );

  const IconTimeline = () => (
    <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const getServiceIcon = (iconId: string) => {
    switch (iconId) {
      case 'building':
        return <IconBuilding />;
      case 'construction':
        return <IconConstruction />;
      case 'design':
        return <IconDesign />;
      case 'timeline':
        return <IconTimeline />;
      default:
        return <IconBuilding />;
    }
  };

  return (
    <div className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 animate-fade-in bg-white font-sans overflow-hidden">
      <style>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes itemBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        .service-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, transparent 100%);
          border-radius: 4px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .service-card:hover {
          border-color: rgb(212, 175, 55);
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(212, 175, 55, 0.15);
        }

        .service-icon {
          display: inline-block;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover .service-icon {
          animation: itemBounce 0.6s ease-in-out;
          transform: scale(1.1);
        }

        .service-line {
          transition: all 0.3s ease;
        }

        .service-card:hover .service-line {
          width: 100%;
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.6);
        }
      `}</style>

      <SEO 
        title="Our Services | Architecture & Construction Experts"
        description="From premium construction and structural engineering to bespoke interior design, UK Developers offers comprehensive real estate solutions in Lahore."
        keywords="Construction Services Lahore, Interior Design Gulberg, Architecture Firms Pakistan, Real Estate Management"
      />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 mb-16 sm:mb-24 md:mb-32 items-center">
          <div style={{
            animation: 'slideInFromLeft 0.8s ease-out',
          }}>
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4">Our Expertise</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 sm:mb-8 uppercase tracking-tighter">Unmatched Capability</h1>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 font-normal">
              We offer a comprehensive suite of development services, ensuring world-class standards at every stage of the construction lifecycle.
            </p>
            <ul className="space-y-6">
              {['Concept Development', 'LDS Approval Handling', 'Structural Engineering', 'Post-Handover Maintenance'].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-4 group" style={{
                  animation: `slideInFromLeft 0.6s ease-out ${0.2 + idx * 80}ms forwards`,
                  opacity: 0,
                }}>
                  <div className="w-8 h-8 border border-gold flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all font-black group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gold/50">
                    ✓
                  </div>
                  <span className="text-black font-bold uppercase tracking-widest text-sm group-hover:text-gold transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative" style={{
            animation: 'slideInFromRight 0.8s ease-out',
          }}>
            <div className="absolute inset-0 border-2 border-gold translate-x-3 translate-y-3 sm:translate-x-6 sm:translate-y-6 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 sm:group-hover:translate-x-8 sm:group-hover:translate-y-8 transition-transform duration-300"></div>
            <img 
              src="/assets/projects_images/UK 06 Bilal Housing Road Scheme.jpg" 
              alt="Construction Planning"
              className="w-full h-auto shadow-2xl transition-all duration-1000 hover:shadow-2xl hover:shadow-gold/20"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" id="services-grid">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className="p-6 sm:p-8 md:p-12 bg-gray-50 border border-gray-100 hover:border-gold transition-all group hover:shadow-lg service-card"
              style={{
                animation: isVisible ? `slideInFrom${getRandomSide(idx)} 0.6s ease-out ${idx * 100}ms forwards` : 'none',
                opacity: isVisible ? 1 : 0,
              }}
            >
              <div className="text-5xl mb-8 transform group-hover:-translate-y-2 transition-transform service-icon">{getServiceIcon(service.icon)}</div>
              <h3 className="text-3xl font-black text-black mb-4 uppercase tracking-tight group-hover:text-gold transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-8 font-normal group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
              <div className="w-12 h-1 bg-gold transition-all group-hover:w-24 service-line"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
