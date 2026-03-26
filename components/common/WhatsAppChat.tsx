import React, { useState } from 'react';
import { COMPANY_INFO } from '../../COMPANY_INFO';

const WhatsAppChat: React.FC = () => {
  const [isOpenChat, setIsOpenChat] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'General Inquiry'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Immediately open WhatsApp for the user (navigate first), then save a copy server-side
      const nameCopy = formData.name;
      const emailCopy = formData.email;
      const phoneCopy = formData.phone;
      const messageCopy = formData.message;

      const whatsappMessage = `Hi, I just submitted an inquiry:\n\nName: ${nameCopy}\nEmail: ${emailCopy}\nPhone: ${phoneCopy}\n\nMessage: ${messageCopy}`;
      const whatsappLink = `https://wa.me/${COMPANY_INFO.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
      // save a copy to backend first so we don't lose it if the user navigates away quickly
      fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: nameCopy,
          email: emailCopy,
          phone: phoneCopy,
          projectId: '',
          message: messageCopy,
          source: 'whatsapp'
        })
      }).catch(err => console.error('Failed to save whatsapp inquiry', err));
      window.open(whatsappLink, '_blank');

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        subject: 'General Inquiry'
      });

      // Close chat UI shortly after
      setTimeout(() => {
        setSubmitSuccess(false);
        setIsOpenChat(false);
      }, 1500);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuickMessage = (message: string) => {
    const whatsappLink = `https://wa.me/${COMPANY_INFO.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <>
      {/* WhatsApp Chat Button - Fully Mobile Responsive */}
      <div className="fixed bottom-4 right-4 xs:bottom-4 xs:right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-40 animate-bounce">
        <button
          onClick={() => setIsOpenChat(!isOpenChat)}
          className="relative group bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-full p-3 xs:p-3.5 sm:p-4 md:p-5 shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 transform flex items-center justify-center min-h-[48px] min-w-[48px] sm:min-h-[56px] sm:min-w-[56px]"
          title="Chat with us on WhatsApp"
          aria-label="Open WhatsApp chat"
        >
          {/* Official WhatsApp SVG icon, smaller and smart */}
          <svg className="w-5 h-5 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{borderRadius: '50%', boxShadow: '0 2px 8px rgba(0,0,0,0.12)'}}>
            <g>
              <circle cx="16" cy="16" r="16" fill="#25D366"/>
              <path d="M23.667 18.667c-.333-.167-1.972-.975-2.278-1.088-.306-.113-.528-.17-.752.168-.222.338-.865 1.098-1.06 1.323-.195.225-.391.252-.726.085-.333-.168-1.416-.518-2.698-1.662-1-.893-1.677-1.995-1.874-2.33-.195-.338-.02-.521.147-.689.151-.151.336-.391.504-.587.168-.196.223-.336.336-.561.113-.225.057-.422-.028-.591-.085-.168-.761-1.831-1.042-2.507-.275-.658-.553-.568-.761-.579-.196-.009-.422-.011-.648-.011-.225 0-.591.085-.899.422-.308.338-1.176 1.156-1.176 2.823 0 1.667 1.204 3.277 1.372 3.505.168.225 2.372 3.648 5.747 5.116.803.329 1.429.527 1.922.673.809.244 1.545.21 2.126.127.649-.096 1.972-.816 2.25-1.603.278-.787.278-1.462.195-1.603-.085-.141-.308-.225-.648-.395z" fill="#fff"/>
              <path d="M16 6.667c-5.15 0-9.333 4.183-9.333 9.333 0 1.65.45 3.22 1.23 4.57l-1.31 4.78 4.91-1.29c1.32.72 2.84 1.14 4.5 1.14 5.15 0 9.333-4.183 9.333-9.333 0-5.15-4.183-9.333-9.333-9.333zm0 16c-1.47 0-2.85-.38-4.03-1.04l-.29-.17-3.09.81.66-3.19-.18-.29c-.71-1.18-1.12-2.54-1.12-3.97 0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" fill="#fff"/>
            </g>
          </svg>
          <span className="absolute -top-1 -right-1 xs:-top-1 xs:-right-1 sm:-top-2 sm:-right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">!</span>
        </button>

        {/* Tooltip - Hidden on Mobile, Visible on Hover on Desktop */}
        <div className="absolute bottom-full right-0 mb-2 xs:mb-2 sm:mb-3 hidden sm:group-hover:block bg-black/90 text-white text-xs rounded px-3 py-2 whitespace-nowrap z-10">
          Chat with us on WhatsApp
          <div className="absolute top-full right-2 w-2 h-2 bg-black/90 transform rotate-45"></div>
        </div>
      </div>

      {/* Chat Window - Fully Responsive on All Screens */}
      {isOpenChat && (
        <div className="fixed inset-0 xs:inset-0 sm:inset-auto sm:bottom-24 sm:right-6 lg:bottom-28 lg:right-8 sm:w-80 md:w-96 z-50 bg-white rounded-none xs:rounded-none sm:rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300 flex flex-col h-full sm:h-auto sm:max-h-[85vh]">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-3 xs:p-4 sm:p-5 flex-shrink-0">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 xs:gap-3 sm:gap-3 min-w-0 flex-1">
                <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.968 1.215l-.357.214-3.71-.973.992 3.63-.235.374a9.861 9.861 0 001.519 5.834c.356.552.748 1.045 1.203 1.486 4.482 4.369 11.701 3.374 15.778-1.996 2.505-3.05 3.779-7.445 3.282-11.537-.052-.4-.333-.773-.823-.923a9.87 9.87 0 00-5.335-.236c-.55.089-1.081.197-1.604.337-.473.132-.94.32-1.39.566z"/>
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-sm xs:text-sm sm:text-base md:text-lg truncate">UK Developers</h3>
                  <p className="text-xs text-green-100 truncate">Usually replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpenChat(false)}
                className="text-white hover:bg-white/20 active:bg-white/30 rounded-full p-2 xs:p-2.5 sm:p-2 transition-colors flex-shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close chat"
              >
                <svg className="w-5 h-5 xs:w-5 xs:h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content - Scrollable Container */}
          <div className="flex-1 overflow-y-auto max-h-[calc(100vh-240px)] xs:max-h-[calc(100vh-280px)] sm:max-h-96 md:max-h-[500px] bg-gray-50 p-3 xs:p-4 sm:p-5">
            {submitSuccess ? (
              <div className="text-center py-6 xs:py-8 sm:py-8">
                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 xs:mb-4 sm:mb-4">
                  <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 mb-1 xs:mb-2 sm:mb-2 text-sm xs:text-base sm:text-base">Thank you!</h4>
                <p className="text-xs xs:text-sm sm:text-sm text-gray-600">Your message has been sent.<br/>We'll redirect you to WhatsApp.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Quick Messages */}
                <div className="space-y-2 mb-4">
                  <p className="text-xs font-bold text-gray-600 uppercase tracking-wider">Quick messages:</p>
                  <div className="space-y-2">
                    {[
                      "I'm interested in your projects",
                      "Tell me about payment plans",
                      "How can I invest?",
                      "Contact me ASAP"
                    ].map((msg, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickMessage(msg)}
                        className="w-full text-left px-3 py-2.5 xs:py-2.5 sm:py-2.5 bg-white hover:bg-green-50 active:bg-green-100 border border-gray-200 hover:border-green-400 rounded-lg text-xs xs:text-xs sm:text-sm text-gray-700 hover:text-green-600 transition-colors duration-200 min-h-[44px] flex items-center"
                      >
                        {msg}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-3">Or send us a message:</p>
                </div>
              </div>
            )}
          </div>

          {/* Form */}
          {!submitSuccess && (
            <form onSubmit={handleSubmit} className="p-3 xs:p-4 sm:p-5 space-y-2.5 xs:space-y-3 sm:space-y-3 border-t border-gray-200 bg-white flex-shrink-0 max-h-[calc(100vh-420px)] overflow-y-auto">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2.5 xs:py-2.5 sm:py-2.5 border border-gray-300 rounded-lg text-xs xs:text-sm sm:text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/50 bg-white transition-colors min-h-[44px]"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2.5 xs:py-2.5 sm:py-2.5 border border-gray-300 rounded-lg text-xs xs:text-sm sm:text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/50 bg-white transition-colors min-h-[44px]"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 xs:py-2.5 sm:py-2.5 border border-gray-300 rounded-lg text-xs xs:text-sm sm:text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/50 bg-white transition-colors min-h-[44px]"
                />
              </div>

              <div>
                <select
                  id="chat-subject"
                  title="Select a subject"
                  aria-label="Select an inquiry subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 xs:py-2.5 sm:py-2.5 border border-gray-300 rounded-lg text-xs xs:text-sm sm:text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/50 bg-white transition-colors min-h-[44px]"
                >
                  <option>General Inquiry</option>
                  <option>Project Information</option>
                  <option>Payment Plans</option>
                  <option>Shariah Compliance</option>
                  <option>Investment Opportunity</option>
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2.5 xs:py-2.5 sm:py-2.5 border border-gray-300 rounded-lg text-xs xs:text-sm sm:text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/50 bg-white transition-colors resize-none min-h-[100px]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 disabled:bg-gray-400 text-white font-bold py-2.5 xs:py-3 sm:py-3 rounded-lg transition-colors duration-200 text-sm xs:text-sm sm:text-base min-h-[48px] flex items-center justify-center"
              >
                {isSubmitting ? 'Sending...' : 'Send via WhatsApp'}
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;
