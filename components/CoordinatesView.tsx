import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import LahoreMap from './home/LahoreMap';

interface CoordinatesViewProps {
  onSelectProject: (p: Project) => void;
}

const CoordinatesView: React.FC<CoordinatesViewProps> = ({ onSelectProject }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const handleProjectSelect = (project: Project) => {
    setSelectedProjectId(project.id);
    onSelectProject(project);
  };

  const deliveredProjects = PROJECTS.filter(p => p.status !== 'Upcoming');

  return (
    <div className="pb-20 px-4 md:px-0 min-h-screen bg-white animate-in fade-in text-black font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
          <div className="w-full">
            <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-3 md:mb-4 block">Strategic Intelligence</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black uppercase tracking-tighter leading-none">Royal <span className="text-gold">Coordinates</span></h1>
          </div>
          <div className="w-full md:text-right md:w-auto">
             <p className="text-gray-600 text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] max-w-xs leading-relaxed font-normal">Seventeen monuments of power, strategically positioned in Lahore, Pakistan.</p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-20">
          <div className="border-b-2 border-gold pb-4">
            <p className="text-[8px] text-gray-400 uppercase tracking-[0.3em] font-black mb-2">Total Projects</p>
            <p className="text-3xl md:text-4xl font-black text-black">{deliveredProjects.length}</p>
          </div>
          <div className="border-b-2 border-gold pb-4">
            <p className="text-[8px] text-gray-400 uppercase tracking-[0.3em] font-black mb-2">Status</p>
            <p className="text-lg md:text-xl font-black text-gold uppercase">Active</p>
          </div>
          <div className="border-b-2 border-gold pb-4">
            <p className="text-[8px] text-gray-400 uppercase tracking-[0.3em] font-black mb-2">City</p>
            <p className="text-sm md:text-base font-black text-black uppercase">Lahore</p>
          </div>
          <div className="border-b-2 border-gold pb-4">
            <p className="text-[8px] text-gray-400 uppercase tracking-[0.3em] font-black mb-2">Region</p>
            <p className="text-sm md:text-base font-black text-black uppercase">Pakistan</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-20 items-start">
          {/* Map Display */}
          <div className="lg:col-span-2 h-72 sm:h-96 md:h-[500px] lg:h-[600px] rounded-sm overflow-hidden border border-gray-100 w-full">
            <LahoreMap onSelectProject={handleProjectSelect} />
          </div>

          {/* List Section */}
          <div className="flex flex-col h-full w-full">
            <div className="mb-6">
              <h3 className="text-black font-black text-sm uppercase tracking-[0.4em] mb-2">Project Listings</h3>
              <div className="h-1 w-12 bg-gold"></div>
            </div>
            <div className="space-y-3 md:space-y-6 max-h-96 sm:max-h-[450px] md:max-h-[600px] overflow-y-auto pr-2 md:pr-4 custom-scrollbar flex-grow">
               {deliveredProjects.map((p, idx) => (
                 <Link
                  key={p.id}
                  to={`/projects/${p.id}`}
                  onClick={() => handleProjectSelect(p)}
                  className={`group p-4 md:p-6 border-l-4 transition-all cursor-pointer flex flex-col gap-2 no-underline ${
                    selectedProjectId === p.id 
                      ? 'border-l-gold bg-gold/5' 
                      : 'border-l-gray-100 hover:border-l-gold hover:bg-gray-50'
                  }`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                 >
                   <p className="text-[8px] md:text-[9px] text-gray-400 uppercase tracking-[0.3em] font-black">{p.city} • {p.location}</p>
                   <h4 className={`text-sm md:text-base font-black uppercase tracking-tight line-clamp-1 transition-colors ${
                     selectedProjectId === p.id 
                       ? 'text-gold' 
                       : 'text-gray-900 group-hover:text-gold'
                   }`}>{p.name}</h4>
                   <div className="flex items-center justify-between">
                     <span className="text-[8px] text-gray-400 uppercase tracking-[0.2em] font-bold">UK {p.number} • {p.status}</span>
                     <span className="text-gold text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                   </div>
                 </Link>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoordinatesView;
