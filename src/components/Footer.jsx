import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';

export function Footer() {
  const revealRef = useScrollReveal();
  const { t } = useTranslation();
  
  const [clickCount, setClickCount] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const clickTimeout = useRef(null);

  useEffect(() => {
    window.getArchitect = () => {
      console.log(
        "%c🏛️ Portal engineered with visual excellence by Likitth Kumar B M %c",
        "color: #4ade80; font-weight: bold; font-size: 14px; background: #0f172a; padding: 6px 12px; border-radius: 8px; border: 1px solid #22c55e;",
        ""
      );
      return "Likitth Kumar B M";
    };
  }, []);

  const handleDotClick = () => {
    const now = Date.now();
    setClickCount((prev) => {
      const nextCount = prev + 1;
      if (nextCount === 3) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
        return 0; // reset
      }
      return nextCount;
    });

    if (clickTimeout.current) clearTimeout(clickTimeout.current);
    clickTimeout.current = setTimeout(() => {
      setClickCount(0);
    }, 1200); // Reset count if no click within 1.2s
  };

  return (
    <footer className="bg-brand-bg pt-24 pb-12 px-6 md:px-12 relative">
      <div 
        ref={revealRef}
        className="reveal-hidden transition-all duration-[900ms] max-w-[1320px] mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          {/* Col 1 */}
          <div>
            <h3 className="font-serif text-2xl tracking-wider text-brand-text mb-6">
              MGIRED<span className="text-brand-accent">®</span>
            </h3>
            <p className="font-sans text-brand-text/60 text-sm leading-relaxed max-w-[250px]">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-brand-text uppercase tracking-widest text-xs font-semibold mb-2">{t('footer.navTitle')}</h4>
            <a href="#about" className="font-sans text-brand-text/60 text-sm hover:text-brand-text transition-colors w-fit">{t('nav.about')}</a>
            <a href="#jobs" className="font-sans text-brand-text/60 text-sm hover:text-brand-text transition-colors w-fit">{t('nav.jobs')}</a>
            <a href="#heritage-village" className="font-sans text-brand-text/60 text-sm hover:text-brand-text transition-colors w-fit">{t('nav.location')}</a>
            <a href="#government-schemes" className="font-sans text-brand-text/60 text-sm hover:text-brand-text transition-colors w-fit">{t('nav.schemes')}</a>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-brand-text uppercase tracking-widest text-xs font-semibold mb-2">{t('footer.contactTitle')}</h4>
            <a href="mailto:mgiredblr@gmail.com" className="font-sans text-brand-text/60 text-sm hover:text-brand-text transition-colors w-fit break-all">mgiredblr@gmail.com</a>
            <a href="tel:08023626359" className="font-sans text-brand-text/60 text-sm hover:text-brand-text transition-colors w-fit">080-23626359</a>
            <a href="tel:08023626493" className="font-sans text-brand-text/60 text-sm hover:text-brand-text transition-colors w-fit">080-23626493</a>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-brand-text uppercase tracking-widest text-xs font-semibold mb-2">{t('footer.addressTitle')}</h4>
            <p className="font-sans text-brand-text/60 text-sm leading-relaxed">
              <strong>{t('footer.addressLine1')}</strong><br />
              {t('footer.addressLine2')}<br />
              {t('footer.addressLine3')}
            </p>
            <div className="flex gap-4 mt-4">
              <a 
                href="https://www.linkedin.com/in/mahatma-gandhi-institute-of-rural-energy-and-development-0626a6406/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-brand-accent/50 text-brand-text/60 hover:text-brand-text transition-all duration-300 bg-white/5"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-brand-accent group-hover:scale-110 transition-transform duration-300"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="font-sans text-xs uppercase tracking-wider font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-brand-text/40 text-xs">
            © {new Date().getFullYear()} MGIRED®. All rights reserved
            <span 
              onClick={handleDotClick} 
              className="cursor-default select-none inline-block align-baseline"
              style={{ paddingLeft: '1px', paddingRight: '4px' }}
            >
              .
            </span>
          </p>
          <div className="flex gap-6">
            <a href="#privacy-policy" className="font-sans text-brand-text/40 text-xs hover:text-brand-text transition-colors">Privacy Policy</a>
            <a href="#terms" className="font-sans text-brand-text/40 text-xs hover:text-brand-text transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>

      {/* Hidden Architect Toast */}
      <div 
        className={`fixed bottom-6 right-6 z-[9999] bg-slate-950/90 backdrop-blur-md border border-brand-accent/30 rounded-2xl p-4 shadow-2xl transition-all duration-500 max-w-sm transform ${
          showToast 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              className="w-4 h-4 text-brand-accent animate-pulse"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <p className="font-sans text-[10px] text-brand-accent uppercase tracking-wider font-semibold">Architect Sign-off</p>
            <p className="font-sans text-brand-text text-sm font-medium">Likitth Kumar B M</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
