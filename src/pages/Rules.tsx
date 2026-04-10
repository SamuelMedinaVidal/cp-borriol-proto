import { FileText, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export const Rules = () => {
  const documents = [
    { title: 'Reglamento Interno',           date: 'Septiembre 2023', size: '2.4 MB' },
    { title: 'Normativa Liga Autonómica',     date: 'Agosto 2023',     size: '5.1 MB' },
    { title: 'Protocolo de Entrenamientos',  date: 'Octubre 2023',    size: '1.2 MB' },
    { title: 'Consentimiento Menores',        date: 'Enero 2024',      size: '0.8 MB' },
  ];

  return (
    <div className="min-h-screen bg-neutralMuted dark:bg-dk-bg py-12 px-4 max-w-4xl mx-auto w-full transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center pt-6"
      >
        <h1 className="text-5xl font-extrabold text-textTitle dark:text-white uppercase mb-4">Descargas</h1>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' as const }}
          className="w-24 h-1.5 bg-secondary dark:bg-dk-purple mx-auto mb-6 origin-left rounded-full"
        ></motion.div>
        <p className="text-lg text-gray-600 dark:text-gray-300">Documentación oficial, reglamentos y formularios del club.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map((doc, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-dk-surface rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-dk-border p-6 flex flex-col justify-between group"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-neutralMuted dark:bg-dk-surface2 text-secondary dark:text-dk-purple rounded-lg flex-shrink-0">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="font-bold text-textTitle dark:text-white text-lg leading-tight mb-1 group-hover:text-primary dark:group-hover:text-primary-bright transition-colors">
                  {doc.title}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">Actualizado: {doc.date}</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-dk-border">
              <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-dk-surface2 px-2 py-1 rounded">
                PDF • {doc.size}
              </span>
              <button className="flex items-center gap-2 text-primary dark:text-primary font-bold uppercase text-sm hover:text-primary-bright dark:hover:text-primary-bright transition-colors">
                <Download size={16} /> Descargar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
