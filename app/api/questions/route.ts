import { NextResponse } from "next/server";
import { getPublicQuestions } from "@/data/questions";

/**
 * GET /api/questions
 * Returns the public question set (without correctAnswer).
 */
export async function GET() {
  try {
    const questions = getPublicQuestions().sort(() => Math.random() - 0.5).slice(0, 10);
    return NextResponse.json({ questions });
  } catch (error) {
    console.error("Error fetching questions:", error);
    return NextResponse.json(
      { error: "Gagal memuat soal" },
      { status: 500 }
    );
  }
}
