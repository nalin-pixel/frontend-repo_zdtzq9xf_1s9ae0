import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import VideoFeed from './components/VideoFeed.jsx';
import Leaderboards from './components/Leaderboards.jsx';
import CallToAction from './components/CallToAction.jsx';
import TalentDirectory from './components/TalentDirectory.jsx';
import AthleteProfile from './components/AthleteProfile.jsx';
import RecruiterPortal from './components/RecruiterPortal.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <main>
        <Hero />

        {/* Core feed & discovery */}
        <VideoFeed />

        {/* Action and conversion */}
        <CallToAction />

        {/* Competitive layer */}
        <Leaderboards />

        {/* Professional discovery */}
        <TalentDirectory />

        {/* Example profile preview */}
        <AthleteProfile />

        {/* Recruiter posting portal */}
        <RecruiterPortal />
      </main>

      <footer className="mt-10 border-t border-white/10 bg-black/60 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-white/60">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} PakTalent Sports — Built for Pakistan’s next generation of athletes.</p>
            <div className="flex gap-4">
              <a href="#leaderboards" className="hover:text-white">Leaderboards</a>
              <a href="#talent" className="hover:text-white">Directory</a>
              <a href="#recruit" className="hover:text-white">Recruit</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
