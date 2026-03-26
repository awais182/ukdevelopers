
import React, { useState, useEffect } from 'react';

const Stats: React.FC = () => {
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

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const stats = [
    { value: '27+', label: 'Years Experience' },
    { value: '11+', label: 'Delivered Projects' },
    { value: '250+', label: 'Happy Clients' },
    { value: '100+', label: 'Sq. Ft. Built' },
  ];

  const getRandomSide = (index: number) => {
    const sides = ['top', 'bottom', 'left', 'right'];
    return sides[index % 4];
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-24 border-b border-gray-100 font-sans relative overflow-hidden" id="stats-section">
      <style>{`
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

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes countUp {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .stat-card {
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, transparent 100%);
          border-radius: 8px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .stat-card:hover::before {
          opacity: 1;
        }

        .stat-card:hover {
          transform: translateY(-8px);
        }

        .stat-value {
          position: relative;
          z-index: 1;
        }

        .stat-line {
          position: relative;
          z-index: 1;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
          transition: all 0.3s ease;
        }

        .stat-card:hover .stat-line {
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.6);
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group cursor-default stat-card"
              style={{
                animation: isVisible ? `slideInFrom${getRandomSide(index) === 'top' ? 'Top' : getRandomSide(index) === 'bottom' ? 'Bottom' : getRandomSide(index) === 'left' ? 'Left' : 'Right'} 0.8s ease-out ${index * 150}ms forwards` : 'none',
                opacity: isVisible ? 1 : 0,
              }}
            >
              <div className="stat-value">
                <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-gold mb-2 group-hover:scale-110 transition-transform tracking-tighter">
                  {stat.value}
                </h3>
              </div>
              <div className="w-10 h-[2px] bg-gold/50 mx-auto mb-3 stat-line"></div>
              <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] font-black group-hover:text-gold transition-colors duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/5 rounded-full filter blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Stats;
