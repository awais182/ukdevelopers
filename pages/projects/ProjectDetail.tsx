import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS } from '../../constants';
import SEO from '../../components/common/SEO';

// Add this function to extract room names from filenames
const getInteriorRoomName = (filename: string): string => {
  // Remove file extension and clean up
  const name = filename.replace(/\.[^/.]+$/, '').trim();
  return name;
};

const formatPaymentValue = (value: any): string => {
  if (value === null || value === undefined || value === '') return 'N/A';
  if (typeof value === 'string' || typeof value === 'number') return String(value);
  if (typeof value === 'object') {
    if ('amount' in value && 'percent' in value) {
      return `${value.amount} (${value.percent})`;
    }
    if ('3Marla' in value && '5Marla' in value) {
      return `3 Marla: ${value['3Marla']} | 5 Marla: ${value['5Marla']}`;
    }
    return Object.entries(value).map(([k, v]) => `${k}: ${v}`).join(' | ');
  }
  return String(value);
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === parseInt(id || '0', 10));
  
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeMarlaType, setActiveMarlaType] = useState<'3marla' | '5marla'>('3marla');

  useEffect(() => {
    if (project) {
      setActiveImage(project.image);
    }
  }, [project]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxImage(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  if (!project) return <Navigate to="/projects" replace />;

  if (project.status === 'Upcoming') {
    return (
      <div className="pt-20 sm:pt-24 font-sans bg-white min-h-screen flex items-center justify-center">
        <SEO 
          title={`${project.title} | Coming Soon`}
          description="This project is coming soon"
        />
        <div className="text-center max-w-2xl px-4 sm:px-6 py-20 sm:py-32 md:py-40">
          <div className="mb-6 sm:mb-8 text-6xl sm:text-8xl font-black text-gold">◄</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-black uppercase tracking-tighter mb-4 sm:mb-6">Coming Soon</h1>
          <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
            <span className="px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] bg-gray-800 text-white">UK {project.number}</span>
            <h2 className="text-3xl font-black text-black uppercase">{project.name}</h2>
          </div>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            This exciting new landmark is currently in development. We'll have more information available soon.
          </p>
          <Link to="/projects" className="inline-block bg-gold hover:bg-black text-black hover:text-white px-10 py-5 font-black uppercase tracking-[0.3em] transition-all">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const allGalleryImages = [project.image, ...project.galleryImages];
  const isDelivered = project.status === 'Delivered';
  const isUK15 = project.id === 15;

  // 3 Marla Images with actual filenames
  const marla3Images = {
    elevation: {
      src: '/assets/projects_images/UK15_3_marla homes_images/uk15_3marla_floor_maps/3Marla_Front_elevation.jpg',
      name: '3 Marla Front Elevation'
    },
    floors: [
      { src: '/assets/projects_images/UK15_3_marla homes_images/uk15_3marla_floor_maps/3Marla_ground_floor.jpg', name: 'Ground Floor' },
      { src: '/assets/projects_images/UK15_3_marla homes_images/uk15_3marla_floor_maps/3Marla_first_floor.jpg', name: 'First Floor' },
      { src: '/assets/projects_images/UK15_3_marla homes_images/uk15_3marla_floor_maps/3Marla_ROOFTOP.jpg', name: 'Rooftop Plan' },
    ],
    interiors: [
      { src: '/assets/projects_images/UK15_3_marla homes_images/3 Ground Floor Lounge 1.jpg', name: 'Ground Floor Lounge 1' },
      { src: '/assets/projects_images/UK15_3_marla homes_images/Ground Floor Lounge 2.jpg', name: 'Ground Floor Lounge 2' },
      { src: '/assets/projects_images/UK15_3_marla homes_images/Ground Floor Kitchen.jpg', name: 'Ground Floor Kitchen' },
      { src: '/assets/projects_images/UK15_3_marla homes_images/F Floor Lounge.jpg', name: 'First Floor Lounge' },
      { src: '/assets/projects_images/UK15_3_marla homes_images/F Floor Kitchen.jpg', name: 'First Floor Kitchen' },
      { src: '/assets/projects_images/UK15_3_marla homes_images/F Floor Front Bed.jpg', name: 'First Floor Master Bedroom' },
      { src: '/assets/projects_images/UK15_3_marla homes_images/F Floor Rear Bed 1.jpg', name: 'First Floor Secondary Bedroom' },
      { src: '/assets/projects_images/UK15_3_marla homes_images/2nd Floor Bed.jpg', name: 'Second Floor Bedroom' },
    ]
  };

  // 5 Marla Images
  const marla5Images = {
    elevation: {
      src: '/assets/projects_images/UK15_5_marla homes_images/5marla_frontelevation.jpg',
      name: '5 Marla Front Elevation'
    },
    floors: [
      { src: '/assets/projects_images/UK15_5_marla homes_images/5MARLA_GroundFloor.jpg', name: 'Ground Floor' },
      { src: '/assets/projects_images/UK15_5_marla homes_images/5MARLA FirstFloor.jpg', name: 'First Floor' },
      { src: '/assets/projects_images/UK15_5_marla homes_images/5MARLA ROOFTOP.jpg', name: 'Rooftop Plan' },
    ],
    interiors: [
      { src: '/assets/projects_images/UK15_5_marla homes_images/Interior 5 mARLA/Ground Floor Lounge 1.jpg', name: 'Ground Floor Lounge 1' },
      { src: '/assets/projects_images/UK15_5_marla homes_images/Interior 5 mARLA/Ground Floor Lounge 2.jpg', name: 'Ground Floor Lounge 2' },
      { src: '/assets/projects_images/UK15_5_marla homes_images/Interior 5 mARLA/Ground Floor Kitchen.jpg', name: 'Ground Floor Kitchen' },
      { src: '/assets/projects_images/UK15_5_marla homes_images/Interior 5 mARLA/Ground Floor Bed 1.jpg', name: 'Ground Floor Bedroom 1' },
      { src: '/assets/projects_images/UK15_5_marla homes_images/Interior 5 mARLA/Ground Floor Bed 2.jpg', name: 'Ground Floor Bedroom 2' },
      { src: '/assets/projects_images/UK15_5_marla homes_images/Interior 5 mARLA/Ground Floor Bed Bath.jpg', name: 'Ground Floor Bed Bath' },
      { src: '/assets/projects_images/UK15_5_marla homes_images/Interior 5 mARLA/First Floor Front Bed 1.jpg', name: 'First Floor Master Bedroom' },
      { src: '/assets/projects_images/UK15_5_marla homes_images/Interior 5 mARLA/First Floor Front Bed 2.jpg', name: 'First Floor Front Bedroom 2' },
      { src: '/assets/projects_images/UK15_5_marla homes_images/Interior 5 mARLA/First Floor Kitchen.jpg', name: 'First Floor Kitchen' },
      { src: '/assets/projects_images/UK15_5_marla homes_images/Interior 5 mARLA/First Floor Rear Bed 1.jpg', name: 'First Floor Rear Bedroom' },
    ]
  };

  return (
    <div className="pt-20 sm:pt-24 font-sans bg-white min-h-screen">
      <SEO 
        title={`${project.title} | ${project.category} Project`}
        description={project.description}
        keywords={`${project.title}, Lahore Real Estate, UK Developers ${project.id}`}
      />

      {/* Hero Header */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] md:h-[65vh] flex items-end pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-corporate-black">
        <img 
          src={project.image} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Link to="/projects" className="text-gold text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-6 sm:mb-10 inline-flex items-center hover:text-white transition-all group">
            <span className="mr-3 group-hover:-translate-x-2 transition-transform">←</span> Return to Archive
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6 flex-wrap gap-3">
              <span className={`whitespace-nowrap px-4 sm:px-5 py-2 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] font-black uppercase tracking-[0.3em] text-white shadow-xl border ${
                project.status === 'Delivered' ? 'bg-black border-gold/40' : project.status === 'Under Construction' ? 'bg-gold text-black border-gold' : 'bg-gray-700 border-gold/30'
              }`}>
                {project.status === 'Under Construction' ? '● Ongoing' : project.status === 'Delivered' ? '✓ Delivered' : '◐ Upcoming'}
              </span>
              <span className={`whitespace-nowrap px-4 sm:px-5 py-2 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] font-black uppercase tracking-[0.3em] shadow-xl border ${
                project.category === 'Residential' ? 'bg-gold text-black border-gold' : 'bg-black text-white border-gold/40'
              }`}>
                {project.category}
              </span>
            </div>
            <div className="flex items-center gap-6 mb-6 flex-wrap">
              <span className="px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] bg-white/80 text-black border border-gray-100 shadow-sm">UK {project.number}</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                {project.name}
              </h1>
            </div>
            <p className="text-gold text-lg font-bold tracking-[0.2em] uppercase">
              {project.location}
            </p>
          </div>
        </div>
      </section>

      {/* Content Layout */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 md:gap-20">
            
            {/* Left Column: Narrative & Interactive Gallery */}
            <div className="lg:col-span-8 space-y-16 sm:space-y-24 md:space-y-32">
              <div className="max-w-3xl">
                <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em] block mb-6">Conceptual Vision</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase tracking-tight mb-10 leading-tight">
                  Architectural <br/>Integrity
                </h2>
                <div className="space-y-10 text-gray-500 text-lg leading-relaxed font-normal">
                  <p className="border-l-4 border-gold pl-8 italic text-black font-medium text-xl">
                    {project.description}
                  </p>
                  <p>
                    {project.detailedDescription}
                  </p>
                </div>
              </div>

              {/* Project Specifications */}
              <section className="space-y-6 bg-gradient-to-b from-white to-gold/5 p-5 sm:p-6 md:p-8 lg:p-10 rounded-3xl border border-gold/20 shadow-xl">
                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-gold text-[10px] uppercase tracking-[0.35em] font-black pb-1">Project Specifications</p>
                    <h3 className="text-black font-black uppercase tracking-tight leading-tight text-[clamp(1.2rem,2.5vw,1.8rem)] max-w-3xl">Key metrics that matter</h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                  {project.units && (
                    <article className="h-full flex flex-col justify-between border border-gold/30 rounded-2xl p-2 bg-white shadow-sm transition-all hover:shadow-md">
                      <div>
                        <h4 className="text-gray-400 uppercase tracking-[0.35em] text-[0.55rem]">Total Units</h4>
                        <p className="mt-1 text-[clamp(1.2rem,1.8vw,1.5rem)] font-black text-black leading-none">{project.units}</p>
                      </div>
                      <small className="text-gray-500 uppercase tracking-[0.2em] text-[0.6rem]">Individual spaces</small>
                    </article>
                  )}

                  {project.floors && (
                    <article className="h-full flex flex-col justify-between border border-gold/30 rounded-2xl p-2 bg-white shadow-sm transition-all hover:shadow-md">
                      <div>
                        <h4 className="text-gray-400 uppercase tracking-[0.35em] text-[0.55rem]">Floors</h4>
                        <p className="mt-1 text-[clamp(1.2rem,1.8vw,1.5rem)] font-black text-black leading-none">{project.floors}</p>
                      </div>
                      <small className="text-gray-500 uppercase tracking-[0.2em] text-[0.6rem]">Levels</small>
                    </article>
                  )}

                  <article className="h-full flex flex-col justify-between border border-gold/30 rounded-2xl p-2 bg-white shadow-sm transition-all hover:shadow-md">
                    <div>
                      <h4 className="text-gray-400 uppercase tracking-[0.35em] text-[0.55rem]">Category</h4>
                      <p className="mt-1 text-[clamp(1rem,1.4vw,1.4rem)] font-black text-black uppercase leading-tight break-words">{project.category}</p>
                    </div>
                    <small className="text-gray-500 uppercase tracking-[0.2em] text-[0.6rem]">Type</small>
                  </article>

                  <article className="h-full flex flex-col justify-between border border-gold/30 rounded-2xl p-2 bg-white shadow-sm transition-all hover:shadow-md">
                    <div>
                      <h4 className="text-gray-400 uppercase tracking-[0.35em] text-[0.55rem]">Status</h4>
                      <p className={`mt-1 text-[clamp(1rem,1.4vw,1.4rem)] font-black uppercase leading-tight break-words ${
                        project.status === 'Delivered' ? 'text-black' : project.status === 'Under Construction' ? 'text-gold' : 'text-gray-500'
                      }`}>
                        {project.status === 'Under Construction' ? 'Ongoing' : project.status}
                      </p>
                    </div>
                    <small className="text-gray-500 uppercase tracking-[0.2em] text-[0.6rem]">Progress</small>
                  </article>
                </div>
              </section>

              {/* UK 15 Home Types Showcase */}
              {isUK15 && (
                <div className="space-y-32">
                  {/* UK15 VR Showcase (Top) */}
                  <div className="space-y-10 p-4 md:p-6 lg:p-8 bg-white border border-gold/20 rounded-2xl shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
                      <h3 className="text-black font-black uppercase tracking-[0.2em] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                        UK 15 Luxury Homes VR Tours
                      </h3>
                      <span className="text-gold font-black uppercase tracking-[0.35em] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight max-w-full md:max-w-lg">
                        Immersive 360° Panoramic Experience
                      </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                      <div className="rounded-xl border border-gold/30 overflow-hidden shadow-2xl">
                        <iframe
                          loading="lazy"
                          title="UK 15 Luxury Homes Panorama A"
                          src="https://panoraven.com/en/embed/ktXp1rkcL4"
                          className="w-full h-[360px] sm:h-[440px] md:h-[520px] lg:h-[560px]"
                          frameBorder="0"
                          allowFullScreen
                        />
                        <div className="p-3 bg-gray-50 text-center">
                          <p className="text-black font-black uppercase tracking-[0.2em] text-sm sm:text-base">UK 15 Luxury Homes Panorama A</p>
                        </div>
                      </div>
                      <div className="rounded-xl border border-gold/30 overflow-hidden shadow-2xl">
                        <iframe
                          loading="lazy"
                          title="UK 15 Luxury Homes Panorama B"
                          src="https://panoraven.com/en/embed/qF5hpIfNNd"
                          className="w-full h-[360px] sm:h-[440px] md:h-[520px] lg:h-[560px]"
                          frameBorder="0"
                          allowFullScreen
                        />
                        <div className="p-3 bg-gray-50 text-center">
                          <p className="text-black font-black uppercase tracking-[0.2em] text-sm sm:text-base">UK 15 Luxury Homes Panorama B</p>
                        </div>
                      </div>
                      <div className="rounded-xl border border-gold/30 overflow-hidden shadow-2xl">
                        <iframe
                          loading="lazy"
                          title="UK 15 Luxury Homes Panorama C"
                          src="https://panoraven.com/en/embed/lYeoPl5xu4"
                          className="w-full h-[360px] sm:h-[440px] md:h-[520px] lg:h-[560px]"
                          frameBorder="0"
                          allowFullScreen
                        />
                        <div className="p-3 bg-gray-50 text-center">
                          <p className="text-black font-black uppercase tracking-[0.2em] text-sm sm:text-base">UK 15 Luxury Homes Panorama C</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3 Marla Section */}
                  <div className="space-y-16">
                    <div className="flex items-center justify-between border-b-2 border-gold pb-8">
                      <h3 className="text-black font-black uppercase tracking-[0.6em] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">3 Marla Luxury Home</h3>
                      <span className="text-gold text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-widest hidden md:block">Bespoke Design</span>
                    </div>

                    {/* Elevation - Full Image Display */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="h-[3px] w-10 bg-gold"></div>
                        <h4 className="text-black font-black uppercase tracking-[0.4em] text-base md:text-lg">Front Elevation</h4>
                      </div>
                      <div 
                        className="relative w-full aspect-auto overflow-hidden bg-gray-100 group cursor-zoom-in border-2 border-gold/20 shadow-2xl rounded-lg p-0"
                        onClick={() => setLightboxImage(marla3Images.elevation.src)}
                      >
                        <img 
                          src={marla3Images.elevation.src} 
                          alt="3 Marla Front Elevation" 
                          className="w-full h-auto object-contain transition-all duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg">
                          <div className="px-8 py-3 border border-white/30 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded">
                            View Full Size
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floor Plans - Full Image Display */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="h-[3px] w-10 bg-gold"></div>
                        <h4 className="text-black font-black uppercase tracking-[0.4em] text-base md:text-lg">Floor Plans</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {marla3Images.floors.map((item, idx) => (
                          <div key={idx} className="space-y-4">
                            <div 
                              className="relative w-full aspect-auto overflow-hidden bg-gray-100 group cursor-zoom-in border-2 border-gold/20 rounded-lg shadow-lg"
                              onClick={() => setLightboxImage(item.src)}
                            >
                              <img 
                                src={item.src} 
                                alt={item.name}
                                className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-105 p-4"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-lg"></div>
                            </div>
                            <p className="text-black text-sm font-black uppercase tracking-[0.2em] text-center">{item.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interiors with Names */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="h-[3px] w-10 bg-gold"></div>
                        <h4 className="text-black font-black uppercase tracking-[0.4em] text-base md:text-lg">Interior Gallery</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {marla3Images.interiors.map((item, idx) => (
                          <div key={idx} className="space-y-3">
                            <div 
                              className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100 group cursor-zoom-in border border-gold/20 rounded-lg shadow-md"
                              onClick={() => setLightboxImage(item.src)}
                            >
                              <img 
                                src={item.src} 
                                alt={item.name}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-8 h-8 bg-white flex items-center justify-center text-[11px] text-black shadow-lg rounded font-black">
                                  +
                                </div>
                              </div>
                            </div>
                            <p className="text-gray-700 text-xs font-bold uppercase tracking-[0.15em] leading-snug">{item.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="py-16 border-t-2 border-b-2 border-gold/20">
                    <div className="text-center">
                      <div className="inline-block px-10 py-5 bg-gold/10 border-2 border-gold/40 rounded-lg">
                        <p className="text-gold font-black text-[11px] uppercase tracking-[0.4em]">↓ Now Featuring ↓</p>
                      </div>
                    </div>
                  </div>

                  {/* 5 Marla Section */}

                  <div className="space-y-16">
                    <div className="flex items-center justify-between border-b-2 border-gold pb-8">
                      <h3 className="text-black font-black uppercase tracking-[0.6em] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">5 Marla Luxury Home</h3>
                      <span className="text-gold text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-widest hidden md:block">Premium Edition</span>
                    </div>

                    {/* Elevation */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="h-[3px] w-10 bg-gold"></div>
                        <h4 className="text-black font-black uppercase tracking-[0.4em] text-base md:text-lg">Front Elevation</h4>
                      </div>
                      <div 
                        className="relative w-full aspect-auto overflow-hidden bg-gray-100 group cursor-zoom-in border-2 border-gold/20 shadow-2xl rounded-lg p-0"
                        onClick={() => setLightboxImage(marla5Images.elevation.src)}
                      >
                        <img 
                          src={marla5Images.elevation.src} 
                          alt="5 Marla Front Elevation" 
                          className="w-full h-auto object-contain transition-all duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg">
                          <div className="px-8 py-3 border border-white/30 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded">
                            View Full Size
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floor Plans */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="h-[3px] w-10 bg-gold"></div>
                        <h4 className="text-black font-black uppercase tracking-[0.4em] text-base md:text-lg">Floor Plans</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {marla5Images.floors.map((item, idx) => (
                          <div key={idx} className="space-y-4">
                            <div 
                              className="relative w-full aspect-auto overflow-hidden bg-gray-100 group cursor-zoom-in border-2 border-gold/20 rounded-lg shadow-lg"
                              onClick={() => setLightboxImage(item.src)}
                            >
                              <img 
                                src={item.src} 
                                alt={item.name}
                                className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-105 p-4"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-lg"></div>
                            </div>
                            <p className="text-black text-sm font-black uppercase tracking-[0.2em] text-center">{item.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interiors */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="h-[3px] w-10 bg-gold"></div>
                        <h4 className="text-black font-black uppercase tracking-[0.4em] text-base md:text-lg">Interior Gallery</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {marla5Images.interiors.map((item, idx) => (
                          <div key={idx} className="space-y-3">
                            <div 
                              className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100 group cursor-zoom-in border border-gold/20 rounded-lg shadow-md"
                              onClick={() => setLightboxImage(item.src)}
                            >
                              <img 
                                src={item.src} 
                                alt={item.name}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-8 h-8 bg-white flex items-center justify-center text-[11px] text-black shadow-lg rounded font-black">
                                  +
                                </div>
                              </div>
                            </div>
                            <p className="text-gray-700 text-xs font-bold uppercase tracking-[0.15em] leading-snug">{item.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Technical Matrix - Only show for non-UK15 */}
              {!isUK15 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 p-12 md:p-16 bg-gray-50 border-t-2 border-black/5 rounded-lg">
                  <div className="space-y-10">
                    <h4 className="text-black font-black uppercase tracking-[0.4em] text-sm md:text-base flex items-center">
                      <span className="w-10 h-[3px] bg-gold mr-4"></span>
                      Engineering Standards
                    </h4>
                    <ul className="grid grid-cols-1 gap-5">
                      {project.features.map((f, i) => (
                        <li key={i} className="text-xs md:text-sm text-gray-600 font-bold uppercase tracking-[0.2em] flex items-start">
                          <span className="text-gold mr-4 mt-1 text-lg">✦</span> 
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-10">
                    <h4 className="text-black font-black uppercase tracking-[0.4em] text-sm md:text-base flex items-center">
                      <span className="w-10 h-[3px] bg-gold mr-4"></span>
                      Lifestyle Amenities
                    </h4>
                    <ul className="grid grid-cols-1 gap-5">
                      {project.amenities.map((a, i) => (
                        <li key={i} className="text-xs md:text-sm text-gray-600 font-bold uppercase tracking-[0.2em] flex items-start">
                          <span className="text-gold mr-4 mt-1">✓</span> 
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Features & Amenities for UK 15 */}
              {isUK15 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 p-12 md:p-16 bg-gold/5 border-t-2 border-gold/20 rounded-lg">
                  <div className="space-y-10">
                    <h4 className="text-black font-black uppercase tracking-[0.4em] text-sm md:text-base flex items-center">
                      <span className="w-10 h-[3px] bg-gold mr-4"></span>
                      Premium Features
                    </h4>
                    <ul className="grid grid-cols-1 gap-5">
                      {project.features.map((f, i) => (
                        <li key={i} className="text-xs md:text-sm text-gray-700 font-bold uppercase tracking-[0.2em] flex items-start">
                          <span className="text-gold mr-4 mt-1 text-lg">✦</span> 
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-10">
                    <h4 className="text-black font-black uppercase tracking-[0.4em] text-sm md:text-base flex items-center">
                      <span className="w-10 h-[3px] bg-gold mr-4"></span>
                      Luxury Amenities
                    </h4>
                    <ul className="grid grid-cols-1 gap-5">
                      {project.amenities.map((a, i) => (
                        <li key={i} className="text-xs md:text-sm text-gray-700 font-bold uppercase tracking-[0.2em] flex items-start">
                          <span className="text-gold mr-4 mt-1">✓</span> 
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Investment Matrix (Sticky) */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-10">
              {/* Payment Plans - Only show if Under Construction (Ongoing) */}
              {project.status === 'Under Construction' && (
                  <div className="bg-corporate-black p-12 md:p-14 text-white shadow-[0_40px_100px_rgba(0,0,0,0.15)] relative overflow-hidden border-t-8 border-gold rounded-lg">
                    <div className="mb-14">
                      <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em] block mb-4">Investment Portal</span>
                      <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight">Payment Structure</h3>
                    </div>

                    {isUK15 ? (
                      // UK 15 Special Payment Table
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 gap-4">
                          <div className="rounded-3xl border border-white/10 bg-white/10 p-4 sm:p-5">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-3">
                              <div>
                                <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-gold">3 Marla</p>
                                <h4 className="text-lg sm:text-xl font-black text-white">Luxury Home</h4>
                              </div>
                              <span className="text-[10px] sm:text-sm font-black uppercase tracking-[0.35em] text-gold">Total</span>
                            </div>
                            <div className="grid grid-cols-1 gap-2 text-sm sm:text-base text-gray-300">
                              {[
                                ['Booking', 'PKR 995,000'],
                                ['Confirmation', 'PKR 2,985,000'],
                                ['Installments', '10 x PKR 597,000'],
                                ['Grey Works', 'PKR 3,980,000'],
                                ['Possession', 'PKR 5,970,000'],
                              ].map(([label, value]) => (
                                <div key={label} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-2">
                                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-gray-400">{label}</span>
                                  <span className="font-black text-sm sm:text-base text-white">{value}</span>
                                </div>
                              ))}
                            </div>
                            <div className="mt-4 rounded-2xl bg-gold/10 px-3 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] sm:text-sm font-black text-gold">
                              <span>Total Value</span>
                              <span>PKR 19,900,000</span>
                            </div>
                          </div>

                          <div className="rounded-3xl border border-white/10 bg-white/10 p-4 sm:p-5">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-3">
                              <div>
                                <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-gold">5 Marla</p>
                                <h4 className="text-lg sm:text-xl font-black text-white">Luxury Home</h4>
                              </div>
                              <span className="text-[10px] sm:text-sm font-black uppercase tracking-[0.35em] text-gold">Total</span>
                            </div>
                            <div className="grid grid-cols-1 gap-2 text-sm sm:text-base text-gray-300">
                              {[
                                ['Booking', 'PKR 1,495,000'],
                                ['Confirmation', 'PKR 4,485,000'],
                                ['Installments', '10 x PKR 897,000'],
                                ['Grey Works', 'PKR 5,980,000'],
                                ['Possession', 'PKR 8,970,000'],
                              ].map(([label, value]) => (
                                <div key={label} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-2">
                                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-gray-400">{label}</span>
                                  <span className="font-black text-sm sm:text-base text-white">{value}</span>
                                </div>
                              ))}
                            </div>
                            <div className="mt-4 rounded-2xl bg-gold/10 px-3 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] sm:text-sm font-black text-gold">
                              <span>Total Value</span>
                              <span>PKR 29,900,000</span>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 p-4 sm:p-5 bg-white/10 text-[10px] sm:text-sm text-gray-300">
                          <h4 className="text-[11px] sm:text-sm font-black uppercase tracking-[0.35em] text-gold mb-3">Terms & Conditions</h4>
                          <ul className="grid gap-2">
                            {[
                              'Payment should be made through cross cheque or payorder in favour of UK Developers Pvt Ltd.',
                              '10% Extra Charges on each Category (Park facing / Corner)',
                              '5% Rebate on Full Payment.',
                              '1 Year Payment Plan Available',
                            ].map((item) => (
                              <li key={item} className="flex gap-2 text-[10px] sm:text-[11px] leading-snug">
                                <span className="text-gold">✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      // Default payment structure for other projects
                      <div className="space-y-12">
                        <div className="flex justify-between items-end border-b border-white/5 pb-8">
                          <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Initial Equity</span>
                          <span className="text-3xl md:text-4xl font-black text-white">{formatPaymentValue(project.paymentPlan?.downPayment)}</span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          <div className="space-y-3">
                            <span className="text-[9px] text-gray-500 font-black uppercase tracking-widest block">Monthly</span>
                            <span className="text-lg font-black">{formatPaymentValue(project.paymentPlan?.monthlyInstallment)}</span>
                          </div>
                          <div className="space-y-3">
                            <span className="text-[9px] text-gray-500 font-black uppercase tracking-widest block">Quarterly</span>
                            <span className="text-lg font-black">{formatPaymentValue(project.paymentPlan?.quarterlyInstallment)}</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-end border-b border-white/5 pb-8">
                          <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Final Ledger</span>
                          <span className="text-lg font-black text-white">{formatPaymentValue(project.paymentPlan?.onPossession)}</span>
                        </div>

                        <div className="pt-4">
                          <span className="text-[10px] text-gold font-black uppercase tracking-widest block mb-3">Starting Portfolio Value</span>
                          <span className="text-4xl md:text-5xl font-black text-white tracking-tighter">{formatPaymentValue(project.paymentPlan?.totalPrice)}</span>
                        </div>
                      </div>
                    )}

                    <Link to="/contact" className="w-full mt-16 bg-gold text-white font-black uppercase tracking-[0.4em] py-5 md:py-6 hover:bg-white hover:text-black transition-all shadow-xl group text-xs rounded text-center inline-block">
                      Secure Consultation
                      <span className="ml-4 group-hover:translate-x-2 transition-transform inline-block">→</span>
                    </Link>
                  </div>
                )}

                {/* Delivered Status Box */}
                {isDelivered && (
                  <div className="bg-black p-12 md:p-14 text-white shadow-[0_40px_100px_rgba(0,0,0,0.15)] relative overflow-hidden border-t-8 border-gold rounded-lg">
                    <div className="text-center">
                      <div className="inline-block mb-6 p-4 bg-gold/10 border-2 border-gold rounded-full">
                        <svg className="w-12 h-12 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Project Delivered</h3>
                      <p className="text-gray-400 text-xs md:text-sm uppercase tracking-widest mb-8">This landmark project has been successfully completed and delivered to its residents.</p>
                      <div className="space-y-4">
                        <div className="p-4 bg-gold/10 border border-gold/30 rounded">
                          <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">Completion Year</p>
                          <p className="text-2xl font-black text-gold">{project.completionYear}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-gray-50 p-12 text-center border border-gray-200 flex flex-col items-center rounded-lg">
                  <div className="w-10 h-10 border border-gold flex items-center justify-center transform rotate-45 mb-8">
                     <span className="text-gold font-black text-xs -rotate-45">UK</span>
                  </div>
                  <h4 className="text-black font-black uppercase tracking-[0.4em] text-[10px] mb-4">Corporate Inquiries</h4>
                  <Link to="/contact" className="inline-block text-gold font-black text-[10px] uppercase tracking-widest border-b-2 border-gold/30 pb-1 hover:border-black hover:text-black transition-all">
                    Establish Direct Link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal (Full Screen View) */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            type="button"
            aria-label="Close lightbox"
            className="absolute top-8 md:top-10 right-8 md:right-10 text-white hover:text-gold transition-colors p-4 z-[110]"
            onClick={() => setLightboxImage(null)}
          >
            <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <img 
              src={lightboxImage} 
              alt="Architectural View" 
              className="max-w-full max-h-full object-contain shadow-[0_0_100px_rgba(212,175,55,0.2)]"
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-8 md:px-10 py-3 md:py-4 text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] border border-white/10 rounded-t-lg">
              {project.title} Archive
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
