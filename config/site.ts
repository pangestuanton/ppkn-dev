export const siteConfig = {
  title: "Kuis Interaktif PPKn",
  topic: "Moral Development",
  subtitle: "Pendekatan-Pendekatan Moral",
  program: "Pendidikan Pancasila dan Kewarganegaraan",
  module: "Modul Moral Development",
  group: "Kelompok 6",
  features: { quizEnabled: true, leaderboardEnabled: true },
  description:
    "Uji pemahamanmu tentang konsep dasar moral development, teori Piaget & Kohlberg, serta penerapannya dalam PPKn melalui 10 butir soal acak berdurasi 30 detik per soal dengan navigasi satu arah.",
  quizType: "Pilihan Ganda",
  quizLabels: {
    soal: "10 SOAL ACAK",
    pilihanGanda: "PILIHAN GANDA",
    durasi: "30 DETIK / SOAL",
    nilaiOtomatis: "NILAI OTOMATIS",
    studiKasusMoral: "Studi Kasus Moral",
    skorEvaluasi: "Skor & Pembahasan",
  },
} as const;
