import { NextResponse } from "next/server";
import { getRandomPublicQuestions } from "@/data/questions";

export const dynamic = "force-dynamic";

/**
 * GET /api/questions
 * Returns a random set of 10 public questions (without correctAnswer).
 */
export async function GET() {
  try {
    const questions = getRandomPublicQuestions();
    return NextResponse.json(
      { questions },
      { headers: { "Cache-Control": "no-store, max-age=0" } }
    );
  } catch (error) {
    console.error("Error fetching questions:", error);
    return NextResponse.json(
      { error: "Gagal memuat soal" },
      { status: 500 }
    );
  }
}
