import React from 'react';
import CoordinatesView from '../../components/CoordinatesView';
import { Project } from '../../types';

const Coordinates: React.FC = () => {
  const handleProjectSelect = (project: Project) => {
    console.log('Project selected:', project);
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Ensure the coordinates page content starts below the fixed navbar */}
      <div className="pt-14 sm:pt-16 md:pt-20 lg:pt-24 px-4 sm:px-6 md:px-8">
        <CoordinatesView onSelectProject={handleProjectSelect} />
      </div>
    </div>
  );
};

export default Coordinates;
