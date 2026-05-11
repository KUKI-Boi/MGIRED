import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTranslation } from 'react-i18next';
import { Phone, MapPin, Mail, X } from 'lucide-react';

export function CTABanner() {
  const revealRef = useScrollReveal();
  const { t, i18n } = useTranslation();
  const [contactOpen, setContactOpen] = useState(false);

  const isEnglish = i18n.language?.startsWith('en');

  return (
    <section id="contact" className="bg-[#050505] py-[clamp(80px,10vw,160px)] px-6 md:px-12 text-center flex flex-col items-center border-b border-white/5">
      <div 
        ref={revealRef}
        className="reveal-hidden transition-all duration-[900ms] max-w-3xl mx-auto"
      >
        <h2 className="font-serif text-[clamp(40px,5vw,80px)] text-[#f0ece4] mb-6 leading-[1.1]">
          {t('cta.title')} <br />
          <span className="italic text-brand-accent">{t('cta.accent')}</span>
        </h2>
        
        <p className="font-sans text-[#f0ece4]/70 text-lg md:text-xl font-light mb-12">
          {t('cta.subtitle')}
        </p>

        <button
          onClick={() => setContactOpen(true)}
          className="inline-block px-10 py-5 rounded-full bg-[#f0ece4] text-[#0a0a0a] font-sans text-sm uppercase tracking-widest font-medium hover:bg-brand-accent transition-all duration-300 shadow-lg hover:shadow-brand-accent/20 cursor-pointer"
        >
          {t('cta.button')}
        </button>
      </div>

      {/* Premium Contact Details Modal */}
      {contactOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          <div className="bg-[#0c0c0e] border border-white/10 rounded-2xl md:rounded-[32px] w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-[0_24px_64px_rgba(0,0,0,0.9)] relative p-6 md:p-12 animate-in fade-in-50 zoom-in-95 duration-300 text-left scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {/* Close Button */}
            <button 
              onClick={() => setContactOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full border border-white/10 hover:border-brand-accent/50 text-[#f0ece4]/60 hover:text-[#f0ece4] transition-colors duration-300 bg-white/5 cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Header / Title */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3 bg-brand-accent/10 border border-brand-accent/20 px-3.5 py-1 rounded-full w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-accent">
                  {isEnglish ? "Get in Touch" : "ಸಂಪರ್ಕಿಸಿ"}
                </span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-[#f0ece4] leading-tight">
                {isEnglish ? "Contact MGIRED" : "MGIRED ಸಂಪರ್ಕ ಮಾಹಿತಿ"}
              </h3>
              <p className="font-sans text-[#f0ece4]/60 text-sm md:text-base mt-2 font-light">
                {isEnglish ? "Our representatives are available during business hours to assist you." : "ನಮ್ಮ ಪ್ರತಿನಿಧಿಗಳು ಕಚೇರಿ ವೇಳೆಯಲ್ಲಿ ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ಲಭ್ಯವಿರುತ್ತಾರೆ."}
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="space-y-6">
              {/* Address Row */}
              <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-accent/25 transition-all duration-300">
                <div className="p-3 rounded-xl bg-brand-accent/10 text-brand-accent shrink-0 h-fit">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#f0ece4]/40 mb-1.5">{isEnglish ? "Postal Address" : "ಅಂಚೆ ವಿಳಾಸ"}</h4>
                  <p className="font-sans text-sm text-[#f0ece4]/80 leading-relaxed font-light">
                    <strong>{t('footer.addressLine1')}</strong><br />
                    {t('footer.addressLine2')}<br />
                    {t('footer.addressLine3')}
                  </p>
                </div>
              </div>

              {/* Grid for Mail and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Section */}
                <a 
                  href="mailto:mgiredblr@gmail.com"
                  className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-accent/25 hover:bg-white/[0.04] transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-brand-accent/10 text-brand-accent group-hover:scale-110 transition-transform duration-300 shrink-0 h-fit">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#f0ece4]/40 mb-1.5">{isEnglish ? "Email Address" : "ಇಮೇಲ್ ವಿಳಾಸ"}</h4>
                    <p className="font-sans text-sm font-medium text-[#f0ece4] group-hover:text-brand-accent transition-colors break-all">
                      mgiredblr@gmail.com
                    </p>
                  </div>
                </a>

                {/* Landlines Section */}
                <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-accent/25 transition-all duration-300">
                  <div className="p-3 rounded-xl bg-brand-accent/10 text-brand-accent shrink-0 h-fit">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#f0ece4]/40 mb-1.5">{isEnglish ? "Landlines" : "ದೂರವಾಣಿ ಸಂಖ್ಯೆಗಳು"}</h4>
                    <div className="space-y-1">
                      <a href="tel:08023626359" className="block font-sans text-sm text-[#f0ece4]/80 hover:text-brand-accent transition-colors">
                        080-23626359
                      </a>
                      <a href="tel:08023626493" className="block font-sans text-sm text-[#f0ece4]/80 hover:text-brand-accent transition-colors">
                        080-23626493
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* LinkedIn Row */}
              <a 
                href="https://www.linkedin.com/in/mahatma-gandhi-institute-of-rural-energy-and-development-0626a6406/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-accent/25 hover:bg-white/[0.04] transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-brand-accent/10 text-brand-accent group-hover:scale-110 transition-transform duration-300 shrink-0 h-fit">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-brand-accent"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#f0ece4]/40 mb-1.5">LinkedIn Profile</h4>
                  <p className="font-sans text-sm font-medium text-[#f0ece4] group-hover:text-brand-accent transition-colors">
                    Mahatma Gandhi Institute of Rural Energy and Development
                  </p>
                </div>
              </a>
            </div>

            {/* Footer Button to Close */}
            <div className="mt-10 pt-6 border-t border-white/5 flex justify-end">
              <button
                onClick={() => setContactOpen(false)}
                className="px-8 py-3.5 rounded-full bg-[#f0ece4] text-[#0a0a0a] hover:bg-brand-accent hover:text-[#0a0a0a] font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer"
              >
                {isEnglish ? "Got it, Close" : "ಸರಿ, ಮುಚ್ಚಿ"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
