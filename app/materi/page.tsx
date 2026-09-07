import Link from "next/link";
import ClayTitle from "@/components/ClayTitle";
import MixedFontText from "@/components/MixedFontText";

const lecturers = ["Dr. Yunisca Nurmalisa, S.Pd., M.Pd.", "Lisa Retno Sari, M.Pd.", "Rima Yuni Saputri, M.Pd."];
const members = [
  "Helma Safira (2613032006)",
  "Aura Leviona Azzahra (2613032018)",
  "Andri Abenk JP (2613032048)",
  "Risman Aziz Nurhidayat (2613032066)",
];

const functions = [
  ["Pengembangan Karakter", "Membentuk pribadi yang bertanggung jawab, jujur, disiplin, dan menghormati sesama."],
  ["Penyaring Budaya", "Menyeleksi pengaruh budaya luar atau nilai negatif agar tidak merusak nilai lokal."],
  ["Pengambilan Keputusan Etis", "Membantu menganalisis situasi rumit dan mengambil keputusan berdasarkan prinsip etika."],
  ["Pengembangan Empati dan Sosial", "Menumbuhkan kepedulian, toleransi, serta kerja sama yang sehat."],
  ["Pencegahan Perilaku Menyimpang", "Mengurangi risiko kenakalan remaja, perilaku antisosial, dan tindakan kriminal."],
];

const methods = [
  ["Diskusi Dilema Moral", "Peserta didik menentukan sikap dalam konflik nilai dan menjelaskan alasannya."],
  ["Studi Kasus", "Menganalisis kasus nyata seperti ketidakjujuran, bullying, korupsi, atau diskriminasi."],
  ["Diskusi Kelompok / Debat", "Menyampaikan pendapat dan belajar menghargai perbedaan."],
  ["Refleksi", "Melihat kembali tindakan dan keputusan yang pernah dilakukan."],
  ["Pembelajaran Demokratis", "Membuat kesepakatan, mengambil keputusan bersama, dan menyelesaikan konflik secara adil."],
];

const factors = [
  ["Lingkungan sosial", "Interaksi dengan keluarga, sekolah, dan masyarakat membentuk nilai moral."],
  ["Pola asuh", "Cara orang tua mendidik menjadi dasar pembentukan moral."],
  ["Teladan", "Contoh dari orang tua, guru, dan tokoh lain memengaruhi perilaku."],
  ["Kognitif", "Kemampuan berpikir membantu memahami aturan dan keadilan."],
  ["Teman sebaya", "Pergaulan melatih kerja sama, toleransi, dan penyelesaian konflik."],
];

function InfoList({ items }: { items: string[] }) {
  return <ul className="mt-3 space-y-2 font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac]">{items.map((item) => <li key={item} className="flex gap-2"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#FFD22A]" />{item}</li>)}</ul>;
}

function Cards({ items }: { items: string[][] }) {
  return <div className="mt-4 grid gap-3 sm:grid-cols-2">{items.map(([title, text]) => <div key={title} className="rounded-2xl bg-[#1c1b1b] p-4 shadow-[inset_0_2px_1px_rgba(255,255,255,.06),0_5px_0_#090909]"><h3 className="font-arimo text-lg font-bold text-[#FFD22A]"><MixedFontText text={title} /></h3><p className="mt-1 font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac]">{text}</p></div>)}</div>;
}

export default function MateriPage() {
  return (
    <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-8 sm:gap-8 sm:px-6 lg:px-20">
      <header className="relative z-10 text-center"><p className="font-['Quicksand'] text-xs font-bold uppercase tracking-widest text-[#E6C750]">DASAR KONSEP PENDIDIKAN MORAL</p><div className="mt-4"><ClayTitle text="MORAL DEVELOPMENT" size="md" /></div><p className="mt-4 font-['Quicksand'] text-sm font-semibold text-[#d1c6ac] sm:text-base">Pendekatan-Pendekatan Moral</p></header>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-[#201f1f] p-5 shadow-[inset_0_2px_2px_rgba(255,255,255,.06),0_8px_0_#090909]"><h2 className="font-arimo text-xl font-bold text-[#54CED7]"><MixedFontText text="Dosen Pengampu" /></h2><InfoList items={lecturers} /></div>
        <div className="rounded-2xl bg-[#201f1f] p-5 shadow-[inset_0_2px_2px_rgba(255,255,255,.06),0_8px_0_#090909]"><h2 className="font-arimo text-xl font-bold text-[#43DFA6]"><MixedFontText text="Nama Anggota Kelompok 6" /></h2><InfoList items={members} /></div>
      </section>

      <article className="materi-content space-y-6 rounded-3xl bg-[#201f1f] p-4 sm:p-6 lg:p-8 shadow-[inset_0_2px_2px_rgba(255,255,255,.06),0_12px_0_#090909,0_22px_30px_rgba(0,0,0,.7)]">
        <section><h2 className="font-['Chunky'] text-2xl text-[#FFD22A]">1. Konsep Dasar Moral Development</h2><h3 className="mt-4 font-['Chunky'] text-xl text-[#FFF8E8]">Pengertian Konsep Moral Development</h3><p className="mt-2 font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac]">Moral development atau perkembangan moral adalah proses seseorang dalam belajar memahami dan menerapkan nilai-nilai moral dalam kehidupan sehari-hari. Proses ini membantu seseorang membedakan mana yang baik dan buruk, serta mempertimbangkan akibat dan alasan dari setiap tindakan. Perkembangan moral dipengaruhi oleh usia, pengalaman, pendidikan, keluarga, dan lingkungan sosial.</p><h3 className="mt-4 font-['Chunky'] text-xl text-[#FFF8E8]">Tujuan Pendidikan Moral</h3><p className="mt-2 font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac]">Tujuan utamanya adalah membentuk kepribadian dan karakter individu yang berakhlak mulia, bertanggung jawab, serta memiliki kesadaran etika dalam kehidupan bermasyarakat.</p><h3 className="mt-4 font-['Chunky'] text-xl text-[#FFF8E8]">Fungsi Pendidikan Moral</h3><Cards items={functions} /></section>
        <section><h2 className="font-['Chunky'] text-2xl text-[#FFD22A]">Pentingnya Perkembangan Moral</h2><p className="mt-2 font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac]">Perkembangan moral membantu seseorang menentukan sikap dan bertindak dengan mempertimbangkan nilai yang baik, bertanggung jawab, dan menghargai orang lain.</p><InfoList items={["Membedakan baik dan buruk dalam berbagai situasi.", "Mengontrol diri dengan berpikir sebelum bertindak.", "Membangun hubungan sosial melalui sikap saling menghargai dan toleransi.", "Menghadapi era digital dengan tidak menyebarkan hoaks atau melakukan perundungan."]} /></section>
        <section><h2 className="font-['Chunky'] text-2xl text-[#FFD22A]">2. Teori Perkembangan Moral</h2><p className="mt-2 font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac]">Perkembangan moral adalah proses terbentuknya kemampuan memahami aturan, membedakan baik dan buruk, serta menentukan tindakan yang dianggap benar. Proses ini berlangsung bertahap seiring usia, pola berpikir, dan pengalaman sosial.</p><h3 className="mt-4 font-['Chunky'] text-xl text-[#FFF8E8]">Teori Jean Piaget</h3><p className="mt-2 font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac]">Piaget menjelaskan bahwa perkembangan moral berkaitan dengan perkembangan cara berpikir. Anak awalnya mengikuti aturan karena menganggapnya mutlak, lalu mulai memahami bahwa aturan mengatur kehidupan bersama dan dapat dipertimbangkan berdasarkan keadilan serta kesepakatan.</p><Cards items={[["Moral Heteronom", "Aturan dianggap mutlak dan berasal dari pihak yang lebih berkuasa."], ["Moral Otonom", "Mulai memahami aturan secara mandiri serta mempertimbangkan niat, keadilan, dan kesepakatan bersama."]]}/><h3 className="mt-5 font-['Chunky'] text-xl text-[#FFF8E8]">Teori Lawrence Kohlberg</h3><p className="mt-2 font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac]">Kohlberg mengembangkan teori Piaget dan menilai perkembangan moral dari alasan atau pertimbangan yang digunakan seseorang dalam menentukan benar dan salah.</p><Cards items={[["Prakonvensional", "Tahap 1: menghindari hukuman. Tahap 2: mengharapkan keuntungan atau timbal balik."], ["Konvensional", "Tahap 3: ingin diterima dan dihargai. Tahap 4: menaati aturan demi ketertiban sosial."], ["Pascakonvensional", "Tahap 5: aturan melindungi hak masyarakat. Tahap 6: keputusan berdasarkan prinsip moral universal seperti keadilan dan kesetaraan."]]}/></section>
        <section><h2 className="font-['Chunky'] text-2xl text-[#FFD22A]">3. Penerapan Dalam Pendidikan</h2><p className="mt-2 font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac]">Pendekatan moral development bertujuan mengembangkan kemampuan peserta didik dalam berpikir dan mengambil keputusan berkaitan dengan nilai moral. Pendidikan perlu memberi pengalaman yang membuat peserta didik mempertimbangkan berbagai sudut pandang dan alasan yang dapat dipertanggungjawabkan.</p><h3 className="mt-4 font-['Chunky'] text-xl text-[#FFF8E8]">Metode Pembelajaran</h3><Cards items={methods}/><h3 className="mt-5 font-['Chunky'] text-xl text-[#FFF8E8]">Peran Guru dan Lingkungan</h3><p className="mt-2 font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac]">Guru menjadi fasilitator dan teladan: memberi contoh jujur, adil, dan bertanggung jawab; mengajak berdiskusi; menghargai perbedaan; serta menciptakan kelas yang adil dan demokratis. Keluarga, sekolah, teman sebaya, dan masyarakat juga membentuk moral melalui kebiasaan kejujuran, tanggung jawab, kerja sama, penghargaan, dan keadilan.</p></section>
        <section><h2 className="font-['Chunky'] text-2xl text-[#FFD22A]">4. Implementasi dan Tantangan</h2><h3 className="mt-4 font-['Chunky'] text-xl text-[#FFF8E8]">Contoh Penerapan di Sekolah</h3><InfoList items={["Datang tepat waktu dan berkata jujur.", "Menaati peraturan serta menghargai guru dan teman.", "Bertanggung jawab terhadap tugas.", "Bekerja sama dan menghargai pendapat dalam kelompok."]}/><h3 className="mt-5 font-['Chunky'] text-xl text-[#FFF8E8]">Faktor yang Memengaruhi</h3><Cards items={factors}/><h3 className="mt-5 font-['Chunky'] text-xl text-[#FFF8E8]">Hubungan dengan PPKn</h3><p className="mt-2 font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac]">Moral development berhubungan dengan PPKn karena PPKn mengajarkan pengetahuan tentang Pancasila dan kewarganegaraan sekaligus penerapan nilai tersebut melalui sikap jujur, bertanggung jawab, toleransi, menghargai perbedaan, dan peduli terhadap sesama.</p></section>
      </article>
      <Link href="/" className="mx-auto inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#FF742F] px-8 py-3 font-['Bricolage_Grotesque'] text-sm font-bold uppercase text-[#FFF8E8] shadow-[inset_0_3px_2px_rgba(255,255,255,.55),0_6px_0_#6A1E00] sm:w-auto">KEMBALI KE BERANDA</Link>
    </div>
  );
}
