import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTranslation } from 'react-i18next';

export function About() {
  const revealRef = useScrollReveal();
  const { t, i18n } = useTranslation();

  const isEnglish = i18n.language?.startsWith('en');

  return (
    <section id="about" className="py-[clamp(80px,10vw,160px)] px-6 md:px-12 bg-brand-bg relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* Left Column: Heading */}
          <div 
            ref={revealRef}
            className="reveal-hidden transition-all duration-[900ms]"
          >
            <h2 className="font-serif text-[clamp(32px,4vw,60px)] leading-tight text-brand-text">
              {t('about.title')}
            </h2>
          </div>

          {/* Right Column: Copy */}
          <div 
            ref={revealRef}
            className="reveal-hidden delay-200 transition-all duration-[900ms]"
          >
            <p className="font-sans text-brand-text/70 text-lg leading-relaxed font-light mb-8">
              {t('about.desc')}
            </p>
            <a 
              href="#about-details" 
              className="link-underline font-sans text-sm tracking-widest uppercase text-brand-accent inline-block pb-1 hover:text-brand-text transition-colors font-medium"
            >
              {isEnglish ? "Discover Our Heritage, Vision & Pillars →" : "ನಮ್ಮ ಪರಂಪರೆ, ದೃಷ್ಟಿಕೋನ ಮತ್ತು ಸ್ತಂಭಗಳನ್ನು ಅನ್ವೇಷಿಸಿ →"}
            </a>
          </div>

        </div>

        {/* Separator Rule */}
        <div 
          ref={revealRef} 
          className="reveal-hidden delay-400 mt-[clamp(60px,8vw,120px)] w-full h-[1px] bg-white/10" 
        />
      </div>
    </section>
  );
}
