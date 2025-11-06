import React from 'react';
import { MapPin, Star, Medal, Crown, Mail, Phone, Instagram } from 'lucide-react';

export default function AthleteProfile() {
  const achievements = [
    { title: 'National U19 Champion', year: 2023 },
    { title: 'Inter-Provincial MVP', year: 2022 },
    { title: 'City League Top Scorer', year: 2021 },
  ];

  const stats = [
    { label: 'Speed', value: '34 km/h' },
    { label: 'Vertical', value: '78 cm' },
    { label: 'Endurance', value: 'Yo-Yo 20.1' },
  ];

  return (
    <section id="profile" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid gap-8 md:grid-cols-[360px,1fr]">
        {/* Left: Profile Card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-white/5">
            <img
              src="https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Athlete portrait"
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Ayesha Khan</h3>
          <p className="mt-1 text-sm text-white/70">Sprinter • 100m | 200m</p>
          <div className="mt-2 flex items-center gap-2 text-sm text-white/70">
            <MapPin className="h-4 w-4" /> Lahore, Punjab
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
              <p className="text-xs text-white/60">Followers</p>
              <p className="text-lg font-semibold">18.2k</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
              <p className="text-xs text-white/60">Highlights</p>
              <p className="text-lg font-semibold">124</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
              <p className="text-xs text-white/60">Sponsors</p>
              <p className="text-lg font-semibold">6</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="mailto:ayesha@example.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
            >
              <Mail className="h-4 w-4" /> Email Athlete
            </a>
            <a
              href="tel:+923001112223"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> Call Agent
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-2 text-sm font-semibold text-fuchsia-300 hover:bg-fuchsia-500/15"
            >
              <Instagram className="h-4 w-4" /> Instagram Highlights
            </a>
          </div>
        </div>

        {/* Right: Stats & Achievements */}
        <div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Performance Stats</h3>
              <div className="flex items-center gap-2 text-amber-300">
                <Crown className="h-5 w-5" />
                <span className="text-sm">Top 1% this month</span>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-white/60">{s.label}</p>
                  <p className="text-xl font-semibold">{s.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4">
              <h4 className="flex items-center gap-2 text-base font-semibold">
                <Medal className="h-5 w-5 text-amber-400" /> Achievements
              </h4>
              <ul className="space-y-3">
                {achievements.map((a) => (
                  <li key={a.title} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <div>
                        <p className="font-medium">{a.title}</p>
                        <p className="text-xs text-white/60">{a.year}</p>
                      </div>
                    </div>
                    <button className="rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/15">
                      Endorse
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 p-6">
            <h4 className="text-base font-semibold">Sponsorship Packages</h4>
            <p className="mt-1 text-sm text-white/70">Support this athlete with monthly tiers and unlock exclusive branding opportunities.</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                { name: 'Bronze', price: '₨25k/mo' },
                { name: 'Silver', price: '₨60k/mo' },
                { name: 'Gold', price: '₨120k/mo' },
              ].map((t) => (
                <div key={t.name} className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <p className="text-sm text-white/60">{t.name}</p>
                  <p className="text-lg font-semibold">{t.price}</p>
                  <button className="mt-3 w-full rounded-lg bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-white/90">Sponsor</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
