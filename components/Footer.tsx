import { siteConfig } from "@/config/site";

/**
 * Footer matching the Stitch design — program name, module label, frame counter.
 */
export default function Footer() {
  return (
    <footer className="w-full bg-[#0e0e0e] py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#d1c6ac] font-['Quicksand'] font-semibold text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c84d00] shadow-[0_2px_0px_#581d00]" />
          <span>
            {siteConfig.program}
          </span>
        </div>
        <div className="flex items-center gap-8">
          <span className="font-['Quicksand'] font-bold text-xs text-[#999079] uppercase">
            {siteConfig.module.toUpperCase()}
          </span>
          <span>Animasi 01 // 12 FPS</span>
        </div>
      </div>
    </footer>
  );
}
