import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTranslation } from 'react-i18next';

export function VideoBreak() {
  const revealRef = useScrollReveal();
  const { i18n } = useTranslation();
  const isEnglish = i18n.language?.startsWith('en');

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-brand-bg-light">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed opacity-50"
        style={{ backgroundImage: "url('/mgired_building.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />

      <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
        <h2
          ref={revealRef}
          className="reveal-hidden transition-all duration-[1200ms] font-serif text-[clamp(28px,4vw,64px)] text-[#f0ece4] max-w-5xl font-light leading-tight px-4"
        >
          {isEnglish
            ? '"Empowering rural communities through sustainable energy, innovative technology, and dedicated skill development."'
            : '"ಸುಸ್ಥಿರ ಇಂಧನ, ನವೀನ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಕೌಶಲ್ಯ ಅಭಿವೃದ್ಧಿಯ ಮೂಲಕ ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳ ಸಬಲೀಕರಣ."'}
        </h2>
      </div>
    </section>
  );
}
