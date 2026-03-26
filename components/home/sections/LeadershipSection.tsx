import React from 'react';
import { Link } from 'react-router-dom';
import { EXECUTIVES } from '../../../../constants';

const LeadershipSection: React.FC = () => {
  return (
    <section className="pt-20 pb-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="h-[2px] w-12 bg-gold"></div>
            <span className="text-gold text-[10px] font-black uppercase tracking-[0.6em]">Our Team</span>
            <div className="h-[2px] w-12 bg-gold"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Executive <span className="text-gold">Leadership</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">Meet the leaders guiding UK Developers — experts in design, delivery, and heritage-led development.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {EXECUTIVES.slice(0,5).map((exec) => (
            <Link key={exec.id} to={`/team/${exec.id}`} className="group block bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-gold/30 transition-shadow duration-300">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img src={exec.imageUrl} alt={exec.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-black uppercase tracking-tight">{exec.name}</h3>
                <p className="text-gold text-xs font-bold uppercase mt-1">{exec.role}</p>
                <p className="text-gray-600 text-sm mt-3 line-clamp-3">{exec.bio}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
