"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "Beranda", path: "/", dotColor: "#edc212" },
  { label: "Petunjuk", path: "/petunjuk", dotColor: "#ffb597" },
  { label: "Leaderboard", path: "/leaderboard", dotColor: "#a6c8ff" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const menuOpen = menuPath === pathname;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e0e]/90 backdrop-blur-md">
      <div className="relative h-16 md:h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex items-center justify-between">
        {/* Logo Badge */}
        <Link
          href="/"
          className="min-h-11 inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-[#FFD22A] text-[#3c2f00] font-['Bricolage_Grotesque'] font-bold text-base sm:text-lg tracking-tight uppercase
            shadow-[0_5px_0px_#a07400,0_12px_18px_rgba(0,0,0,0.65)]
            hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_1px_0px_#a07400]
            transition-transform select-none"
        >
          {siteConfig.title.split(" ")[0]} KUIS
        </Link>

        {/* Navigation Pills */}
        <nav id="primary-navigation" aria-label="Navigasi utama" className={`${menuOpen ? "flex" : "hidden"} absolute top-full left-4 right-4 flex-col items-stretch gap-2 bg-[#1c1b1b] p-3 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] md:static md:flex md:flex-row md:items-center md:gap-4 md:bg-[#1c1b1b]/80 md:px-4 md:py-2 md:rounded-full`}>
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setMenuPath(null)}
                className={`min-h-11 flex items-center gap-1.5 px-4 py-2 rounded-full font-['Quicksand'] font-bold text-sm tracking-wide transition-colors
                  ${
                    isActive
                      ? "bg-[#2a2a2a] text-[#FFD22A] shadow-[0_3px_0px_#131313]"
                      : "text-[#d1c6ac] hover:text-[#FFD22A]"
                  }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: link.dotColor,
                    boxShadow: `0 0 6px ${link.dotColor}`,
                  }}
                />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuPath(menuOpen ? null : pathname)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setMenuPath(null);
          }}
          className="md:hidden w-11 h-11 shrink-0 rounded-full bg-[#FFD22A] text-[#3c2f00] flex items-center justify-center shadow-[0_3px_0px_#a07400]"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
}
