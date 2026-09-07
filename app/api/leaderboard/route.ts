import { NextResponse } from "next/server";
import { getLeaderboardData } from "@/lib/googleSheets";
import { processLeaderboard } from "@/lib/leaderboard";

/**
 * GET /api/leaderboard
 * Reads from Google Sheets, processes and returns sorted leaderboard data.
 * Falls back to empty array if Google Sheets is not configured.
 */
export async function GET() {
  try {
    // If no Google Sheet ID configured, return empty leaderboard
    if (!process.env.GOOGLE_SHEET_ID) {
      return NextResponse.json({
        entries: [],
        message: "Google Sheets belum dikonfigurasi",
      });
    }

    const rawData = await getLeaderboardData();
    const entries = processLeaderboard(rawData);

    return NextResponse.json({ entries });
  } catch (error) {
    console.error("Leaderboard error:", error);
    return NextResponse.json(
      { error: "Gagal memuat papan peringkat", entries: [] },
      { status: 500 }
    );
  }
}
