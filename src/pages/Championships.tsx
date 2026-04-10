import { Trophy } from 'lucide-react';

const standings = [
  { pos: 1, name: 'CP Borriol',         points: 24, played: 9, won: 8, drawn: 0, lost: 1 },
  { pos: 2, name: 'HC Castellón',       points: 21, played: 9, won: 7, drawn: 0, lost: 2 },
  { pos: 3, name: 'Tiburones Valencia', points: 18, played: 9, won: 6, drawn: 0, lost: 3 },
  { pos: 4, name: 'Alas Sagunto',       points: 12, played: 9, won: 4, drawn: 0, lost: 5 },
  { pos: 5, name: 'Halcones Vila-real', points: 6,  played: 9, won: 2, drawn: 0, lost: 7 },
  { pos: 6, name: 'Raptors Oropesa',   points: 0,  played: 9, won: 0, drawn: 0, lost: 9 },
];

const recentMatches = [
  { id: 1, date: '10/04/2026', home: 'CP Borriol',         away: 'Halcones Vila-real', result: '6-1' },
  { id: 2, date: '03/04/2026', home: 'Tiburones Valencia', away: 'CP Borriol',         result: '2-4' },
  { id: 3, date: '27/03/2026', home: 'CP Borriol',         away: 'HC Castellón',       result: '3-2' },
  { id: 4, date: '20/03/2026', home: 'Alas Sagunto',       away: 'CP Borriol',         result: '4-3' },
  { id: 5, date: '13/03/2026', home: 'CP Borriol',         away: 'Raptors Oropesa',   result: '8-0' },
];

export const Championships = () => {
  return (
    <div className="min-h-screen bg-neutralMuted dark:bg-dk-bg py-12 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto pt-6">
        <div className="mb-12">
          <h1 className="text-5xl font-extrabold text-textTitle dark:text-white uppercase mb-4">Torneos y Resultados</h1>
          <div className="w-24 h-1.5 bg-accent mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Clasificación actual y últimos resultados de nuestro equipo Senior en la Liga Autonómica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Standings */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-dk-surface rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-dk-border">
              <div className="p-5 bg-secondary text-white flex items-center gap-3">
                <Trophy size={22} />
                <h2 className="text-xl font-bold uppercase">Clasificación — Liga Autonómica</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-neutralMuted dark:bg-dk-surface2 text-gray-600 dark:text-gray-400 uppercase text-xs tracking-wider">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold">Pos</th>
                      <th className="px-4 py-3 text-left font-bold">Equipo</th>
                      <th className="px-4 py-3 text-center font-bold">PJ</th>
                      <th className="px-4 py-3 text-center font-bold">G</th>
                      <th className="px-4 py-3 text-center font-bold">E</th>
                      <th className="px-4 py-3 text-center font-bold">P</th>
                      <th className="px-4 py-3 text-center font-bold text-secondary dark:text-dk-purple">PTS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-dk-border">
                    {standings.map((team) => (
                      <tr
                        key={team.pos}
                        className={`transition-colors ${
                          team.name.includes('Borriol')
                            ? 'bg-green-50 dark:bg-green-950/30'
                            : 'hover:bg-neutralMuted dark:hover:bg-dk-surface2'
                        }`}
                      >
                        <td className="px-4 py-3 font-bold text-gray-700 dark:text-gray-300">{team.pos}</td>
                        <td className={`px-4 py-3 font-bold ${team.name.includes('Borriol') ? 'text-primary dark:text-primary' : 'text-textTitle dark:text-white'}`}>
                          {team.name}
                        </td>
                        <td className="px-4 py-3 text-center text-gray-600 dark:text-gray-400">{team.played}</td>
                        <td className="px-4 py-3 text-center text-gray-600 dark:text-gray-400">{team.won}</td>
                        <td className="px-4 py-3 text-center text-gray-600 dark:text-gray-400">{team.drawn}</td>
                        <td className="px-4 py-3 text-center text-gray-600 dark:text-gray-400">{team.lost}</td>
                        <td className="px-4 py-3 text-center font-black text-secondary dark:text-dk-purple">{team.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Recent Matches */}
          <div>
            <div className="bg-white dark:bg-dk-surface rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-dk-border">
              <div className="p-5 bg-textTitle dark:bg-dk-surface2 text-white flex items-center gap-3 border-b dark:border-dk-border">
                <h2 className="text-xl font-bold uppercase">Últimos Resultados</h2>
              </div>
              {recentMatches.map((match) => (
                <div
                  key={match.id}
                  className="p-4 border-b border-gray-100 dark:border-dk-border hover:bg-neutralMuted dark:hover:bg-dk-surface2 transition-colors last:border-b-0"
                >
                  <div className="text-xs text-center text-gray-400 dark:text-gray-500 mb-2 font-semibold uppercase tracking-wider">
                    {match.date}
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="w-5/12 text-right font-bold text-sm text-textTitle dark:text-white leading-tight">{match.home}</span>
                    <span className="w-2/12 text-center font-black text-base text-white bg-primary dark:bg-primary px-2 py-0.5 rounded-md shadow-sm">
                      {match.result}
                    </span>
                    <span className="w-5/12 text-left font-bold text-sm text-textTitle dark:text-white leading-tight">{match.away}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
