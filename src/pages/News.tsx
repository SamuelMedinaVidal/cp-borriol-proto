import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const newsItems = [
  { id: 1, title: 'Gran victoria en el derbi provincial', date: '10 Abril 2026', category: 'Hockey' },
  { id: 2, title: 'Nuevos horarios de entrenamiento', date: '08 Abril 2026', category: 'Club' },
  { id: 3, title: 'Excelente actuación en el torneo nacional de artístico', date: '05 Abril 2026', category: 'Artístico' },
  { id: 4, title: 'Apertura de inscripciones temporada 2026/2027', date: '01 Abril 2026', category: 'Club' },
  { id: 5, title: 'El CP Borriol Alevín se proclama campeón de liga', date: '28 Marzo 2026', category: 'Hockey' },
  { id: 6, title: 'Jornada de puertas abiertas este sábado', date: '25 Marzo 2026', category: 'Club' },
];

export const News = () => {
  return (
    <div className="min-h-screen bg-neutralMuted dark:bg-dk-bg py-12 px-4 max-w-7xl mx-auto w-full transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 pt-6"
      >
        <h1 className="text-5xl font-extrabold text-textTitle dark:text-white uppercase mb-4">Noticias</h1>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' as const }}
          className="w-24 h-1.5 bg-secondary dark:bg-dk-purple mb-4 origin-left rounded-full"
        ></motion.div>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Toda la actualidad, resultados y comunicados oficiales del Club Patinatge Borriol.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white dark:bg-dk-surface rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-dk-border flex flex-col h-full">
            <div className="h-48 overflow-hidden relative">
              <div className="absolute top-4 left-4 bg-accent text-textTitle font-bold text-xs uppercase px-3 py-1 rounded-sm z-10 shadow-sm">
                {item.category}
              </div>
              <img
                src={`https://images.unsplash.com/photo-1549556204-7a1a2b0c2a52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sig=${item.id + 10}`}
                alt="News thumbnail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-gray-400 dark:text-gray-500 text-xs font-semibold uppercase tracking-wider block mb-2">{item.date}</span>
              <h3 className="text-lg font-bold mb-3 text-textTitle dark:text-white leading-snug group-hover:text-primary dark:group-hover:text-primary-bright transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm mb-6 line-clamp-3 flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="text-secondary dark:text-dk-purple font-bold uppercase text-sm flex items-center gap-1 group-hover:gap-2 transition-all self-start mt-auto hover:text-primary dark:hover:text-primary-bright">
                Leer más <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
