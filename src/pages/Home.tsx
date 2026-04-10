import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Trophy, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// ── WordPress-ready: swap this URL in the theme's template tag ──
const HERO_VIDEO_URL = 'videos/promo-borriol.mp4';

export const Home = () => {
  return (
    <div className="flex flex-col bg-neutralMuted dark:bg-dk-bg transition-colors duration-300">

      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative h-[92vh] min-h-[600px] flex items-center justify-center overflow-hidden">

        {/* Background video (muted, loop, playsinline — WP-ready via HERO_VIDEO_URL) */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={HERO_VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1549556204-7a1a2b0c2a52?auto=format&fit=crop&w=1920&q=80"
        />

        {/* Gradient overlay: black → dark purple, 60% opacity */}
        <div className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.70) 0%, rgba(45,20,66,0.60) 100%)',
          }}
        />

        {/* Hero content — fade-in + scale reveal */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.04, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            {/* Eyebrow label */}
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-dk-purple mb-5 border border-dk-purple/40 px-4 py-1.5 rounded-full">
              Club Patinatge Borriol · Castellón
            </span>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white uppercase tracking-tight leading-[1.05] mb-6 text-shadow">
              La pista es nuestra,{' '}
              <br className="hidden sm:block" />
              el límite{' '}
              <span className="relative inline-block">
                <span className="text-primary font-black italic drop-shadow-md">
                  LO PONES TÚ
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
                  className="absolute -bottom-2 left-0 w-full h-1.5 bg-primary origin-left rounded-full"
                />
              </span>
              .
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-medium leading-relaxed text-shadow-sm">
              Formamos deportistas en hockey línea y patinaje artístico con pasión,
              esfuerzo y valores. Únete a la familia del T-Rex.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
            >
              <Link
                to="/inline"
                className="bg-primary hover:bg-primary-bright text-white font-bold py-3.5 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-primary/30 hover:scale-105 text-base sm:text-lg uppercase tracking-wider text-center"
              >
                Únete al Equipo
              </Link>
              <Link
                to="/news"
                className="bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/60 backdrop-blur-sm text-white font-bold py-3.5 px-8 rounded-lg transition-all duration-200 hover:scale-105 text-base sm:text-lg uppercase tracking-wider text-center flex items-center justify-center gap-2"
              >
                Últimas Noticias <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          >
            <span className="text-xs text-white/50 uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="w-0.5 h-8 bg-gradient-to-b from-white/50 to-transparent rounded-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ════════════════════ NEXT MATCH ════════════════════ */}
      <section className="py-12 md:py-16 px-4 bg-white dark:bg-dk-surface relative z-30 -mt-16 mx-4 md:mx-auto md:max-w-4xl rounded-2xl shadow-2xl border-t-8 border-accent dark:border-secondary transition-colors duration-300"
        style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.2)' }}
      >
        <div className="text-center mb-8">
          <span className="text-secondary dark:text-dk-purple font-bold uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center gap-2 mb-2">
            <Calendar size={15} /> Próximo Enfrentamiento
          </span>
          <h2 className="text-3xl font-extrabold text-textTitle dark:text-white uppercase letter-spacing-wide">
            Liga Autonómica
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/25">
              <span className="font-oswald text-2xl font-bold">CPB</span>
            </div>
            <h3 className="font-bold text-xl uppercase text-textTitle dark:text-white">Borriol</h3>
            <span className="text-gray-500 dark:text-dk-text-muted font-medium text-sm">Local</span>
          </div>

          <div className="text-4xl font-oswald font-black text-gray-300 dark:text-gray-600">VS</div>

          <div className="text-center">
            <div className="w-24 h-24 bg-neutralMuted dark:bg-dk-surface2 text-gray-500 dark:text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md border border-gray-200 dark:border-dk-border">
              <span className="font-oswald text-2xl font-bold">RIV</span>
            </div>
            <h3 className="font-bold text-xl uppercase text-textTitle dark:text-white">Madrigales</h3>
            <span className="text-gray-500 dark:text-dk-text-muted font-medium text-sm">Visitante</span>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center bg-neutralMuted dark:bg-dk-surface2 p-4 rounded-xl mx-auto max-w-sm text-center border border-gray-200 dark:border-dk-border">
          <p className="font-bold text-lg text-textTitle dark:text-white">
            <Trophy className="inline-block mr-2 text-accent" size={18} /> Sábado 24 Octubre · 18:00h
          </p>
          <p className="text-sm mt-1 text-gray-500 dark:text-dk-text-muted">Pabellón Municipal de Borriol</p>
        </div>
      </section>

      {/* ════════════════════ RECENT NEWS ════════════════════ */}
      <section className="bg-[#F9FAFB] dark:bg-dk-bg py-24 transition-colors duration-300 w-full">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-2">Noticias del Club</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-textTitle dark:text-white uppercase tracking-tight">
                Actualidad
              </h2>
              <div className="h-1 w-16 bg-primary mt-3 rounded-full"></div>
            </div>
            <Link
              to="/news"
              className="hidden sm:flex text-secondary dark:text-dk-purple font-semibold hover:text-primary dark:hover:text-primary-bright transition-all items-center gap-1 uppercase tracking-wider text-sm hover:translate-x-1"
            >
              Ver todas <ChevronRight size={18} />
            </Link>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {[
              {
                id: 1,
                tag: 'HOCKEY',
                tagColor: 'bg-primary',
                title: 'Victoria del senior masculino en el inicio liguero',
                date: '12 Oct 2023',
                image: 'https://images.unsplash.com/photo-1549556204-7a1a2b0c2a52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              },
              {
                id: 2,
                tag: 'ARTÍSTICO',
                tagColor: 'bg-secondary',
                title: 'Nueva exhibición de nuestra escuela el próximo sábado',
                date: '10 Oct 2023',
                image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              },
              {
                id: 3,
                tag: 'COMPETICIÓN',
                tagColor: 'bg-accent',
                title: 'Preparativos para el torneo provincial de Castellón',
                date: '08 Oct 2023',
                image: 'https://images.unsplash.com/photo-1588693959892-710d0fcd6dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              },
            ].map((item) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                }}
                className="group relative bg-white dark:bg-dk-surface dark:glass rounded-xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-dk-border hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col h-full overflow-hidden"
              >
                {/* Image Container (Full-bleed) */}
                <div className="h-64 overflow-hidden relative">
                  <div className={`absolute top-4 left-4 ${item.tagColor} text-white font-bold text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-md z-10 shadow-lg`}>
                    {item.tag}
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Subtle overlay filter */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent opacity-40" />
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-grow">
                  <span className="text-[11px] text-gray-500 dark:text-dk-text-muted font-bold uppercase tracking-widest mb-3">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-white leading-snug group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-50 dark:border-dk-border/30">
                    <span className="text-secondary dark:text-dk-purple font-bold text-xs uppercase tracking-widest group-hover:text-primary dark:group-hover:text-primary-bright transition-colors">
                      Leer más
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F3F4F6] dark:bg-dk-surface2 flex items-center justify-center text-secondary dark:text-dk-purple group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
