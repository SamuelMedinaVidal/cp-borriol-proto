import { memo } from 'react';

interface PageHeroProps {
  title:        string;
  accentWord?:  string;   // word in title to highlight with underline
  subtitle:     string;
  bgColorClass: string;   // e.g. 'bg-primary' | 'bg-secondary'
}

/**
 * Reusable discipline page hero banner.
 * Usage:
 *   <PageHero
 *     title="Hockey"
 *     accentWord="Línea"
 *     subtitle="Adrenalina, velocidad y trabajo en equipo."
 *     bgColorClass="bg-primary"
 *   />
 */
export const PageHero = memo(({ title, accentWord, subtitle, bgColorClass }: PageHeroProps) => (
  <div className={`${bgColorClass} pt-32 pb-20 px-4 text-center relative overflow-hidden`}>
    {/* subtle inner overlay */}
    <div className="absolute inset-0 bg-black/20 pointer-events-none" />
    <div className="relative z-10 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tighter leading-tight drop-shadow-lg">
        {title}{' '}
        {accentWord && (
          <span className="text-accent underline decoration-4 underline-offset-8">{accentWord}</span>
        )}
      </h1>
      <p className="max-w-2xl mx-auto mt-6 text-white/90 text-lg md:text-xl font-medium leading-relaxed">
        {subtitle}
      </p>
    </div>
  </div>
));
PageHero.displayName = 'PageHero';
