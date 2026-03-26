
import React from 'react';
import SEO from '../../components/common/SEO';

const ShariahCompliance: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 bg-white font-sans min-h-screen">
      <SEO 
        title="Shariah Compliance | Ethical Real Estate Investments"
        description="Learn about our commitment to Shariah-compliant real estate investment in Lahore. Interest-free financial models, asset-backed transactions, and ethical practices."
        keywords="Halal Investment Lahore, Shariah Compliant Real Estate, Islamic Finance Pakistan, Ethical Construction"
      />
      <div className="container mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-24 md:mb-32 animate-fade-in">
          <span className="text-gold uppercase tracking-[0.4em] text-[10px] sm:text-xs font-black block mb-3 sm:mb-4">Ethical Foundation</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-black mb-6 sm:mb-8 uppercase tracking-tighter">Shariah Compliance</h1>
          <div className="w-24 h-1.5 bg-gold mx-auto mb-12"></div>
          <p className="text-gray-500 max-w-3xl mx-auto text-xl leading-relaxed font-normal italic">
            "We believe that true prosperity is built upon the foundations of integrity, justice, and ethical transparency."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 mb-16 sm:mb-24 md:mb-32 items-center">
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h2 className="text-3xl font-black text-black mb-10 uppercase tracking-tight flex items-center">
              <span className="w-12 h-[1px] bg-gold mr-6"></span>
              Our Commitment
            </h2>
            <div className="space-y-8 text-gray-600 text-lg leading-relaxed font-normal">
              <p>
                At UK Developers, we strictly adhere to Shariah principles in all our financial dealings and investment models. We ensure that our real estate solutions are free from Riba (Interest), Gharar (Uncertainty), and Maysir (Gambling).
              </p>
              <div className="p-10 bg-gray-50 border-l-8 border-gold shadow-sm">
                 <p className="font-bold text-black uppercase tracking-wide text-sm mb-4">Certified Financial Models</p>
                 <p className="text-gray-500 text-base">All our payment plans and joint-venture contracts are reviewed by reputable Shariah advisors to ensure 100% compliance with Islamic Law.</p>
              </div>
              <p>
                This commitment extends beyond finance to our labor practices, environmental stewardship, and community engagement, reflecting the holistic ethical standards of Islam.
              </p>
            </div>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: '400ms' }}>
             <div className="absolute inset-0 border-2 border-gold translate-x-4 translate-y-4 sm:translate-x-8 sm:translate-y-8 -z-10"></div>
             <div className="bg-corporate-dark p-10 sm:p-14 md:p-20 text-center shadow-2xl relative">
                <div className="text-gold text-8xl mb-12 opacity-50 select-none">⚖</div>
                <h3 className="text-white text-3xl font-black uppercase tracking-widest mb-6 leading-tight">Interest-Free <br/><span className="text-gold">Investment</span></h3>
                <p className="text-gray-400 text-sm tracking-widest uppercase font-bold">Guaranteed Ethical Standards</p>
             </div>
          </div>
        </div>

        {/* Pillars Section */}
        <div className="bg-corporate-gray p-8 sm:p-12 md:p-16 lg:p-24 border border-gray-100 rounded-sm mb-16 sm:mb-24 md:mb-32 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-12 sm:mb-16 md:mb-20 text-center uppercase tracking-tight">The Ethical Pillars</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 md:gap-16">
            <div className="group text-center">
              <div className="w-20 h-20 bg-white border border-gray-100 flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:bg-gold group-hover:text-white transition-all text-gold text-3xl font-bold">01</div>
              <h4 className="text-black font-black uppercase tracking-widest text-lg mb-6">Asset-Backing</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">Every transaction is linked to a tangible real estate asset, ensuring inherent value and transparency.</p>
            </div>
            <div className="group text-center">
              <div className="w-20 h-20 bg-white border border-gray-100 flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:bg-gold group-hover:text-white transition-all text-gold text-3xl font-bold">02</div>
              <h4 className="text-black font-black uppercase tracking-widest text-lg mb-6">Risk Sharing</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">We believe in mutual growth through fair risk and profit-sharing models (Musharakah & Mudarabah).</p>
            </div>
            <div className="group text-center">
              <div className="w-20 h-20 bg-white border border-gray-100 flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:bg-gold group-hover:text-white transition-all text-gold text-3xl font-bold">03</div>
              <h4 className="text-black font-black uppercase tracking-widest text-lg mb-6">Social Justice</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">Our projects aim to benefit the community through sustainable building and fair labor treatment.</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center animate-fade-in">
           <h3 className="text-black font-black uppercase tracking-widest text-sm mb-12 flex items-center justify-center">
              <span className="w-12 h-[1px] bg-gold mr-6"></span>
              Certifications & Audits
              <span className="w-12 h-[1px] bg-gold ml-6"></span>
           </h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 hover:opacity-100 transition-all duration-700">
              <div className="p-8 border border-gray-100 flex items-center justify-center font-black text-xs uppercase tracking-widest">Shariah Board A</div>
              <div className="p-8 border border-gray-100 flex items-center justify-center font-black text-xs uppercase tracking-widest">Ethical Audit Group</div>
              <div className="p-8 border border-gray-100 flex items-center justify-center font-black text-xs uppercase tracking-widest">Lahore Religious Council</div>
              <div className="p-8 border border-gray-100 flex items-center justify-center font-black text-xs uppercase tracking-widest">Global Halal Finance</div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ShariahCompliance;
