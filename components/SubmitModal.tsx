"use client";

type SubmitModalProps = {
  isOpen: boolean;
  answeredCount: number;
  totalQuestions: number;
  isSubmitting: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

/**
 * Confirmation modal before submitting answers.
 * Matches the Stitch quiz page modal design.
 */
export default function SubmitModal({
  isOpen,
  answeredCount,
  totalQuestions,
  isSubmitting,
  onClose,
  onSubmit,
}: SubmitModalProps) {
  if (!isOpen) return null;

  const allAnswered = answeredCount === totalQuestions;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#131313]/85 backdrop-blur-md flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#1c1b1b] p-8 rounded-2xl shadow-[inset_0_2px_2px_rgba(255,255,255,0.1),0_24px_48px_rgba(0,0,0,0.9),0_6px_0_#090909] text-center flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Clay Medal */}
        <div
          className="w-16 h-16 -mt-14 rounded-full bg-[#FFD22A] text-[#3c2f00] flex items-center justify-center shadow-[inset_0_3px_2px_rgba(255,255,255,0.6),0_6px_0_#a07400,0_12px_20px_rgba(0,0,0,0.7)] rotate-3 mb-4"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <span className="font-['Quicksand'] font-bold text-xs text-[#ffb597] uppercase tracking-widest mb-1">
          Konfirmasi Pengiriman
        </span>

        <h3 className="font-['Chunky'] font-extrabold text-3xl text-[#FFD22A] tracking-tight mb-2">
          SUDAH YAKIN?
        </h3>

        <p className="font-['Quicksand'] font-medium text-base text-[#d1c6ac] max-w-sm mb-6">
          Pastikan semua jawaban telah dipilih dengan cermat sebelum menyelesaikan sesi kuis moral ini.
        </p>

        {/* Progress Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full bg-[#353534] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] mb-8">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{
              backgroundColor: allAnswered ? "#43DFA6" : "#ffb597",
              boxShadow: `0 0 8px ${allAnswered ? "#43DFA6" : "#ffb597"}`,
            }}
          />
          <span className="font-['Quicksand'] font-bold text-sm text-[#FFD22A]">
            {answeredCount} / {totalQuestions} Terjawab
          </span>
        </div>

        {/* Warning if not all answered */}
        {!allAnswered && (
          <p className="font-['Quicksand'] font-semibold text-sm text-[#FF4A3D] mb-4">
            ⚠ Pastikan semua soal telah dijawab sebelum mengirim.
          </p>
        )}

        {/* Action Buttons */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="w-full py-4 rounded-full bg-[#201f1f] text-[#e5e2e1] font-['Bricolage_Grotesque'] font-bold text-sm uppercase
              shadow-[inset_0_2px_2px_rgba(255,255,255,0.06),0_5px_0_#0c0c0c]
              hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_1px_0_#0c0c0c]
              transition-all disabled:opacity-50"
          >
            KEMBALI
          </button>
          <button
            type="button"
            onClick={onSubmit}
            disabled={!allAnswered || isSubmitting}
            className="w-full py-4 rounded-full bg-[#FFD22A] text-[#3c2f00] font-['Bricolage_Grotesque'] font-bold text-sm uppercase
              shadow-[inset_0_3px_2px_rgba(255,255,255,0.6),0_6px_0_#a07400,0_12px_20px_rgba(0,0,0,0.6)]
              hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_#a07400]
              transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "MENGIRIM..." : "KIRIM JAWABAN"}
          </button>
        </div>
      </div>
    </div>
  );
}
