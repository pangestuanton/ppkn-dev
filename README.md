# PPKn Interactive Quiz — Moral Development

Aplikasi web kuis interaktif pembelajaran PPKn (Pendidikan Pancasila dan Kewarganegaraan) dengan tema **Pendekatan Pendidikan Moral: Moral Development (Lawrence Kohlberg & Jean Piaget)**.

Dibangun dengan arsitektur **Next.js Monolith** berdasarkan spesifikasi desain visual **Google Stitch: Claymation / Stop-Motion Educational Presentation**.

---

## 1. Fitur Utama & Ketentuan Kuis Terbaru

- **Paket 10 Soal Acak (Random Sampling)**: Setiap sesi pengerjaan kuis mengambil 10 butir soal secara acak dari total 20 bank soal studi kasus dilema moral PPKn, sehingga variasi soal selalu segar bagi peserta.
- **Durasi 30 Detik per Soal**:
  - Setiap butir soal dilengkapi dengan hitung mundur waktu 30 detik (`QuizTimer`).
  - Timer otomatis direset menjadi 30 detik setiap kali berganti butir soal.
  - Perubahan indikator visual dinamis: **Biru** (> 10 dtk), **Oranye peringatan** (6–10 dtk), dan **Merah kritis** (≤ 5 dtk dengan animasi denyut & putaran).
  - Jika durasi 30 detik habis, sistem otomatis beralih ke soal berikutnya (atau otomatis mengirim jawaban jika pada soal terakhir).
- **Navigasi Satu Arah (One-Way Progression)**:
  - Peserta tidak dapat kembali ke butir soal sebelumnya (*no backward navigation*).
  - Menjaga integritas dan objektivitas evaluasi pemahaman moral peserta.
- **Fleksibilitas Lanjut & Lewati (Skip) di Bawah 30 Detik**:
  - Peserta tidak wajib menunggu 30 detik penuh jika sudah selesai berpikir.
  - Tombol **"SELANJUTNYA"** / **"KIRIM JAWABAN"**: Dapat langsung ditekan seketika setelah memilih opsi jawaban.
  - Tombol **"LEWATI SOAL"**: Memungkinkan peserta melewati soal tanpa menjawab. Soal yang dilewati tercatat dan diberi nilai 0 secara adil.
- **Review & Pembahasan Lengkap (Per-Question Review)**:
  - Setelah kuis selesai, halaman hasil menampilkan rincian jawaban peserta, jawaban yang benar, serta status soal yang dilewati beserta pembahasannya.
- **Estetika Visual Claymation / Stop-Motion**:
  - Nuansa tactile clay, tombol stop-motion 3D yang empuk, rounded cards, palet warna tanah liat play-dough di atas latar substrate gelap (`#090909`).
- **Server-Side Scoring & Security**:
  - Evaluasi jawaban dan penghitungan skor dilakukan sepenuhnya di server via Next.js Route Handler.
  - Kunci jawaban dilindungi oleh modul `server-only` (`data/questions.ts`) sehingga tidak pernah bocor ke client bundle.
- **Google Sheets Persistence & Dynamic Leaderboard**:
  - Menyimpan otomatis hasil pengerjaan kuis (Nama, Benar, Salah, Nilai, Waktu Submit WIB) ke Google Sheets via Service Account API.
  - Papan peringkat nilai peserta yang diperbarui secara real-time.

---

## 2. Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4, Google Fonts (Bricolage Grotesque, Quicksand, Arimo)
- **Icons**: Lucide React
- **Backend**: Next.js Route Handlers (Node.js runtime)
- **Database / Storage**: Google Sheets API (`googleapis`)
- **Audio**: Web Audio API Sound Effects & Background Music Player
- **Deployment**: Vercel Ready

---

## 3. Alur Sistem & Arsitektur Monolith

```text
[ Browser / Client ]
      │
      ├─ 1. Akses Beranda & Input Nama Peserta (SessionStorage)
      ├─ 2. Fetch 10 Soal Acak (GET /api/questions - tanpa kunci jawaban)
      ├─ 3. Pengerjaan Kuis:
      │     ├─ Timer 30 detik hitung mundur per soal
      │     ├─ Navigasi satu arah (tanpa tombol kembali)
      │     ├─ Bisa klik "SELANJUTNYA" atau "LEWATI" di bawah 30 detik
      │     └─ Auto-advance jika waktu 30 detik habis
      ├─ 4. Submit Jawaban (POST /api/submit)
      │
[ Next.js Route Handler (Server) ]
      │
      ├─ 5. Validasi nama & kelengkapan paket 10 soal
      ├─ 6. Ambil Kunci Jawaban (server-only module: data/questions.ts)
      ├─ 7. Hitung Skor (Benar, Salah, Persentase 0–100, toleransi jawaban dilewati)
      ├─ 8. Bangun Objek Pembahasan Jawaban (Review)
      ├─ 9. Generate Timestamp Server (WIB)
      │
[ Google Sheets API ]
      │
      ├─ 10. Append data peserta ke baris Spreadsheet "Nilai"
      │
[ Response ke Browser ]
      │
      ├─ 11. Render Halaman Hasil (/result) dengan Skor & Pembahasan Lengkap
      └─ 12. Papan Peringkat (/leaderboard) -> GET /api/leaderboard
```

---

## 4. Struktur Direktori

```text
kuis-ppkn/
├── app/
│   ├── layout.tsx                # Root layout (Navbar, Footer, Sound effect, Metadata)
│   ├── page.tsx                  # Landing Page (Input nama, info kuis, & CTA)
│   ├── globals.css               # Clay design tokens & animation utilities
│   ├── materi/
│   │   └── page.tsx              # Halaman materi konsep Moral Development
│   ├── petunjuk/
│   │   └── page.tsx              # Panduan & tata cara kuis terbaru
│   ├── quiz/
│   │   └── page.tsx              # Halaman kuis (Timer 30s, satu arah, skip, submit)
│   ├── result/
│   │   └── page.tsx              # Halaman skor, statistik, & pembahasan jawaban
│   ├── leaderboard/
│   │   └── page.tsx              # Peringkat nilai peserta dari Google Sheets
│   └── api/
│       ├── questions/
│       │   └── route.ts          # Endpoint penyedia 10 soal acak
│       ├── submit/
│       │   └── route.ts          # Endpoint validasi, kalkulasi skor, review, & Sheets append
│       └── leaderboard/
│           └── route.ts          # Endpoint fetch & sort ranking peserta
├── components/
│   ├── Navbar.tsx                # Clay navigation bar
│   ├── Footer.tsx                # Footer info program studi PPKn
│   ├── ClayTitle.tsx             # Judul bergaya clay stop-motion multi-warna
│   ├── ClayBadge.tsx             # Lencana pill clay
│   ├── QuizTimer.tsx             # Komponen hitung mundur 30s dengan progress dinamis
│   ├── QuizCard.tsx              # Card kontainer pertanyaan aktif
│   ├── AnswerOption.tsx          # Pilihan jawaban A/B/C/D interaktif
│   ├── ProgressBar.tsx           # Indikator progres soal keseluruhan
│   ├── QuestionNavigator.tsx     # Indikator status butir soal (Terjawab, Dilewati, Aktif)
│   ├── SubmitModal.tsx           # Modal konfirmasi penyelesaian kuis
│   ├── QuestionReview.tsx        # Komponen penampil pembahasan soal benar/salah
│   ├── ResultCard.tsx            # Card penampil skor akhir & predikat
│   ├── ScoreStats.tsx            # Statistik ringkas benar, salah, dan total
│   ├── LeaderboardPodium.tsx     # Podium juara 1, 2, 3 bergaya clay
│   ├── LeaderboardTable.tsx      # Tabel daftar peringkat peserta lengkap
│   ├── MusicPlayer.tsx           # Pemutar musik latar belakang bernuansa santai
│   ├── ClickSound.tsx            # Efek suara tactile click saat menekan tombol
│   ├── LoadingState.tsx          # Animasi loading stop-motion clay
│   └── ErrorState.tsx            # Komponen penanganan error & retry
├── config/
│   ├── site.ts                   # Konfigurasi identitas web, label, & metadata
│   └── theme.ts                  # Design tokens warna & tema clay
├── data/
│   └── questions.ts              # Bank 20 soal studi kasus & kunci jawaban (server-only)
├── lib/
│   ├── calculateScore.ts         # Logika komparasi jawaban & hitung skor
│   ├── getScoreLabel.ts          # Klasifikasi predikat nilai (Sangat Baik, Baik, dll.)
│   ├── googleSheets.ts           # Integrasi Google Sheets API (Append & Fetch)
│   └── leaderboard.ts            # Logika sorting ranking peserta
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
> - Private key harus mengandung tanda kutip ganda dan karakter newline `\n` tetap utuh agar dapat di-parse dengan benar oleh runtime Node.js.

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
10. Salin alamat email Service Account (misalnya `xxx@yyy.iam.gserviceaccount.com`), lalu bagikan (*Share*) spreadsheet tersebut ke email Service Account dengan hak akses **Editor**.
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

---

## 9. Catatan Keamanan & Integritas Kuis

1. **Answer Key Isolation**: File `data/questions.ts` menggunakan import `"server-only"`. Upaya mengimpor file ini ke komponen klien akan memicu build error otomatis.
2. **One-Way Time-Restricted Exam**: Kuis tidak mengizinkan navigasi mundur dan setiap butir soal dibatasi 30 detik untuk mencegah manipulasi waktu.
3. **Server-Side Scoring**: Frontend hanya mengirimkan identitas peserta dan jawaban yang dipilih. Penilaian dan review dihasilkan langsung oleh server.
4. **Graceful Degradation**: Jika Google Sheets belum dikonfigurasi atau terjadi hambatan jaringan ke Google API, kuis tetap menghitung dan menampilkan skor peserta serta review jawaban tanpa mengalami crash.
