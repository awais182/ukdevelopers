import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { EXECUTIVES } from '../../constants';
import SEO from '../../components/common/SEO';

const getRoleSEOContent = (role: string, name: string) => {
  const r = role.toLowerCase();
  if (r.includes('founder of uk group') || (r.includes('founder') && r.includes('uk group'))) {
    return {
      metaDescription: `${name} is the Founder of UK Group of Companies and the visionary behind UK Developers. Building a legacy of ethical, Shariah-compliant real estate development in Lahore and Pakistan.`,
      keywords: `${name}, UK Group Founder, UK Developers Founder, Lahore Real Estate Founder, Pakistan Property`,
      heading: 'Founder of UK Group of Companies',
      intro: `${name} founded the UK Group of Companies and laid the foundation for what would become one of Lahore's most trusted names in real estate. His vision for quality, integrity, and community-focused development continues to guide UK Developers after decades of growth and landmark projects.`,
      blocks: [
        { title: 'Founding Vision', text: 'As Founder of the UK Group of Companies, he established the values of ethical development, transparent dealings, and lasting quality that define UK Developers today. From the historic roots in Azam Cloth Market to modern corridors, his legacy shapes every project.' },
        { title: 'Legacy & Impact', text: 'Under his founding vision, UK Developers has delivered 12+ commercial projects and pioneered modern high-rise construction in heritage zones, always with Shariah-compliant principles and a commitment to building for generations.' },
      ],
    };
  }
  if (r.includes('chairman') || r.includes('founding')) {
    return {
      metaDescription: `${name} is Chairman and Founding Visionary at UK Developers, Lahore's premier real estate developer. Leading 27 years of Shariah-compliant development and landmark projects across Pakistan.`,
      keywords: `${name}, UK Developers Chairman, Lahore Real Estate Founder, Pakistan Property Development Leadership`,
      heading: 'Chairman & Founding Visionary',
      intro: `${name} leads UK Developers as Chairman and Founding Visionary, steering the company's strategic direction and upholding its 27-year legacy of excellence in Lahore's real estate sector. Under his stewardship, UK Developers has delivered 12+ commercial projects and pioneered modern high-rise construction in heritage zones.`,
      blocks: [
        { title: 'Strategic Leadership', text: 'As Chairman, he ensures every development aligns with the company\'s core values of quality, delivery, and integrity. His vision for Shariah-compliant, ethical development has positioned UK Developers as a trusted name in Lahore and beyond.' },
        { title: 'Legacy & Heritage', text: 'From Azam Cloth Market to Pine Avenue Road and Ittehad Town, his leadership has expanded UK Developers\' footprint while preserving the highest standards of construction and client trust.' },
      ],
    };
  }
  if (r.includes('chief executive') || r.includes('ceo')) {
    return {
      metaDescription: `${name}, Chief Executive Officer at UK Developers, drives operational excellence and strategic growth for Lahore's leading Shariah-compliant real estate developer.`,
      keywords: `${name}, UK Developers CEO, Lahore Real Estate Executive, Pakistan Property CEO`,
      heading: 'Chief Executive Officer',
      intro: `${name} serves as Chief Executive Officer at UK Developers, combining operational precision with strategic vision to deliver landmark developments across Lahore. His focus on execution and quality ensures every project meets the highest standards expected by investors and homeowners.`,
      blocks: [
        { title: 'Operational Excellence', text: 'As CEO, he oversees day-to-day operations, project delivery, and stakeholder relations. His commitment to timely execution and transparent dealings reinforces UK Developers\' reputation for reliability.' },
        { title: 'Growth & Strategy', text: 'He leads the expansion of UK Developers into new corridors and residential schemes while maintaining the company\'s Shariah-compliant principles and focus on premium quality.' },
      ],
    };
  }
  if (r.includes('chief operating') || r.includes('coo')) {
    return {
      metaDescription: `${name}, Chief Operating Officer at UK Developers, ensures flawless project execution and construction management for Lahore's premier real estate developer.`,
      keywords: `${name}, UK Developers COO, Lahore Construction Operations, Pakistan Real Estate COO`,
      heading: 'Chief Operating Officer',
      intro: `${name} is Chief Operating Officer at UK Developers, driving operational excellence across all projects. His expertise in construction management and coordination ensures timely delivery and seamless execution from planning to handover.`,
      blocks: [
        { title: 'Operations & Delivery', text: 'As COO, he coordinates construction timelines, resource allocation, and quality control across UK Developers\' portfolio. His systems-oriented approach keeps projects on track and within scope.' },
        { title: 'Execution Standards', text: 'He ensures that every development—from commercial towers to residential communities—meets UK Developers\' benchmarks for safety, quality, and client satisfaction.' },
      ],
    };
  }
  if (r.includes('director')) {
    return {
      metaDescription: `${name}, Director at UK Developers, brings extensive expertise to Lahore's leading real estate developer. Driving partnerships, design, and investment strategy for Shariah-compliant developments.`,
      keywords: `${name}, UK Developers Director, Lahore Real Estate Director, Pakistan Property Leadership`,
      heading: 'Director',
      intro: `${name} serves as Director at UK Developers, contributing deep industry expertise to the company\'s portfolio strategy, partnerships, and client experience. His role supports the delivery of premium residential and commercial projects across Lahore.`,
      blocks: [
        { title: 'Portfolio & Partnerships', text: 'As Director, he oversees key strategic initiatives including premium partnerships, investment strategy, and client relations. His focus on value and heritage aligns with UK Developers\' long-term vision.' },
        { title: 'Design & Experience', text: 'He ensures that every project reflects the highest standards of design integrity and client experience, from commercial spaces to luxury residences.' },
      ],
    };
  }
  return {
    metaDescription: `${name} is a key leader at UK Developers, Lahore's premier Shariah-compliant real estate developer. Contributing to 27 years of excellence in quality, delivery, and integrity.`,
    keywords: `${name}, UK Developers Leadership, Lahore Real Estate, Pakistan Property`,
    heading: role,
    intro: `${name} is a valued member of the UK Developers leadership team, contributing to the company's mission of building legacies through ethical, high-quality development in Lahore.`,
    blocks: [
      { title: 'Role & Contribution', text: `In their role as ${role}, they help steer UK Developers toward continued growth while upholding the company's commitment to Shariah compliance and client trust.` },
    ],
  };
};

const ExecutiveDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const execId = Number(id);
  const exec = EXECUTIVES.find(e => e.id === execId);

  if (!exec) {
    return (
      <div className="pt-20 sm:pt-24 md:pt-32 pb-12 md:pb-20 container mx-auto px-4 sm:px-6 font-sans">
        <p className="text-center text-gray-600 text-sm sm:text-base">Executive not found.</p>
        <Link to="/about#executives" className="block text-center text-gold font-black uppercase text-xs sm:text-sm mt-6 hover:underline">← Back to About</Link>
      </div>
    );
  }

  const seoContent = getRoleSEOContent(exec.role, exec.name);

  return (
    <div className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 font-sans bg-white min-h-screen">
      <SEO
        title={`${exec.name} — ${exec.role}`}
        description={seoContent.metaDescription}
        keywords={seoContent.keywords}
      />
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <Link to="/about#executives" className="text-gold text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-6 inline-flex items-center hover:text-black transition-colors">
          <span className="mr-2">←</span> Back to About
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Image - responsive */}
          <div className="lg:col-span-4">
            <div className="aspect-[3/4] max-w-md mx-auto lg:max-w-none overflow-hidden rounded-lg shadow-2xl border-b-4 border-gold">
              <img src={exec.imageUrl} alt={exec.name} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="lg:col-span-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black uppercase tracking-tight mb-2 sm:mb-3">{exec.name}</h1>
            <p className="text-gold text-xs sm:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6">{exec.role}</p>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">{exec.bio}</p>

            {/* Quote */}
            <blockquote className="border-l-4 border-gold pl-4 sm:pl-6 py-2 sm:py-3 mb-6 sm:mb-8 bg-gold/5 rounded-r">
              <p className="text-black text-sm sm:text-base md:text-lg font-medium italic">"{exec.quote}"</p>
            </blockquote>

            {/* Vision */}
            <div className="bg-gray-50 p-4 sm:p-5 md:p-6 border border-gold/10 rounded-lg mb-6 sm:mb-8">
              <h4 className="font-black uppercase text-[10px] sm:text-xs text-gold tracking-[0.2em] mb-2 sm:mb-3">Vision</h4>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{exec.vision}</p>
            </div>

            {/* SEO-friendly content blocks by designation */}
            <div className="space-y-6 sm:space-y-8">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{seoContent.intro}</p>
              {seoContent.blocks.map((block, idx) => (
                <div key={idx}>
                  <h3 className="text-black text-base sm:text-lg font-black uppercase tracking-tight mb-2 sm:mb-3">{block.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{block.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 flex flex-wrap gap-4">
              <Link to="/about#executives" className="bg-gold hover:bg-black text-black hover:text-white px-5 sm:px-6 py-2.5 sm:py-3 font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs transition-all rounded">
                Meet the Team
              </Link>
              <Link to="/contact" className="border-2 border-gold hover:bg-gold text-black px-5 sm:px-6 py-2.5 sm:py-3 font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs transition-all rounded">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveDetail;
