import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Sun, Moon } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'en');
  const [theme, setTheme] = useState(() => {
    return sessionStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    sessionStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync state with i18n language changes
  useEffect(() => {
    const handleLangChange = (lng) => setLang(lng);
    i18n.on('languageChanged', handleLangChange);
    return () => i18n.off('languageChanged', handleLangChange);
  }, [i18n]);

  const toggleLanguage = () => {
    const nextLang = lang.startsWith('en') ? 'kn' : 'en';
    i18n.changeLanguage(nextLang);
  };

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.jobs'), href: '#jobs' },
    { name: t('nav.location'), href: '#heritage-village' },
    { name: t('nav.schemes'), href: '#government-schemes' },
  ];

  const isEnglish = lang.startsWith('en');

  return (
    <>
      <header
        className={twMerge(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury px-4 md:px-12',
          scrolled 
            ? 'bg-brand-bg/95 backdrop-blur-sm border-b border-white/5 py-3 md:py-4 shadow-lg' 
            : 'bg-transparent py-5 md:py-6'
        )}
      >
        <div className="max-w-[1320px] mx-auto flex items-center justify-between gap-4">
          {/* Logo and Branding */}
          <a href="#" className="flex items-center gap-4 md:gap-5 group shrink-0">
            {/* Karnataka Emblem on the Left */}
            <div className="flex items-center justify-center">
              <img 
                src="/karnataka_logo.png" 
                alt="Karnataka Emblem" 
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-md" 
              />
            </div>

            {/* Left Divider */}
            <div className="hidden xl:block h-8 w-[1px] bg-white/20 dark:bg-white/20" />

            {/* Centered Institution Name */}
            <div className="hidden xl:flex flex-col justify-center text-center">
              <span className="font-serif text-[11px] md:text-xs tracking-wide text-brand-text/95 leading-tight max-w-[260px] font-medium">
                Mahatma Gandhi Institute of Rural Energy and Development
              </span>
              <span className="font-sans text-[8px] tracking-[0.2em] uppercase text-brand-accent mt-0.5 font-semibold">
                Government of Karnataka
              </span>
            </div>

            {/* Right Divider */}
            <div className="hidden xl:block h-8 w-[1px] bg-white/20 dark:bg-white/20" />

            {/* MGIRED Logo on the Right */}
            <div className="flex items-center justify-center">
              <img 
                src="/mgired_logo.png" 
                alt="MGIRED Logo" 
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-md" 
              />
            </div>
          </a>

          {/* Desktop Nav & Actions */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5 ml-auto mr-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-sans tracking-[0.08em] xl:tracking-[0.1em] uppercase text-brand-text/90 hover:text-brand-text transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            {/* Integrated Language Switcher for perfectly equal gap/spacing! */}
            <button 
              onClick={toggleLanguage}
              className="text-xs xl:text-sm uppercase tracking-wider hover:text-brand-accent transition-colors font-medium text-brand-text/90 whitespace-nowrap cursor-pointer"
            >
              {isEnglish ? 'ಕನ್ನಡ' : 'English'}
            </button>

            {/* Integrated Theme Toggle with micro-interactions! */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center p-2 rounded-full border border-white/5 bg-white/5 hover:bg-brand-accent hover:text-brand-bg hover:border-brand-accent text-brand-text/90 transition-all duration-300 cursor-pointer shrink-0"
              title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {theme === 'dark' ? (
                <Sun size={14} className="hover:scale-110 transition-transform duration-300" />
              ) : (
                <Moon size={14} className="hover:scale-110 transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Right Actions (Only CTA button) */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href="#contact"
              className="group relative px-4 xl:px-5 py-2.5 rounded-full border border-brand-text/30 text-xs uppercase tracking-widest overflow-hidden transition-colors hover:border-brand-text whitespace-nowrap"
            >
              <span className="relative z-10 group-hover:text-brand-bg transition-colors duration-300">
                {t('nav.cta')}
              </span>
              <div className="absolute inset-0 bg-brand-text translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-luxury" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-brand-text p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          'fixed inset-0 z-[100] bg-brand-bg flex flex-col justify-center px-8 transition-opacity duration-500',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <button
          className="absolute top-8 right-8 text-brand-text p-2"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={32} strokeWidth={1} />
        </button>
        
        <nav className="flex flex-col gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={clsx(
                'font-serif text-4xl text-brand-text transition-all duration-700 ease-luxury',
                mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={() => {
              toggleLanguage();
              setMobileMenuOpen(false);
            }}
            className="text-left font-serif text-4xl text-brand-accent transition-all duration-700 ease-luxury delay-400 cursor-pointer"
          >
            {isEnglish ? 'ಕನ್ನಡ' : 'English'}
          </button>

          {/* Mobile Theme Toggle Button */}
          <button 
            onClick={() => {
              toggleTheme();
              setMobileMenuOpen(false);
            }}
            className="text-left font-serif text-4xl text-brand-text/90 transition-all duration-700 ease-luxury delay-500 flex items-center gap-4 cursor-pointer"
          >
            <span>{theme === 'dark' ? (isEnglish ? 'Light Mode' : 'ಲೈಟ್ ಮೋಡ್') : (isEnglish ? 'Dark Mode' : 'ಡಾರ್ಕ್ ಮೋಡ್')}</span>
            {theme === 'dark' ? <Sun size={28} className="text-brand-accent" /> : <Moon size={28} className="text-brand-accent" />}
          </button>

          <a
            href="#contact"
            className={clsx(
              'mt-8 inline-block w-max px-8 py-4 rounded-full border border-brand-accent text-brand-accent uppercase tracking-widest text-sm transition-all duration-700 ease-luxury',
              mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            )}
            style={{ transitionDelay: `${(navLinks.length + 1) * 100}ms` }}
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('nav.cta')}
          </a>
        </nav>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="#chat"
        className="fixed bottom-6 right-6 z-40 bg-brand-bg border border-white/10 p-4 rounded-full hover:bg-[#25D366] hover:border-[#25D366] transition-colors duration-300 group shadow-2xl"
      >
        <MessageSquare size={24} className="text-brand-text" />
      </a>
    </>
  );
}
