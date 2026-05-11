import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';
import { 
  ChevronRight, 
  BookOpen, 
  X, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  HelpCircle, 
  Send 
} from 'lucide-react';

export function Careers() {
  const { t, i18n } = useTranslation();
  const revealRefMain = useScrollReveal();
  const [internshipOpen, setInternshipOpen] = useState(false);

  const isEnglish = i18n.language?.startsWith('en');

  const steps = [
    {
      number: '01',
      title: t('jobs.step1.title'),
      desc: t('jobs.step1.desc'),
      image: '/solar_cycle_rickshaw_schematic_1778230112705.png',
      isClickable: false
    },
    {
      number: '02',
      title: t('jobs.step3.title'),
      desc: t('jobs.step3.desc'),
      image: '/karnataka_training_classroom_1778229711581.jpg',
      isClickable: true
    }
  ];

  return (
    <section id="jobs" className="py-[clamp(80px,10vw,160px)] px-6 md:px-12 bg-brand-bg-light">
      <div className="max-w-[1320px] mx-auto">
        <div className="mb-24 text-center" ref={revealRefMain}>
          <span className="text-brand-text/50 uppercase tracking-[0.2em] text-xs font-semibold">{t('jobs.badge')}</span>
          <h2 className="font-serif text-[clamp(32px,4vw,60px)] text-brand-text mt-4">
            {t('jobs.title')}
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          {steps.map((step, index) => {
            const revealRef = useScrollReveal();
            const isEven = index % 2 === 1;

            return (
              <div 
                key={step.number}
                ref={revealRef}
                className={clsx(
                  "reveal-hidden transition-all duration-[900ms] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start",
                  isEven ? "lg:flex-row-reverse" : ""
                )}
              >
                {/* Text Content */}
                <div className={clsx("relative w-full", isEven ? "lg:order-2" : "")}>
                  <div className="absolute -top-16 -left-8 text-[clamp(80px,12vw,160px)] font-bold text-white/[0.03] select-none leading-none z-0">
                    {step.number}
                  </div>
                  <div className="relative z-10 pt-4">
                    <h3 className="font-serif text-[clamp(24px,3vw,36px)] text-brand-text mb-6">
                      {step.title}
                    </h3>
                    <p className="font-sans text-brand-text/70 text-lg leading-relaxed font-light mb-8">
                      {step.desc}
                    </p>

                    {/* Step 1 click action */}
                    {step.number === '01' && (
                      <div className="mt-6">
                        <button
                          onClick={() => setInternshipOpen(true)}
                          className="group flex items-center gap-3 px-6 py-4 rounded-full border border-brand-accent/30 text-brand-accent hover:border-brand-accent hover:bg-brand-accent/5 transition-all duration-300 font-sans text-sm uppercase tracking-wider font-medium"
                        >
                          <BookOpen size={18} />
                          <span>
                            {isEnglish ? "View Internship details" : "ಇಂಟರ್ನ್‌ಶಿಪ್ ವಿವರಗಳನ್ನು ನೋಡಿ"}
                          </span>
                          <ChevronRight 
                            size={18} 
                            className="transition-transform duration-300 group-hover:translate-x-1" 
                          />
                        </button>
                      </div>
                    )}

                    {/* Step 3 click action */}
                    {step.isClickable && (
                      <div className="mt-6">
                        <button
                          onClick={() => window.location.hash = '#programs'}
                          className="group flex items-center gap-3 px-6 py-4 rounded-full border border-brand-accent/30 text-brand-accent hover:border-brand-accent hover:bg-brand-accent/5 transition-all duration-300 font-sans text-sm uppercase tracking-wider font-medium"
                        >
                          <BookOpen size={18} />
                          <span>
                            {t('jobs.step3.clickToExpand')}
                          </span>
                          <ChevronRight 
                            size={18} 
                            className="transition-transform duration-300 group-hover:translate-x-1" 
                          />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Media Content (Image or Video) */}
                <div className={clsx("relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 shadow-2xl group hover-glow-image", isEven ? "lg:order-1" : "")}>
                  {step.image ? (
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-[1500ms] ease-luxury group-hover:scale-105"
                    />
                  ) : (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={step.video} type="video/mp4" />
                    </video>
                  )}
                  {/* Subtle vignette/gradient overlay for high-fidelity luxury aesthetic */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Internship Details Modal */}
      {internshipOpen && (
        <div className="fixed inset-0 bg-brand-bg/85 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          <div className="bg-[#0c0c0e] border border-white/10 rounded-2xl md:rounded-[32px] w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-[0_24px_64px_rgba(0,0,0,0.9)] relative p-6 md:p-12 animate-in fade-in-50 zoom-in-95 duration-300 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {/* Close Button */}
            <button 
              onClick={() => setInternshipOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full border border-white/10 hover:border-brand-accent/50 text-brand-text/60 hover:text-brand-text transition-colors duration-300 bg-white/5"
            >
              <X size={18} />
            </button>

            {/* Header / Title */}
            <div className="mb-8 text-left">
              <div className="flex items-center gap-2 mb-3 bg-brand-accent/10 border border-brand-accent/20 px-3.5 py-1 rounded-full w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-accent">
                  {t('internshipDetails.role')}
                </span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-brand-text leading-tight">
                {t('internshipDetails.title')}
              </h3>
              <p className="font-sans text-brand-text/80 text-base md:text-lg mt-4 font-light leading-relaxed border-b border-white/10 pb-6">
                {t('internshipDetails.intro')}
              </p>
            </div>

            {/* Quick Metadata Panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="p-2.5 rounded-xl bg-brand-accent/10 text-brand-accent">
                  <Briefcase size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-brand-text/40">{isEnglish ? "Job Title" : "ಹುದ್ದೆಯ ಹೆಸರು"}</div>
                  <div className="text-sm font-medium text-brand-text">{t('internshipDetails.role')}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="p-2.5 rounded-xl bg-brand-accent/10 text-brand-accent">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-brand-text/40">{isEnglish ? "Location" : "ಸ್ಥಳ"}</div>
                  <div className="text-sm font-medium text-brand-text">{t('internshipDetails.location')}</div>
                </div>
              </div>
            </div>

            {/* Program Details Section */}
            <div className="space-y-8 text-left">
              {/* About the Program */}
              <div className="space-y-3">
                <h4 className="font-serif text-lg text-brand-text flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  {t('internshipDetails.aboutTitle')}
                </h4>
                <p className="font-sans text-brand-text/70 text-sm leading-relaxed font-light pl-4">
                  {t('internshipDetails.aboutDesc')}
                </p>
              </div>

              {/* Eligibility Criteria */}
              <div className="space-y-3">
                <h4 className="font-serif text-lg text-brand-text flex items-center gap-2.5">
                  <GraduationCap size={18} className="text-brand-accent" />
                  {t('internshipDetails.eligibilityTitle')}
                </h4>
                <p className="font-sans text-brand-text/70 text-sm leading-relaxed font-light pl-4">
                  {t('internshipDetails.eligibilityDesc')}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <h4 className="font-serif text-lg text-brand-text flex items-center gap-2.5">
                  <Award size={18} className="text-brand-accent" />
                  {t('internshipDetails.highlightsTitle')}
                </h4>
                <ul className="space-y-3 pl-4">
                  {t('internshipDetails.highlights', { returnObjects: true }).map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 font-sans text-brand-text/70 text-sm font-light leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Join Us */}
              <div className="space-y-3">
                <h4 className="font-serif text-lg text-brand-text flex items-center gap-2.5">
                  <HelpCircle size={18} className="text-brand-accent" />
                  {t('internshipDetails.whyTitle')}
                </h4>
                <p className="font-sans text-brand-text/70 text-sm leading-relaxed font-light pl-4">
                  {t('internshipDetails.whyDesc')}
                </p>
              </div>

              {/* How to Apply */}
              <div className="mt-10 p-6 rounded-2xl bg-brand-accent/[0.03] border border-brand-accent/20 space-y-3">
                <h4 className="font-serif text-lg text-brand-text flex items-center gap-2.5 text-brand-accent">
                  <Send size={18} />
                  {t('internshipDetails.applyTitle')}
                </h4>
                <p className="font-sans text-brand-text/80 text-sm leading-relaxed font-medium">
                  {t('internshipDetails.applyDesc')}
                </p>
              </div>
            </div>

            {/* Footer Button to Close */}
            <div className="mt-12 pt-6 border-t border-white/5 flex justify-end">
              <button
                onClick={() => setInternshipOpen(false)}
                className="px-8 py-3.5 rounded-full bg-brand-text text-brand-bg hover:bg-brand-accent hover:text-brand-bg font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300"
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
