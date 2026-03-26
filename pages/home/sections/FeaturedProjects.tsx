import React from 'react';
import { PROJECTS } from '../../../constants';
import { Link } from 'react-router-dom';

const FeaturedProjects: React.FC = () => {
  // Featured projects: UK 15 (Ongoing - main), UK 1 (Delivered), UK 3 (Delivered)
  const featured = PROJECTS.filter(p => p.id === 15 || p.id === 1 || p.id === 3).sort((a, b) => {
    if (a.id === 15) return -1;
    if (b.id === 15) return 1;
    return a.id - b.id;
  });

  return (
    <section className="bg-white py-10 sm:py-12 md:py-24 lg:py-32 xl:py-40 border-t border-gray-100 font-sans">
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
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
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        .project-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .project-card:hover {
          transform: translateY(-12px);
        }
        .project-image {
          position: relative;
          overflow: hidden;
        }
        .project-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(212,175,55,0.15) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .project-card:hover .project-image::after {
          opacity: 1;
        }
      `}</style>

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left: Heading */}
            <div className="animate-slide-in-left">
              <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                <div className="h-[2px] w-10 md:w-12 bg-gold"></div>
                <span className="text-gold uppercase tracking-[0.3em] md:tracking-[0.5em] text-[8px] md:text-xs font-black">Our Masterpieces</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase tracking-tighter mb-4 md:mb-6 leading-tight">
                Featured <br className="hidden sm:block" />Projects
              </h2>
              <p className="text-gray-600 text-xs md:text-sm font-light max-w-lg leading-relaxed">
                Discover our latest developments and landmark projects reshaping Lahore's skyline with architectural excellence, innovation, and timeless elegance.
              </p>
            </div>

            {/* Right: CTA */}
            <div className="flex items-center justify-start lg:justify-end animate-slide-in-right">
              <Link 
                to="/projects" 
                className="group inline-flex items-center gap-3 text-gold hover:text-black transition-all duration-300 border-b-2 border-gold/30 hover:border-black pb-3 md:pb-4 text-xs md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.3em]"
              >
                <span>View All 17 Projects</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {featured.map((project, idx) => (
            <Link 
              key={project.id} 
              to={`/projects/${project.id}`} 
              className="project-card group relative overflow-hidden bg-white border border-gray-100 flex flex-col h-full animate-slide-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Project Image Container */}
              <div className="project-image relative aspect-[3/4] overflow-hidden bg-gray-100 flex-shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Status Badge */}
                <div className="absolute top-3 sm:top-4 md:top-6 left-3 sm:left-4 md:left-6 z-10">
                  <span className={`inline-block px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-[6px] sm:text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white shadow-lg transform transition-all duration-300 ${
                    project.status === 'Delivered' 
                      ? 'bg-black/90 backdrop-blur-sm border border-gold/30' 
                      : project.status === 'Under Construction'
                      ? 'bg-gold/95 text-black backdrop-blur-sm border border-gold'
                      : 'bg-gray-700/90 backdrop-blur-sm border border-gold/20'
                  }`}>
                    {project.status === 'Under Construction' ? '● Ongoing' : project.status === 'Delivered' ? '✓ Delivered' : '◐ Upcoming'}
                  </span>
                </div>

                {/* Category Badge - below status on xs, inline from sm */}
                <div className="absolute top-12 sm:top-4 md:top-6 left-3 sm:left-4 md:left-6 z-10 sm:left-24 md:left-48 lg:left-52">
                  <span className={`inline-block px-2 sm:px-2.5 md:px-3.5 py-1 md:py-1.5 text-[6px] sm:text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] text-white shadow-lg transform transition-all duration-300 ${
                    project.category === 'Residential'
                      ? 'bg-gold/85 text-black border border-gold'
                      : 'bg-black/80 border border-gold/40 backdrop-blur-sm'
                  }`}>
                    {project.category}
                  </span>
                </div>

                {/* Project ID Badge */}
                <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 z-10">
                  <span className="inline-block px-2 md:px-3 py-1 md:py-1.5 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] bg-white/95 text-black border border-gray-200 backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-300">
                    UK {project.number}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 md:p-6 lg:p-8 flex flex-col justify-between flex-grow">
                {/* Top Content */}
                <div className="mb-4 md:mb-6">
                  <p className="text-gold text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-2 md:mb-3 block">
                    {project.category} Sector
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-lg lg:text-xl font-black text-black uppercase tracking-tight group-hover:text-gold transition-colors duration-300 line-clamp-2 mb-3 leading-tight">
                    {project.name}
                  </h3>
                  
                  {/* Brief Description */}
                  <p className="text-gray-600 text-xs md:text-sm font-light line-clamp-2 leading-relaxed">
                    {project.detailedDescription.substring(0, 90)}...
                  </p>
                </div>

                {/* Features Preview */}
                <div className="mb-4 md:mb-6 space-y-2">
                  <p className="text-gray-400 text-[8px] md:text-[9px] font-black uppercase tracking-widest">Key Features</p>
                  <div className="space-y-1.5">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-gold text-[10px] flex-shrink-0 mt-0.5">✓</span>
                        <p className="text-gray-700 text-[8px] md:text-[9px] font-semibold uppercase tracking-wider line-clamp-1">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-2 mb-4 md:mb-6 pb-4 md:pb-6 border-b border-gray-100 group-hover:border-gold/20 transition-colors">
                  <svg className="w-3 md:w-4 h-3 md:h-4 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700 text-[8px] md:text-[9px] font-semibold uppercase tracking-widest line-clamp-1">
                    {project.location}
                  </p>
                </div>

                {/* Footer Stats */}
                <div className="grid grid-cols-2 gap-3 md:gap-4 pt-4 md:pt-6 border-t border-gray-100">
                  <div className="space-y-1">
                    <p className="text-gray-400 text-[7px] md:text-[8px] font-black uppercase tracking-widest">Completion</p>
                    <p className="text-black font-black text-xs md:text-sm">{project.completionYear}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-400 text-[7px] md:text-[8px] font-black uppercase tracking-widest">Units</p>
                    <p className="text-black font-black text-xs md:text-sm">{project.units}+</p>
                  </div>
                </div>

                {/* CTA Arrow */}
                <div className="mt-4 md:mt-6 flex justify-end">
                  <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-gold/30 group-hover:border-gold group-hover:bg-gold/10 flex items-center justify-center transition-all duration-300 cursor-pointer">
                    <span className="text-gold text-lg md:text-xl font-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
