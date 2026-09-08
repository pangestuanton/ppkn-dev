"use client";

import { useEffect } from "react";

let audioContext: AudioContext | null = null;

function playClickSound() {
  if (!audioContext) {
    audioContext = new window.AudioContext();
  }

  const context = audioContext;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const now = context.currentTime;

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(620, now);
  oscillator.frequency.exponentialRampToValueAtTime(420, now + 0.06);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.08, now + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.075);

  // Resuming here is safe because this function only runs from a user click.
  void context.resume();
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
