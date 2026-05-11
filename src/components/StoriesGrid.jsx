import { useScrollReveal } from '../hooks/useScrollReveal';
import { clsx } from 'clsx';

export function StoriesGrid() {
  const spaces = [
    {
      id: 1,
      category: 'Private Suite',
      title: 'The Executive Floor',
      excerpt: 'Panoramic city views combined with unparalleled privacy.',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop',
      delay: 'delay-100'
    },
    {
      id: 2,
      category: 'Collaborative Hub',
      title: 'The Atrium Studio',
      excerpt: 'Designed for dynamic teams that thrive on creative energy.',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop',
      delay: 'delay-200'
    },
    {
      id: 3,
      category: 'Boardroom',
      title: 'The Obsidian Room',
      excerpt: 'State-of-the-art technology for your most important meetings.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop',
      delay: 'delay-300'
    }
  ];

  return (
    <section id="spaces" className="py-[clamp(80px,10vw,160px)] px-6 md:px-12 bg-brand-bg">
      <div className="max-w-[1320px] mx-auto">
        <div className="mb-16">
          <h2 className="font-serif text-[clamp(32px,4vw,60px)] text-brand-text">
            Featured Spaces
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spaces.map((space) => {
            const revealRef = useScrollReveal();
            return (
              <div 
                key={space.id}
                ref={revealRef}
                className={clsx("reveal-hidden transition-all duration-[900ms] group cursor-pointer", space.delay)}
              >
                <div className="w-full aspect-[4/5] overflow-hidden bg-brand-bg-light mb-6 rounded-2xl hover-glow-image">
                  <img 
                    src={space.image} 
                    alt={space.title}
                    className="w-full h-full object-cover transition-transform duration-[1500ms] ease-luxury group-hover:scale-105"
                  />
                </div>
                <span className="text-brand-text/50 uppercase tracking-[0.18em] text-[12px] font-medium mb-3 block">
                  {space.category}
                </span>
                <h3 className="font-serif text-[clamp(20px,2.5vw,32px)] text-brand-text mb-3">
                  {space.title}
                </h3>
                <p className="font-sans text-brand-text/70 text-base font-light">
                  {space.excerpt}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <a href="#all-spaces" className="link-underline font-sans text-sm tracking-widest uppercase text-brand-text inline-block pb-1">
            See all spaces →
          </a>
        </div>
      </div>
    </section>
  );
}
