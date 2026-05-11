import { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-bg">
      <div className="absolute inset-0 z-0">
        <img
          src="/mgired_building.png"
          alt="MGIRED Building"
          className={clsx(
            "w-full h-full object-cover transition-all duration-[2000ms] ease-luxury",
            loaded ? "opacity-50 scale-100" : "opacity-0 scale-105"
          )}
        />
        <div className="absolute inset-0 bg-[var(--hero-overlay)] transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-95 transition-all duration-500" />
      </div>

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 md:px-12 pt-20 pb-28 flex flex-col items-center text-center">
        <h1 className="font-serif text-[clamp(40px,6vw,96px)] leading-[1.1] font-light text-brand-text mb-6">
          <span className="block overflow-hidden">
            <span className={clsx("block transition-transform duration-[1200ms] ease-luxury", loaded ? "translate-y-0" : "translate-y-[120%]")}>
              {t('hero.title1')}
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className={clsx("block transition-transform duration-[1200ms] ease-luxury delay-100", loaded ? "translate-y-0" : "translate-y-[120%]")}>
              <i className="font-serif italic text-brand-accent">{t('hero.title2')}</i> {t('hero.title3')}
            </span>
          </span>
        </h1>
        
        <p className={clsx(
          "max-w-2xl text-lg md:text-xl font-sans font-light text-brand-text/80 mb-10 transition-all duration-1000 ease-luxury delay-300",
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {t('hero.subtitle')}
        </p>

        <a
          href="#jobs"
          className={clsx(
            "group relative px-8 py-4 rounded-full border border-brand-text text-sm uppercase tracking-widest overflow-hidden transition-all duration-1000 ease-luxury delay-500",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="relative z-10 group-hover:text-brand-bg transition-colors duration-300">
            {t('hero.cta')}
          </span>
          <div className="absolute inset-0 bg-brand-text translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-luxury" />
        </a>
      </div>

      <div className={clsx(
        "absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-opacity duration-1000 delay-700",
        loaded ? "opacity-100" : "opacity-0"
      )}>
        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-text/60">{t('hero.scroll')}</span>
        <ArrowDown className="text-brand-text/60 animate-bounce w-4 h-4" />
      </div>
    </section>
  );
}
