"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "Beranda", path: "/", dotColor: "#edc212" },
  { label: "Kuis", path: "/quiz", dotColor: "#ffb597" },
  { label: "Papan Peringkat", path: "/leaderboard", dotColor: "#a6c8ff" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e0e]/90 backdrop-blur-md">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-20 flex items-center justify-between">
        {/* Logo Badge */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FFD22A] text-[#3c2f00] font-['Bricolage_Grotesque'] font-bold text-lg tracking-tight uppercase
            shadow-[0_5px_0px_#a07400,0_12px_18px_rgba(0,0,0,0.65)]
            hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_1px_0px_#a07400]
            transition-transform select-none"
        >
          {siteConfig.title.split(" ")[0]} QUIZ
        </Link>

        {/* Navigation Pills */}
        <nav className="hidden md:flex items-center gap-4 bg-[#1c1b1b]/80 px-4 py-2 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-['Quicksand'] font-bold text-sm tracking-wide transition-colors
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

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Link
            href="/"
            className="w-8 h-8 rounded-full bg-[#FFD22A] flex items-center justify-center shadow-[0_3px_0px_#a07400]"
          >
            <svg
              className="w-4 h-4 text-[#3c2f00]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
