import React from 'react';
import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-b-3xl">
      {/* Pakistani flag background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid grid-cols-[3fr_2fr]">
          <div className="bg-[#01411C]" />
          <div className="bg-white" />
        </div>
        {/* Crescent and star */}
        <svg className="absolute left-[22%] top-1/2 -translate-y-1/2" width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="130" cy="130" r="95" fill="white" />
          <circle cx="150" cy="130" r="95" fill="#01411C" />
          <g transform="translate(175,70)">
            <polygon points="20,0 25,15 40,15 28,24 33,38 20,29 7,38 12,24 0,15 15,15" fill="white" />
          </g>
        </svg>
      </div>

      {/* Sports equipment collage (SVGs) */}
      <div className="absolute inset-0">
        <svg className="absolute left-4 top-10 w-44 h-44 opacity-95" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          {/* Cricket helmet */}
          <ellipse cx="90" cy="80" rx="60" ry="45" fill="#1F2937" />
          <rect x="30" y="100" width="120" height="18" rx="9" fill="#0EA5E9" />
          <path d="M60 110 L150 130" stroke="#94A3B8" strokeWidth="5" />
          <path d="M65 120 L145 140" stroke="#94A3B8" strokeWidth="5" />
          <circle cx="55" cy="105" r="6" fill="#0EA5E9" />
        </svg>

        <svg className="absolute right-6 top-16 w-40 h-40 rotate-12" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          {/* Cricket bat */}
          <rect x="100" y="30" width="22" height="120" rx="6" fill="#F59E0B" />
          <rect x="100" y="20" width="22" height="20" rx="4" fill="#EF4444" />
          {/* Ball */}
          <circle cx="70" cy="135" r="14" fill="#EF4444" />
          <path d="M58 135 Q70 128 82 135" stroke="#FDE68A" strokeWidth="2" fill="none" />
        </svg>

        <svg className="absolute left-10 bottom-6 w-40 h-40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          {/* Football (soccer) */}
          <circle cx="100" cy="100" r="70" fill="#F8FAFC" stroke="#0F172A" strokeWidth="4" />
          <polygon points="100,60 120,80 112,104 88,104 80,80" fill="#0F172A" />
          <polygon points="60,90 80,80 72,104 52,114 50,98" fill="#0F172A" />
          <polygon points="140,90 150,98 148,114 128,104 120,80" fill="#0F172A" />
          <polygon points="80,120 100,110 120,120 110,140 90,140" fill="#0F172A" />
        </svg>

        <svg className="absolute right-8 bottom-8 w-44 h-44 -rotate-6" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          {/* Hockey stick */}
          <rect x="160" y="20" width="16" height="160" rx="8" fill="#9CA3AF" />
          <path d="M176 180 Q160 220 120 220" stroke="#9CA3AF" strokeWidth="16" fill="none" strokeLinecap="round" />
          {/* Boxing gloves */}
          <circle cx="80" cy="140" r="26" fill="#DC2626" />
          <rect x="64" y="150" width="32" height="26" rx="8" fill="#B91C1C" />
          <circle cx="40" cy="160" r="24" fill="#DC2626" />
          <rect x="26" y="170" width="30" height="22" rx="8" fill="#B91C1C" />
        </svg>
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-end px-6 pb-10 text-white">
        <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur">
          <Star className="h-4 w-4 text-yellow-400" />
          <span className="text-sm">Pakistan Sports Talent Network</span>
        </div>
        <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
          Discover. Showcase. Sponsor.
        </h1>
        <p className="mt-3 max-w-2xl text-base text-white/90 sm:text-lg">
          A high-energy platform merging short-form highlights with a professional talent directory and monthly leaderboards.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#leaderboards" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black shadow hover:bg-white/90">
            <Rocket className="h-4 w-4" /> Explore Leaderboards
          </a>
          <a href="#directory" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">
            Build Your Profile
          </a>
        </div>
      </div>
    </section>
  );
}
