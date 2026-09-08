"use client";

import { useEffect } from "react";

let clickAudio: HTMLAudioElement | null = null;

function playClickSound() {
  if (!clickAudio) {
    clickAudio = new Audio("/music/roblox-click-sound.mp3");
    clickAudio.preload = "auto";
  }

  clickAudio.currentTime = 0;
  void clickAudio.play().catch(() => undefined);
}

export default function ClickSound() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const control = target.closest(
        "button, a, [role='button'], input[type='button'], input[type='submit'], input[type='reset']"
      );
      if (!control || (control instanceof HTMLButtonElement && control.disabled)) return;

      playClickSound();
    };

    // Capture phase also covers controls whose own handlers stop propagation.
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
