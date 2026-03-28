
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
      name: "Ahmad Malik",
      role: "CEO, TechSphere Pakistan",
      text: "The Imperial Corporate Plaza is exactly what our multinational clients expect. UK Developers delivered on their promise of sophistication and tech-readiness.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Saira Khan",
      role: "Homeowner, DHA Phase 6",
      text: "Building our family home was a seamless experience. Their attention to detail in finishing is something you rarely find in Lahore's market today.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-24 md:py-32 relative font-sans overflow-hidden" id="testimonials-section">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 sm:gap-16 md:gap-24 items-start">
          <div
            style={{
              animation: isVisible ? 'fadeIn 0.8s ease-out forwards' : 'none',
              opacity: isVisible ? 1 : 0,
            }}
            className="space-y-6"
          >
            <span className="text-gold uppercase tracking-[0.4em] text-[10px] sm:text-xs font-black block">Client Success Stories</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tight leading-tight">What Our Clients Say</h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              Over 27 years, we've earned the trust of hundreds of clients through quality craftsmanship, timely delivery, and transparent dealings. Their stories reflect the premium experience we deliver on every project.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full bg-black px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-white">Trusted in Lahore</span>
              <span className="inline-flex items-center rounded-full bg-white border border-gray-200 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-gray-700">27+ years experience</span>
            </div>
          </div>

          <div className="space-y-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="rounded-[32px] bg-white p-6 sm:p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
                style={{
                  animation: isVisible ? `fadeInUp 0.8s ease-out ${idx * 150}ms forwards` : 'none',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.image} alt={t.name} className="h-16 w-16 rounded-full object-cover border-2 border-gold" />
                  <div>
                    <h3 className="text-xl font-bold text-black">{t.name}</h3>
                    <p className="text-xs uppercase tracking-[0.35em] text-gold font-black">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">“{t.text}”</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
