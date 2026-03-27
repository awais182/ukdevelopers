
import React from 'react';
import SEO from '../../components/common/SEO';
import { COMPANY_INFO } from '../../COMPANY_INFO';
import { PROJECTS, API_BASE } from '../../constants';

const Contact: React.FC = () => {
  // Get all 17 projects
  const allProjects = PROJECTS;

  // form state
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [projectId, setProjectId] = React.useState('');
  const [message, setMessage] = React.useState('');

  const [status, setStatus] = React.useState<'idle'|'sending'|'success'|'error'>('idle');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`${API_BASE}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, projectId, message, source: 'form' }),
      });
      if (!res.ok) throw new Error('Network error');
      setStatus('success');
      setName(''); setEmail(''); setPhone(''); setProjectId(''); setMessage('');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 animate-fade-in bg-white font-sans">
      <SEO 
        title="Contact Us | Inquire About Your Next Landmark"
        description="Connect with our real estate experts today. Whether you are looking for an investment opportunity or a luxury home in Lahore, we are here to assist you."
        keywords="Contact UK Developers, Lahore Office, Real Estate Inquiry, Property Consultation"
      />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-16 md:gap-20">
            <div className="lg:col-span-1">
              <span className="text-gold uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold block mb-3 sm:mb-4">Connect With Us</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 sm:mb-8 uppercase tracking-tighter">Get In Touch</h1>
              <p className="text-gray-600 mb-8 sm:mb-12 font-normal text-sm sm:text-base md:text-lg leading-relaxed">
                With 27 years of heritage and expertise in Shariah-compliant real estate development, our consultants are ready to guide you through your next investment or luxury residential experience.
              </p>

              <div className="space-y-10">
                <div>
                  <h4 className="text-black font-black uppercase tracking-widest text-sm mb-4 border-l-4 border-gold pl-4">Head Office</h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium hover:text-gray-800 transition-colors">
                    <a href={COMPANY_INFO.office.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-gold hover:underline">
                      CS-12, Falcon, Downtown<br />
                      Fazaia Housing Scheme, Phase-1, Block H<br />
                      Raiwind Road, Lahore, Pakistan
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="text-black font-black uppercase tracking-widest text-sm mb-4 border-l-4 border-gold pl-4">Availability</h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    Open 24/7 - 7 Days a Week<br />
                    <span className="text-gold font-bold">Always Ready to Assist</span>
                  </p>
                </div>
                <div>
                  <h4 className="text-black font-black uppercase tracking-widest text-sm mb-4 border-l-4 border-gold pl-4">Direct Contact</h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    <a href={`tel:${COMPANY_INFO.contact.phone.replace(/\s/g, '')}`} className="hover:text-gold hover:underline">
                      P: {COMPANY_INFO.contact.phone}
                    </a><br />
                    <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-gold hover:underline">
                      E: {COMPANY_INFO.contact.email}
                    </a><br />
                    <span className="text-gray-700">UAN: {COMPANY_INFO.contact.phone}</span>
                  </p>
                </div>

                <div>
                  <h4 className="text-black font-black uppercase tracking-widest text-sm mb-4 border-l-4 border-gold pl-4">Follow Us</h4>
                  <div className="flex flex-wrap gap-3">
                    <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-black hover:bg-gold p-2.5 border border-gold rounded transition-all" title="Facebook">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      </svg>
                    </a>
                    <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-black hover:bg-gold p-2.5 border border-gold rounded transition-all" title="Instagram">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a href={COMPANY_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-black hover:bg-gold p-2.5 border border-gold rounded transition-all" title="LinkedIn">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>
                    <a href={COMPANY_INFO.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-black hover:bg-gold p-2.5 border border-gold rounded transition-all" title="X (Twitter)">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.808l-8.331 9.518L24 21.75h-7.593l-5.447-7.132-6.234 7.132h-3.81l8.973-10.251L0 2.25h7.593l4.915 6.483L17.293 2.25h.951zm-1.524 19.5h2.094L5.323 5.402H3.11l13.609 16.348z" />
                      </svg>
                    </a>
                    <a href={COMPANY_INFO.social.youtube} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-black hover:bg-gold p-2.5 border border-gold rounded transition-all" title="YouTube">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </a>
                    <a href={COMPANY_INFO.social.tiktok} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-black hover:bg-gold p-2.5 border border-gold rounded transition-all" title="TikTok">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.546 5.011c-.374-.207-.78-.346-1.206-.405-.428-.061-.855-.031-1.18.09.007.333.007 1.555.007 1.889 0 2.415 0 5.404 3.29 5.404.03 0 .059 0 .089-.001v3.228c-.292.04-.586.063-.879.071-2.002.058-3.31-1.234-3.652-1.606-.62-.696-1.104-1.734-1.255-2.85-.252-2.056.152-4.117 1.121-5.8.968-1.687 2.495-2.904 4.18-3.51z" />
                      </svg>
                    </a>
                    <a href={COMPANY_INFO.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-black hover:bg-gold p-2.5 border border-gold rounded transition-all" title="WhatsApp">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white p-6 sm:p-8 md:p-12 border border-gray-100 shadow-2xl">
                <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] text-gold font-black uppercase tracking-widest">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full bg-gray-50 border-b-2 border-gray-100 p-4 text-black focus:outline-none focus:border-gold transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] text-gold font-black uppercase tracking-widest">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-gray-50 border-b-2 border-gray-100 p-4 text-black focus:outline-none focus:border-gold transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] text-gold font-black uppercase tracking-widest">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+92 300 0000000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full bg-gray-50 border-b-2 border-gray-100 p-4 text-black focus:outline-none focus:border-gold transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="project-select" className="text-[10px] text-gold font-black uppercase tracking-widest">Interested Project</label>
                      <select
                        id="project-select"
                        value={projectId}
                        onChange={(e) => setProjectId(e.target.value)}
                        className="w-full bg-gray-50 border-b-2 border-gray-100 p-4 text-black focus:outline-none focus:border-gold transition-all font-medium appearance-none"
                        aria-label="Select a project"
                      >
                        <option value="">Select a project</option>
                        {allProjects.map((project) => {
                          const category = project.category === 'Residential' ? ' (Residential)' : ' (Commercial)';
                          const status = project.status === 'Delivered' ? ' [✓ Delivered]' : project.status === 'Under Construction' ? ' [● Ongoing]' : ' [◐ Upcoming]';
                          return (
                            <option key={project.id} value={project.id}>
                              {project.title}{category}{status}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] text-gold font-black uppercase tracking-widest">Your Message</label>
                    <textarea 
                      rows={6}
                      placeholder="Tell us about your requirements..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-gray-50 border-b-2 border-gray-100 p-4 text-black focus:outline-none focus:border-gold transition-all resize-none font-medium"
                    ></textarea>
                  </div>

                  <button type="submit" disabled={status==='sending'} className="w-full bg-black text-gold hover:bg-gold hover:text-white font-black uppercase tracking-[0.4em] py-6 transition-all shadow-xl disabled:opacity-50">
                    {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
                  </button>
                  {status === 'success' && <p className="text-green-600 mt-2">Inquiry sent successfully!</p>}
                  {status === 'error' && <p className="text-red-600 mt-2">Failed to send. Please try again later.</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
