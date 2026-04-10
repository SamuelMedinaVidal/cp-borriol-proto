import { memo } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, MapPin, ChevronRight, Info } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';

const upcomingTournaments = [
  { id: 1, name: 'Copa Federación Senior', date: '25-26 Abril 2026', location: 'Borriol (Castellón)', type: 'Autonómico' },
  { id: 2, name: 'Trofeo San Pedro', date: '15 Mayo 2026', location: 'Castellón de la Plana', type: 'Invitacional' },
  { id: 3, name: 'Fase Final Inter-Escuelas', date: '06 Junio 2026', location: 'Valencia', type: 'Escolar' },
];

const standings = [
  { pos: 1, name: 'CP Borriol', points: 24, played: 9, won: 8, drawn: 0, lost: 1 },
  { pos: 2, name: 'HC Castellón', points: 21, played: 9, won: 7, drawn: 0, lost: 2 },
  { pos: 3, name: 'Tiburones Valencia', points: 18, played: 9, won: 6, drawn: 0, lost: 3 },
  { pos: 4, name: 'Alas Sagunto', points: 12, played: 9, won: 4, drawn: 0, lost: 5 },
];

const recentResults = [
  { id: 1, date: '10 Abril', home: 'CP Borriol', away: 'Halcones Vila-real', score: '6-1' },
  { id: 2, date: '03 Abril', home: 'Tiburones Valencia', away: 'CP Borriol', score: '2-4' },
  { id: 3, date: '27 Marzo', home: 'CP Borriol', away: 'HC Castellón', score: '3-2' },
];

const TournamentCard = memo(({ tour }: { tour: typeof upcomingTournaments[0] }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-dk-surface rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-dk-border group transition-all"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
        <Calendar size={24} />
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest bg-gray-100 dark:bg-dk-surface2 text-gray-500 px-2 py-1 rounded">
        {tour.type}
      </span>
    </div>
    <h3 className="text-lg font-bold text-textTitle dark:text-white mb-4 group-hover:text-primary transition-colors">
      {tour.name}
    </h3>
    <div className="space-y-2 mb-6 text-sm text-gray-500 dark:text-dk-text-muted">
      <div className="flex items-center gap-2">
        <Calendar size={14} className="text-secondary" />
        {tour.date}
      </div>
      <div className="flex items-center gap-2">
        <MapPin size={14} className="text-secondary" />
        {tour.location}
      </div>
    </div>
    <button className="w-full py-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-white text-xs font-bold rounded-lg transition-all uppercase tracking-wider flex items-center justify-center gap-2">
      Más info <Info size={14} />
    </button>
  </motion.div>
));

TournamentCard.displayName = 'TournamentCard';

export const Championships = () => {
  return (
    <div className="min-h-screen bg-neutralMuted dark:bg-dk-bg transition-colors duration-300">
      <PageHero
        title="Competición"
        subtitle="Sigue de cerca a nuestros equipos: próximos torneos, resultados exclusivos y clasificaciones actualizadas."
        image="https://images.unsplash.com/photo-1549556204-7a1a2b0c2a52?auto=format&fit=crop&w=1920&q=80"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* Section 1: Próximos Torneos */}
        <section>
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-secondary mb-2">Calendario</p>
              <h2 className="text-4xl font-extrabold text-textTitle dark:text-white uppercase tracking-tight">Próximos Torneos</h2>
            </div>
            <div className="hidden md:block h-px flex-grow bg-gray-200 dark:bg-dk-border mx-10" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingTournaments.map(tour => (
              <TournamentCard key={tour.id} tour={tour} />
            ))}
          </div>
        </section>

        {/* Section 2: Resultados y Clasificación */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Clasificación Table */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <Trophy className="text-accent" size={28} />
              <h2 className="text-2xl font-black text-textTitle dark:text-white uppercase tracking-tight">Clasificación Senior</h2>
            </div>
            
            <div className="bg-white dark:bg-dk-surface rounded-2xl shadow-sm border border-gray-100 dark:border-dk-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-[#F9FAFB] dark:bg-dk-surface2 text-gray-500 uppercase text-[10px] font-bold tracking-widest">
                    <tr>
                      <th className="px-6 py-4 text-left">Pos</th>
                      <th className="px-6 py-4 text-left">Equipo</th>
                      <th className="px-6 py-4 text-center">PJ</th>
                      <th className="px-6 py-4 text-center">G</th>
                      <th className="px-6 py-4 text-center">PTS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 dark:divide-dk-border">
                    {standings.map(team => (
                      <tr key={team.pos} className={`hover:bg-neutralMuted dark:hover:bg-dk-surface2 transition-colors ${team.name.includes('Borriol') ? 'bg-primary/5' : ''}`}>
                        <td className="px-6 py-4 font-bold text-gray-400">{team.pos}</td>
                        <td className="px-6 py-4">
                          <span className={`font-bold ${team.name.includes('Borriol') ? 'text-primary' : 'text-textTitle dark:text-white'}`}>
                            {team.name}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-500">{team.played}</td>
                        <td className="px-6 py-4 text-center text-gray-500">{team.won}</td>
                        <td className="px-6 py-4 text-center font-black text-secondary">{team.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Recent Match Log */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-black text-textTitle dark:text-white uppercase tracking-tight mb-8">Últimas Jornadas</h2>
            <div className="space-y-4">
              {recentResults.map(res => (
                <div key={res.id} className="bg-white dark:bg-dk-surface p-5 rounded-2xl border border-gray-100 dark:border-dk-border flex flex-col items-center">
                  <span className="text-[10px] uppercase font-bold text-gray-400 mb-3">{res.date}</span>
                  <div className="flex items-center justify-between w-full gap-4">
                    <span className="flex-1 text-right text-sm font-bold truncate text-textTitle dark:text-white">{res.home}</span>
                    <span className="px-3 py-1 bg-primary text-white font-black rounded-lg text-sm shadow-sm">{res.score}</span>
                    <span className="flex-1 text-left text-sm font-bold truncate text-textTitle dark:text-white">{res.away}</span>
                  </div>
                </div>
              ))}
              <button className="w-full mt-4 flex items-center justify-center gap-2 text-xs font-bold text-secondary dark:text-dk-purple uppercase tracking-widest hover:text-primary transition-colors">
                Calendario Completo <ChevronRight size={14} />
              </button>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
};
