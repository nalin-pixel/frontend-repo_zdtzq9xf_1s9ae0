import { useMemo, useState } from 'react';
import { MapPin, Filter, Star } from 'lucide-react';

const MOCK_TALENT = [
  { id: 1, name: 'Ayesha Khan', sport: 'Football', city: 'Karachi', rating: 4.8, role: 'Midfielder' },
  { id: 2, name: 'Hassan Ali', sport: 'Cricket', city: 'Lahore', rating: 4.6, role: 'Bowler' },
  { id: 3, name: 'Bilal Ahmed', sport: 'Hockey', city: 'Islamabad', rating: 4.5, role: 'Forward' },
  { id: 4, name: 'Sara Malik', sport: 'Tennis', city: 'Lahore', rating: 4.2, role: 'Singles' },
];

export default function TalentDirectory() {
  const [sport, setSport] = useState('All');
  const [city, setCity] = useState('All');

  const sports = ['All', 'Cricket', 'Football', 'Hockey', 'Tennis'];
  const cities = ['All', 'Karachi', 'Lahore', 'Islamabad'];

  const filtered = useMemo(() => {
    return MOCK_TALENT.filter(t => (sport === 'All' || t.sport === sport) && (city === 'All' || t.city === city));
  }, [sport, city]);

  return (
    <section id="talent" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-xl font-semibold">Talent Directory</h2>
        <div className="flex items-center gap-2 text-white/70">
          <Filter className="h-4 w-4" />
          <span className="text-sm">Quick filters</span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:flex sm:items-center">
        <select value={sport} onChange={e => setSport(e.target.value)} className="w-full sm:w-44 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white">
          {sports.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <select value={city} onChange={e => setCity(e.target.value)} className="w-full sm:w-44 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white">
          {cities.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
          <TalentCard key={t.id} data={t} />
        ))}
      </div>
    </section>
  );
}

function TalentCard({ data }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 grid place-items-center text-black font-bold">
          {data.name.split(' ').map(p => p[0]).join('')}
        </div>
        <div className="flex-1">
          <p className="font-semibold">{data.name}</p>
          <p className="text-sm text-white/70">{data.role} • {data.sport}</p>
          <div className="mt-1 flex items-center gap-1 text-amber-300">
            <Star className="h-4 w-4 fill-amber-300" />
            <span className="text-xs text-white/80">{data.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm text-white/80">
        <MapPin className="h-4 w-4" />
        <span>{data.city}, Pakistan</span>
      </div>
      <button className="mt-4 w-full rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-400 px-3 py-2 text-sm font-semibold text-black hover:from-emerald-400 hover:to-cyan-300">View Profile</button>
    </div>
  );
}
