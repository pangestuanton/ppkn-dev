"use client";

import { useEffect, useRef } from "react";

type MusicPlayerProps = { track: "home" | "leaderboard" };

const tracks = {
  home: { label: "Musik Umum", file: "/music/ssstik.io_1788770269265.mp3" },
  leaderboard: { label: "Musik Leaderboard", file: "/music/ssstik.io_1788770522543.mp3" },
};

export default function MusicPlayer({ track }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const current = tracks[track];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.play().catch(() => {
      // Autoplay bersuara dapat diblokir oleh kebijakan browser.
    });
  }, [current.file]);

  return (
    <audio ref={audioRef} src={current.file} loop autoPlay preload="auto" aria-label={current.label} />
  );
}
