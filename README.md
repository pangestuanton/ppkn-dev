# PPKn Interactive Quiz — Moral Development

Aplikasi web kuis interaktif pembelajaran PPKn (Pendidikan Pancasila dan Kewarganegaraan) dengan tema **Pendekatan Pendidikan Moral: Moral Development (Lawrence Kohlberg)**.

Dibangun dengan arsitektur **Next.js Monolith** berdasarkan spesifikasi desain **Google Stitch: Claymation / Stop-Motion Educational Presentation**.

---

## 1. Fitur Utama

- **Estetika Claymation / Stop-Motion**: Tema visual tactile clay, matte textures, stop-motion buttons, rounded cards, warna-warni tanah liat play-dough di atas substrate gelap (`#090909`).
- **Dynamic Quiz Engine**: Soal, pilihan jawaban, navigasi, progress bar, dan nomor soal dinamis (tidak ada data hardcoded).
- **Server-Side Scoring & Security**: Evaluasi jawaban dan perhitungan nilai dilakukan sepenuhnya di server. Kunci jawaban dilindungi oleh modul `server-only` dan tidak pernah terekspos ke frontend / client bundle.
- **Google Sheets Persistence**: Penyimpanan hasil pengerjaan kuis (Nama, Benar, Salah, Nilai, Waktu Submit) ke Google Sheets menggunakan Service Account API secara otomatis.
- **Dynamic Leaderboard**: Peringkat nilai peserta yang di-fetch secara real-time dari Google Sheets dan diurutkan berdasarkan nilai tertinggi dan waktu submit tercepat.
- **Mobile-First & Responsive**: Tampilan responsif untuk perangkat mobile maupun desktop, sesuai arahan Google Stitch.

---

## 2. Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4, Google Fonts (Bricolage Grotesque & Quicksand)
- **Icons**: Lucide React
- **Backend**: Next.js Route Handlers (Node.js runtime)
- **Database / Storage**: Google Sheets API (`googleapis`)
- **Deployment**: Vercel Ready

---

## 3. Arsitektur Monolith

Frontend dan backend berada dalam **satu repository monolith**:

```text
[ Browser / Client ]
      │
      ├─ 1. Akses Landing Page & Input Nama (SessionStorage)
      ├─ 2. Fetch Soal Dinamis (GET /api/questions - tanpa kunci jawaban)
      ├─ 3. Pengerjaan Kuis (State management lokal, navigasi, review)
      ├─ 4. Submit Jawaban (POST /api/submit)
      │
[ Next.js Route Handler (Server) ]
      │
      ├─ 5. Validasi input nama & kelengkapan jawaban
      ├─ 6. Ambil Kunci Jawaban (server-only module: data/questions.ts)
      ├─ 7. Hitung Skor (Benar, Salah, Persentase 0–100)
      ├─ 8. Generate Timestamp Server (WIB)
      │
[ Google Sheets API ]
      │
      ├─ 9. Append row ke Spreadsheet "Nilai"
      │
[ Response ke Browser ]
      │
      ├─ 10. Tampilkan Halaman Hasil (/result)
      └─ 11. Buka Leaderboard (/leaderboard) -> GET /api/leaderboard
```

---

## 4. Struktur Direktori

```text
kuis-ppkn/
├── app/
│   ├── layout.tsx                # Root layout (Navbar, Footer, Fonts)
│   ├── page.tsx                  # Landing Page (Input nama & start kuis)
│   ├── globals.css               # Clay design tokens & animation utilities
│   ├── quiz/
│   │   └── page.tsx              # Halaman interaktif kuis
│   ├── result/
│   │   └── page.tsx              # Halaman skor & ringkasan hasil
│   ├── leaderboard/
│   │   └── page.tsx              # Peringkat nilai peserta
│   └── api/
│       ├── questions/
│       │   └── route.ts          # Endpoint penyedia soal publik
│       ├── submit/
│       │   └── route.ts          # Endpoint validasi, scoring, & Sheets append
│       └── leaderboard/
│           └── route.ts          # Endpoint fetch & sort ranking
├── components/
│   ├── Navbar.tsx                # Clay-styled navigation bar
│   ├── ClayTitle.tsx             # Judul bergaya claymation multi-warna
│   ├── ClayBadge.tsx             # Lencana pill clay
│   ├── AnswerOption.tsx          # Pilihan jawaban A/B/C/D interaktif
│   ├── ProgressBar.tsx           # Indikator progres pengerjaan dinamis
│   ├── QuestionNavigator.tsx     # Nomor navigasi soal (Current, Answered, Unanswered)
│   ├── QuizCard.tsx              # Card kontainer soal aktif
│   ├── SubmitModal.tsx           # Modal konfirmasi sebelum submit
│   ├── ResultCard.tsx            # Card penampil nilai besar & evaluasi
│   ├── ScoreStats.tsx            # Statistik benar, salah, dan total soal
│   ├── LeaderboardPodium.tsx     # Podium juara 1, 2, 3 bergaya clay
│   ├── LeaderboardTable.tsx      # Tabel daftar peserta lengkap
│   ├── LoadingState.tsx          # Animasi loading stop-motion clay
│   ├── ErrorState.tsx            # Komponen error handling & retry
│   └── Footer.tsx                # Footer info program studi PPKn
├── config/
│   ├── site.ts                   # Konfigurasi identitas web & metadata
│   └── theme.ts                  # Design tokens warna & tema clay
├── data/
│   └── questions.ts              # Bank soal lengkap & kunci jawaban (server-only)
├── lib/
│   ├── calculateScore.ts         # Logika komparasi jawaban & hitung skor
│   ├── getScoreLabel.ts          # Klasifikasi predikat nilai (Sangat Baik, Baik, dll.)
│   ├── googleSheets.ts           # Integrasi Google Sheets API (Append & Fetch)
│   └── leaderboard.ts            # Logika sorting ranking peserta
├── public/
│   └── assets/stitch/            # Aset visual referensi Google Stitch
├── types/
│   └── quiz.ts                   # TypeScript interfaces & types
├── .env.example                  # Template variabel lingkungan
├── .env.local                    # Konfigurasi rahasia lokal (git-ignored)
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 5. Konfigurasi Environment Variables

Buat file `.env.local` di direktori root project (gunakan `.env.example` sebagai referensi):

```env
GOOGLE_SHEET_ID=1abc...your_spreadsheet_id...xyz
GOOGLE_SERVICE_ACCOUNT_EMAIL=quiz-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
```

> **Catatan Keamanan**:
> - Jangan pernah menambahkan prefix `NEXT_PUBLIC_` pada kredensial Google.
> - Private key harus mengandung tanda kutip ganda dan karakter newline `\n` tetap utuh agar dapat di-parse dengan benar oleh library runtime.

---

## 6. Setup Google Sheets & Service Account

1. Buka [Google Cloud Console](https://console.cloud.google.com/).
2. Buat Project baru atau pilih project yang sudah ada.
3. Aktifkan **Google Sheets API** di menu **APIs & Services > Library**.
4. Masuk ke menu **Credentials > Create Credentials > Service Account**.
5. Berikan nama untuk service account, lalu klik **Create and Continue**.
6. Buka tab **Keys** pada Service Account yang baru dibuat, klik **Add Key > Create New Key (JSON)**. Simpan file JSON yang terunduh.
7. Buat sebuah Spreadsheet baru di [Google Sheets](https://sheets.google.com).
8. Beri nama sheet (tab di bagian bawah) dengan nama: `Nilai`.
9. Isi header pada baris pertama (`A1:F1`):
   ```text
   A1: No
   B1: Nama Peserta
   C1: Benar
   D1: Salah
   E1: Nilai
   F1: Waktu Submit
   ```
10. Salin alamat email Service Account (misalnya `xxx@yyy.iam.gserviceaccount.com`), lalu bagikan (Share) spreadsheet tersebut ke email Service Account dengan hak akses **Editor**.
11. Ambil **Spreadsheet ID** dari URL Google Sheets:
    `https://docs.google.com/spreadsheets/d/<SPREADSHEET_ID>/edit`
12. Masukkan ID, Email, dan Private Key ke dalam file `.env.local`.

---

## 7. Cara Menjalankan Project

### Instalasi Dependensi
```bash
npm install
```

### Menjalankan Development Server
```bash
npm run dev
```
Buka browser di [http://localhost:3000](http://localhost:3000).

### Build untuk Produksi
```bash
npm run build
```

### Menjalankan Server Produksi
```bash
npm run start
```

---

## 8. Panduan Deployment ke Vercel

1. Push repository kuis ini ke GitHub.
2. Buka dashboard [Vercel](https://vercel.com) dan pilih **Add New > Project**.
3. Hubungkan repository GitHub Anda.
4. Pada bagian **Environment Variables**, tambahkan ketiga variabel berikut:
   - `GOOGLE_SHEET_ID`
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY` (Pastikan seluruh isi private key termasuk header dan footer dimasukkan).
5. Klik tombol **Deploy**.
6. Project siap digunakan secara live!

---

## 9. Catatan Keamanan

1. **Answer Key Isolation**: File `data/questions.ts` menggunakan import `"server-only"`. Upaya mengimpor file ini ke komponen klien akan memicu build error otomatis.
2. **Scoring Integrity**: Frontend hanya mengirimkan nama dan pemetaan pilihan `{ questionId: optionId }`. Skor dihitung server-side sehingga peserta tidak dapat memanipulasi nilai melalui devtools.
3. **Graceful Degradation**: Jika Google Sheets belum dikonfigurasi atau terjadi kegagalan jaringan sementara ke API Google, kuis tetap menghitung dan menampilkan skor peserta di layar secara normal tanpa mengalami crash.
