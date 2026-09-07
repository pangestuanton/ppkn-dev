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
    const startAudio = () => {
      audio.play().catch(() => undefined);
      window.removeEventListener("pointerdown", startAudio);
      window.removeEventListener("keydown", startAudio);
      window.removeEventListener("touchstart", startAudio);
    };

    // Coba langsung; bila diblokir, interaksi pertama pengguna akan membuka audio.
    startAudio();
    window.addEventListener("pointerdown", startAudio, { once: true });
    window.addEventListener("keydown", startAudio, { once: true });
    window.addEventListener("touchstart", startAudio, { once: true });
    return () => {
      window.removeEventListener("pointerdown", startAudio);
      window.removeEventListener("keydown", startAudio);
      window.removeEventListener("touchstart", startAudio);
    };
  }, [current.file]);

  return (
    <audio ref={audioRef} src={current.file} loop autoPlay preload="auto" aria-label={current.label} />
  );
}
