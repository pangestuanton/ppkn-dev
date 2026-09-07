/* ── Quiz Types ─────────────────────────────────── */

export type QuestionOption = {
  id: string; // "A" | "B" | "C" | "D"
  text: string;
};

/** Question visible to the client — no correctAnswer */
export type PublicQuestion = {
  id: number;
  question: string;
  options: QuestionOption[];
  hint?: string;
};

/** Question with answer key — server only */
export type InternalQuestion = PublicQuestion & {
  correctAnswer: string; // option id, e.g. "C"
};

/** Single answer from the participant */
export type QuizAnswer = {
  questionId: number;
  optionId: string;
};

/** Map of questionId → optionId for the entire quiz */
export type QuizAnswers = Record<number, string>;

/** Payload sent from frontend to POST /api/submit */
export type SubmitPayload = {
  name: string;
  answers: QuizAnswers;
};

/** Result returned from the backend after scoring */
export type QuizResult = {
  name: string;
  correct: number;
  wrong: number;
  total: number;
  score: number;
};

/** Single leaderboard entry */
export type LeaderboardEntry = {
  rank: number;
  name: string;
  correct: number;
  score: number;
  submittedAt: string;
};

/** Standard API error response */
export type APIError = {
  error: string;
  details?: string;
};
