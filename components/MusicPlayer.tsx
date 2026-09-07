"use client";

import { Music, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type MusicPlayerProps = { track: "home" | "leaderboard" };

const tracks = {
  home: { label: "Musik Umum", file: "/music/ssstik.io_1788770269265.mp3" },
  leaderboard: { label: "Musik Leaderboard", file: "/music/ssstik.io_1788770522543.mp3" },
};

export default function MusicPlayer({ track }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);
  const current = tracks[track];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.play().then(() => setPlaying(true)).catch(() => {
      // Autoplay bersuara dapat diblokir browser; tombol play tetap tersedia.
    });
  }, [current.file]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setAvailable(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <button type="button" onClick={togglePlayback} disabled={!available} title={current.label} aria-label={playing ? `Jeda ${current.label}` : `Putar ${current.label}`} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFD22A] text-[#3c2f00] shadow-[inset_0_2px_2px_rgba(255,255,255,.6),0_4px 0_#A07400,0_8px 14px_rgba(0,0,0,.65)] transition-transform hover:-translate-y-0.5 active:translate-y-1 disabled:cursor-not-allowed disabled:opacity-50">
        {playing ? <Pause className="h-5 w-5" aria-hidden="true" /> : <Play className="ml-0.5 h-5 w-5" aria-hidden="true" />}
      </button>
      <Music className="pointer-events-none absolute -right-1 -top-1 h-4 w-4 rounded-full bg-[#54CED7] p-0.5 text-[#003940]" aria-hidden="true" />
      <audio ref={audioRef} src={current.file} loop autoPlay preload="none" onEnded={() => setPlaying(false)} onError={() => setAvailable(false)} />
    </div>
  );
}
