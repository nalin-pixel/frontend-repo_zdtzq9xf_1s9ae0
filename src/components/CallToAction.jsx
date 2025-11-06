import { Rocket } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-tr from-emerald-600/30 to-cyan-500/20 p-8 sm:p-12">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.35),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(6,182,212,0.35),transparent_40%)]" />
        <div className="relative">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">Showcase your skills. Get discovered.</h3>
          <p className="mt-2 text-white/80 max-w-2xl">Upload short-form highlight videos, build a professional sports profile, and connect with scouts and clubs across Pakistan.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#feed" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black">
              <Rocket className="h-4 w-4" /> Start Exploring
            </a>
            <a href="#talent" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">Browse Talent</a>
          </div>
        </div>
      </div>
    </section>
  );
}
