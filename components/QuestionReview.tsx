"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import type { QuestionReview as QuestionReviewItem } from "@/types/quiz";

type QuestionReviewProps = {
  review: QuestionReviewItem[];
};

export default function QuestionReview({ review }: QuestionReviewProps) {
  return (
    <section className="w-full max-w-3xl" aria-labelledby="review-title">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#54CED7]" />
        <h3 id="review-title" className="font-['Chunky'] text-lg font-bold text-[#FFF8E8]">
          PEMBAHASAN JAWABAN
        </h3>
      </div>

      <div className="flex flex-col gap-4">
        {review.map((item, index) => (
          <article
            key={item.questionId}
            className={`rounded-2xl bg-[#201f1f] p-4 shadow-[inset_0_2px_2px_rgba(255,255,255,0.06),0_8px_0_#090909] ${
              item.isCorrect ? "border border-[#43DFA6]/35" : "border border-[#FF4A3D]/35"
            }`}
          >
            <div className="flex items-start gap-3">
              {item.isCorrect ? (
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#43DFA6]" aria-label="Jawaban benar" />
              ) : (
                <XCircle className="mt-0.5 shrink-0 text-[#FF4A3D]" aria-label="Jawaban salah" />
              )}
              <div className="min-w-0 flex-1">
                <p className="font-['Quicksand'] text-xs font-bold uppercase tracking-wider text-[#E6C750]">
                  Soal {String(index + 1).padStart(2, "0")}
                </p>
                <h4 className="mt-1 font-arimo text-base font-bold leading-relaxed text-[#FFF8E8]">
                  {item.question}
                </h4>

                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-xl bg-[#0e0e0e] p-3">
                    <p className="font-['Quicksand'] text-xs font-bold uppercase text-[#999079]">
                      Jawabanmu ({item.selectedOption})
                    </p>
                    <p className={`mt-1 font-['Quicksand'] text-sm font-semibold ${item.isCorrect ? "text-[#43DFA6]" : "text-[#FF8D84]"}`}>
                      {item.selectedAnswer}
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#0e0e0e] p-3">
                    <p className="font-['Quicksand'] text-xs font-bold uppercase text-[#999079]">
                      Jawaban benar ({item.correctOption})
                    </p>
                    <p className="mt-1 font-['Quicksand'] text-sm font-semibold text-[#43DFA6]">
                      {item.correctAnswer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
