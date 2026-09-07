"use client";

import { Music, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type MusicPlayerProps = { track: "home" | "quiz" };

const tracks = {
  home: { label: "Musik Beranda", file: "/music/beranda.mp3" },
  quiz: { label: "Musik Kuis", file: "/music/kuis.mp3" },
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
    <div className="flex w-full max-w-xs items-center gap-3 rounded-full bg-[#1c1b1b]/90 px-3 py-2 shadow-[inset_0_2px_4px_rgba(0,0,0,.8),0_4px_0_#090909]">
      <button type="button" onClick={togglePlayback} disabled={!available} aria-label={playing ? `Jeda ${current.label}` : `Putar ${current.label}`} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFD22A] text-[#3c2f00] shadow-[inset_0_2px_2px_rgba(255,255,255,.6),0_4px_0_#A07400] transition-transform hover:-translate-y-0.5 active:translate-y-1 disabled:cursor-not-allowed disabled:opacity-50">
        {playing ? <Pause className="h-5 w-5" aria-hidden="true" /> : <Play className="ml-0.5 h-5 w-5" aria-hidden="true" />}
      </button>
      <Music className="h-4 w-4 shrink-0 text-[#54CED7]" aria-hidden="true" />
      <div className="min-w-0"><p className="truncate font-['Quicksand'] text-xs font-bold text-[#FFF8E8]">{current.label}</p><p className="font-['Quicksand'] text-[10px] font-semibold text-[#999079]">{available ? "Tekan untuk memutar" : "File musik belum tersedia"}</p></div>
      <audio ref={audioRef} src={current.file} loop autoPlay preload="none" onEnded={() => setPlaying(false)} onError={() => setAvailable(false)} />
    </div>
  );
}
