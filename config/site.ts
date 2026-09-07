export const siteConfig = {
  title: "Kuis Interaktif PPKn",
  topic: "Moral Development",
  subtitle: "Pendekatan Pendidikan Moral",
  program: "Pendidikan Pancasila dan Kewarganegaraan",
  module: "Modul Perkembangan Moral",
  materialUrl:
    process.env.NEXT_PUBLIC_MATERIAL_URL ||
    "https://drive.google.com/drive/folders/1dwKQ1SmjcYxgPIdRWD4g0u3LKvaWi6V8?usp=sharing",
  materialLabel: "Materi Perkembangan Moral",
  group: "Kelompok 6",
  description:
    "Uji pemahamanmu tentang perkembangan penalaran moral dan teori Lawrence Kohlberg melalui kuis interaktif.",
  quizType: "Pilihan Ganda",
  quizLabels: {
    soal: "SOAL",
    pilihanGanda: "PILIHAN GANDA",
    nilaiOtomatis: "NILAI OTOMATIS",
    studiKasusMoral: "Studi Kasus Moral",
    skorEvaluasi: "Skor & Evaluasi",
  },
} as const;
