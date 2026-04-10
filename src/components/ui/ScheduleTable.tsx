import { memo } from 'react';

export interface ScheduleRow {
  label: string;   // e.g. 'Alevín / Infantil'
  days:  string;   // e.g. 'Martes y Jueves'
  time:  string;   // e.g. '18:30 - 20:00'
}

interface ScheduleTableProps {
  title:          string;
  season?:        string;        // e.g. 'Temporada 2026'
  rows:           ScheduleRow[];
  accentColorClass?: string;     // time badge color, e.g. 'bg-primary/10 text-primary dark:bg-primary/20'
  headerBgClass:  string;        // e.g. 'bg-secondary' | 'bg-primary'
}

/**
 * Reusable schedule table for discipline pages.
 */
export const ScheduleTable = memo(({
  title,
  season = 'Temporada 2026',
  rows,
  accentColorClass = 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-bright',
  headerBgClass,
}: ScheduleTableProps) => (
  <div className="mt-20 bg-white dark:bg-dk-surface rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-dk-border">
    <div className={`p-7 ${headerBgClass} text-white flex justify-between items-center`}>
      <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight">{title}</h2>
      <span className="hidden sm:block px-4 py-1.5 bg-white/15 rounded-full text-xs font-bold uppercase tracking-widest border border-white/25">
        {season}
      </span>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-neutralMuted dark:bg-dk-surface2 text-gray-500 dark:text-gray-400 uppercase text-xs font-bold tracking-[0.14em] border-b border-gray-200 dark:border-dk-border">
          <tr>
            <th className="px-7 py-4">Grupo / Nivel</th>
            <th className="px-7 py-4">Días</th>
            <th className="px-7 py-4">Horario</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-dk-border">
          {rows.map(({ label, days, time }) => (
            <tr
              key={label}
              className="hover:bg-neutralMuted dark:hover:bg-dk-surface2 transition-colors group"
            >
              <td className="px-7 py-5 font-bold text-textTitle dark:text-white group-hover:text-primary transition-colors">
                {label}
              </td>
              <td className="px-7 py-5 text-gray-600 dark:text-dk-text-muted font-medium">{days}</td>
              <td className="px-7 py-5">
                <span className={`inline-block px-4 py-1.5 rounded-full font-mono font-bold text-sm ${accentColorClass}`}>
                  {time}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
));
ScheduleTable.displayName = 'ScheduleTable';
