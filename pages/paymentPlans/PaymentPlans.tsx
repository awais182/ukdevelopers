import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../constants';
import SEO from '../../components/common/SEO';

const PaymentPlans: React.FC = () => {
  // Get only ongoing projects (Under Construction)
  const activeProjects = PROJECTS.filter(p => p.status === 'Under Construction');

  return (
    <div className="font-sans bg-white">
      <SEO
        title="Payment Plans | Flexible Investment Solutions"
        description="Explore flexible payment plans for UK Developers' projects. Easy booking, installments, and Shariah-compliant investment options across all active projects."
        keywords="Payment Plans, Easy Installments, Real Estate Investment, Flexible Financing, Lahore"
      />

      {/* Hero Section */}
      <section className="relative py-14 sm:py-20 md:py-32 bg-gradient-to-r from-corporate-black to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-[2px] w-12 bg-gold"></div>
              <span className="text-gold text-[10px] font-black uppercase tracking-[0.6em]">Investment Portal</span>
              <div className="h-[2px] w-12 bg-gold"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-8 leading-tight">
              Payment <span className="text-gold">Plans</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Flexible, transparent, and Shariah-compliant payment structures designed for your investment journey.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Plans Grid */}
      <section className="py-14 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {activeProjects.map((project) => (
              <div key={project.id}>
                {/* Project Header */}
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] bg-gold text-black">UK {project.number}</span>
                    <span className={`px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] ${
                      project.status === 'Under Construction' ? 'bg-gold/95 text-black' : 'bg-gray-700 text-white'
                    }`}>
                      {project.status === 'Under Construction' ? '● Ongoing' : '◐ Upcoming'}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight mb-4">
                    {project.name}
                  </h2>
                  <p className="text-gray-600 text-lg max-w-3xl">{project.description}</p>
                </div>

                {/* Payment Structure */}
                <div className="bg-corporate-black p-6 sm:p-8 md:p-12 lg:p-14 text-white shadow-[0_40px_100px_rgba(0,0,0,0.15)] relative overflow-hidden border-t-8 border-gold rounded-lg mb-6 sm:mb-8">
                  {/* UK 15 Special Payment Table */}
                  {project.id === 15 ? (
                    <div className="space-y-8">
                      {/* 3 Marla Structure */}
                      <div className="space-y-4">
                        <h4 className="text-xl font-black uppercase tracking-[0.3em] text-gold mb-4">3 Marla Luxury Home</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center gap-2 border-b border-white/10 pb-3 flex-wrap">
                            <span className="text-xs sm:text-sm font-bold text-gray-300">Booking (5%)</span>
                            <span className="text-base sm:text-lg font-black text-white">PKR 995,000</span>
                          </div>
                          <div className="flex justify-between items-center border-b border-white/10 pb-3">
                            <span className="text-sm font-bold text-gray-300">Confirmation (15%)</span>
                            <span className="text-lg font-black text-white">PKR 2,985,000</span>
                          </div>
                          <div className="flex justify-between items-center border-b border-white/10 pb-3">
                            <span className="text-sm font-bold text-gray-300">3% in 10 Installments</span>
                            <span className="text-lg font-black text-white">PKR 597,000</span>
                          </div>
                          <div className="flex justify-between items-center border-b border-white/10 pb-3">
                            <span className="text-sm font-bold text-gray-300">20% Grey Works Completion</span>
                            <span className="text-lg font-black text-white">PKR 3,980,000</span>
                          </div>
                          <div className="flex justify-between items-center border-b border-white/10 pb-3">
                            <span className="text-sm font-bold text-gray-300">30% on Possession</span>
                            <span className="text-lg font-black text-white">PKR 5,970,000</span>
                          </div>
                          <div className="flex justify-between items-center pt-4 bg-gold/10 px-4 py-3 rounded">
                            <span className="text-base font-black text-gold">Total Value</span>
                            <span className="text-2xl font-black text-gold">PKR 19,900,000</span>
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-white/10 my-8"></div>

                      {/* 5 Marla Structure */}
                      <div className="space-y-4">
                        <h4 className="text-xl font-black uppercase tracking-[0.3em] text-gold mb-4">5 Marla Luxury Home</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center border-b border-white/10 pb-3">
                            <span className="text-sm font-bold text-gray-300">Booking (5%)</span>
                            <span className="text-lg font-black text-white">PKR 1,495,000</span>
                          </div>
                          <div className="flex justify-between items-center border-b border-white/10 pb-3">
                            <span className="text-sm font-bold text-gray-300">Confirmation (15%)</span>
                            <span className="text-lg font-black text-white">PKR 4,485,000</span>
                          </div>
                          <div className="flex justify-between items-center border-b border-white/10 pb-3">
                            <span className="text-sm font-bold text-gray-300">3% in 10 Installments</span>
                            <span className="text-lg font-black text-white">PKR 897,000</span>
                          </div>
                          <div className="flex justify-between items-center border-b border-white/10 pb-3">
                            <span className="text-sm font-bold text-gray-300">20% Grey Works Completion</span>
                            <span className="text-lg font-black text-white">PKR 5,980,000</span>
                          </div>
                          <div className="flex justify-between items-center border-b border-white/10 pb-3">
                            <span className="text-sm font-bold text-gray-300">30% on Possession</span>
                            <span className="text-lg font-black text-white">PKR 8,970,000</span>
                          </div>
                          <div className="flex justify-between items-center pt-4 bg-gold/10 px-4 py-3 rounded">
                            <span className="text-base font-black text-gold">Total Value</span>
                            <span className="text-2xl font-black text-gold">PKR 29,900,000</span>
                          </div>
                        </div>
                      </div>

                      {/* Terms & Conditions */}
                      <div className="border-t border-white/10 pt-8 space-y-4">
                        <h4 className="text-base font-black uppercase tracking-[0.3em] text-gold">Terms & Conditions</h4>
                        <ul className="space-y-2 text-xs text-gray-400">
                          <li className="flex items-start gap-3">
                            <span className="text-gold mt-1">✓</span>
                            <span>Payment should be made through cross cheque or payorder in favour of UK Developers Pvt Ltd.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-gold mt-1">✓</span>
                            <span>10% Extra Charges on each Category (Park facing / Corner)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-gold mt-1">✓</span>
                            <span>5% Rebate on Full Payment.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-gold mt-1">✓</span>
                            <span>1 Year Payment Plan Available</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    // Default payment structure for other projects
                    <div className="space-y-12">
                      <div className="flex justify-between items-end border-b border-white/5 pb-8">
                        <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Initial Equity</span>
                        <span className="text-3xl md:text-4xl font-black text-white">{project.paymentPlan?.downPayment}</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-3">
                          <span className="text-[9px] text-gray-500 font-black uppercase tracking-widest block">Monthly</span>
                          <span className="text-lg font-black">{project.paymentPlan?.monthlyInstallment}</span>
                        </div>
                        <div className="space-y-3">
                          <span className="text-[9px] text-gray-500 font-black uppercase tracking-widest block">Quarterly</span>
                          <span className="text-lg font-black">{project.paymentPlan?.quarterlyInstallment}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-end border-b border-white/5 pb-8">
                        <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Final Ledger</span>
                        <span className="text-lg font-black text-white">{project.paymentPlan?.onPossession}</span>
                      </div>

                      <div className="pt-4">
                        <span className="text-[10px] text-gold font-black uppercase tracking-widest block mb-3">Starting Portfolio Value</span>
                        <span className="text-4xl md:text-5xl font-black text-white tracking-tighter">{project.paymentPlan?.totalPrice}</span>
                      </div>
                    </div>
                  )}

                  <Link to="/contact" className="w-full mt-16 bg-gold text-white font-black uppercase tracking-[0.4em] py-5 md:py-6 hover:bg-white hover:text-black transition-all shadow-xl group text-xs rounded text-center inline-block">
                    Secure Consultation
                    <span className="ml-4 group-hover:translate-x-2 transition-transform inline-block">→</span>
                  </Link>
                </div>

                {/* View Project Link */}
                <div className="text-center">
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-block text-gold hover:text-black font-black uppercase tracking-[0.3em] text-sm border-b-2 border-gold hover:border-black transition-all"
                  >
                    View Full Project Details →
                  </Link>
                </div>

                {/* Divider between projects */}
                {project.id !== activeProjects[activeProjects.length - 1].id && (
                  <div className="border-b border-gray-200 mt-20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-corporate-black to-gray-900 text-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
            Ready to <span className="text-gold">Invest</span>?
          </h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Our team is ready to help you find the perfect payment plan that suits your investment goals. Contact us today for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gold hover:bg-white text-black px-10 py-4 font-black uppercase tracking-[0.3em] text-sm transition-all shadow-lg rounded"
            >
              Get In Touch
            </Link>
            <Link
              to="/projects"
              className="border-2 border-gold hover:bg-gold hover:text-black text-white px-10 py-4 font-black uppercase tracking-[0.3em] text-sm transition-all rounded"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentPlans;
