import "server-only";

import type { InternalQuestion, PublicQuestion } from "@/types/quiz";

/**
 * Complete question bank with answer keys.
 * This file uses `server-only` to prevent client-side import.
 * The correctAnswer field NEVER leaves the server.
 */
export const questions: InternalQuestion[] = [
  {
    id: 1,
    question:
      "Menurut Lawrence Kohlberg, tingkat pertama dalam perkembangan moral disebut ....",
    options: [
      { id: "A", text: "Konvensional" },
      { id: "B", text: "Pascakonvensional" },
      { id: "C", text: "Prakonvensional" },
      { id: "D", text: "Operasional Formal" },
    ],
    correctAnswer: "C",
    hint: "Tingkatan ini biasanya dialami anak-anak sebelum memahami norma sosial masyarakat luas.",
  },
  {
    id: 2,
    question:
      "Pendekatan moral development lebih menekankan pada perkembangan ....",
    options: [
      { id: "A", text: "Kemampuan fisik peserta didik" },
      { id: "B", text: "Penalaran moral individu" },
      { id: "C", text: "Keterampilan akademik" },
      { id: "D", text: "Kemampuan menghafal norma" },
    ],
    correctAnswer: "B",
    hint: "Fokus utamanya adalah bagaimana seseorang bernalar tentang benar dan salah.",
  },
  {
    id: 3,
    question:
      "Dalam Dilema Heinz, Kohlberg mengukur perkembangan moral berdasarkan ....",
    options: [
      { id: "A", text: "Keputusan ya atau tidak" },
      { id: "B", text: "Kecepatan menjawab" },
      { id: "C", text: "Alasan penalaran di balik keputusan" },
      { id: "D", text: "Emosi yang dirasakan" },
    ],
    correctAnswer: "C",
    hint: "Bukan jawaban yang penting, melainkan reasoning di baliknya.",
  },
  {
    id: 4,
    question:
      "Tahap orientasi hukuman dan kepatuhan termasuk dalam tingkat moral ....",
    options: [
      { id: "A", text: "Pascakonvensional" },
      { id: "B", text: "Konvensional" },
      { id: "C", text: "Prakonvensional" },
      { id: "D", text: "Post-formal" },
    ],
    correctAnswer: "C",
    hint: "Pada tahap ini, anak mematuhi aturan karena takut hukuman.",
  },
  {
    id: 5,
    question:
      "Pada tingkat konvensional, individu membuat keputusan moral berdasarkan ....",
    options: [
      { id: "A", text: "Prinsip keadilan universal" },
      { id: "B", text: "Kepentingan pribadi" },
      { id: "C", text: "Harapan sosial dan hukum" },
      { id: "D", text: "Naluri bertahan hidup" },
    ],
    correctAnswer: "C",
    hint: "Individu mulai mempertimbangkan norma kelompok dan aturan masyarakat.",
  },
  {
    id: 6,
    question:
      "Tahap perkembangan moral tertinggi menurut Kohlberg adalah ....",
    options: [
      { id: "A", text: "Orientasi kontrak sosial" },
      { id: "B", text: "Prinsip etika universal" },
      { id: "C", text: "Orientasi anak baik" },
      { id: "D", text: "Orientasi hukuman" },
    ],
    correctAnswer: "B",
    hint: "Tahap ini melibatkan prinsip keadilan yang melampaui hukum tertulis.",
  },
  {
    id: 7,
    question:
      'Tahap "good boy / nice girl orientation" menurut Kohlberg berada pada tingkat ....',
    options: [
      { id: "A", text: "Prakonvensional" },
      { id: "B", text: "Konvensional" },
      { id: "C", text: "Pascakonvensional" },
      { id: "D", text: "Pre-operasional" },
    ],
    correctAnswer: "B",
    hint: "Individu bertindak untuk mendapat persetujuan orang lain.",
  },
  {
    id: 8,
    question:
      "Salah satu kritik terhadap teori Kohlberg adalah ....",
    options: [
      { id: "A", text: "Terlalu sederhana dalam penjelasan" },
      { id: "B", text: "Bias budaya Barat dan gender" },
      { id: "C", text: "Tidak menggunakan metode penelitian" },
      { id: "D", text: "Hanya berlaku untuk orang dewasa" },
    ],
    correctAnswer: "B",
    hint: "Carol Gilligan mengkritik Kohlberg karena subjek penelitiannya didominasi laki-laki.",
  },
  {
    id: 9,
    question:
      "Implementasi pendekatan moral development dalam PPKn dapat dilakukan melalui ....",
    options: [
      { id: "A", text: "Hafalan pasal UUD 1945" },
      { id: "B", text: "Diskusi dilema moral" },
      { id: "C", text: "Ujian tertulis saja" },
      { id: "D", text: "Ceramah satu arah" },
    ],
    correctAnswer: "B",
    hint: "Metode ini mendorong mahasiswa berpikir kritis tentang situasi moral yang kompleks.",
  },
  {
    id: 10,
    question:
      "Orientasi kontrak sosial pada tingkat pascakonvensional menekankan ....",
    options: [
      { id: "A", text: "Kepatuhan mutlak pada otoritas" },
      { id: "B", text: "Kepentingan individu semata" },
      { id: "C", text: "Hukum dapat diubah demi keadilan" },
      { id: "D", text: "Mengikuti apa kata mayoritas" },
    ],
    correctAnswer: "C",
    hint: "Pada tahap ini, hukum dipandang sebagai kontrak yang bisa diperbaiki.",
  },
];

/**
 * Returns questions without the correctAnswer field.
 * Safe to send to the client.
 */
export function getPublicQuestions(): PublicQuestion[] {
  return questions.map(({ correctAnswer, ...publicFields }) => publicFields);
}

/**
 * Returns the answer key as a map of questionId → correctAnswer.
 * Server-only usage.
 */
export function getAnswerKey(): Record<number, string> {
  const key: Record<number, string> = {};
  for (const q of questions) {
    key[q.id] = q.correctAnswer;
  }
  return key;
}
