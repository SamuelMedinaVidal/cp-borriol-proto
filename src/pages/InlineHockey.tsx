import { memo } from 'react';
import { Clock, Users, Target } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { ScheduleTable, type ScheduleRow } from '../components/ui/ScheduleTable';

const FEATURE_CARDS = [
  {
    icon: Users,
    color: 'text-secondary dark:text-dk-purple',
    border: 'border-secondary',
    title: 'Categorías',
    desc: 'Desde Prebenjamín hasta Senior Autonómico. Equipos para todas las edades.',
  },
  {
    icon: Clock,
    color: 'text-accent',
    border: 'border-accent',
    title: 'Horarios',
    desc: 'Entrenamientos estructurados de Lunes a Jueves a partir de las 17:30h.',
  },
  {
    icon: Target,
    color: 'text-primary',
    border: 'border-primary',
    title: 'Objetivos',
    desc: 'Formación integral del deportista, fomentando valores de esfuerzo y respeto.',
  },
] as const;

const SCHEDULE_ROWS: ScheduleRow[] = [
  { label: 'Escuela / Prebenjamín',     days: 'Lunes y Miércoles',       time: '17:30 - 18:30' },
  { label: 'Alevín / Infantil',         days: 'Martes y Jueves',          time: '18:30 - 20:00' },
  { label: 'Senior Masc / Autonómico', days: 'Lunes, Miércoles, Jueves', time: '21:00 - 22:30' },
];

// Memoised feature card — prevents re-renders on parent state changes
const FeatureCard = memo(({ icon: Icon, color, border, title, desc }: typeof FEATURE_CARDS[number]) => (
  <div className={`bg-white dark:bg-dk-surface p-10 rounded-2xl shadow-xl border-t-4 ${border} flex flex-col items-center text-center border border-gray-100 dark:border-[rgba(102,45,145,0.2)] hover:scale-105 transition-transform duration-300 cursor-default`}>
    <Icon size={52} className={`${color} mb-5`} />
    <h3 className="font-bold text-xl uppercase text-textTitle dark:text-white mb-3 tracking-wide">{title}</h3>
    <p className="text-gray-500 dark:text-dk-text-muted leading-relaxed">{desc}</p>
  </div>
));
FeatureCard.displayName = 'FeatureCard';

export const InlineHockey = () => (
  <div className="min-h-screen bg-neutralMuted dark:bg-dk-bg transition-colors duration-300">
    <PageHero
      title="Hockey"
      accentWord="Línea"
      subtitle="Adrenalina, velocidad y trabajo en equipo. Somos más que un club, somos una familia en la pista."
      bgColorClass="bg-primary"
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {FEATURE_CARDS.map((card) => (
          <FeatureCard key={card.title} {...card} />
        ))}
      </div>

      <ScheduleTable
        title="Horarios de Entrenamiento"
        rows={SCHEDULE_ROWS}
        headerBgClass="bg-secondary"
        accentColorClass="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-bright"
      />
    </div>
  </div>
);
