
import React from 'react';

const WhyChooseUs: React.FC = () => {
  // SVG Line Icons
  const IconCity = () => (
    <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );

  const IconGem = () => (
    <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3L2 7v4l10 4 10-4V7l-10-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 11v4l10 4 10-4v-4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v6M2 11l10 8 10-8" />
    </svg>
  );

  const IconClock = () => (
    <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const IconDocument = () => (
    <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6M9 16h6" />
    </svg>
  );

  const getReasonIcon = (emoji: string) => {
    switch (emoji) {
      case "🏙️":
        return <IconCity />;
      case "💎":
        return <IconGem />;
      case "⏱️":
        return <IconClock />;
      case "📜":
        return <IconDocument />;
      default:
        return <IconCity />;
    }
  };

  const reasons = [
    {
      title: "Lahore Expertise",
      desc: "Deep knowledge of the local soil, regulations, and architectural heritage of Lahore.",
      icon: "🏙️"
    },
    {
      title: "Unmatched Quality",
      desc: "We prioritize premium materials and meticulous execution in every square inch.",
      icon: "💎"
    },
    {
      title: "Timely Delivery",
      desc: "Our project management systems ensure your dream property is delivered on schedule.",
      icon: "⏱️"
    },
    {
      title: "Legal Transparency",
      desc: "Fully compliant with LDA and other regulatory bodies for complete peace of mind.",
      icon: "📜"
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-24 md:py-32 text-black relative overflow-hidden font-sans">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-24">
          <span className="text-gold uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold block mb-3 sm:mb-4">Excellence Guaranteed</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-6 sm:mb-8 uppercase tracking-tight">Redefining Real Estate Standards.</h2>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed font-normal">
            At UK Developers, we don't just build structures; we create benchmarks for lifestyle and corporate success. Our legacy is built on trust, innovation, and an obsession with detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {reasons.map((reason, idx) => (
            <div key={idx} className="p-6 sm:p-8 md:p-10 border-t-4 border-gray-50 hover:border-gold transition-all group bg-gray-50/50">
              <div className="mb-8 transform group-hover:scale-110 transition-transform">{getReasonIcon(reason.icon)}</div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">{reason.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
