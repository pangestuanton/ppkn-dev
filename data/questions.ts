import "server-only";
import { randomInt } from "node:crypto";
import type { InternalQuestion, PublicQuestion } from "@/types/quiz";

export const QUIZ_QUESTION_COUNT = 10;

export const questions: InternalQuestion[] = [
  {
    id: 1,
    question: "Apa yang dimaksud dengan Moral Development?",
    options: [
      { id: "A", text: "Proses menghafal aturan dalam masyarakat" },
      { id: "B", text: "Proses berkembangnya cara seseorang memahami dan menjalankan nilai moral" },
      { id: "C", text: "Proses meningkatkan kemampuan akademik" },
      { id: "D", text: "Proses menyesuaikan diri dengan lingkungan" },
    ],
    correctAnswer: "B",
    hint: "Fokus pada proses pemahaman dan penerapan nilai moral dalam tindakan.",
  },
  {
    id: 2,
    question: "Salah satu kemampuan yang berkaitan dengan perkembangan moral adalah...",
    options: [
      { id: "A", text: "Membedakan tindakan baik dan buruk" },
      { id: "B", text: "Menghafal semua peraturan" },
      { id: "C", text: "Meningkatkan kemampuan berhitung" },
      { id: "D", text: "Menguasai teknologi" },
    ],
    correctAnswer: "A",
    hint: "Terkait dengan pertimbangan etis dan nilai tindakan.",
  },
  {
    id: 3,
    question: "Berikut yang bukan merupakan faktor yang memengaruhi perkembangan moral adalah...",
    options: [
      { id: "A", text: "Keluarga" },
      { id: "B", text: "Pengalaman" },
      { id: "C", text: "Pendidikan" },
      { id: "D", text: "Warna kesukaan" },
    ],
    correctAnswer: "D",
    hint: "Perkembangan moral dipengaruhi oleh usia, lingkungan, pendidikan, dan pengalaman.",
  },
  {
    id: 4,
    question: "Tujuan utama pendidikan moral adalah...",
    options: [
      { id: "A", text: "Membuat siswa selalu takut terhadap aturan" },
      { id: "B", text: "Meningkatkan nilai ujian siswa" },
      { id: "C", text: "Membentuk individu yang berkarakter dan bertanggung jawab" },
      { id: "D", text: "Membuat siswa mengikuti semua perintah tanpa berpikir" },
    ],
    correctAnswer: "C",
    hint: "Membentuk karakter baik dan kesadaran etika dalam bermasyarakat.",
  },
  {
    id: 5,
    question: "Salah satu fungsi pendidikan moral adalah...",
    options: [
      { id: "A", text: "Mengembangkan empati" },
      { id: "B", text: "Menghilangkan perbedaan pendapat" },
      { id: "C", text: "Membatasi interaksi sosial" },
      { id: "D", text: "Mengutamakan kepentingan pribadi" },
    ],
    correctAnswer: "A",
    hint: "Menumbuhkan kepedulian, toleransi, dan kerja sama sosial.",
  },
  {
    id: 6,
    question: "Perkembangan moral penting karena membantu seseorang...",
    options: [
      { id: "A", text: "Mendapatkan penghargaan" },
      { id: "B", text: "Berpikir sebelum bertindak" },
      { id: "C", text: "Menghindari semua masalah" },
      { id: "D", text: "Menjadi lebih populer" },
    ],
    correctAnswer: "B",
    hint: "Mempertimbangkan akibat dari keputusan yang akan diambil.",
  },
  {
    id: 7,
    question: "Sikap yang menunjukkan kemampuan mengontrol diri adalah...",
    options: [
      { id: "A", text: "Bertindak tanpa berpikir" },
      { id: "B", text: "Mengikuti semua keinginan teman" },
      { id: "C", text: "Memikirkan akibat sebelum mengambil keputusan" },
      { id: "D", text: "Menghindari tanggung jawab" },
    ],
    correctAnswer: "C",
    hint: "Berpikir matang dan bertanggung jawab atas pilihan.",
  },
  {
    id: 8,
    question: "Menurut Jean Piaget, perkembangan moral berkaitan dengan...",
    options: [
      { id: "A", text: "Perkembangan ekonomi" },
      { id: "B", text: "Perkembangan fisik" },
      { id: "C", text: "Perkembangan bahasa" },
      { id: "D", text: "Perkembangan cara berpikir" },
    ],
    correctAnswer: "D",
    hint: "Teori kognitif Piaget menghubungkan moralitas dengan kematangan berpikir.",
  },
  {
    id: 9,
    question: "Dalam moral heteronom, aturan dianggap...",
    options: [
      { id: "A", text: "Mutlak dan harus dipatuhi" },
      { id: "B", text: "Tidak perlu ditaati" },
      { id: "C", text: "Bisa diubah sesuka hati" },
      { id: "D", text: "Hanya berlaku untuk orang tertentu" },
    ],
    correctAnswer: "A",
    hint: "Aturan dipandang kaku dan berasal langsung dari pemegang otoritas.",
  },
  {
    id: 10,
    question: "Moral otonom ditandai dengan kemampuan seseorang untuk...",
    options: [
      { id: "A", text: "Menghindari semua aturan" },
      { id: "B", text: "Mengikuti perintah tanpa bertanya" },
      { id: "C", text: "Mempertimbangkan niat, keadilan, dan kesepakatan" },
      { id: "D", text: "Mengutamakan keuntungan pribadi" },
    ],
    correctAnswer: "C",
    hint: "Memahami aturan secara mandiri dan fleksibel demi keadilan.",
  },
  {
    id: 11,
    question: "Menurut Kohlberg, perkembangan moral terdiri dari...",
    options: [
      { id: "A", text: "2 tingkat dan 4 tahap" },
      { id: "B", text: "3 tingkat dan 6 tahap" },
      { id: "C", text: "4 tingkat dan 8 tahap" },
      { id: "D", text: "6 tingkat dan 3 tahap" },
    ],
    correctAnswer: "B",
    hint: "Prakonvensional, Konvensional, dan Pascakonvensional.",
  },
  {
    id: 12,
    question: "Pada tingkat prakonvensional, seseorang cenderung mempertimbangkan...",
    options: [
      { id: "A", text: "Prinsip universal" },
      { id: "B", text: "Hak masyarakat" },
      { id: "C", text: "Kepentingan pribadi dan konsekuensi" },
      { id: "D", text: "Keadilan sosial" },
    ],
    correctAnswer: "C",
    hint: "Fokus pada hukuman dan imbalan langsung.",
  },
  {
    id: 13,
    question: "Mengapa satu tindakan yang sama dapat memiliki alasan moral yang berbeda?",
    options: [
      { id: "A", text: "Karena setiap orang memiliki pertimbangan moral yang berbeda" },
      { id: "B", text: "Karena semua orang memiliki aturan yang berbeda" },
      { id: "C", text: "Karena tindakan moral tidak memiliki tujuan" },
      { id: "D", text: "Karena moral tidak berkaitan dengan keputusan" },
    ],
    correctAnswer: "A",
    hint: "Perkembangan moral mengukur motivasi dan alasan penalaran di balik tindakan.",
  },
  {
    id: 14,
    question: "Metode pembelajaran yang memberikan siswa suatu masalah dengan pilihan yang sulit disebut...",
    options: [
      { id: "A", text: "Ceramah" },
      { id: "B", text: "Dilema moral" },
      { id: "C", text: "Hafalan" },
      { id: "D", text: "Demonstrasi" },
    ],
    correctAnswer: "B",
    hint: "Situasi konflik nilai yang melatih siswa menentukan sikap dan alasannya.",
  },
  {
    id: 15,
    question: "Studi kasus dalam pendidikan moral bertujuan untuk...",
    options: [
      { id: "A", text: "Menghafalkan teori" },
      { id: "B", text: "Menghindari diskusi" },
      { id: "C", text: "Menganalisis masalah nyata" },
      { id: "D", text: "Memberikan hukuman" },
    ],
    correctAnswer: "C",
    hint: "Mengaitkan pembelajaran dengan isu kehidupan sehari-hari.",
  },
  {
    id: 16,
    question: "Melalui diskusi atau debat, siswa dapat belajar...",
    options: [
      { id: "A", text: "Menghindari pendapat orang lain" },
      { id: "B", text: "Menghargai sudut pandang yang berbeda" },
      { id: "C", text: "Memaksakan pendapat" },
      { id: "D", text: "Menentukan pendapat yang paling benar tanpa alasan" },
    ],
    correctAnswer: "B",
    hint: "Melatih toleransi dan keterbukaan terhadap perspektif orang lain.",
  },
  {
    id: 17,
    question: "Kegiatan melihat kembali keputusan atau tindakan yang pernah dilakukan disebut...",
    options: [
      { id: "A", text: "Refleksi" },
      { id: "B", text: "Simulasi" },
      { id: "C", text: "Observasi" },
      { id: "D", text: "Evaluasi akademik" },
    ],
    correctAnswer: "A",
    hint: "Merenungkan kesesuaian tindakan pribadi dengan nilai-nilai moral.",
  },
  {
    id: 18,
    question: "Dalam pembelajaran demokratis, peserta didik dapat dilibatkan dalam...",
    options: [
      { id: "A", text: "Menentukan hukuman sendiri" },
      { id: "B", text: "Membuat kesepakatan bersama" },
      { id: "C", text: "Mengabaikan aturan sekolah" },
      { id: "D", text: "Menentukan pendapat guru" },
    ],
    correctAnswer: "B",
    hint: "Pengambilan keputusan partisipatif dan musyawarah mufakat.",
  },
  {
    id: 19,
    question: "Contoh penerapan moral di sekolah adalah...",
    options: [
      { id: "A", text: "Menyontek ketika ujian" },
      { id: "B", text: "Mengabaikan tugas kelompok" },
      { id: "C", text: "Berkata jujur dan bertanggung jawab" },
      { id: "D", text: "Memaksakan pendapat kepada teman" },
    ],
    correctAnswer: "C",
    hint: "Integritas dan kepedulian dalam kegiatan belajar mengajar.",
  },
  {
    id: 20,
    question: "Hubungan Moral Development dengan PPKn dapat dilihat dari...",
    options: [
      { id: "A", text: "PPKn hanya mengajarkan teori Pancasila" },
      { id: "B", text: "PPKn membantu mengubah nilai Pancasila menjadi sikap nyata" },
      { id: "C", text: "Moral Development tidak berkaitan dengan PPKn" },
      { id: "D", text: "PPKn hanya membahas aturan negara" },
    ],
    correctAnswer: "B",
    hint: "Internalisasi nilai Pancasila menjadi karakter dan perilaku warga negara.",
  },
];

export function getPublicQuestions(): PublicQuestion[] {
  return questions.map(({ correctAnswer, ...publicFields }) => publicFields);
}

export function getRandomPublicQuestions(
  count = QUIZ_QUESTION_COUNT
): PublicQuestion[] {
  const pool = getPublicQuestions();
  const selected: PublicQuestion[] = [];

  while (selected.length < count && pool.length > 0) {
    const index = randomInt(pool.length);
    selected.push(pool.splice(index, 1)[0]);
  }

  return selected;
}

export function getAnswerKey(): Record<number, string> {
  return Object.fromEntries(questions.map((q) => [q.id, q.correctAnswer]));
}

export function getQuestion(questionId: number): InternalQuestion | undefined {
  return questions.find((question) => question.id === questionId);
}
