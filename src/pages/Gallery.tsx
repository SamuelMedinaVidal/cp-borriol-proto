import { memo } from 'react';
import { motion } from 'framer-motion';
import { galleryImages, CATEGORY_LABELS, CATEGORY_STYLES } from '../data/gallery';

// ── Card animation — defined OUTSIDE component to avoid recreation on re-renders ─
const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, delay: (i % 3) * 0.10, ease: 'easeOut' as const },
  }),
};

const headerVariants = {
  hidden:  { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ── Memoised card component to prevent unnecessary re-renders ────
const GalleryCard = memo(({ img, index }: { img: typeof galleryImages[number]; index: number }) => (
  <motion.article
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.12 }}
    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-200 dark:bg-dk-surface cursor-pointer"
  >
    {/* Image */}
    <div className="h-72 sm:h-80 lg:h-96 overflow-hidden">
      <img
        src={img.url}
        alt={img.alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
      />
    </div>

    {/* Category badge */}
    <span className={`absolute top-4 left-4 text-xs font-bold uppercase px-3 py-1.5 rounded-full shadow tracking-wider ${CATEGORY_STYLES[img.category]}`}>
      {CATEGORY_LABELS[img.category]}
    </span>

    {/* Hover overlay with caption */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 pointer-events-none">
      <p className="text-white font-bold text-lg drop-shadow translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        {img.caption}
      </p>
    </div>
  </motion.article>
));
GalleryCard.displayName = 'GalleryCard';

// ── Page Component ───────────────────────────────────────────────
export const Gallery = () => {
  return (
    <div className="min-h-screen bg-neutralMuted dark:bg-dk-bg transition-colors duration-300">

      {/* Header */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="pt-20 pb-16 px-4 text-center"
      >
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Club Patinatge Borriol</p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-textTitle dark:text-white uppercase tracking-tight leading-none">
          Galería
        </h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' as const }}
          className="h-1.5 w-20 bg-primary mx-auto mt-4 origin-left rounded-full"
        />
        <p className="mt-5 text-gray-600 dark:text-dk-text-muted text-lg max-w-xl mx-auto leading-relaxed">
          Los mejores momentos del club, sobre ruedas y fuera de la pista.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {galleryImages.map((img, i) => (
            <GalleryCard key={img.id} img={img} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
