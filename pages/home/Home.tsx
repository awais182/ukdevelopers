import React from 'react';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import CoreValues from './sections/CoreValues';
import BrandPromise from './sections/BrandPromise';
import WhyChooseUs from './sections/WhyChooseUs';
import FeaturedProjects from './sections/FeaturedProjects';
import Testimonials from './sections/Testimonials';
import ContactCTA from './sections/ContactCTA';
import SEO from '../../components/common/SEO';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <SEO 
        title="Premium Real Estate & Construction in Lahore | UK Developers"
        description="UK Developers is Lahore's premier construction company with 27 years of heritage. Specializing in luxury residential towers and high-end commercial spaces. Shariah-compliant investments."
        keywords="Builders in Lahore, Real Estate Development, Luxury Living Lahore, Shariah Compliant, Premium Projects"
      />
      <Hero />
      <Stats />
      <CoreValues />
      <BrandPromise />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <ContactCTA />
    </div>
  );
};

export default Home;
