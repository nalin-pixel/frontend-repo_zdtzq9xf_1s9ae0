import { useState } from 'react';
import { Home, Video, Users, Trophy, Search, User } from 'lucide-react';

export default function Navbar() {
  const [query, setQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-400 grid place-items-center text-white font-bold">PK</div>
            <div className="leading-tight">
              <p className="text-white font-semibold">PakTalent Sports</p>
              <p className="text-xs text-white/60">Find. Showcase. Recruit.</p>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-xl mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search athletes, clubs, sports..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-9 py-2 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-emerald-500/50"
              />
            </div>
          </div>

          {/* Actions */}
          <nav className="flex items-center gap-3">
            <a href="#" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/15">
              <Home className="h-4 w-4" />
              Home
            </a>
            <a href="#feed" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/15">
              <Video className="h-4 w-4" />
              Feed
            </a>
            <a href="#talent" className="hidden lg:inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/15">
              <Users className="h-4 w-4" />
              Talent
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-400 px-3 py-2 text-sm font-semibold text-black hover:from-emerald-400 hover:to-cyan-300">
              <Trophy className="h-4 w-4" />
              Recruit
            </a>
            <button className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10">
              <User className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
