import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-b-3xl">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70" />
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
