/**
 * ═══════════════════════════════════════════════════════════════
 *  📁 GALERÍA DE IMÁGENES — Club Patinatge Borriol
 * ═══════════════════════════════════════════════════════════════
 *
 *  CÓMO AÑADIR TUS FOTOS REALES:
 *  ─────────────────────────────
 *  1. Coloca tus imágenes en la carpeta:
 *       club-patinatge-borriol/public/images/gallery/
 *
 *  2. Formatos recomendados: .webp (mejor compresión), .jpg, .png
 *     Dimensiones ideales: 1200×800px (ratio 3:2)
 *
 *  3. Sustituye la propiedad `url` de cada objeto con la ruta local:
 *       url: '/images/gallery/nombre-de-tu-foto.webp'
 *
 *  4. Actualiza `alt`, `caption` y `category` según tu contenido.
 *     Las categorías válidas están definidas en el tipo `GalleryCategory`.
 *
 *  ➡️  Ejemplo de ruta local:
 *       { id: 10, url: '/images/gallery/final-liga-2026.webp', ... }
 *
 * ═══════════════════════════════════════════════════════════════
 */

export type GalleryCategory =
  | 'hockey'
  | 'artistic'
  | 'tournament'
  | 'club'
  | 'facilities';

export interface GalleryImage {
  id:       number;
  url:      string;            // ruta local '/images/gallery/foto.webp' o URL externa
  alt:      string;            // texto alternativo (accesibilidad y SEO)
  caption:  string;            // texto visible en el hover de la tarjeta
  category: GalleryCategory;
}

// ── Etiquetas visuales y estilos por categoría ──────────────────
export const CATEGORY_LABELS: Record<GalleryCategory, string> = {
  hockey:     'Hockey Línea',
  artistic:   'Patinaje Artístico',
  tournament: 'Torneo',
  club:       'Club',
  facilities: 'Instalaciones',
};

export const CATEGORY_STYLES: Record<GalleryCategory, string> = {
  hockey:     'bg-primary text-white',
  artistic:   'bg-secondary text-white',
  tournament: 'bg-accent text-textTitle',
  club:       'bg-dk-purple text-white',
  facilities: 'bg-gray-600 text-white',
};

// ── DATOS DE LA GALERÍA ─────────────────────────────────────────
// Sustituye las URLs externas (Unsplash) por tus fotos reales:
//   url: '/images/gallery/tu-foto.webp'
export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1549556204-7a1a2b0c2a52?auto=format&fit=crop&w=900&q=80',
    alt: 'Jugadores de hockey durante entrenamiento',
    caption: 'Entrenamiento Senior',
    category: 'hockey',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1588693959892-710d0fcd6dd2?auto=format&fit=crop&w=900&q=80',
    alt: 'Partido de competición autonómica',
    caption: 'Competición Autonómica',
    category: 'tournament',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=900&q=80',
    alt: 'Patinadora artística en exhibición',
    caption: 'Exhibición Artística',
    category: 'artistic',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1563823293883-2070c7913501?auto=format&fit=crop&w=900&q=80',
    alt: 'Derbi provincial de hockey línea',
    caption: 'Derbi Provincial',
    category: 'hockey',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1522204481512-b2fdff00ae4a?auto=format&fit=crop&w=900&q=80',
    alt: 'Gala de fin de temporada del club',
    caption: 'Gala de Fin de Temporada',
    category: 'club',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1620610360634-106c55cc1aa8?auto=format&fit=crop&w=900&q=80',
    alt: 'Categoría Alevín entrenando',
    caption: 'Categoría Alevín',
    category: 'hockey',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1574041796590-449e75eb2cd9?auto=format&fit=crop&w=900&q=80',
    alt: 'Pista municipal de Borriol',
    caption: 'Pista Municipal de Borriol',
    category: 'facilities',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1533230635293-d14b436ebd69?auto=format&fit=crop&w=900&q=80',
    alt: 'Clase de iniciación al patinaje artístico',
    caption: 'Clase de Iniciación',
    category: 'artistic',
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1581561074129-307bc17e651e?auto=format&fit=crop&w=900&q=80',
    alt: 'Equipo campeón de liga celebrando',
    caption: 'Campeones de Liga',
    category: 'tournament',
  },
];
