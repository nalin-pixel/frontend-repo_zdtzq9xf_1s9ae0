import Navbar from './components/Navbar';
import VideoFeed from './components/VideoFeed';
import TalentDirectory from './components/TalentDirectory';
import CallToAction from './components/CallToAction';

function Hero() {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(16,185,129,0.25),transparent),radial-gradient(40%_50%_at_90%_10%,rgba(6,182,212,0.25),transparent)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Talent hunt for Pakistan’s next sports stars
            </h1>
            <p className="mt-3 text-white/80">
              A TikTok-style video feed meets a LinkedIn-grade profile network. Discover and recruit athletes from every corner of Pakistan.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#feed" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-black hover:from-emerald-400 hover:to-cyan-300">Open Video Feed</a>
              <a href="#talent" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">Find Talent</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src="https://images.pexels.com/photos/4761668/pexels-photo-4761668.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Athletes" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-white backdrop-blur">
              <p className="text-sm font-semibold">Real highlights</p>
              <p className="text-xs text-white/70">Short vertical videos from athletes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <VideoFeed />
      <TalentDirectory />
      <CallToAction />
      <footer className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 text-white/60 text-sm">
        © {new Date().getFullYear()} PakTalent Sports — Built for Pakistan’s athletes and recruiters
      </footer>
    </div>
  );
}
