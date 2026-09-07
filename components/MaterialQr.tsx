"use client";

import { ExternalLink, QrCode } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function MaterialQr() {
  const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=12&data=" + encodeURIComponent(siteConfig.materialUrl);

  return (
    <aside className="w-full max-w-xl rounded-3xl bg-[#1c1b1b] p-4 sm:p-5 shadow-[inset_0_2px_1px_rgba(255,255,255,0.08),0_10px_0px_#090909,0_20px_30px_rgba(0,0,0,0.75)]">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
        <div className="shrink-0 rounded-2xl bg-white p-3 shadow-[0_5px_0_#090909,0_10px_15px_rgba(0,0,0,0.6)]">
          <img src={qrUrl} width={180} height={180} alt={`QR code untuk ${siteConfig.materialLabel}`} className="h-40 w-40 sm:h-44 sm:w-44" loading="lazy" />
        </div>
        <div className="min-w-0 flex-1 text-center sm:text-left">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#2a2a2a] px-3 py-1.5 text-[#FFD22A] shadow-[inset_0_2px_3px_rgba(0,0,0,0.7)]">
            <QrCode className="h-4 w-4" aria-hidden="true" />
            <span className="font-['Quicksand'] text-xs font-bold uppercase tracking-wider">Materi Kuis</span>
          </div>
          <h3 className="font-['Chunky'] text-xl text-[#FFF8E8]">{siteConfig.materialLabel}</h3>
          <p className="mt-1 font-['Quicksand'] text-xs font-semibold leading-relaxed text-[#d1c6ac]">Pindai QR untuk membuka materi sebelum mengerjakan kuis.</p>
          <a href={siteConfig.materialUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#54CED7] px-5 py-2.5 font-['Bricolage_Grotesque'] text-sm font-bold uppercase text-[#003940] shadow-[inset_0_2px_2px_rgba(255,255,255,0.55),0_4px_0_#238691] transition-transform hover:-translate-y-0.5 active:translate-y-1 sm:w-auto">
            Buka Materi <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </aside>
  );
}
