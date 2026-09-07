import "server-only";

import type { QuizAnswers } from "@/types/quiz";

/**
 * Calculate the quiz score on the server side.
 * The answer key is compared against the participant's answers.
 *
 * @param answers - Participant's answers { questionId: optionId }
 * @param answerKey - Correct answers { questionId: correctOptionId }
 * @returns Score breakdown
 */
export function calculateScore(
  answers: QuizAnswers,
  answerKey: Record<number, string>
): {
  correct: number;
  wrong: number;
  total: number;
  score: number;
} {
  const total = Object.keys(answerKey).length;
  let correct = 0;

  for (const [questionIdStr, correctOption] of Object.entries(answerKey)) {
    const questionId = Number(questionIdStr);
    if (answers[questionId] === correctOption) {
      correct++;
    }
  }

  const wrong = total - correct;
  const score = Math.round((correct / total) * 100);

  return { correct, wrong, total, score };
}
