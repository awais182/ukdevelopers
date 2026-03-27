import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../constants';
import SEO from '../../components/common/SEO';

const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeType, setActiveType] = useState('All');
  const [activeStatus, setActiveStatus] = useState('All');

  const filteredProjects = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return PROJECTS.filter(p => {
      const matchSearch = p.title.toLowerCase().includes(query) || p.location.toLowerCase().includes(query);
      const matchType = activeType === 'All' || p.category === activeType;
      
      // Handle status filter with "Ongoing" mapping to "Under Construction"
      let matchStatus = activeStatus === 'All';
      if (activeStatus === 'Ongoing') {
        matchStatus = p.status === 'Under Construction';
      } else if (activeStatus !== 'All') {
        matchStatus = p.status === activeStatus;
      }
      
      return matchSearch && matchType && matchStatus;
    });
  }, [searchQuery, activeType, activeStatus]);

  const filterTypes = ['All', 'Commercial', 'Residential'];
  const filterStatuses = ['All', 'Delivered', 'Ongoing', 'Upcoming'];

  const clearFilters = () => {
    setSearchQuery('');
    setActiveType('All');
    setActiveStatus('All');
  };

  const hasActiveFilters = searchQuery !== '' || activeType !== 'All' || activeStatus !== 'All';

  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-32 md:pb-40 bg-white font-sans min-h-screen">
      <SEO 
        title="Project Portfolio | UK Developers"
        description="Explore the legacy of UK Developers through our 17 landmarks in Lahore, from UK Center to Signature Residency."
      />
      
      {/* Page Header */}
      <section className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-20 md:mb-24">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
            <div className="h-[2px] w-8 sm:w-12 bg-gold"></div>
            <span className="text-gold text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.6em] block">Our Architectural Legacy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-black uppercase tracking-tighter leading-tight mb-6 sm:mb-10">
            <span className="block sm:inline">Building&nbsp;</span><span className="text-gold">Archives.</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-xl font-light max-w-2xl leading-relaxed">
            A curated selection of 17 landmarks defining the urban skyline of Lahore. Filter through our residential road schemes and high-tech commercial centers.
          </p>
        </div>
      </section>

      {/* Professional Filter System */}
      <section className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20">
        <div className="bg-gradient-to-r from-white via-white to-gold/5 rounded-xl p-5 sm:p-6 md:p-8 lg:p-12 border border-gold/10 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 md:gap-12">
            
            {/* Filter Controls Group */}
            <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Type Segmented Control */}
              <div className="space-y-4">
                <label className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-600 block">Archive Sector</label>
                <div className="flex flex-wrap gap-2">
                  {filterTypes.map(type => (
                    <button 
                      key={type}
                      onClick={() => setActiveType(type)}
                        className={`px-5 md:px-6 py-2.5 text-[9px] font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 rounded-lg border-2 ${
                        activeType === type 
                        ? 'bg-black text-white border-black shadow-lg transform scale-105' 
                        : 'text-gray-600 border-gray-200 hover:border-gold hover:text-gold bg-white'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Segmented Control */}
              <div className="space-y-4">
                <label className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-600 block">Project Status</label>
                <div className="flex flex-wrap gap-2">
                  {filterStatuses.map(status => (
                    <button 
                      key={status}
                      onClick={() => setActiveStatus(status)}
                      className={`px-4 md:px-5 py-2.5 text-[9px] font-black uppercase tracking-widest whitespace-nowrap border-2 transition-all duration-300 rounded-lg ${
                        activeStatus === status 
                        ? 'bg-gold border-gold text-black shadow-lg transform scale-105' 
                        : 'border-gray-200 text-gray-600 hover:border-gold hover:text-gold bg-white'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Advanced Search Input */}
              <div className="space-y-4">
                <label className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-600 block">Refine Search</label>
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Search by title or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border-2 border-gray-200 group-focus-within:border-gold rounded-lg py-2.5 px-4 text-sm font-bold text-black focus:outline-none transition-all placeholder:text-gray-300"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-gold transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>

            {/* Clear Filters / Actions */}
            <div className="flex flex-col items-start lg:items-end">
              <div className="p-4 bg-gold/10 border border-gold/20 rounded-lg text-center w-full lg:w-auto">
                <span className="text-gold text-[10px] font-black uppercase tracking-[0.3em] block">
                  {filteredProjects.length}
                </span>
                <span className="text-gray-600 text-[8px] uppercase tracking-widest font-bold">Results Found</span>
              </div>
              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="mt-4 px-6 py-3 bg-black text-white font-black uppercase tracking-[0.3em] text-[9px] hover:bg-gold hover:text-black transition-all rounded-lg shadow-md"
                >
                  Reset Filters
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-12 sm:gap-y-16 md:gap-y-24">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((p, idx) => {
              const isUpcoming = p.status === 'Upcoming';
              
              return (
                <Link 
                  key={p.id} 
                  to={`/projects/${p.id}`} 
                  className="group flex flex-col bg-white animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Image Section - Hide for Upcoming */}
                  {!isUpcoming ? (
                    <div className="relative overflow-hidden aspect-[3/4] mb-8 bg-gray-50">
                      <img 
                        src={p.image} 
                        alt={p.title} 
                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-700"></div>
                      
                      {/* Status Overlay */}
                      <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 z-10">
                         <span className={`whitespace-nowrap px-3 sm:px-5 py-1.5 sm:py-2 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white shadow-2xl border ${
                           p.status === 'Delivered' ? 'bg-black border-gold/40' : p.status === 'Under Construction' ? 'bg-gold text-black border-gold' : 'bg-gray-800 border-gold/30'
                         }`}>
                           {p.status === 'Under Construction' ? '● Ongoing' : p.status === 'Delivered' ? '✓ Delivered' : '◐ Upcoming'}
                         </span>
                      </div>

                      {/* Category Badge - responsive position */}
                      <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 z-10 mt-8 sm:mt-0 sm:ml-24 md:ml-32 lg:ml-[180px]">
                         <span className={`px-2.5 sm:px-4 py-1.5 sm:py-2 text-[7px] sm:text-[9px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] shadow-2xl border ${
                           p.category === 'Residential' ? 'bg-gold text-black border-gold' : 'bg-black text-white border-gold/40'
                         }`}>
                           {p.category}
                         </span>
                      </div>

                      <div className="absolute top-8 right-8">
                         <span className="px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] bg-white/80 text-black border border-gray-100 shadow-sm">UK {p.number}</span>
                      </div>

                      {/* Hover Detail Overlay */}
                      <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                        <span className="text-white text-[10px] font-black uppercase tracking-[0.5em]">View Project Detail</span>
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                          <span className="text-xl">→</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Coming Soon Card for Upcoming */ 
                    <div className="relative overflow-hidden aspect-[3/4] mb-8 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center border-2 border-gold/20">
                      <div className="text-center">
                        <div className="text-gold text-6xl font-black mb-4">◄</div>
                        <h3 className="text-white text-2xl font-black uppercase tracking-tight mb-3">Coming Soon</h3>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Exciting landmark in development</p>
                      </div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-8 left-8">
                         <span className="px-5 py-2 text-[9px] font-black uppercase tracking-[0.3em] text-white shadow-2xl bg-gray-800">
                           Upcoming
                         </span>
                      </div>

                      <div className="absolute top-8 right-8">
                         <span className="px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] bg-white/80 text-black border border-gray-100 shadow-sm">UK {p.number}</span>
                      </div>
                    </div>
                  )}

                  {/* Info Section - Better spacing for text */}
                  <div className="space-y-6 pt-4 pb-2">
                    <div className="flex items-center space-x-4">
                      <span className="text-gold text-[9px] font-black uppercase tracking-[0.4em] whitespace-nowrap">{p.category}</span>
                      <div className="h-[1px] flex-grow bg-gold/20"></div>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black uppercase tracking-tighter leading-tight group-hover:text-gold transition-colors duration-500 word-break">
                      {p.name}
                    </h3>
                    {!isUpcoming && (
                      <div className="flex items-center text-gray-500 space-x-3 pt-2">
                        <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em]">
                          {p.location}
                        </p>
                      </div>
                    )}
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="col-span-full py-40 text-center border-2 border-dashed border-gray-100 rounded-sm">
               <div className="mb-8">
                  <span className="text-6xl text-gray-100">∅</span>
               </div>
               <h4 className="text-black font-black uppercase tracking-widest text-sm mb-4">No Landmarks Found</h4>
               <p className="text-gray-400 text-xs font-bold uppercase tracking-widest max-w-sm mx-auto leading-relaxed">
                 We couldn't find any projects matching your current criteria. Try adjusting your filters or search terms.
               </p>
               <button 
                 onClick={clearFilters}
                 className="mt-10 px-10 py-4 bg-black text-white font-black uppercase tracking-widest text-[10px] hover:bg-gold transition-all"
               >
                 Show All Projects
               </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
