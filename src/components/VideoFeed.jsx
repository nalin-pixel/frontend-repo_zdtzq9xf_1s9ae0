import { useEffect, useState } from 'react';
import { Play, Volume2, VolumeX, Heart, MessageCircle, Share2 } from 'lucide-react';

// Mock feed data for now (frontend only). In a full app this would come from backend
const MOCK_VIDEOS = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1712145176765-cc1a308331e4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIYXNzYW4lMjBBbGl8ZW58MHwwfHx8MTc2MjM4NzkyNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    sport: 'Cricket',
    name: 'Hassan Ali',
    location: 'Lahore, Pakistan',
    headline: 'Fast bowler • 140 km/h • Swing specialist',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1727333324949-cf0724f75bc0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBeWVzaGElMjBLaGFufGVufDB8MHx8fDE3NjIzODc5MjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    sport: 'Football',
    name: 'Ayesha Khan',
    location: 'Karachi, Pakistan',
    headline: 'Attacking midfielder • Vision & passing',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1618381735202-a701de004821?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCaWxhbCUyMEFobWVkfGVufDB8MHx8fDE3NjIzODc5MjZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    sport: 'Hockey',
    name: 'Bilal Ahmed',
    location: 'Islamabad, Pakistan',
    headline: 'Drag-flick expert • National U19',
  },
];

export default function VideoFeed() {
  const [muted, setMuted] = useState(true);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handler = () => {
      const cards = document.querySelectorAll('.video-card');
      const mid = window.innerHeight / 2;
      let nearest = 0;
      let minDist = Infinity;
      cards.forEach((c, i) => {
        const rect = c.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - mid);
        if (dist < minDist) {
          minDist = dist;
          nearest = i;
        }
      });
      setActive(nearest);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <section id="feed" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 grid gap-6 md:grid-cols-[1fr_360px]">
      <div className="space-y-6">
        {MOCK_VIDEOS.map((v, idx) => (
          <VideoCard key={v.id} data={v} autoPlay={idx === active} muted={muted} />
        ))}
      </div>
      <aside className="hidden md:block sticky top-24 h-fit rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
        <p className="text-sm font-semibold text-white">Recruiter Spotlight</p>
        <div className="mt-3 space-y-3 text-sm">
          <p>Discover rising talent across Pakistan. Filter by sport, city, and age group.</p>
          <div className="flex items-center gap-2 text-white/70"><Play className="h-4 w-4" /> Auto-play is {"on"}</div>
          <button onClick={() => setMuted(m => !m)} className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs font-medium text-white hover:bg-white/15">
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            {muted ? 'Unmute' : 'Mute'}
          </button>
        </div>
      </aside>
    </section>
  );
}

function VideoCard({ data, autoPlay, muted }) {
  const [likes, setLikes] = useState(() => Math.floor(100 + Math.random() * 900));

  return (
    <div className="video-card relative overflow-hidden rounded-2xl border border-white/10 bg-black">
      <div className="relative aspect-[9/16] w-full">
        <video
          src={data.src}
          autoPlay={autoPlay}
          muted={muted}
          loop
          playsInline
          className="h-full w-full object-cover"
        />

        {/* Overlay actions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-3 left-3 right-16 text-white">
          <div className="rounded-lg bg-black/40 backdrop-blur px-3 py-2 w-max">
            <span className="text-xs uppercase tracking-wider text-emerald-300">{data.sport}</span>
          </div>
          <p className="mt-2 text-lg font-semibold">{data.name}</p>
          <p className="text-sm text-white/80">{data.headline}</p>
          <p className="text-xs text-white/60">{data.location}</p>
        </div>
        <div className="absolute bottom-3 right-3 flex flex-col items-center gap-3">
          <button onClick={() => setLikes(l => l + 1)} className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur">
            <Heart className="h-5 w-5" />
          </button>
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur">
            <MessageCircle className="h-5 w-5" />
          </button>
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur">
            <Share2 className="h-5 w-5" />
          </button>
          <div className="text-xs text-white/80">{likes}</div>
        </div>
      </div>
    </div>
  );
}
