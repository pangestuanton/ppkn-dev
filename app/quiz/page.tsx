"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import type { PublicQuestion, QuizAnswers } from "@/types/quiz";
import QuestionCard from "@/components/QuizCard";
import AnswerOption from "@/components/AnswerOption";
import ProgressBar from "@/components/ProgressBar";
import QuestionNavigator from "@/components/QuestionNavigator";
import SubmitModal from "@/components/SubmitModal";
import LoadingState from "@/components/LoadingState";
import ErrorState from "@/components/ErrorState";
import QuizTimer from "@/components/QuizTimer";
import { siteConfig } from "@/config/site";

export default function QuizPage() {
  const router = useRouter();
  const [participantName, setParticipantName] = useState<string>("");
  const [questions, setQuestions] = useState<PublicQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [timeLeft, setTimeLeft] = useState(30);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [fetchError, setFetchError] = useState("");

  // Refs to prevent stale closures in timer callback
  const currentQuestionIndexRef = useRef(currentQuestionIndex);
  currentQuestionIndexRef.current = currentQuestionIndex;

  const answersRef = useRef(answers);
  answersRef.current = answers;

  const questionsRef = useRef(questions);
  questionsRef.current = questions;

  // Load participant name from sessionStorage
  useEffect(() => {
    const storedName = sessionStorage.getItem("participantName");
    if (!storedName) {
      router.replace("/");
      return;
    }
    setParticipantName(storedName);
  }, [router]);

  // Fetch questions
  useEffect(() => {
    async function loadQuestions() {
      try {
        const res = await fetch("/api/questions", { cache: "no-store" });
        if (!res.ok) throw new Error("Gagal memuat soal");
        const data = await res.json();
        setQuestions(data.questions);
        setIsLoading(false);
      } catch (err) {
        setFetchError(err instanceof Error ? err.message : "Gagal memuat soal");
        setIsLoading(false);
      }
    }
    loadQuestions();
  }, []);

  const currentQuestion = questions[currentQuestionIndex];
  const questionIds = questions.map((q) => q.id);
  const answeredCount = Object.values(answers).filter((val) => val && val.trim() !== "").length;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleSelectOption = useCallback(
    (optionId: string) => {
      if (!currentQuestion) return;
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: optionId,
      }));
    },
    [currentQuestion]
  );

  const handleSubmit = useCallback(
    async (overrideAnswers?: QuizAnswers) => {
      if (isSubmitting) return;

      setIsSubmitting(true);
      setSubmitError("");

      const sourceAnswers = overrideAnswers || answersRef.current;
      const finalAnswers: QuizAnswers = { ...sourceAnswers };

      // Ensure every question has an entry so backend receives full payload
      for (const q of questionsRef.current) {
        if (!(q.id in finalAnswers) || typeof finalAnswers[q.id] !== "string") {
          finalAnswers[q.id] = "";
        }
      }

      try {
        const res = await fetch("/api/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: participantName,
            answers: finalAnswers,
          }),
        });

        if (!res.ok) {
          const errorData = await res.json().catch(() => ({ error: "Gagal mengirim jawaban" }));
          throw new Error(errorData.error || "Gagal mengirim jawaban");
        }

        const result = await res.json();
        sessionStorage.setItem("quizResult", JSON.stringify(result));
        router.push("/result");
      } catch (err) {
        setSubmitError(err instanceof Error ? err.message : "Gagal mengirim jawaban");
        setIsSubmitting(false);
      }
    },
    [isSubmitting, participantName, router]
  );

  // Auto-advance when 30s timer runs out
  const handleTimeOut = useCallback(() => {
    const currIndex = currentQuestionIndexRef.current;
    const allQuestions = questionsRef.current;
    const totalQ = allQuestions.length;
    if (totalQ === 0) return;

    const currQ = allQuestions[currIndex];
    const currentAnswers = answersRef.current;
    const updatedAnswers = { ...currentAnswers };

    // If current question not answered yet, register as skipped empty string
    if (currQ && !(currQ.id in updatedAnswers)) {
      updatedAnswers[currQ.id] = "";
    }
    setAnswers(updatedAnswers);

    if (currIndex >= totalQ - 1) {
      // Last question timer expired: automatically submit
      handleSubmit(updatedAnswers);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [handleSubmit]);

  // 30-second Timer per question
  useEffect(() => {
    if (isLoading || isSubmitting || questions.length === 0) return;

    setTimeLeft(30);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleTimeOut();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQuestionIndex, isLoading, isSubmitting, questions.length, handleTimeOut]);

  // Advance to next or open submit modal (if user clicks Next before 30s)
  const handleNext = () => {
    if (isLastQuestion) {
      setShowModal(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  // Skip current question (if user wants to skip without answering before 30s)
  const handleSkip = () => {
    if (currentQuestion) {
      setAnswers((prev) => {
        const updated = { ...prev };
        if (!(currentQuestion.id in updated)) {
          updated[currentQuestion.id] = "";
        }
        return updated;
      });
    }

    if (isLastQuestion) {
      setShowModal(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] flex items-center justify-center">
        <LoadingState message="MEMUAT SOAL..." />
      </div>
    );
  }

  if (fetchError) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] flex items-center justify-center">
        <ErrorState message={fetchError} onRetry={() => window.location.reload()} />
      </div>
    );
  }

  if (isSubmitting) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] flex items-center justify-center">
        <LoadingState message="MENGHITUNG NILAI..." />
      </div>
    );
  }

  if (!siteConfig.features.quizEnabled) {
    return (
      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-xl items-center justify-center px-4 text-center">
        <div className="rounded-3xl bg-[#201f1f] p-8 shadow-[0_10px_0_#090909]">
          <h1 className="font-['Chunky'] text-3xl text-[#FFD22A]">KUIS TERKUNCI</h1>
          <p className="mt-3 font-['Quicksand'] text-sm font-semibold text-[#d1c6ac]">
            Fitur kuis belum dibuka untuk digunakan.
          </p>
        </div>
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-4 select-none">
      {/* Top Header */}
      <div className="sticky top-16 md:top-20 z-40 w-full flex flex-col gap-3 mb-6 sm:mb-8 py-3 bg-[#0e0e0e]/95 backdrop-blur-md">
        <div className="flex items-center justify-between gap-2 px-1">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-4 py-1.5 rounded-full bg-[#2a2a2a] text-[#FFD22A] font-['Quicksand'] font-bold text-[10px] sm:text-sm shadow-[inset_0_2px_2px_rgba(255,255,255,0.15),0_4px_0_#0e0e0e]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFD22A] shadow-[0_0_8px_#ffd22a]" />
              MORAL DEVELOPMENT
            </span>
            <span className="hidden lg:inline-flex items-center text-[#999079] font-['Quicksand'] font-semibold text-xs tracking-widest uppercase">
              • Konsep, Teori & Penerapan PPKn
            </span>
          </div>

          {/* 30-Second Countdown Timer */}
          <QuizTimer timeLeft={timeLeft} totalDuration={30} />

          {/* Question Index Badge */}
          <div className="flex items-baseline shrink-0 gap-1 bg-[#1c1b1b] px-3 sm:px-6 py-2 rounded-full shadow-[inset_0_3px_5px_rgba(0,0,0,0.8),0_4px_0_#0e0e0e]">
            <span
              className="font-['Bricolage_Grotesque'] font-extrabold text-lg sm:text-2xl text-[#a6c8ff]"
              style={{ filter: "drop-shadow(0 2px 0 #005dad)" }}
            >
              {String(currentQuestionIndex + 1).padStart(2, "0")}
            </span>
            <span className="font-['Bricolage_Grotesque'] font-bold text-lg sm:text-2xl text-[#4d4633]">/</span>
            <span className="font-['Bricolage_Grotesque'] font-bold text-lg sm:text-2xl text-[#d1c6ac]">
              {String(questions.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Question Progress Bar */}
        <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        <div className="min-w-0 lg:col-span-7">
          <QuestionCard question={currentQuestion} currentIndex={currentQuestionIndex} />
        </div>
        <div className="min-w-0 lg:col-span-5 flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-4">
            {currentQuestion.options.map((option) => (
              <AnswerOption
                key={option.id}
                letter={option.id as "A" | "B" | "C" | "D"}
                text={option.text}
                isSelected={answers[currentQuestion.id] === option.id}
                onSelect={() => handleSelectOption(option.id)}
              />
            ))}
          </div>
          {currentQuestion.hint && (
            <div className="bg-[#0e0e0e] px-4 py-2 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.9)] flex items-center gap-3 mt-2">
              <svg className="w-4 h-4 text-[#ffe083] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
              </svg>
              <span className="font-['Quicksand'] font-semibold text-xs text-[#d1c6ac]">{currentQuestion.hint}</span>
            </div>
          )}
        </div>
      </div>

      {/* Question Status Navigator */}
      <div className="mt-8">
        <QuestionNavigator
          totalQuestions={questions.length}
          currentIndex={currentQuestionIndex}
          answers={answers}
          questionIds={questionIds}
        />
      </div>

      {submitError && (
        <div className="mt-4 p-4 rounded-2xl bg-[#FF4A3D]/10 border border-[#FF4A3D]/30 text-center">
          <p className="font-['Quicksand'] font-semibold text-sm text-[#FF4A3D]">{submitError}</p>
        </div>
      )}

      {/* Action Buttons (One-way navigation: Skip or Next) */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-8 mb-8">
        {/* Notice Badge */}
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1c1b1b] text-[#999079] font-['Quicksand'] font-semibold text-xs border border-[#353534]/50 shadow-inner w-fit">
          <svg className="w-4 h-4 text-[#ffb597]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>30 dtk per soal • Satu arah</span>
        </div>

        {/* Action Controls */}
        <div className="flex w-full sm:w-auto flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Skip Button (can skip before 30 seconds) */}
          <button
            type="button"
            onClick={handleSkip}
            className="w-full sm:w-auto justify-center min-h-12 px-5 sm:px-7 py-3.5 rounded-full bg-[#201f1f] text-[#d1c6ac] hover:text-[#FFF8E8] font-['Bricolage_Grotesque'] font-bold text-sm tracking-wider uppercase shadow-[inset_0_2px_2px_rgba(255,255,255,0.06),0_5px_0_#0c0c0c,0_10px_16px_rgba(0,0,0,0.7)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_1px_0_#0c0c0c] transition-all flex items-center gap-2 border border-[#353534]/40"
          >
            <span>{isLastQuestion ? "LEWATI & SELESAI" : "LEWATI SOAL"}</span>
            <svg className="w-4 h-4 text-[#ffb597]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>

          {/* Next / Submit Button */}
          <button
            type="button"
            onClick={handleNext}
            className="w-full sm:w-auto justify-center min-h-12 px-6 sm:px-10 py-3.5 rounded-full text-[#00315f] font-['Bricolage_Grotesque'] font-bold text-sm tracking-wider uppercase shadow-[inset_0_3px_2px_rgba(255,255,255,0.7),inset_0_-4px_4px_rgba(0,0,0,0.25),0_6px_0_#004786,0_14px_24px_rgba(0,0,0,0.7)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_#004786] transition-all flex items-center gap-2"
            style={{ background: "linear-gradient(to right, #c1d8ff, #d4e3ff, #a6c8ff)" }}
          >
            <span>{isLastQuestion ? "KIRIM JAWABAN" : "SELANJUTNYA"}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <SubmitModal
        isOpen={showModal}
        answeredCount={answeredCount}
        totalQuestions={questions.length}
        isSubmitting={isSubmitting}
        onClose={() => setShowModal(false)}
        onSubmit={() => handleSubmit()}
      />
    </div>
  );
}
