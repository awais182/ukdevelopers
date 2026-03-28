import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../constants';
import SEO from '../../components/common/SEO';

const PaymentPlans: React.FC = () => {
  const formatPaymentValue = (value: any) => {
    if (value === null || value === undefined || value === '') return 'N/A';
    if (typeof value === 'string' || typeof value === 'number') return value;
    if (typeof value === 'object') {
      if ('amount' in value && 'percent' in value) {
        return `${value.amount} (${value.percent})`;
      }
      if ('3Marla' in value && '5Marla' in value) {
        return `3 Marla: ${value['3Marla']} | 5 Marla: ${value['5Marla']}`;
      }
      return Object.entries(value).map(([k, v]) => `${k}: ${v}`).join(' | ');
    }
    return String(value);
  };

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
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-3xl border border-gold/20 bg-white p-5 sm:p-6 md:p-8 shadow-md">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.35em] text-gray-500">Quick Plan Summary</p>
                        <h4 className="mt-3 text-2xl sm:text-3xl font-black text-black">Essential payment milestones</h4>
                      </div>
                      <span className="inline-flex items-center rounded-full bg-gold/10 px-3 py-2 text-[10px] uppercase tracking-[0.35em] font-black text-black">Simple, easy to compare</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <div className="rounded-xl border border-gray-200 p-3 bg-gray-50">
                        <p className="text-[10px] uppercase tracking-wider text-gray-500">Booking</p>
                        <p className="mt-2 text-xl sm:text-2xl font-black text-black">{formatPaymentValue(project.paymentPlan?.booking ?? (project.id === 15 ? { amount:'PKR 995,000', percent:'5%' } : 'N/A'))}</p>
                      </div>
                      <div className="rounded-xl border border-gray-200 p-3 bg-gray-50">
                        <p className="text-[10px] uppercase tracking-wider text-gray-500">Confirmation</p>
                        <p className="mt-2 text-xl sm:text-2xl font-black text-black">{formatPaymentValue(project.paymentPlan?.confirmation ?? (project.id === 15 ? { amount:'PKR 2,985,000', percent:'15%' } : 'N/A'))}</p>
                      </div>
                      <div className="rounded-xl border border-gray-200 p-3 bg-gray-50">
                        <p className="text-[10px] uppercase tracking-wider text-gray-500">On Possession</p>
                        <p className="mt-2 text-xl sm:text-2xl font-black text-black">{formatPaymentValue(project.paymentPlan?.onPossession ?? (project.id === 15 ? '30%' : 'N/A'))}</p>
                      </div>
                      <div className="rounded-xl border border-gray-200 p-3 bg-gray-50">
                        <p className="text-[10px] uppercase tracking-wider text-gray-500">Total</p>
                        <p className="mt-2 text-xl sm:text-2xl font-black text-black">{formatPaymentValue(project.paymentPlan?.totalPrice ?? (project.id === 15 ? { '3Marla': 'PKR 19,900,000', '5Marla': 'PKR 29,900,000' } : 'N/A'))}</p>
                      </div>
                    </div>
                    <div className="mt-6 space-y-2 text-sm text-gray-600">
                      <p className="font-black uppercase tracking-wide">More clarity:</p>
                      <p>- Flexible instalment cycles for every investor</p>
                      <p>- Rebate available on full payment</p>
                      <p>- Premium positions subject to extra 10% charges</p>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-gold/20 bg-black text-white p-5 sm:p-6 md:p-8 shadow-xl">
                    {project.id === 15 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[{
                          title: '3 Marla Plan', entries: [
                            ['Booking', 'PKR 995,000'],
                            ['Confirmation', 'PKR 2,985,000'],
                            ['Installments', '10 x PKR 597,000'],
                            ['Grey Works', 'PKR 3,980,000'],
                            ['Possession', 'PKR 5,970,000'],
                            ['Total', 'PKR 19,900,000'],
                          ]
                        }, {
                          title: '5 Marla Plan', entries: [
                            ['Booking', 'PKR 1,495,000'],
                            ['Confirmation', 'PKR 4,485,000'],
                            ['Installments', '10 x PKR 897,000'],
                            ['Grey Works', 'PKR 5,980,000'],
                            ['Possession', 'PKR 8,970,000'],
                            ['Total', 'PKR 29,900,000'],
                          ]
                        }].map((plan) => (
                          <div key={plan.title} className="rounded-xl border border-white/10 p-4 bg-white/10">
                            <p className="text-sm font-black uppercase tracking-wider text-gold mb-3">{plan.title}</p>
                            <div className="space-y-2 text-sm text-white">
                              {plan.entries.map(([label, value]) => (
                                <div key={label} className="flex justify-between gap-2 items-start">
                                  <span className="text-[10px] uppercase tracking-wide text-gray-200">{label}</span>
                                  <span className="font-black text-sm text-white text-right">{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <h4 className="text-lg font-black uppercase tracking-wide text-gold">Standard Installment Disclosure</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {project.paymentPlan?.downPayment && (
                            <div className="p-3 bg-white/10 rounded-lg border border-white/10">
                              <p className="text-[10px] uppercase tracking-wide text-gray-300">Down Payment</p>
                              <p className="mt-2 text-xl font-black">{project.paymentPlan.downPayment}</p>
                            </div>
                          )}
                          {project.paymentPlan?.monthlyInstallment && (
                            <div className="p-3 bg-white/10 rounded-lg border border-white/10">
                              <p className="text-[10px] uppercase tracking-wide text-gray-300">Monthly</p>
                              <p className="mt-2 text-xl font-black">{project.paymentPlan.monthlyInstallment}</p>
                            </div>
                          )}
                          {project.paymentPlan?.quarterlyInstallment && (
                            <div className="p-3 bg-white/10 rounded-lg border border-white/10">
                              <p className="text-[10px] uppercase tracking-wide text-gray-300">Quarterly</p>
                              <p className="mt-2 text-xl font-black">{project.paymentPlan.quarterlyInstallment}</p>
                            </div>
                          )}
                          {project.paymentPlan?.onPossession && (
                            <div className="p-3 bg-white/10 rounded-lg border border-white/10">
                              <p className="text-[10px] uppercase tracking-wide text-gray-300">On Possession</p>
                              <p className="mt-2 text-xl font-black">{project.paymentPlan.onPossession}</p>
                            </div>
                          )}
                        </div>
                        {project.paymentPlan?.totalPrice && (
                          <div className="pt-4 border-t border-white/20">
                            <span className="text-[10px] uppercase tracking-wide text-gray-300">Total Price</span>
                            <p className="mt-2 text-3xl md:text-4xl font-black text-white">{project.paymentPlan.totalPrice}</p>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="mt-6 border-t border-white/10 pt-4 text-xs text-gray-300 space-y-1">
                      <p>All figures are indicative and subject to final approval.</p>
                      <p>Contact our team for project-specific discounts and customised payment plans.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-8">
                  <Link to="/contact" className="w-full sm:w-auto inline-flex justify-center items-center bg-gold text-black font-black uppercase tracking-[0.35em] py-4 px-8 hover:bg-white hover:text-black transition-all shadow-lg rounded-lg">
                    Secure Consultation
                    <span className="ml-3">→</span>
                  </Link>
                  <Link
                    to={`/projects/${project.id}`}
                    className="w-full sm:w-auto inline-flex justify-center items-center border-2 border-gold text-gold font-black uppercase tracking-[0.3em] py-4 px-8 hover:bg-gold hover:text-black transition-all rounded-lg"
                  >
                    View Project Details
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
