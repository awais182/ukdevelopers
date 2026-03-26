
import React, { useState, useEffect } from 'react';

const Testimonials: React.FC = () => {
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

    const element = document.getElementById('testimonials-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const testimonials = [
    {
      name: "Ahmed Malik",
      role: "CEO, TechSphere Pakistan",
      text: "The Imperial Corporate Plaza is exactly what our multinational clients expect. UK Developers delivered on their promise of sophistication and tech-readiness.",
      image: "https://picsum.photos/id/64/100/100"
    },
    {
      name: "Saira Khan",
      role: "Homeowner, DHA Phase 6",
      text: "Building our family home was a seamless experience. Their attention to detail in finishing is something you rarely find in Lahore's market today.",
      image: "https://picsum.photos/id/65/100/100"
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-24 md:py-32 relative font-sans overflow-hidden" id="testimonials-section">
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .testimonial-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .testimonial-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, transparent 100%);
          border-radius: 4px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .testimonial-card:hover::before {
          opacity: 1;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(212, 175, 55, 0.15);
        }

        .testimonial-quote {
          position: relative;
          z-index: 1;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
        }

        .testimonial-card:hover .testimonial-author {
          transform: translateX(4px);
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
          <div style={{
            animation: isVisible ? 'slideInLeft 0.8s ease-out' : 'none',
            opacity: isVisible ? 1 : 0,
          }}>
            <span className="text-gold uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold block mb-3 sm:mb-4 inline-block">Client Success Stories</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-6 sm:mb-8 uppercase tracking-tight">What Clients Say</h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 font-medium hover:text-gray-800 transition-colors duration-300">
              Over 27 years, we've earned the trust of hundreds of clients through quality craftsmanship, timely delivery, and transparent dealings. Their stories inspire our continued excellence.
            </p>
            <div className="flex space-x-3">
              <button className="w-14 h-14 border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-white hover:shadow-lg hover:shadow-gold/50 transition-all font-bold hover:scale-105">←</button>
              <button className="w-14 h-14 border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-white hover:shadow-lg hover:shadow-gold/50 transition-all font-bold hover:scale-105">→</button>
            </div>
          </div>
          
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 sm:p-8 md:p-12 border-l-8 border-gold relative shadow-sm hover:shadow-xl transition-all testimonial-card"
                style={{
                  animation: isVisible ? `slideInRight 0.8s ease-out ${idx * 150}ms forwards` : 'none',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <div className="absolute top-4 right-10 text-gray-100 text-8xl font-black select-none">"</div>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 relative z-10 leading-relaxed font-medium testimonial-quote">"{t.text}"</p>
                <div className="testimonial-author">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-2 border-gold shadow-md hover:scale-110 transition-transform" />
                  <div>
                    <h5 className="text-black font-bold uppercase tracking-tight text-lg group-hover:text-gold transition-colors">{t.name}</h5>
                    <p className="text-gold text-[10px] uppercase tracking-[0.3em] font-black">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-100/5 rounded-full filter blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Testimonials;
