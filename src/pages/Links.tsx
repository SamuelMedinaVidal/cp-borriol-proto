import { memo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck, Globe, BookOpen, Users, Building2 } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';

const externalLinks = [
  {
    category: 'Federaciones',
    links: [
      { 
        name: 'RFEP - Real Federación Española de Patinaje', 
        icon: ShieldCheck, 
        logo: 'https://fep.es/img/logo-rfep.png',
        url: 'https://fep.es/', 
        desc: 'Organismo nacional regulador de todas las disciplinas de patinaje.' 
      },
      { 
        name: 'FPCV - Federación de Patinaje C. Valenciana', 
        icon: Globe, 
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRyNm9cvtP20WfguKhnvJ5m9YGpNIEMTf9Rw&s',
        url: 'https://fpcv.info/', 
        desc: 'Federación autonómica responsable de las competiciones en nuestra zona.' 
      },
    ]
  },
  {
    category: 'Reglamentos y Normativas',
    links: [
      { 
        name: 'Reglas de Juego Hockey Línea', 
        icon: BookOpen, 
        logo: 'https://www.worldskate.org/images/logo-skate.png',
        url: 'https://www.worldskate.org/hockey-inline.html', 
        desc: 'Manual oficial de reglas World Skate para hockey línea.' 
      },
      { 
        name: 'Normativa Patinaje Artístico en Línea', 
        icon: BookOpen, 
        logo: 'https://www.worldskate.org/images/logo-skate.png',
        url: 'https://www.worldskate.org/artistic.html', 
        desc: 'Reglamentos técnicos y sistemas de puntuación (Rollart).' 
      },
    ]
  },
  {
    category: 'Organismos e Institucional',
    links: [
      { 
        name: 'Ayuntamiento de Borriol', 
        icon: Building2, 
        logo: 'https://www.borriol.es/wp-content/uploads/2023/05/Logo-Ajuntament-de-Borriol-escut-horitz-color.png',
        url: 'https://www.borriol.es/', 
        desc: 'Portal oficial de nuestra localidad y servicios ciudadanos.' 
      },
      { 
        name: 'Generalitat Valenciana - Deporte', 
        icon: Users, 
        logo: 'https://presidencia.gva.es/documents/161862862/162432465/boton_comunitat_esport.png/0112fe92-0032-03d8-916e-3bdd2ac6a8c8?t=1746773088193', 
        url: 'https://ceice.gva.es/es/web/deporte', 
        desc: 'Recursos y subvenciones para entidades deportivas autonómicas.' 
      },
    ]
  }
];

const LinkCard = memo(({ link }: { link: typeof externalLinks[0]['links'][0] }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white/5 dark:bg-dk-surface border border-gray-200 dark:border-dk-border p-6 rounded-2xl flex flex-col h-full group hover:border-primary/50 transition-all duration-300 shadow-sm"
  >
    <div className="flex items-start justify-between mb-6">
      {link.logo ? (
        <div className="h-16 w-32 bg-white rounded-lg p-2 flex items-center justify-center overflow-hidden shadow-inner">
          <img 
            src={link.logo} 
            alt={link.name} 
            className="max-w-full max-h-full object-contain filter contrast-125" 
          />
        </div>
      ) : (
        <div className="p-3 bg-primary/10 rounded-xl text-primary transform group-hover:scale-110 transition-transform">
          <link.icon size={24} />
        </div>
      )}
      <ExternalLink size={18} className="text-gray-400 group-hover:text-primary transition-colors" />
    </div>
    
    <h3 className="text-xl font-bold text-textTitle dark:text-white mb-2 group-hover:text-primary transition-colors">
      {link.name}
    </h3>
    
    <p className="text-gray-500 dark:text-dk-text-muted text-sm mb-6 flex-grow leading-relaxed">
      {link.desc}
    </p>
    
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto px-5 py-2.5 bg-neutralMuted dark:bg-dk-surface2 hover:bg-primary hover:text-white dark:text-gray-300 dark:hover:text-white text-sm font-bold rounded-lg text-center transition-all uppercase tracking-wider"
    >
      Visitar web oficial
    </a>
  </motion.div>
));

LinkCard.displayName = 'LinkCard';

export const Links = () => {
  return (
    <div className="min-h-screen bg-neutralMuted dark:bg-dk-bg transition-colors duration-300">
      <PageHero 
        title="Enlaces de Interés"
        subtitle="Recursos oficiales, federaciones y organismos institucionales relacionados con el club."
        image="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1920&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-20">
          {externalLinks.map((group) => (
            <div key={group.category}>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl md:text-3xl font-black text-textTitle dark:text-white uppercase tracking-tight">
                  {group.category}
                </h2>
                <div className="h-1 flex-grow bg-gray-200 dark:bg-dk-border rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.links.map((link) => (
                  <LinkCard key={link.name} link={link} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
