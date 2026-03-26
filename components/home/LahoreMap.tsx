import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { PROJECTS } from '../../constants';
import { projectCoordinates, officeCoordinates, projectAddresses } from '../../PROJECT_COORDINATES_CONFIG';
import { OFFICE_MARKER } from '../../COMPANY_INFO';
import { Project } from '../../types';

interface LahoreMapProps {
  onSelectProject?: (project: Project) => void;
}

// Use coordinates from configuration file
const projectLocationCoords = projectCoordinates;

// Custom gold icon for UK Projects
const goldIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxNiIgZmlsbD0iI2Q0YWYzNyIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIyMCIgeT0iMjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDAwIj5VSzwvdGV4dD48L3N2Zz4=',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  shadowSize: [41, 41],
});

// Custom red icon for Head Office
const officeIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxNiIgZmlsbD0iI2ZmMzMzMyIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIyMCIgeT0iMjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjZmZmIj7im4s8L3RleHQ+PC9zdmc+',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  shadowSize: [41, 41],
});

const LahoreMap: React.FC<LahoreMapProps> = ({ onSelectProject }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);
  const navigate = useNavigate();
  const markersRef = useRef<Map<number, L.Marker>>(new Map());

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map centered on Lahore
    map.current = L.map(mapContainer.current).setView([31.5497, 74.3436], 12);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map.current);

    // Add project markers - include all projects except Upcoming
    PROJECTS.filter(project => project.status !== 'Upcoming').forEach((project) => {
      // Try to get coordinates by project name first, then by location
      const coords = projectLocationCoords[project.name] || projectLocationCoords[project.location];
      if (coords) {
        const address = projectAddresses[project.location];
        
        const popupContent = `<div class="p-5 bg-white rounded-sm border border-gold/20 max-w-sm text-black shadow-lg">
                  <div class="mb-4">
                    <div class="flex items-center justify-between mb-3">
                      <span class="font-black text-[10px] text-gold uppercase tracking-[0.2em] block">UK ${project.number}</span>
                      <span class="px-2 py-1 text-[7px] font-black uppercase tracking-[0.2em] ${
                        project.status === 'Delivered' ? 'bg-black text-white' : project.status === 'Under Construction' ? 'bg-gold text-black' : 'bg-gray-400 text-white'
                      }">
                        ${project.status === 'Under Construction' ? 'Ongoing' : project.status}
                      </span>
                    </div>
                    <h3 class="font-black text-sm text-gray-900 uppercase tracking-tight line-clamp-2 mb-3">${project.name}</h3>
                  </div>
                  
                  <div class="space-y-3 text-xs mb-4 border-t border-gray-100 pt-3">
                    <div class="flex justify-between">
                      <span class="text-gray-500 font-bold">📍 Location:</span>
                      <span class="text-gray-900 font-bold">${project.location}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-500 font-bold">Category:</span>
                      <span class="text-gray-900 font-bold">${project.category}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-500 font-bold">Status:</span>
                      <span class="text-gray-900 font-bold">${project.status === 'Under Construction' ? 'Ongoing' : project.status}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-500 font-bold">Year:</span>
                      <span class="text-gray-900 font-bold">${project.completionYear}</span>
                    </div>
                    <div class="flex justify-between border-t border-gray-100 pt-2 mt-2">
                      <span class="text-gray-500 font-bold">Units:</span>
                      <span class="text-gold font-black text-sm">${project.units}</span>
                    </div>
                    ${project.floors ? `<div class="flex justify-between">
                      <span class="text-gray-500 font-bold">Floors:</span>
                      <span class="text-gold font-black text-sm">${project.floors}</span>
                    </div>` : ''}
                  </div>
                  
                  <a href="/#/projects/${project.id}" class="inline-block w-full px-3 py-2 text-[8px] bg-gold text-black rounded-sm hover:bg-gold/90 transition-colors font-black uppercase tracking-widest text-center no-underline">
                    View Full Details
                  </a>
                </div>`;
        
        const marker = L.marker(coords, { icon: goldIcon })
          .bindPopup(L.popup().setContent(popupContent))
          .bindTooltip(`
            <div class="bg-white border border-gold/40 rounded-sm px-3 py-2 whitespace-nowrap text-black">
              <p class="font-black text-[9px] text-gold uppercase tracking-[0.2em]">UK ${project.number}</p>
              <p class="text-gray-900 font-black text-[10px] uppercase tracking-tight">${project.name}</p>
              <p class="text-gray-600 text-[8px] mt-1">${project.location}</p>
            </div>
          `, { 
            permanent: false, 
            direction: 'top',
            offset: L.point(0, -25),
            className: 'leaflet-tooltip-custom'
          })
          .addTo(map.current!);

        // Store marker reference
        markersRef.current.set(project.id, marker);

        // Add click handler
        marker.on('click', () => {
          setSelectedMarker(project.id);
          if (onSelectProject) {
            onSelectProject(project);
          }
          // Open popup on click with proper timing to ensure popup renders
          setTimeout(() => {
            marker.openPopup();
          }, 50);
        });
      }
    });

    // Add head office marker
    if (officeCoordinates) {
      const officeMarker = L.marker(officeCoordinates, { icon: officeIcon })
        .bindPopup(`
          <div class="p-4 bg-white rounded-sm border border-red-200 text-black">
            <h3 class="text-red-500 font-black text-sm uppercase tracking-widest">UK Developers - Head Office</h3>
            <div class="space-y-1 text-xs text-gray-700 mt-3 border-t border-gray-100 pt-3">
              <p>CS-12, Falcon, Downtown</p>
              <p>Fazaia Housing Scheme, Phase-1</p>
              <p>Block H, Raiwind Road</p>
              <p class="mb-2">Lahore, Pakistan</p>
              <p class="text-gold font-black">📞 +92 325 111 4441</p>
              <p class="text-gold font-black">📧 info@ukdevelopers.pk</p>
            </div>
          </div>
        `)
        .addTo(map.current!);
    }

    // Cleanup on unmount
    return () => {
      markersRef.current.clear();
      if (map.current) {
        map.current.remove();
      }
    };
  }, [onSelectProject, navigate]);

  // Debounced resize handler to keep Leaflet map sized correctly on viewport changes
  useEffect(() => {
    let timeout: number | null = null;
    const resizeCb = () => {
      if (timeout) window.clearTimeout(timeout);
      // schedule invalidateSize after resize finishes
      timeout = window.setTimeout(() => {
        if (map.current) map.current.invalidateSize();
      }, 120);
    };

    window.addEventListener('resize', resizeCb);
    // also ensure correct size shortly after mount
    const initTimeout = window.setTimeout(() => {
      if (map.current) map.current.invalidateSize();
    }, 200);

    return () => {
      window.removeEventListener('resize', resizeCb);
      window.clearTimeout(initTimeout);
      if (timeout) window.clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Custom Tooltip Styles */}
      <style>{`
        .leaflet-tooltip-custom {
          background-color: transparent !important;
          border: none !important;
          box-shadow: none !important;
          padding: 0 !important;
        }
        .leaflet-tooltip-custom .leaflet-tooltip-content {
          background-color: #fff !important;
          border: 1px solid rgba(212, 175, 55, 0.35) !important;
          color: #111 !important;
          border-radius: 0.375rem !important;
          padding: 0.5rem !important;
          font-family: inherit !important;
        }
        .leaflet-control {
          z-index: 5 !important;
        }
        .leaflet-popup {
          z-index: 20 !important;
        }
      `}</style>
      
      {/* Map Container */}
      <div
        ref={mapContainer}
        className="w-full rounded-sm border border-gray-100 overflow-hidden h-[65vh] sm:h-[60vh] md:h-[500px] lg:h-[600px] bg-white relative z-0"
      />

      {/* Info Overlay - Hidden on mobile, shown on md+ */}
      <div className="hidden md:block absolute top-4 left-4 bg-white/95 backdrop-blur-xl border border-gold/20 p-4 rounded-sm max-w-xs z-5 pointer-events-auto">
        <h3 className="text-gold font-black text-[10px] uppercase tracking-[0.5em]">Lahore, Pakistan</h3>
        <p className="text-gray-700 text-[10px] mt-3 leading-relaxed font-normal">
          All 17 UK flagship projects positioned across premium Lahore neighborhoods
        </p>
        <p className="text-gray-500 text-[8px] mt-3 uppercase tracking-[0.2em] font-bold">
          🎯 Click on markers to view project details
        </p>
      </div>

      {/* Legend - Hidden on mobile, shown on md+ */}
      <div className="hidden md:block absolute bottom-4 right-4 bg-white/95 backdrop-blur-xl border border-gold/20 p-4 rounded-sm text-[10px] text-gray-700 z-5 pointer-events-auto">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 bg-gold rounded-full"></div>
          <span className="font-bold">UK Project Location</span>
        </div>
        <div className="text-[8px] text-gray-500 mt-2 font-bold">
          Total Projects: 17
        </div>
      </div>

      {/* Attribution */}
      <div className="text-[8px] text-gray-400 mt-2 text-center font-normal">
        Map data © OpenStreetMap contributors
      </div>
    </div>
  );
};

export default LahoreMap;
