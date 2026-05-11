import { useTranslation } from 'react-i18next';

export function Marquee() {
  const { t } = useTranslation();
  const items = t('marquee', { returnObjects: true });

  if (!Array.isArray(items)) return null;

  return (
    <section className="w-full bg-brand-bg-light border-y border-white/5 py-4 overflow-hidden flex items-center">
      <div className="flex w-max animate-[marquee_40s_linear_infinite]">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, j) => (
              <div key={`${i}-${j}`} className="flex items-center">
                <span className="text-brand-text/80 uppercase tracking-widest text-sm whitespace-nowrap">
                  {item}
                </span>
                <span className="mx-8 text-brand-accent/50 text-xs">◆</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
