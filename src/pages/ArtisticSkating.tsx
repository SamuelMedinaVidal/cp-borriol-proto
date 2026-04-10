import { memo } from 'react';
import { Clock, Users, Star } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { ScheduleTable, type ScheduleRow } from '../components/ui/ScheduleTable';

const FEATURE_CARDS = [
  {
    icon: Users,
    color: 'text-primary',
    border: 'border-primary',
    title: 'Niveles',
    desc: 'Desde Iniciación básica hasta Competición Nacional. Te acompañamos paso a paso.',
  },
  {
    icon: Clock,
    color: 'text-accent',
    border: 'border-accent',
    title: 'Horarios',
    desc: 'Opciones de entrenamiento adaptadas a todas las edades escolares.',
  },
  {
    icon: Star,
    color: 'text-secondary dark:text-dk-purple',
    border: 'border-secondary',
    title: 'Expresión',
    desc: 'Desarrollamos técnica, saltos y piruetas junto a la expresión corporal.',
  },
] as const;

const SCHEDULE_ROWS: ScheduleRow[] = [
  { label: 'Iniciación I y II', days: 'Lunes y Miércoles', time: '17:30 - 18:30' },
  { label: 'Avanzado Promesas', days: 'Martes y Jueves', time: '18:30 - 20:00' },
  { label: 'Grupo Show / Competición', days: 'Viernes y Sábado am.', time: '19:00 - 21:00' },
];

const FeatureCard = memo(({ icon: Icon, color, border, title, desc }: typeof FEATURE_CARDS[number]) => (
  <div className={`bg-white dark:bg-dk-surface p-10 rounded-2xl shadow-xl border-t-4 ${border} flex flex-col items-center text-center border border-gray-100 dark:border-[rgba(102,45,145,0.2)] hover:scale-105 transition-transform duration-300 cursor-default`}>
    <Icon size={52} className={`${color} mb-5`} />
    <h3 className="font-bold text-xl uppercase text-textTitle dark:text-white mb-3 tracking-wide">{title}</h3>
    <p className="text-gray-500 dark:text-dk-text-muted leading-relaxed">{desc}</p>
  </div>
));
FeatureCard.displayName = 'FeatureCard';

export const ArtisticSkating = () => (
  <div className="min-h-screen bg-neutralMuted dark:bg-dk-bg transition-colors duration-300">
    <PageHero
      title="Patinaje Artístico en Línea"
      accentWord="en Línea"
      subtitle="Elegancia, técnica y expresión. Transforma el deporte en un arte sobre las cuatro ruedas."
      bgColorClass="bg-secondary"
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {FEATURE_CARDS.map((card) => (
          <FeatureCard key={card.title} {...card} />
        ))}
      </div>

      <ScheduleTable
        title="Grupos de Patinaje Artístico en Línea"
        rows={SCHEDULE_ROWS}
        headerBgClass="bg-primary"
        accentColorClass="bg-secondary/10 text-secondary dark:bg-dk-purple/20 dark:text-dk-purple"
      />
    </div>
  </div>
);
