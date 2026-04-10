import { memo } from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title:         string;
  accentWord?:   string;   // word in title to highlight with underline
  subtitle:      string;
  bgColorClass?: string;   // e.g. 'bg-primary' | 'bg-secondary'
  image?:        string;   // optional background image URL
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
export const PageHero = memo(({ title, accentWord, subtitle, bgColorClass = 'bg-primary', image }: PageHeroProps) => (
  <div className={`${bgColorClass} pt-32 pb-20 px-4 text-center relative overflow-hidden min-h-[400px] flex items-center`}>
    {/* Optional background image with overlay */}
    {image && (
      <>
        <img src={image} className="absolute inset-0 w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </>
    )}
    
    {/* subtle inner overlay (always present for contrast) */}
    {!image && <div className="absolute inset-0 bg-black/20 pointer-events-none" />}
    
    <motion.div 
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 max-w-4xl mx-auto w-full"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tighter leading-tight drop-shadow-lg">
        {accentWord ? (
          <>
            {title}{' '}
            <span className="relative inline-block">
              <span className="text-accent italic">{accentWord}</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' as const }}
                className="absolute -bottom-2 left-0 w-full h-1.5 md:h-2 bg-accent origin-left rounded-full shadow-lg"
              />
            </span>
          </>
        ) : (
          <span className="relative inline-block">
            {title}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' as const }}
              className="absolute -bottom-2 left-0 w-full h-1.5 md:h-2 bg-accent origin-left rounded-full shadow-lg"
            />
          </span>
        )}
      </h1>
      <p className="max-w-2xl mx-auto mt-10 text-white/90 text-lg md:text-xl font-medium leading-relaxed drop-shadow">
        {subtitle}
      </p>
    </motion.div>
  </div>
));
PageHero.displayName = 'PageHero';
