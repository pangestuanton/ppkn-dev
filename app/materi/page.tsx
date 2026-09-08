import Link from "next/link";
import ClayTitle from "@/components/ClayTitle";
import MixedFontText from "@/components/MixedFontText";

const lecturers = [
  "Dr. Yunisca Nurmalisa, S.Pd., M.Pd.",
  "Lisa Retno Sari, M.Pd.",
  "Rima Yuni Saputri, M.Pd.",
];

const members = [
  "Helma Safira (2613032006)",
  "Aura Leviona Azzahra (2613032018)",
  "Andri Abenk JP (2613032048)",
  "Risman Azis Nurhidayat (2613032066)",
];

const functions = [
  [
    "Pembentukan Karakter",
    "Membiasakan sikap jujur, disiplin, bertanggung jawab, dan menghargai orang lain.",
  ],
  [
    "Filter Nilai",
    "Membantu menyaring pengaruh negatif tanpa meninggalkan nilai yang baik.",
  ],
  [
    "Pengambilan Keputusan Etis",
    "Membantu seseorang menentukan tindakan berdasarkan pertimbangan moral.",
  ],
  [
    "Pengembangan Empati",
    "Menumbuhkan kepedulian, toleransi, dan kemampuan bekerja sama.",
  ],
];

const reasons = [
  [
    "Membedakan Baik dan Buruk",
    "Membantu menentukan tindakan yang tepat di setiap situasi.",
  ],
  [
    "Mengontrol Diri",
    "Membiasakan seseorang berpikir sebelum bertindak dan bertanggung jawab atas pilihannya.",
  ],
  [
    "Membangun Hubungan Sosial",
    "Mendorong sikap saling menghargai, peduli, dan toleran terhadap sesama.",
  ],
  [
    "Menghadapi Era Digital",
    "Membantu seseorang menggunakan media sosial secara bijak, seperti tidak menyebarkan hoaks, menghina, atau melakukan perundungan.",
  ],
];

const kohlbergStages = [
  {
    level: "1. Prakonvensional",
    focus: "Berfokus pada konsekuensi dan kepentingan pribadi.",
    color: "#54CED7",
    stages: [
      { num: "Tahap 1", text: "Melakukan sesuatu karena takut mendapat hukuman." },
      { num: "Tahap 2", text: "Melakukan sesuatu karena mengharapkan keuntungan atau imbalan." },
    ],
  },
  {
    level: "2. Konvensional",
    focus: "Berfokus pada norma, penerimaan orang lain, dan ketertiban sosial.",
    color: "#FFD22A",
    stages: [
      { num: "Tahap 3", text: "Melakukan sesuatu agar dianggap baik oleh orang lain." },
      { num: "Tahap 4", text: "Menaati aturan karena dianggap penting untuk menjaga ketertiban." },
    ],
  },
  {
    level: "3. Pascakonvensional",
    focus: "Berfokus pada hak, keadilan, dan prinsip moral yang lebih luas.",
    color: "#43DFA6",
    stages: [
      { num: "Tahap 5", text: "Mempertimbangkan hak dan kepentingan bersama." },
      { num: "Tahap 6", text: "Bertindak berdasarkan prinsip moral universal seperti keadilan dan kesetaraan." },
    ],
  },
];

const methods = [
  [
    "a. Dilema Moral",
    "Peserta didik diberikan situasi yang memiliki pilihan sulit, kemudian menentukan sikap dan menjelaskan alasannya.",
  ],
  [
    "b. Studi Kasus",
    "Peserta didik menganalisis permasalahan yang berkaitan dengan kehidupan nyata.",
  ],
  [
    "c. Diskusi atau Debat",
    "Peserta didik menyampaikan pendapat dan belajar menghargai sudut pandang yang berbeda.",
  ],
  [
    "d. Refleksi",
    "Peserta didik melihat kembali tindakan atau keputusan yang pernah dilakukan dan menilai apakah sudah sesuai dengan nilai moral.",
  ],
  [
    "e. Pembelajaran Demokratis",
    "Peserta didik dilibatkan dalam membuat kesepakatan dan mengambil keputusan bersama.",
  ],
];

const environments = [
  ["Keluarga", "Membentuk kebiasaan dan nilai moral sejak awal kehidupan."],
  ["Sekolah", "Memperkuat nilai, etika, dan penegakan aturan dalam komunitas belajar."],
  ["Teman Sebaya", "Melatih empati, toleransi, solidaritas, dan kerja sama."],
  ["Masyarakat", "Memberikan pengalaman moral langsung dalam kehidupan nyata bermasyarakat."],
];

const schoolImplementations = [
  "Datang tepat waktu.",
  "Berkata jujur dalam perkataan maupun perbuatan.",
  "Menaati aturan dan tata tertib sekolah.",
  "Menghargai guru dan teman tanpa membeda-bedakan.",
  "Bertanggung jawab terhadap tugas dan kewajiban.",
  "Bekerja sama secara sportif dalam kelompok.",
];

const factors = [
  ["Lingkungan Sosial", "Interaksi di lingkungan sekitar membentuk kebiasaan moral."],
  ["Pola Asuh Keluarga", "Pondasi utama penanaman nilai dan budi pekerti."],
  ["Teladan dari Orang Lain", "Contoh nyata dari guru, orang tua, dan figur panutan."],
  ["Kemampuan Kognitif", "Tingkat pemahaman berpikir dalam memproses keadilan."],
  ["Teman Sebaya", "Pengaruh pergaulan dalam membangun kesepakatan nilai kelompok."],
];

const ppknValues = [
  "Jujur dan bertanggung jawab dalam bertindak.",
  "Toleran terhadap segala bentuk perbedaan suku, agama, dan pandangan.",
  "Menghargai hak-hak asasi orang lain.",
  "Peduli dan memiliki empati terhadap sesama warga negara.",
  "Bijak dalam memanfaatkan media digital dan teknologi informasi.",
];

function InfoList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac]">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#FFD22A] shadow-[0_0_6px_#FFD22A]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Cards({ items }: { items: string[][] }) {
  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      {items.map(([title, text]) => (
        <div
          key={title}
          className="rounded-2xl bg-[#1c1b1b] p-4 shadow-[inset_0_2px_1px_rgba(255,255,255,.06),0_5px_0_#090909]"
        >
          <h3 className="font-arimo text-lg font-bold text-[#FFD22A]">
            <MixedFontText text={title} />
          </h3>
          <p className="mt-1 font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac]">
            {text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function MateriPage() {
  return (
    <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-8 sm:gap-8 sm:px-6 lg:px-20 select-none">
      {/* Header */}
      <header className="relative z-10 text-center">
        <p className="font-['Quicksand'] text-xs font-bold uppercase tracking-widest text-[#E6C750]">
          DASAR KONSEP PENDIDIKAN MORAL
        </p>
        <div className="mt-4">
          <ClayTitle text="MORAL DEVELOPMENT" size="md" />
        </div>
        <p className="mt-4 font-['Quicksand'] text-sm font-semibold text-[#d1c6ac] sm:text-base">
          Pendekatan-Pendekatan Moral: Moral Development
        </p>
      </header>

      {/* Dosen & Anggota */}
      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-[#201f1f] p-5 shadow-[inset_0_2px_2px_rgba(255,255,255,.06),0_8px_0_#090909]">
          <h2 className="font-arimo text-xl font-bold text-[#54CED7]">
            <MixedFontText text="Dosen Pengampu" />
          </h2>
          <InfoList items={lecturers} />
        </div>
        <div className="rounded-2xl bg-[#201f1f] p-5 shadow-[inset_0_2px_2px_rgba(255,255,255,.06),0_8px_0_#090909]">
          <h2 className="font-arimo text-xl font-bold text-[#43DFA6]">
            <MixedFontText text="Nama Anggota Kelompok 6" />
          </h2>
          <InfoList items={members} />
        </div>
      </section>

      {/* Main Material Container */}
      <article className="materi-content space-y-8 rounded-3xl bg-[#201f1f] p-5 sm:p-7 lg:p-10 shadow-[inset_0_2px_2px_rgba(255,255,255,.06),0_12px_0_#090909,0_22px_30px_rgba(0,0,0,.7)]">
        {/* 1. Konsep Dasar */}
        <section>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b1b] text-[#FFD22A] text-xs font-bold font-['Bricolage_Grotesque'] uppercase tracking-wider mb-2">
            Bagian 01
          </div>
          <h2 className="font-['Chunky'] text-2xl text-[#FFD22A]">
            1. Konsep Dasar Moral Development
          </h2>
          <p className="mt-3 font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac] sm:text-base">
            Moral Development merupakan proses berkembangnya cara seseorang dalam memahami dan menjalankan nilai moral. Perkembangan moral terlihat dari kemampuan seseorang membedakan tindakan yang baik dan buruk, memahami alasan di balik suatu tindakan, serta mempertimbangkan akibat dari keputusan yang diambil. Perkembangan moral tidak terjadi secara langsung, tetapi dipengaruhi oleh beberapa hal, seperti usia, pengalaman, pendidikan, keluarga, dan lingkungan sosial.
          </p>
        </section>

        {/* 2. Infografis Pemantik */}
        <section className="rounded-2xl bg-[#181717] p-5 sm:p-6 border border-[#FFD22A]/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BC68DF] text-[#FFF8E8] text-xs font-bold font-['Bricolage_Grotesque'] uppercase tracking-wider mb-3 shadow-[0_2px_0_#6A2685]">
            Bagian 02 • Pemantik Refleksi
          </div>
          <h2 className="font-['Chunky'] text-xl sm:text-2xl text-[#FF742F]">
            “KALAU KAMU DI POSISI INI, APA YANG AKAN KAMU LAKUKAN?”
          </h2>
          
          <div className="mt-4 rounded-xl bg-[#232222] p-4 border-l-4 border-[#54CED7]">
            <p className="font-['Quicksand'] font-bold text-xs text-[#54CED7] uppercase tracking-wider">
              Situasi Dilematis:
            </p>
            <p className="mt-1 font-['Quicksand'] text-sm font-semibold text-[#FFF8E8] leading-relaxed">
              Kamu melihat temanmu menyontek ketika ujian. Guru tidak mengetahuinya. Jika kamu melaporkan, temanmu mungkin mendapat masalah dan bisa marah kepadamu. Namun, jika kamu diam, berarti kamu membiarkan tindakan tersebut.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-['Quicksand'] font-bold text-sm text-[#E6C750]">
              Pertanyaan Pemantik:
            </h3>
            <ol className="mt-2 space-y-1.5 list-decimal list-inside font-['Quicksand'] text-sm font-semibold text-[#d1c6ac]">
              <li>Apa yang akan kamu lakukan?</li>
              <li>Mengapa kamu memilih tindakan tersebut?</li>
              <li>Nilai moral apa yang berkaitan dengan situasi tersebut?</li>
              <li>Apa akibat dari pilihanmu bagi diri sendiri dan orang lain?</li>
              <li>Apakah tindakan yang benar selalu menjadi pilihan yang mudah?</li>
            </ol>
          </div>

          <div className="mt-5 pt-4 border-t border-[#333]">
            <h4 className="font-arimo font-bold text-base text-[#43DFA6]">
              Hubungannya dengan Moral Development
            </h4>
            <p className="mt-1 font-['Quicksand'] text-sm font-semibold text-[#d1c6ac] leading-relaxed">
              Situasi tersebut menunjukkan bahwa perkembangan moral bukan hanya tentang mengetahui mana yang benar dan salah, tetapi juga tentang alasan seseorang dalam menentukan pilihan. Setiap orang dapat memiliki pertimbangan yang berbeda ketika menghadapi masalah moral.
            </p>
            <p className="mt-2 font-['Quicksand'] text-sm font-bold text-[#FFD22A] italic">
              “Bukan hanya apa yang kita lakukan, tetapi juga mengapa kita memilih untuk melakukannya.”
            </p>
          </div>
        </section>

        {/* 3. Tujuan dan Fungsi */}
        <section>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b1b] text-[#FFD22A] text-xs font-bold font-['Bricolage_Grotesque'] uppercase tracking-wider mb-2">
            Bagian 03
          </div>
          <h2 className="font-['Chunky'] text-2xl text-[#FFD22A]">
            3. Tujuan dan Fungsi Pendidikan Moral
          </h2>
          <p className="mt-2 font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac]">
            Pendidikan moral tidak hanya bertujuan membuat peserta didik mengetahui aturan, tetapi juga membantu mereka membentuk sikap dan mengambil keputusan yang bertanggung jawab.
          </p>
          
          <div className="mt-4 rounded-2xl bg-[#1c1b1b] p-4 border border-[#43DFA6]/20">
            <h3 className="font-arimo text-base font-bold text-[#43DFA6]">
              Tujuan Utama:
            </h3>
            <p className="mt-1 font-['Quicksand'] text-sm font-semibold text-[#FFF8E8]">
              Membentuk individu yang memiliki karakter baik, bertanggung jawab, dan memiliki kesadaran terhadap nilai serta etika dalam kehidupan bermasyarakat.
            </p>
          </div>

          <h3 className="mt-5 font-['Chunky'] text-xl text-[#FFF8E8]">
            Fungsi Pendidikan Moral
          </h3>
          <Cards items={functions} />
        </section>

        {/* 4. Mengapa Penting */}
        <section>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b1b] text-[#FFD22A] text-xs font-bold font-['Bricolage_Grotesque'] uppercase tracking-wider mb-2">
            Bagian 04
          </div>
          <h2 className="font-['Chunky'] text-2xl text-[#FFD22A]">
            4. Mengapa Perkembangan Moral Penting?
          </h2>
          <p className="mt-2 font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac]">
            Perkembangan moral penting karena membantu seseorang berpikir sebelum bertindak dan mempertimbangkan dampak dari keputusan yang diambil.
          </p>
          <Cards items={reasons} />
        </section>

        {/* 5. Teori Jean Piaget */}
        <section>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b1b] text-[#FFD22A] text-xs font-bold font-['Bricolage_Grotesque'] uppercase tracking-wider mb-2">
            Bagian 05
          </div>
          <h2 className="font-['Chunky'] text-2xl text-[#FFD22A]">
            5. Teori Perkembangan Moral Jean Piaget
          </h2>
          <p className="mt-2 font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac]">
            Menurut Piaget, perkembangan moral berkaitan dengan perkembangan cara berpikir seseorang. Seiring bertambahnya pengalaman dan kemampuan berpikir, pertimbangan moral juga berkembang.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#1c1b1b] p-5 border border-[#54CED7]/20 shadow-[inset_0_2px_1px_rgba(255,255,255,.06),0_5px_0_#090909]">
              <span className="px-2.5 py-0.5 rounded-full bg-[#54CED7] text-[#00315F] font-['Bricolage_Grotesque'] font-bold text-xs">
                Tahap 1
              </span>
              <h3 className="mt-2 font-arimo text-lg font-bold text-[#54CED7]">
                Moral Heteronom
              </h3>
              <p className="mt-2 font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac]">
                Pada tahap ini, aturan dianggap sebagai sesuatu yang mutlak dan harus dipatuhi karena berasal dari pihak yang memiliki kekuasaan atau otoritas.
              </p>
            </div>
            <div className="rounded-2xl bg-[#1c1b1b] p-5 border border-[#43DFA6]/20 shadow-[inset_0_2px_1px_rgba(255,255,255,.06),0_5px_0_#090909]">
              <span className="px-2.5 py-0.5 rounded-full bg-[#43DFA6] text-[#003926] font-['Bricolage_Grotesque'] font-bold text-xs">
                Tahap 2
              </span>
              <h3 className="mt-2 font-arimo text-lg font-bold text-[#43DFA6]">
                Moral Otonom
              </h3>
              <p className="mt-2 font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac]">
                Pada tahap ini, seseorang mulai memahami aturan secara lebih mandiri. Ia tidak hanya melihat aturan, tetapi juga mempertimbangkan niat, keadilan, dan kesepakatan bersama.
              </p>
            </div>
          </div>
          <div className="mt-4 rounded-xl bg-[#2a2a2a] p-3 text-center">
            <p className="font-['Quicksand'] text-xs sm:text-sm font-bold text-[#FFF8E8]">
              📌 <span className="text-[#FFD22A]">Intinya:</span> Semakin berkembang cara berpikir dan pengalaman seseorang, semakin matang pula pertimbangan moralnya.
            </p>
          </div>
        </section>

        {/* 6. Teori Lawrence Kohlberg */}
        <section>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b1b] text-[#FFD22A] text-xs font-bold font-['Bricolage_Grotesque'] uppercase tracking-wider mb-2">
            Bagian 06
          </div>
          <h2 className="font-['Chunky'] text-2xl text-[#FFD22A]">
            6. Teori Perkembangan Moral Lawrence Kohlberg
          </h2>
          <p className="mt-2 font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac]">
            Kohlberg menjelaskan bahwa perkembangan moral terdiri dari <strong>3 tingkat</strong> dan <strong>6 tahap</strong>. Yang menjadi perhatian bukan hanya tindakan seseorang, tetapi juga alasan di balik tindakan tersebut.
          </p>
          <div className="mt-5 space-y-4">
            {kohlbergStages.map((tier) => (
              <div
                key={tier.level}
                className="rounded-2xl bg-[#1c1b1b] p-5 shadow-[inset_0_2px_1px_rgba(255,255,255,.06),0_6px_0_#090909]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#2d2d2d] pb-2">
                  <h3 className="font-arimo text-lg font-bold" style={{ color: tier.color }}>
                    {tier.level}
                  </h3>
                  <span className="font-['Quicksand'] text-xs font-semibold text-[#999079]">
                    {tier.focus}
                  </span>
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {tier.stages.map((stg) => (
                    <div key={stg.num} className="rounded-xl bg-[#232222] p-3">
                      <span className="font-['Bricolage_Grotesque'] font-bold text-xs text-[#E6C750]">
                        {stg.num}
                      </span>
                      <p className="mt-1 font-['Quicksand'] text-sm font-semibold text-[#d1c6ac]">
                        {stg.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Penerapan dalam Pendidikan */}
        <section>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b1b] text-[#FFD22A] text-xs font-bold font-['Bricolage_Grotesque'] uppercase tracking-wider mb-2">
            Bagian 07
          </div>
          <h2 className="font-['Chunky'] text-2xl text-[#FFD22A]">
            7. Penerapan Moral Development dalam Pendidikan
          </h2>
          <p className="mt-2 font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac]">
            Perkembangan moral dapat diterapkan melalui pembelajaran yang membuat peserta didik aktif berpikir, berdiskusi, dan mengambil keputusan.
          </p>
          <Cards items={methods} />
        </section>

        {/* 8. Peran Guru dan Lingkungan */}
        <section>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b1b] text-[#FFD22A] text-xs font-bold font-['Bricolage_Grotesque'] uppercase tracking-wider mb-2">
            Bagian 08
          </div>
          <h2 className="font-['Chunky'] text-2xl text-[#FFD22A]">
            8. Peran Guru dan Lingkungan
          </h2>
          <p className="mt-2 font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac]">
            Perkembangan moral akan lebih kuat ketika nilai-nilai baik tidak hanya diajarkan, tetapi juga dicontohkan dalam kehidupan sehari-hari.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#1c1b1b] p-5 shadow-[inset_0_2px_1px_rgba(255,255,255,.06),0_5px_0_#090909]">
              <h3 className="font-arimo text-lg font-bold text-[#FF742F]">
                Peran Guru
              </h3>
              <InfoList
                items={[
                  "Menjadi teladan dalam bersikap jujur dan adil.",
                  "Memfasilitasi diskusi mengenai masalah moral.",
                  "Menghargai perbedaan pendapat antar siswa.",
                  "Membiasakan suasana kelas yang adil dan demokratis.",
                ]}
              />
            </div>
            <div className="rounded-2xl bg-[#1c1b1b] p-5 shadow-[inset_0_2px_1px_rgba(255,255,255,.06),0_5px_0_#090909]">
              <h3 className="font-arimo text-lg font-bold text-[#54CED7]">
                Peran Lingkungan
              </h3>
              <div className="mt-3 space-y-2 font-['Quicksand'] text-sm font-semibold text-[#d1c6ac]">
                {environments.map(([env, desc]) => (
                  <p key={env}>
                    <strong className="text-[#FFF8E8]">{env}:</strong> {desc}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 9. Implementasi dan Faktor */}
        <section>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b1b] text-[#FFD22A] text-xs font-bold font-['Bricolage_Grotesque'] uppercase tracking-wider mb-2">
            Bagian 09
          </div>
          <h2 className="font-['Chunky'] text-2xl text-[#FFD22A]">
            9. Implementasi dan Faktor yang Memengaruhi
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#1c1b1b] p-5 shadow-[inset_0_2px_1px_rgba(255,255,255,.06),0_5px_0_#090909]">
              <h3 className="font-arimo text-lg font-bold text-[#43DFA6]">
                Contoh Implementasi di Sekolah
              </h3>
              <p className="mt-1 font-['Quicksand'] text-xs font-semibold text-[#999079]">
                Terlihat dari kebiasaan sederhana sehari-hari:
              </p>
              <InfoList items={schoolImplementations} />
            </div>
            <div className="rounded-2xl bg-[#1c1b1b] p-5 shadow-[inset_0_2px_1px_rgba(255,255,255,.06),0_5px_0_#090909]">
              <h3 className="font-arimo text-lg font-bold text-[#BC68DF]">
                Faktor yang Memengaruhi
              </h3>
              <div className="mt-3 space-y-2 font-['Quicksand'] text-sm font-semibold text-[#d1c6ac]">
                {factors.map(([fac, expl]) => (
                  <p key={fac}>
                    <strong className="text-[#FFF8E8]">{fac}:</strong> {expl}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 10. Hubungan dengan PPKn */}
        <section>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b1b] text-[#FFD22A] text-xs font-bold font-['Bricolage_Grotesque'] uppercase tracking-wider mb-2">
            Bagian 10
          </div>
          <h2 className="font-['Chunky'] text-2xl text-[#FFD22A]">
            10. Hubungan Moral Development dengan PPKn
          </h2>
          <p className="mt-2 font-['Quicksand'] text-sm font-semibold leading-relaxed text-[#d1c6ac]">
            Moral Development memiliki hubungan yang erat dengan PPKn karena pembelajaran PPKn tidak hanya memberikan pengetahuan tentang Pancasila dan kewarganegaraan, tetapi juga mendorong peserta didik untuk menerapkan nilai tersebut dalam kehidupan sehari-hari.
          </p>
          <div className="mt-4 rounded-2xl bg-[#1c1b1b] p-5 border border-[#FFD22A]/20">
            <h3 className="font-arimo text-base font-bold text-[#FFD22A]">
              Nilai tersebut dapat diwujudkan melalui:
            </h3>
            <InfoList items={ppknValues} />
            <p className="mt-4 font-['Quicksand'] text-sm font-bold text-[#43DFA6] leading-relaxed">
              Dengan demikian, nilai Pancasila tidak hanya dipahami sebagai materi pembelajaran, tetapi juga menjadi sikap dan perilaku nyata dalam kehidupan sebagai warga negara.
            </p>
          </div>
        </section>

        {/* Kesimpulan */}
        <section className="rounded-2xl bg-gradient-to-br from-[#2a2415] to-[#1c1b1b] p-6 border border-[#FFD22A]/30 shadow-[0_8px_20px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-3 h-3 rounded-full bg-[#FFD22A] shadow-[0_0_8px_#FFD22A]" />
            <h2 className="font-['Chunky'] text-2xl text-[#FFD22A]">
              KESIMPULAN
            </h2>
          </div>
          <p className="font-['Quicksand'] text-sm sm:text-base font-semibold text-[#FFF8E8] leading-relaxed">
            Moral Development merupakan proses bertahap yang membentuk cara seseorang memahami nilai dan mengambil keputusan. Perkembangan moral tidak hanya dipengaruhi oleh usia, tetapi juga pengalaman, pendidikan, keluarga, teman sebaya, dan lingkungan. Teori Piaget menunjukkan perkembangan dari moral heteronom menuju otonom, sedangkan Kohlberg menjelaskan perkembangan pertimbangan moral melalui tiga tingkat dan enam tahap. Dalam PPKn, perkembangan moral penting karena membantu peserta didik mengubah nilai Pancasila dan kewarganegaraan menjadi perilaku nyata dalam kehidupan sehari-hari.
          </p>
        </section>
      </article>

      {/* Navigation CTA */}
      <Link
        href="/"
        className="mx-auto inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#FF742F] px-8 py-3 font-['Bricolage_Grotesque'] text-sm font-bold uppercase text-[#FFF8E8] shadow-[inset_0_3px_2px_rgba(255,255,255,.55),0_6px_0_#6A1E00] hover:-translate-y-0.5 active:translate-y-1 transition-all sm:w-auto"
      >
        KEMBALI KE BERANDA
      </Link>
    </div>
  );
}
