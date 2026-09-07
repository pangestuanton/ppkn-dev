import { NextRequest, NextResponse } from "next/server";
import { getAnswerKey } from "@/data/questions";
import { calculateScore } from "@/lib/calculateScore";
import { appendResult } from "@/lib/googleSheets";
import type { SubmitPayload, QuizResult } from "@/types/quiz";

/**
 * POST /api/submit
 * Receives participant answers, scores server-side, saves to Google Sheets.
 * Returns the QuizResult (never exposes the answer key).
 */
export async function POST(request: NextRequest) {
  try {
    const body: SubmitPayload = await request.json();

    // Validate payload
    if (!body.name || typeof body.name !== "string" || body.name.trim().length < 2) {
      return NextResponse.json(
        { error: "Nama harus diisi minimal 2 karakter" },
        { status: 400 }
      );
    }

    if (!body.answers || typeof body.answers !== "object") {
      return NextResponse.json(
        { error: "Jawaban tidak valid" },
        { status: 400 }
      );
    }

    const answerKey = getAnswerKey();
    const answerKeyIds = Object.keys(answerKey).map(Number);
    const submittedIds = Object.keys(body.answers).map(Number);

    if (submittedIds.length !== 10 || submittedIds.some((id) => !answerKeyIds.includes(id))) {
      return NextResponse.json({ error: "Paket soal tidak valid" }, { status: 400 });
    }

    // Verify all questions are answered
    for (const id of submittedIds) {
      if (!(id in body.answers)) {
        return NextResponse.json(
          { error: `Soal ${id} belum dijawab` },
          { status: 400 }
        );
      }
    }

    // Calculate score server-side
    const selectedAnswerKey = Object.fromEntries(
      submittedIds.map((id) => [id, answerKey[id]])
    );
    const { correct, wrong, total, score } = calculateScore(body.answers, selectedAnswerKey);

    // Get current timestamp
    const now = new Date();
    const submittedAt = now.toLocaleTimeString("id-ID", {
      timeZone: "Asia/Jakarta",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    // Attempt to save to Google Sheets (graceful failure)
    try {
      if (process.env.GOOGLE_SHEET_ID) {
        await appendResult({
          name: body.name.trim(),
          correct,
          wrong,
          score,
          submittedAt,
        });
      }
    } catch (sheetError) {
      // Log but don't fail the request — show result even if Sheets fails
      console.error("Google Sheets error (non-fatal):", sheetError);
    }

    const result: QuizResult = {
      name: body.name.trim(),
      correct,
      wrong,
      total,
      score,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error("Submit error:", error);
    return NextResponse.json(
      { error: "Gagal memproses jawaban" },
      { status: 500 }
    );
  }
}
