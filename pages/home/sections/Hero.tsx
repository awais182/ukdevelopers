import React, { useState, useEffect, useMemo, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_BRIEF } from '../../../COMPANY_INFO';
import { PROJECTS } from '../../../constants';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<number>(1);

  // Get available projects
  const availableProjects = useMemo(() => {
    return PROJECTS.filter(p => p.status !== 'Upcoming');
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxTranslate = scrollY * 0.4;

  // Get the selected project data
  const selectedProject = useMemo(() => {
    return availableProjects.find(p => p.id === selectedProjectId) || availableProjects[0];
  }, [selectedProjectId, availableProjects]);

  return (
    <section className={`relative w-full pt-[80px] sm:pt-[90px] md:pt-[100px] pb-0 overflow-hidden bg-black font-sans ${styles.heroSection}`}>

      {/* Background Image - Full Screen Behind Navbar */}
      <div 
        className={`absolute inset-0 w-full h-full ${styles.heroBgImage}`}
        style={{ 
          backgroundImage: `url(${selectedProject?.imageUrl || ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translate3d(0, ${parallaxTranslate}px, 0)`,
        }}
      >
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Overlay Gradients - Subtle Enhancement */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/40 z-8"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-8"></div>
      
      {/* Upper Content Section - Top Half */}
      <div className="relative z-20 w-full pt-12 md:pt-16 lg:pt-24 pb-12 md:pb-16">
        <div className="container mx-auto px-4 sm:px-5 md:px-6 w-full max-w-7xl flex flex-col items-center space-y-8 md:space-y-12">
          
          {/* Heritage Label */}
          <div className={`flex items-center space-x-3 md:space-x-4 ${isLoaded ? styles.animateSlideDown : 'opacity-0'} ${styles.heritageLabel}`}>
            <div className="h-[2px] w-12 md:w-16 bg-gradient-to-r from-gold to-gold/40"></div>
            <span className="text-gold uppercase tracking-[0.4em] md:tracking-[0.6em] text-[8px] md:text-[9px] font-black whitespace-nowrap">27 Years of Legacy & Excellence</span>
            <div className="h-[2px] w-12 md:w-16 bg-gradient-to-l from-gold to-gold/40"></div>
          </div>

          {/* Main Headline - Centered */}
          <div>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight text-center tracking-tighter ${isLoaded ? styles.animateFadeInScale : 'opacity-0'} ${styles.mainHeadline}`}>
              <span className="block text-white">Building</span>
              <span className="block">Legacies</span>
              <span className="block mt-4"><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-300 to-gold tracking-tight">In Lahore</span></span>
            </h1>
          </div>

          {/* Tagline & Description */}
          <div className="max-w-2xl space-y-5 md:space-y-6">
            <p className={`text-sm md:text-base lg:text-lg text-gray-50 text-center leading-relaxed font-medium ${isLoaded ? styles.animateSlideUp : 'opacity-0'} ${styles.tagline}`}>
              <span className="font-bold text-gold">Pioneer of Modern High-Rise Construction</span> in heritage commercial zones. Now setting benchmarks in quality, delivery, and integrity.
            </p>

            <p className={`text-sm md:text-base text-gray-100 text-center leading-relaxed font-light ${isLoaded ? styles.animateSlideUp : 'opacity-0'} ${styles.taglineSecondary}`}>
              Driven by Islamic Shariah-compliant principles with ethical development, transparent transactions, and future-ready architecture.
            </p>
          </div>

          {/* Stats/Badges - Premium Design */}
          <div className={`flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 ${isLoaded ? styles.animateSlideUp : 'opacity-0'} ${styles.badges}`}>
            <div className="flex items-center gap-2.5 px-5 py-2.5 border border-gold/30 rounded-full hover:border-gold/50 transition-colors">
              <div className="w-1.5 h-1.5 bg-gold/80 rounded-full"></div>
              <span className="text-white text-xs md:text-sm font-semibold uppercase tracking-wider">11+ Projects Delivered</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gradient-to-b from-gold/0 via-gold/30 to-gold/0"></div>
            <div className="flex items-center gap-2.5 px-5 py-2.5 border border-gold/30 rounded-full hover:border-gold/50 transition-colors">
              <div className="w-1.5 h-1.5 bg-gold/80 rounded-full"></div>
              <span className="text-white text-xs md:text-sm font-semibold uppercase tracking-wider">Shariah Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Content Section - Bottom Half with Form */}
      <div className="relative z-20 w-full py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-5 md:px-6 w-full max-w-4xl">
          
          {/* Form Card - Professional Design */}
          <div className={`${isLoaded ? styles.animateSlideUp : 'opacity-0'} ${styles.formCard}`}>
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border-2 border-white/20 hover:border-gold/40 transition-all duration-300">
              
              {/* Card Header - Premium */}
              <div className="bg-gradient-to-r from-gold/95 via-gold to-gold/95 px-6 md:px-8 py-6 md:py-7">
                <h2 className="text-black/90 font-bold text-sm md:text-base uppercase tracking-[0.15em] letter-spacing-tight">Browse Premium Projects</h2>
                <p className="text-black/70 text-[11px] md:text-xs mt-2 font-medium tracking-wide">Discover extraordinary developments across Lahore</p>
              </div>

              {/* Card Body - Premium Spacing */}
              <div className="p-6 md:p-8 space-y-6 md:space-y-8">
                
                {/* Selection Controls */}
                <div className="space-y-4">
                  {/* Project Dropdown - Refined */}
                  <div className="relative">
                    <label className="block text-xs text-gray-700 font-bold uppercase tracking-wider mb-3" htmlFor="hero-project">
                      <span className="inline-block w-1.5 h-1.5 bg-gold/70 rounded-full mr-2.5 align-middle"></span>
                      Select Project
                    </label>
                    <select
                      id="hero-project"
                      title="Select a project"
                      aria-label="Select a project"
                      value={selectedProjectId}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedProjectId(Number(e.target.value))}
                      className="w-full px-4 py-3.5 md:py-4 border-1.5 border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-gold focus:ring-0 appearance-none bg-white cursor-pointer hover:border-gray-400 transition-all font-medium"
                    >
                      {availableProjects.map((project: any) => (
                        <option key={project.id} value={project.id}>
                          {project.shortName} • {project.location}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-[3.25rem] text-gold/60">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>

                  {/* View Details Button - Premium */}
                  <Link 
                    to={`/projects/${selectedProjectId}`}
                    className="inline-flex w-full items-center justify-center gap-2.5 bg-gradient-to-r from-gold to-yellow-400 hover:from-gold hover:to-yellow-500 text-black px-6 py-3.5 md:py-4 font-bold uppercase tracking-[0.1em] text-xs md:text-sm transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl text-center no-underline"
                  >
                    <span>View Project Details</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>

                {/* Divider - Subtle */}
                <div className="border-t border-gray-200 opacity-50"></div>

                {/* Project Information Grid - Premium */}
                {selectedProject && (
                  <div className="space-y-3">
                    <p className="text-xs text-gray-600 font-bold uppercase tracking-widest letter-spacing-wide">Key Information</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {/* Status */}
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 hover:border-gray-200 transition-colors">
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2">Status</p>
                        <p className={`text-xs font-bold uppercase ${selectedProject.status === 'Delivered' ? 'text-gray-900' : 'text-gold/80'}`}>
                          {selectedProject.status === 'Under Construction' ? 'Ongoing' : selectedProject.status}
                        </p>
                      </div>

                      {/* Category */}
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 hover:border-gray-200 transition-colors">
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2">Type</p>
                        <p className="text-xs font-bold uppercase text-gray-900">{selectedProject.category}</p>
                      </div>

                      {/* Units */}
                      <div className="bg-gold/5 rounded-lg p-4 border border-gold/15 hover:border-gold/25 transition-colors">
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2">Units</p>
                        <p className="text-xs font-bold uppercase text-gold/90">{selectedProject.units}</p>
                      </div>

                      {/* Year */}
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 hover:border-gray-200 transition-colors">
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2">Completed</p>
                        <p className="text-xs font-bold uppercase text-gray-900">{selectedProject.completionYear}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Premium */}
      <div className={`absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center ${isLoaded ? styles.animateFloatIn : 'opacity-0'} ${styles.scrollIndicator}`}>
        <span className="text-white/50 text-[8px] md:text-[9px] uppercase tracking-[0.3em] mb-3 md:mb-4 font-bold">Scroll to Explore</span>
        <div className="space-y-2">
          <div className="w-px h-6 md:h-8 bg-gradient-to-b from-gold/60 via-gold/30 to-transparent mx-auto"></div>
          <div className={`w-px h-6 md:h-8 bg-gradient-to-b from-gold/40 via-gold/20 to-transparent mx-auto animate-bounce ${styles.scrollIndicatorBounce}`}></div>
        </div>
      </div>

      {/* Decorative Accents - Premium Minimal */}
      <div className="absolute top-24 left-6 md:left-12 w-16 h-16 border-l-2 border-t-2 border-gold/20 z-20 hidden md:block"></div>
      <div className="absolute bottom-20 right-6 md:right-12 w-16 h-16 border-r-2 border-b-2 border-gold/20 z-20 hidden md:block"></div>
    </section>
  );
};

export default Hero;
