import "server-only";

import { google } from "googleapis";

/**
 * Initialize Google Sheets API client using service account credentials.
 * All credentials come from environment variables — never hardcoded.
 */
function getGoogleSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

const SHEET_NAME = "Nilai";

/**
 * Append a quiz result row to the Google Sheet.
 */
export async function appendResult(data: {
  name: string;
  correct: number;
  wrong: number;
  score: number;
  submittedAt: string;
}) {
  const sheets = getGoogleSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!spreadsheetId) {
    throw new Error("GOOGLE_SHEET_ID is not configured");
  }

  // Get current row count for auto-increment "No"
  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${SHEET_NAME}!A:A`,
  });

  const rowCount = existing.data.values ? existing.data.values.length : 1;

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${SHEET_NAME}!A:F`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          rowCount, // No (auto-increment)
          data.name,
          data.correct,
          data.wrong,
          data.score,
          data.submittedAt,
        ],
      ],
    },
  });
}

/**
 * Read all result rows from the Google Sheet for leaderboard.
 */
export async function getLeaderboardData(): Promise<
  Array<{
    name: string;
    correct: number;
    score: number;
    submittedAt: string;
  }>
> {
  const sheets = getGoogleSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!spreadsheetId) {
    throw new Error("GOOGLE_SHEET_ID is not configured");
  }

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${SHEET_NAME}!A:F`,
  });

  const rows = response.data.values;
  if (!rows || rows.length <= 1) {
    return [];
  }

  // Skip header row (index 0)
  return rows.slice(1)
    .filter((row) => String(row[1] || "").trim().length > 0)
    .map((row) => ({
      name: String(row[1] || ""),
      correct: Number(row[2] || 0),
      score: Number(row[4] || 0),
      submittedAt: String(row[5] || ""),
    }));
}
