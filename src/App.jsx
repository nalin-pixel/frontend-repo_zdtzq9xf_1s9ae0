import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AthleteProfile from './components/AthleteProfile';
import RecruiterPortal from './components/RecruiterPortal';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <AthleteProfile />
      <RecruiterPortal />
      <footer className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 text-white/60 text-sm">
        © {new Date().getFullYear()} PakTalent Sports — Built for Pakistan’s athletes and recruiters
      </footer>
    </div>
  );
}
