"use client";

type ErrorStateProps = {
  message?: string;
  onRetry?: () => void;
};

/**
 * Error display with clay styling and retry button.
 */
export default function ErrorState({
  message = "Terjadi kesalahan.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-16">
      {/* Error Icon */}
      <div
        className="w-16 h-16 rounded-full bg-[#FF4A3D] flex items-center justify-center"
        style={{
          boxShadow:
            "inset 0 3px 2px rgba(255,255,255,0.5), 0 6px 0 #A51C12, 0 12px 20px rgba(0,0,0,0.7)",
        }}
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>

      <p className="font-['Quicksand'] font-bold text-lg text-[#FF4A3D] text-center max-w-md">
        {message}
      </p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="px-8 py-3 rounded-full bg-[#201f1f] text-[#FFF8E8] font-['Bricolage_Grotesque'] font-bold text-sm uppercase
            shadow-[inset_0_2px_2px_rgba(255,255,255,0.08),0_5px_0_#0c0c0c]
            hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_1px_0_#0c0c0c]
            transition-all"
        >
          COBA LAGI
        </button>
      )}
    </div>
  );
}
