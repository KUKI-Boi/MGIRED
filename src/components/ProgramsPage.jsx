import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowLeft, CheckCircle, GraduationCap, Award, BookOpen, ShieldCheck, ExternalLink, ArrowUpRight, HelpCircle } from 'lucide-react';
import { clsx } from 'clsx';

export function ProgramsPage({ onBack }) {
  const { t, i18n } = useTranslation();
  const revealRefHeader = useScrollReveal();
  const revealRefGrid = useScrollReveal();
  const revealRefSchemesHeader = useScrollReveal();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const programsList = t('jobs.step3.programs', { returnObjects: true }) || [];
  const isKannada = i18n.language && i18n.language.startsWith('kn');

  // Custom icons/themes for programs to make them look premium and distinct
  const programDetails = programsList.map((program, idx) => {
    const icons = [GraduationCap, Award, BookOpen, ShieldCheck];
    const IconComponent = icons[idx % icons.length];
    return {
      title: program.title || program, // Fallback if still a string
      desc: program.desc || "",
      image: program.image || "",
      icon: IconComponent,
      code: `MGI-TP-${String(idx + 1).padStart(2, '0')}`
    };
  });

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text pt-32 pb-24 px-6 md:px-12 selection:bg-brand-accent selection:text-brand-bg">
      <div className="max-w-[1320px] mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group flex items-center gap-3 text-sm uppercase tracking-widest text-brand-text/60 hover:text-brand-text transition-colors duration-300 mb-12 font-sans"
        >
          <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-2" />
          <span>{isKannada ? 'ಹಿಂದೆ ಹೋಗಿ' : 'Back to Home'}</span>
        </button>

        {/* Hero Section */}
        <div ref={revealRefHeader} className="reveal-hidden transition-all duration-[1000ms] mb-20 max-w-3xl">
          <span className="text-brand-accent uppercase tracking-[0.25em] text-xs font-semibold block mb-4">
            MGIRED Academic Division
          </span>
          <h1 className="font-serif text-[clamp(36px,5vw,72px)] leading-[1.1] mb-6">
            {t('jobs.step3.title')}
          </h1>
          <p className="font-sans text-brand-text/70 text-lg md:text-xl font-light leading-relaxed">
            {t('jobs.step3.desc')}
          </p>
        </div>

        {/* Programs Grid */}
        <div 
          ref={revealRefGrid}
          className="reveal-hidden delay-200 transition-all duration-[1000ms] grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
        >
          {programDetails.map((prog, idx) => {
            const Icon = prog.icon;
            return (
              <div 
                key={idx}
                className="group relative bg-brand-bg-light border border-white/5 rounded-2xl transition-all duration-500 overflow-hidden flex flex-col shadow-2xl hover-glow-image"
              >
                {/* Image Section */}
                {prog.image && (
                  <div className="relative w-full h-48 md:h-64 overflow-hidden bg-black/50">
                    <img 
                      src={prog.image} 
                      alt={prog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-luxury opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-light to-transparent" />
                  </div>
                )}
                
                {/* Content Section */}
                <div className={clsx("p-8 flex-1 flex flex-col relative z-10", prog.image ? "-mt-12" : "")}>
                  <div className="flex gap-4 items-start mb-6">
                    <div className="p-3 bg-brand-bg border border-white/10 rounded-xl group-hover:border-brand-accent/50 group-hover:bg-brand-accent/10 transition-all duration-500 shrink-0 shadow-lg">
                      <Icon size={24} className="text-brand-accent" />
                    </div>
                    <div className="pt-2">
                      <span className="font-mono text-xs text-brand-accent/80 tracking-widest uppercase block">
                        {prog.code}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-xl md:text-2xl lg:text-[28px] text-brand-text mb-4 group-hover:text-brand-accent transition-colors duration-300 leading-tight">
                    {prog.title}
                  </h3>
                  
                  {prog.desc && (
                    <p className="font-sans text-brand-text/70 text-base leading-relaxed mb-8 flex-1 font-light">
                      {prog.desc}
                    </p>
                  )}
                  
                  <div className="flex items-center gap-2 text-brand-text/50 text-xs uppercase tracking-wider font-sans mt-auto pt-6 border-t border-white/5">
                    <CheckCircle size={14} className="text-brand-accent/80" />
                    <span>Certified Curriculum</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 border-t border-white/10 pt-16 text-center">
          <p className="font-sans text-brand-text/60 text-lg mb-8">
            Interested in enrolling or collaborating on a program?
          </p>
          <button
            onClick={() => {
              onBack();
              setTimeout(() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 400);
            }}
            className="px-10 py-5 rounded-full bg-brand-text text-brand-bg font-sans text-sm uppercase tracking-widest font-medium hover:bg-brand-accent transition-colors duration-300"
          >
            {t('cta.button')}
          </button>
        </div>
      </div>
    </div>
  );
}
