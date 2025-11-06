import { useMemo, useState } from 'react';
import { Crown, Medal, Star, DollarSign } from 'lucide-react';

const SPORTS = ['Cricket', 'Football', 'Hockey', 'Tennis'];

// Mock leaderboard data (month-based)
const MOCK_LEADERBOARD = {
  Cricket: [
    { id: 'c1', name: 'Hassan Ali', stat: 'Avg 140 km/h', city: 'Lahore', score: 97 },
    { id: 'c2', name: 'Usman Riaz', stat: 'Bat Avg 52.1', city: 'Karachi', score: 93 },
    { id: 'c3', name: 'Zeeshan Tariq', stat: '5-wicket hauls: 4', city: 'Multan', score: 89 },
  ],
  Football: [
    { id: 'f1', name: 'Ayesha Khan', stat: 'Key passes: 27', city: 'Karachi', score: 96 },
    { id: 'f2', name: 'Hamza Iqbal', stat: 'Goals: 11', city: 'Lahore', score: 92 },
    { id: 'f3', name: 'Sana Mir', stat: 'Assists: 14', city: 'Islamabad', score: 88 },
  ],
  Hockey: [
    { id: 'h1', name: 'Bilal Ahmed', stat: 'Drag flick: 120 km/h', city: 'Islamabad', score: 95 },
    { id: 'h2', name: 'Imran Shah', stat: 'Saves: 43', city: 'Karachi', score: 90 },
    { id: 'h3', name: 'Ali Raza', stat: 'Tackles: 71', city: 'Lahore', score: 87 },
  ],
  Tennis: [
    { id: 't1', name: 'Sara Malik', stat: 'Aces: 59', city: 'Lahore', score: 94 },
    { id: 't2', name: 'Noor Fatima', stat: 'Win rate: 78%', city: 'Karachi', score: 91 },
    { id: 't3', name: 'Faizan Butt', stat: 'Break points: 32', city: 'Rawalpindi', score: 86 },
  ],
};

const TIERS = [
  { id: 'bronze', name: 'Bronze', amount: 100, per: 'month', perks: ['Badge on profile'] },
  { id: 'silver', name: 'Silver', amount: 250, per: 'month', perks: ['Profile badge', 'Feed highlight 1x'] },
  { id: 'gold', name: 'Gold', amount: 500, per: 'month', perks: ['Badge', 'Feed highlight 2x', 'DM priority'] },
];

export default function Leaderboards() {
  const [sport, setSport] = useState('Cricket');
  const month = useMemo(() => new Date().toLocaleString('en-US', { month: 'long' }), []);

  return (
    <section id="leaderboards" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-xl font-semibold flex items-center gap-2"><Crown className="h-5 w-5 text-amber-300" /> Monthly Leaderboards</h2>
        <select value={sport} onChange={(e) => setSport(e.target.value)} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white">
          {SPORTS.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <p className="mt-1 text-sm text-white/70">Top performers in {sport} for {month}. Sponsor your favorite athlete to boost their journey.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MOCK_LEADERBOARD[sport].map((ath, idx) => (
          <LeaderboardCard key={ath.id} rank={idx + 1} athlete={ath} />
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center gap-2 text-white">
          <DollarSign className="h-5 w-5 text-emerald-300" />
          <p className="font-semibold">Sponsorship Options</p>
        </div>
        <p className="mt-1 text-sm text-white/70">Choose a monthly tier. Funds go directly to athletes to support training, travel, and equipment.</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {TIERS.map(t => (
            <div key={t.id} className="rounded-xl border border-white/10 bg-black/40 p-4 text-white">
              <p className="font-semibold">{t.name}</p>
              <p className="mt-1 text-2xl font-bold">${t.amount}<span className="text-sm font-medium text-white/70">/{t.per}</span></p>
              <ul className="mt-2 list-disc pl-5 text-sm text-white/80">
                {t.perks.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
              <button className="mt-4 w-full rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-400 px-3 py-2 text-sm font-semibold text-black hover:from-emerald-400 hover:to-cyan-300">Sponsor an Athlete</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeaderboardCard({ rank, athlete }) {
  const badges = [
    'bg-gradient-to-tr from-amber-400 to-yellow-300 text-black',
    'bg-gradient-to-tr from-gray-300 to-gray-100 text-black',
    'bg-gradient-to-tr from-orange-300 to-amber-200 text-black',
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-white">
      <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-xs">
        <Medal className="h-4 w-4 text-amber-300" /> #{rank}
      </div>
      <div className="flex items-center gap-3">
        <div className={`h-12 w-12 shrink-0 rounded-xl grid place-items-center font-bold ${rank <= 3 ? badges[rank-1] : 'bg-white/10'}`}>
          {athlete.name.split(' ').map(p => p[0]).join('')}
        </div>
        <div className="flex-1">
          <p className="font-semibold">{athlete.name}</p>
          <p className="text-sm text-white/70">{athlete.stat}</p>
          <div className="mt-1 flex items-center gap-1 text-amber-300">
            <Star className="h-4 w-4 fill-amber-300" />
            <span className="text-xs text-white/80">Score {athlete.score}</span>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium hover:bg-white/10">View Profile</button>
        <button className="rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-400 px-3 py-2 text-xs font-semibold text-black hover:from-emerald-400 hover:to-cyan-300">Sponsor</button>
      </div>
    </div>
  );
}
