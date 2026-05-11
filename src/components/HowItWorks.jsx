import { useScrollReveal } from '../hooks/useScrollReveal';
import { clsx } from 'clsx';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Schedule a Tour',
      desc: 'Book a personal viewing of our available spaces. Our concierges will guide you through the amenities and discuss your specific requirements.',
      video: 'https://player.vimeo.com/external/403610991.sd.mp4?s=d74f388fc2a5789f1ecbd92f9a724beeb74cc476&profile_id=164&oauth2_token_id=57447761' // Placeholder office video
    },
    {
      number: '02',
      title: 'Select Your Space',
      desc: 'Whether you need a private suite or a full customized floor, we help you tailor the layout and furnishings to perfectly reflect your brand identity.',
      video: 'https://player.vimeo.com/external/411475510.sd.mp4?s=231885cc0a255ddb006969bb55dc26f043fbb17f&profile_id=164&oauth2_token_id=57447761' // Placeholder modern office video
    },
    {
      number: '03',
      title: 'Move In seamlessly',
      desc: 'Sign digitally and move in immediately. Our IT and facility teams ensure everything is ready, so you can plug in and start working from day one.',
      video: 'https://player.vimeo.com/external/488583491.sd.mp4?s=552ebc6600a94b4cfcc5aeb4baee69c07f4335aa&profile_id=164&oauth2_token_id=57447761' // Placeholder team working
    }
  ];

  return (
    <section id="how-it-works" className="py-[clamp(80px,10vw,160px)] px-6 md:px-12 bg-brand-bg-light">
      <div className="max-w-[1320px] mx-auto">
        <div className="mb-24 text-center">
          <span className="text-brand-text/50 uppercase tracking-[0.2em] text-xs font-semibold">How it works</span>
          <h2 className="font-serif text-[clamp(32px,4vw,60px)] text-brand-text mt-4">
            Leasing Without the Hassle
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
                  "reveal-hidden transition-all duration-[900ms] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center",
                  isEven ? "lg:flex-row-reverse" : ""
                )}
              >
                {/* Text Content */}
                <div className={clsx("relative", isEven ? "lg:order-2" : "")}>
                  <div className="absolute -top-16 -left-8 text-[clamp(80px,12vw,160px)] font-bold text-white/[0.03] select-none leading-none z-0">
                    {step.number}
                  </div>
                  <div className="relative z-10 pt-4">
                    <h3 className="font-serif text-[clamp(24px,3vw,36px)] text-brand-text mb-6">
                      {step.title}
                    </h3>
                    <p className="font-sans text-brand-text/70 text-lg leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Video Content */}
                <div className={clsx("relative w-full aspect-[4/3] overflow-hidden", isEven ? "lg:order-1" : "")}>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={step.video} type="video/mp4" />
                  </video>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
