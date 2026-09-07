import "server-only";
import type { InternalQuestion, PublicQuestion } from "@/types/quiz";

export const questions: InternalQuestion[] = [
  { id: 1, question: "Apa yang dimaksud dengan moral development?", options: [{ id: "A", text: "Proses seseorang menghafal aturan dalam masyarakat" }, { id: "B", text: "Proses seseorang memahami dan menerapkan nilai moral dalam kehidupan" }, { id: "C", text: "Proses seseorang mengikuti kebiasaan orang lain" }, { id: "D", text: "Proses seseorang mengembangkan kemampuan akademik" }], correctAnswer: "B" },
  { id: 2, question: "Salah satu tujuan utama pendidikan moral adalah...", options: [{ id: "A", text: "Meningkatkan kemampuan bersaing" }, { id: "B", text: "Membentuk individu yang berakhlak dan bertanggung jawab" }, { id: "C", text: "Membuat peserta didik selalu mengikuti perintah" }, { id: "D", text: "Meningkatkan kemampuan menghafal" }], correctAnswer: "B" },
  { id: 3, question: "Salah satu fungsi pendidikan moral adalah...", options: [{ id: "A", text: "Membentuk karakter individu" }, { id: "B", text: "Meningkatkan jumlah teman" }, { id: "C", text: "Mengembangkan kemampuan berhitung" }, { id: "D", text: "Meningkatkan kemampuan bermain" }], correctAnswer: "A" },
  { id: 4, question: "Perkembangan moral membantu seseorang untuk...", options: [{ id: "A", text: "Membedakan baik dan buruk" }, { id: "B", text: "Menghindari semua masalah" }, { id: "C", text: "Mendapatkan banyak penghargaan" }, { id: "D", text: "Menjadi lebih populer" }], correctAnswer: "A" },
  { id: 5, question: "Menurut Jean Piaget, perkembangan moral berhubungan dengan perkembangan...", options: [{ id: "A", text: "Cara berpikir" }, { id: "B", text: "Kondisi ekonomi" }, { id: "C", text: "Kemampuan fisik" }, { id: "D", text: "Penampilan" }], correctAnswer: "A" },
  { id: 6, question: "Dalam moral heteronom, seseorang menganggap aturan sebagai sesuatu yang...", options: [{ id: "A", text: "Tidak penting" }, { id: "B", text: "Bebas dilanggar" }, { id: "C", text: "Harus dipatuhi" }, { id: "D", text: "Tidak berlaku untuk dirinya" }], correctAnswer: "C" },
  { id: 7, question: "Moral otonom ditandai dengan kemampuan seseorang untuk...", options: [{ id: "A", text: "Mematuhi aturan karena takut" }, { id: "B", text: "Memahami aturan dan mempertimbangkan keadilan" }, { id: "C", text: "Menghindari semua aturan" }, { id: "D", text: "Selalu mengikuti orang lain" }], correctAnswer: "B" },
  { id: 8, question: "Kohlberg membagi perkembangan moral menjadi...", options: [{ id: "A", text: "2 tingkat dan 4 tahap" }, { id: "B", text: "3 tingkat dan 6 tahap" }, { id: "C", text: "4 tingkat dan 5 tahap" }, { id: "D", text: "6 tingkat dan 3 tahap" }], correctAnswer: "B" },
  { id: 9, question: "Pada tahap pertama teori Kohlberg, seseorang menaati aturan karena...", options: [{ id: "A", text: "Ingin mendapat pujian" }, { id: "B", text: "Takut mendapatkan hukuman" }, { id: "C", text: "Ingin membantu orang lain" }, { id: "D", text: "Memikirkan keadilan" }], correctAnswer: "B" },
  { id: 10, question: "Pada tahap kedua teori Kohlberg, seseorang melakukan sesuatu karena...", options: [{ id: "A", text: "Takut dihukum" }, { id: "B", text: "Ingin mengikuti aturan" }, { id: "C", text: "Mendapat keuntungan atau imbalan" }, { id: "D", text: "Ingin menjaga ketertiban masyarakat" }], correctAnswer: "C" },
  { id: 11, question: "Sikap peduli terhadap teman yang sedang mengalami kesulitan menunjukkan...", options: [{ id: "A", text: "Empati" }, { id: "B", text: "Egoisme" }, { id: "C", text: "Persaingan" }, { id: "D", text: "Diskriminasi" }], correctAnswer: "A" },
  { id: 12, question: "Menaati aturan sekolah untuk menjaga ketertiban bersama termasuk tahap...", options: [{ id: "A", text: "1" }, { id: "B", text: "2" }, { id: "C", text: "3" }, { id: "D", text: "4" }], correctAnswer: "D" },
  { id: 13, question: "Mempertimbangkan keadilan dan hak orang lain termasuk tingkat...", options: [{ id: "A", text: "Prakonvensional" }, { id: "B", text: "Konvensional" }, { id: "C", text: "Pascakonvensional" }, { id: "D", text: "Heteronom" }], correctAnswer: "C" },
  { id: 14, question: "Diskusi dilema moral bertujuan melatih siswa untuk...", options: [{ id: "A", text: "Menghafal aturan" }, { id: "B", text: "Memikirkan alasan dalam menentukan sikap" }, { id: "C", text: "Menghindari diskusi" }, { id: "D", text: "Mengikuti pendapat guru" }], correctAnswer: "B" },
  { id: 15, question: "Dalam perkembangan moral siswa, guru sebaiknya menjadi...", options: [{ id: "A", text: "Fasilitator dan teladan yang baik" }, { id: "B", text: "Pemberi hukuman" }, { id: "C", text: "Pihak yang memaksakan pendapat" }, { id: "D", text: "Pengawas saja" }], correctAnswer: "A" },
  { id: 16, question: "Orang yang menjadi contoh perilaku baik disebut...", options: [{ id: "A", text: "Role model" }, { id: "B", text: "Leader" }, { id: "C", text: "Observer" }, { id: "D", text: "Mediator" }], correctAnswer: "A" },
  { id: 17, question: "Contoh penerapan perkembangan moral di era digital adalah...", options: [{ id: "A", text: "Tidak menyebarkan berita yang belum terbukti benar" }, { id: "B", text: "Menyebarkan hoaks" }, { id: "C", text: "Melakukan cyberbullying" }, { id: "D", text: "Menghina orang lain di media sosial" }], correctAnswer: "A" },
  { id: 18, question: "Salah satu faktor yang memengaruhi perkembangan moral adalah...", options: [{ id: "A", text: "Lingkungan sosial" }, { id: "B", text: "Warna pakaian" }, { id: "C", text: "Jenis makanan" }, { id: "D", text: "Tinggi badan" }], correctAnswer: "A" },
  { id: 19, question: "Peran teman sebaya dalam perkembangan moral dapat melatih...", options: [{ id: "A", text: "Kerja sama dan penyelesaian konflik" }, { id: "B", text: "Kemampuan menghafal" }, { id: "C", text: "Kemampuan berolahraga" }, { id: "D", text: "Kemampuan menggambar" }], correctAnswer: "A" },
  { id: 20, question: "Moral development berhubungan dengan PPKn karena PPKn mengajarkan...", options: [{ id: "A", text: "Nilai Pancasila dan penerapannya dalam kehidupan" }, { id: "B", text: "Cara mendapatkan nilai tinggi" }, { id: "C", text: "Kemampuan olahraga" }, { id: "D", text: "Cara menggunakan media sosial" }], correctAnswer: "A" },
];

export function getPublicQuestions(): PublicQuestion[] {
  return questions.map(({ correctAnswer, ...publicFields }) => publicFields);
}

export function getAnswerKey(): Record<number, string> {
  return Object.fromEntries(questions.map((q) => [q.id, q.correctAnswer]));
}
