"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ClayTitle from "@/components/ClayTitle";
import ClayBadge from "@/components/ClayBadge";
import { siteConfig } from "@/config/site";
import { BookOpen, CheckSquare, Award } from "lucide-react";

export default function LandingPage() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleStart = () => {
    const trimmed = name.trim();
    if (!trimmed) {
      setError("Masukkan nama terlebih dahulu.");
      return;
    }
    if (trimmed.length < 2) {
      setError("Nama minimal 2 karakter.");
      return;
    }
    setError("");
    sessionStorage.setItem("participantName", trimmed);
    router.push("/quiz");
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col items-center justify-center min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] py-6 sm:py-8 relative select-none">
      {/* Ambient Glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full max-w-[700px] h-[350px] bg-[#FFD22A]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="hidden lg:block absolute bottom-10 left-0 w-80 h-80 bg-[#c84d00]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="hidden lg:block absolute top-1/3 right-0 w-96 h-96 bg-[#c1d8ff]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Clay Props */}
      <div className="hidden lg:flex absolute top-12 left-8 items-center justify-center w-16 h-16 rounded-full bg-[#FFD22A] text-[#715A00] shadow-[0_6px_0px_#A07400,0_16px_24px_rgba(0,0,0,0.85)] -rotate-12">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <span className="absolute -bottom-2 -right-1 w-4 h-4 rounded-full bg-[#43DFA6] shadow-[0_3px_0px_#1E845F]" />
      </div>

      <div className="hidden lg:flex absolute top-14 right-10 flex-col items-center gap-1 bg-[#1c1b1b] px-4 py-2 rounded-2xl shadow-[inset_0_2px_1px_rgba(255,255,255,0.12),0_8px_0px_#0E0E0E,0_18px_25px_rgba(0,0,0,0.8)] rotate-6">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-[#54CED7] text-[#00315F] flex items-center justify-center font-['Bricolage_Grotesque'] font-bold text-sm shadow-[0_3px_0px_#238691]">
            ?
          </span>
          <span className="font-['Bricolage_Grotesque'] font-bold text-sm text-[#FFF8E8] tracking-tight">
            Tahap Kohlberg
          </span>
        </div>
        <span className="font-['Quicksand'] font-semibold text-xs text-[#999079]">
          Tingkat 1 - 3 Moralitas
        </span>
      </div>

      <div className="hidden xl:flex absolute left-4 top-1/2 -translate-y-1/2 flex-col items-center gap-3">
        <div className="w-14 h-16 rounded-xl bg-[#43DFA6] flex items-center justify-center shadow-[inset_0_3px_2px_rgba(255,255,255,0.4),0_6px_0px_#1E845F,0_12px_20px_rgba(0,0,0,0.7)] -rotate-[8deg]">
          <BookOpen className="w-7 h-7 text-[#003926]" />
        </div>
        <div className="w-5 h-5 rounded-full bg-[#F571B8] shadow-[0_3px_0px_#8C255F] self-end -mr-2" />
      </div>

      <div className="hidden xl:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-2xl bg-[#BC68DF] flex items-center justify-center shadow-[inset_0_3px_2px_rgba(255,255,255,0.45),0_6px_0px_#6A2685,0_16px_22px_rgba(0,0,0,0.8)] rotate-[12deg]">
          <svg className="w-8 h-8 text-[#2F063E]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 3c3.9 0 7 3.1 7 7 0 2.8-1.6 5.2-4 6.3V21H8v-4.7c-2.4-1.1-4-3.5-4-6.3 0-3.9 3.1-7 7-7h2zm-1 2C9.2 5 7 7.2 7 10c0 2 1.2 3.8 3 4.6V19h4v-4.4c1.8-.8 3-2.6 3-4.6 0-2.8-2.2-5-5-5z" />
          </svg>
        </div>
        <div className="w-4 h-4 rounded-full bg-[#91CE3E] shadow-[0_2px_0px_#4C7518] self-start -ml-1" />
      </div>

      {/* Info Bar */}
      <div className="w-full max-w-4xl mx-auto mb-6 flex items-center justify-between px-4 py-2 rounded-full bg-[#1c1b1b]/70 backdrop-blur shadow-[inset_0_2px_4px_rgba(0,0,0,0.9)]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF742F] shadow-[0_0_8px_#FF742F]" />
          <span className="font-['Quicksand'] font-bold text-xs uppercase tracking-wider text-[#E6C750]">
            {siteConfig.title}
          </span>
          <span className="font-['Quicksand'] font-semibold text-xs text-[#999079] px-1 hidden sm:inline">
            •
          </span>
          <span className="font-['Quicksand'] font-semibold text-xs text-[#d1c6ac] hidden sm:inline">
            Modul Dilema Moral Heinz
          </span>
        </div>

      </div>

      {/* Clay Title */}
      <div className="w-full max-w-5xl flex flex-col items-center text-center relative z-10 px-2">
        <ClayTitle text="MORAL" size="lg" />
        <div className="w-full mt-3 sm:mt-4">
          <ClayTitle text="DEVELOPMENT" size="md" />
        </div>

        {/* Subtitle */}
        <div className="mt-6 mb-2">
          <h2 className="font-['Chunky'] font-bold text-xl sm:text-3xl text-[#FFF8E8] tracking-tight">
            {siteConfig.subtitle}
          </h2>
        </div>

        {/* Description */}
        <p className="font-['Quicksand'] font-semibold text-sm sm:text-base text-[#E6C750] max-w-2xl mx-auto sm:px-4 leading-relaxed">
          {siteConfig.description}
        </p>

        {/* Input & CTA */}
        <div className="w-full max-w-xl mt-8 sm:px-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          {/* Input */}
          <div className="relative min-w-0 flex-1">
            <div
              className={`w-full flex items-center bg-[#070707] rounded-2xl px-4 py-3 transition-all
                ${
                  error
                    ? "shadow-[inset_0_4px_8px_rgba(0,0,0,0.95),0_0_0_3px_#FF4A3D]"
                    : "shadow-[inset_0_5px_10px_rgba(0,0,0,0.9),0_2px_0px_rgba(255,255,255,0.06)] focus-within:shadow-[inset_0_4px_8px_rgba(0,0,0,0.95),0_0_0_3px_#FFD22A]"
                }`}
            >
              <svg className="w-5 h-5 text-[#A07400] mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <input
                type="text"
                aria-label="Nama lengkap"
                autoComplete="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (error) setError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleStart();
                }}
                placeholder="Masukkan nama lengkap..."
                className="min-w-0 min-h-6 w-full bg-transparent text-[#FFF8E8] font-['Quicksand'] font-medium text-base placeholder-[#7A7258] outline-none"
                style={{ caretColor: "#43DFA6" }}
              />
            </div>
            <span className="absolute -top-3 left-4 px-2 py-0.5 rounded-md bg-[#2a2a2a] text-[#E6C750] font-['Quicksand'] font-semibold text-xs shadow-[0_2px_0px_#0E0E0E]">
              Identitas Mahasiswa
            </span>
          </div>

          {/* CTA Button */}
          <button
            type="button"
            onClick={handleStart}
            className="w-full sm:w-auto min-h-12 shrink-0 inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-2xl bg-[#FF742F] text-[#FFF8E8] font-['Bricolage_Grotesque'] font-bold text-lg tracking-wide uppercase cursor-pointer select-none
              shadow-[inset_0_3px_2px_rgba(255,255,255,0.55),inset_0_-4px_5px_#8F2D00,0_7px_0px_#6A1E00,0_16px_22px_rgba(0,0,0,0.85)]
              hover:-translate-y-1 hover:rotate-1
              active:translate-y-1.5 active:shadow-[0_1px_0px_#6A1E00] active:scale-[0.98]
              transition-[transform,box-shadow] duration-75"
          >
            <span>MULAI KUIS</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <p className="mt-3 font-['Quicksand'] font-semibold text-sm text-[#FF4A3D]">
            {error}
          </p>
        )}

        {/* Feature Badges */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl sm:px-4">
          <ClayBadge
            icon={<BookOpen className="w-5 h-5" />}
            title={`${siteConfig.quizLabels.soal}`}
            subtitle={siteConfig.quizLabels.studiKasusMoral}
            color="#43DFA6"
            shadowColor="#1E845F"
            textColor="#003926"
            rotation={-3}
          />
          <ClayBadge
            icon={<CheckSquare className="w-5 h-5" />}
            title={siteConfig.quizLabels.pilihanGanda}
            subtitle="A • B • C • D"
            color="#54CED7"
            shadowColor="#238691"
            textColor="#003940"
            rotation={2}
          />
          <ClayBadge
            icon={<Award className="w-5 h-5" />}
            title={siteConfig.quizLabels.nilaiOtomatis}
            subtitle={siteConfig.quizLabels.skorEvaluasi}
            color="#FFD22A"
            shadowColor="#A07400"
            textColor="#423300"
            rotation={-3}
          />
        </div>

        {/* Scenario Preview Card */}
        <div className="w-full max-w-xl mt-10 bg-[#1c1b1b] rounded-3xl p-4 text-left shadow-[inset_0_2px_1px_rgba(255,255,255,0.08),0_10px_0px_#090909,0_20px_30px_rgba(0,0,0,0.85)] relative">
          <div className="absolute -top-3.5 right-6 px-3 py-0.5 rounded-full bg-[#BC68DF] text-[#FFF8E8] font-['Quicksand'] font-bold text-xs shadow-[0_3px_0px_#6A2685]">
            Dilema Klasik
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-[#FF742F] text-white flex items-center justify-center shrink-0 font-['Bricolage_Grotesque'] font-bold text-sm shadow-[0_2px_0px_#A73900]">
              01
            </span>
            <div className="flex flex-col gap-1">
              <span className="font-['Quicksand'] font-bold text-sm text-[#FFD22A]">
                Dilema Heinz: Bolehkah mencuri obat demi nyawa istri?
              </span>
              <p className="font-['Quicksand'] font-semibold text-xs text-[#d1c6ac]">
                Kohlberg mengukur bukan jawaban &quot;ya&quot; atau &quot;tidak&quot;,
                melainkan alasan penalaran moral di balik keputusanmu.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
