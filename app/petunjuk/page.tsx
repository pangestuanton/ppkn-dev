import Link from "next/link";
import ClayTitle from "@/components/ClayTitle";

const instructions = [
  {
    number: "01",
    title: "Masukkan nama",
    text: "Tulis nama lengkap pada halaman beranda, lalu tekan tombol MULAI KUIS.",
    color: "#43DFA6",
    shadow: "#1E845F",
  },
  {
    number: "02",
    title: "Baca soal dengan teliti",
    text: "Pahami setiap dilema moral dan pilih satu jawaban yang paling sesuai dengan alasanmu.",
    color: "#54CED7",
    shadow: "#238691",
  },
  {
    number: "03",
    title: "Gunakan navigasi soal",
    text: "Lingkaran nomor soal menunjukkan progres. Kamu dapat berpindah dan mengubah jawaban kapan saja.",
    color: "#FFD22A",
    shadow: "#A07400",
  },
  {
    number: "04",
    title: "Kirim jawaban",
    text: "Pastikan seluruh soal terisi. Pada soal terakhir, tekan KIRIM JAWABAN dan konfirmasi pengiriman.",
    color: "#BC68DF",
    shadow: "#6A2685",
  },
];

export default function InstructionsPage() {
  return (
    <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-4 py-8 sm:gap-8 sm:px-6 lg:px-20">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-full max-w-xl -translate-x-1/2 rounded-full bg-[#54CED7]/10 blur-[120px]" />
      <div className="relative z-10 text-center">
        <p className="font-['Quicksand'] text-xs font-bold uppercase tracking-widest text-[#E6C750]">MORAL DEVELOPMENT</p>
        <div className="mt-4"><ClayTitle text="PETUNJUK" size="md" /></div>
        <p className="mt-4 max-w-xl font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac] sm:text-base">
          Ikuti langkah sederhana berikut untuk menyelesaikan kuis perkembangan moral dengan nyaman.
        </p>
      </div>

      <div className="relative z-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        {instructions.map((instruction) => (
          <article key={instruction.number} className="flex min-w-0 items-start gap-4 rounded-2xl bg-[#201f1f] p-4 sm:p-5 shadow-[inset_0_2px_2px_rgba(255,255,255,0.06),0_8px_0_#090909,0_16px_24px_rgba(0,0,0,0.7)]">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-['Bricolage_Grotesque'] text-sm font-bold" style={{ backgroundColor: instruction.color, color: "#111", boxShadow: `inset 0 2px 1px rgba(255,255,255,.55), 0 4px 0 ${instruction.shadow}` }}>{instruction.number}</span>
            <div className="min-w-0">
              <h2 className="font-['Chunky'] text-xl text-[#FFF8E8]">{instruction.title}</h2>
              <p className="mt-1 font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac]">{instruction.text}</p>
            </div>
          </article>
        ))}
      </div>

      <Link href="/" className="relative z-10 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#FF742F] px-8 py-3 font-['Bricolage_Grotesque'] text-sm font-bold uppercase tracking-wider text-[#FFF8E8] shadow-[inset_0_3px_2px_rgba(255,255,255,.55),0_6px_0_#6A1E00,0_12px_18px_rgba(0,0,0,.7)] transition-transform hover:-translate-y-0.5 active:translate-y-1 sm:w-auto">KEMBALI KE BERANDA</Link>
    </div>
  );
}
