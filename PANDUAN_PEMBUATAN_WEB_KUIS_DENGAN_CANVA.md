# Panduan Membuat Web Kuis PPKn dengan Canva

## 1. Tujuan Web

Web ini dibuat untuk membantu siswa belajar tentang **Moral Development** dalam pelajaran PPKn.

Di dalam web, siswa dapat:

- Membaca materi.
- Melihat petunjuk pengerjaan.
- Mengerjakan kuis.
- Mendapatkan nilai.
- Melihat jawaban yang benar dan salah.
- Melihat peringkat di leaderboard.

## 2. Alat yang Digunakan

Alat yang digunakan adalah:

- **Canva** untuk membuat rancangan tampilan web.
- **Next.js dan React** untuk membuat web yang bisa digunakan.
- **Tailwind CSS** untuk mengatur warna, ukuran, dan bentuk tampilan.
- **Google Sheets** untuk menyimpan nilai peserta.
- **GitHub** untuk menyimpan dan mengirimkan kode web.

Canva digunakan untuk membuat desain awal. Setelah desain selesai, desain tersebut diterapkan ke dalam kode web.

## 3. Membuat Desain di Canva

### Langkah 1: Membuka Canva

1. Buka [www.canva.com](https://www.canva.com).
2. Login menggunakan akun Canva.
3. Klik **Buat Desain**.
4. Pilih ukuran **Website** atau gunakan ukuran layar desktop.

### Langkah 2: Menentukan Tema

Gunakan tema yang ceria dan cocok untuk siswa. Pada web ini digunakan tema seperti tanah liat atau **clay style**.

Contoh warna yang dapat digunakan:

- Kuning untuk tombol utama.
- Biru untuk informasi.
- Hijau untuk jawaban benar.
- Merah untuk jawaban salah.
- Hitam atau abu-abu gelap sebagai latar belakang.

Gunakan bentuk sudut yang membulat agar tampilan terlihat ramah dan tidak kaku.

### Langkah 3: Membuat Halaman Beranda

Pada halaman beranda, masukkan beberapa bagian berikut:

1. Judul **KUIS PPKn**.
2. Keterangan singkat tentang Moral Development.
3. Kotak untuk menulis nama siswa.
4. Tombol **MULAI KUIS**.
5. Menu menuju Materi, Petunjuk, dan Leaderboard.

Halaman beranda adalah halaman pertama yang dilihat oleh pengguna.

### Langkah 4: Membuat Halaman Materi

Buat halaman yang berisi materi singkat dan mudah dibaca, misalnya:

- Pengertian Moral Development.
- Tujuan pendidikan moral.
- Teori Jean Piaget.
- Teori Lawrence Kohlberg.
- Contoh moral dalam kehidupan sekolah.

Gunakan judul yang besar dan warna yang berbeda agar setiap bagian mudah dibedakan.

### Langkah 5: Membuat Halaman Petunjuk

Halaman petunjuk berisi langkah pengerjaan kuis, contohnya:

1. Masukkan nama.
2. Baca soal dengan teliti.
3. Pilih satu jawaban.
4. Gunakan tombol berikutnya atau sebelumnya.
5. Kirim jawaban setelah semua soal selesai.

### Langkah 6: Membuat Halaman Kuis

Pada desain halaman kuis, siapkan:

- Nomor soal.
- Teks pertanyaan.
- Empat pilihan jawaban A, B, C, dan D.
- Tombol **SEBELUMNYA**.
- Tombol **SELANJUTNYA**.
- Tombol **KIRIM JAWABAN**.
- Penunjuk jumlah soal yang sudah dijawab.

Dalam web ini, setiap siswa mendapatkan 10 soal yang dipilih secara acak dari kumpulan soal.

### Langkah 7: Membuat Halaman Hasil

Halaman hasil menampilkan:

- Nama siswa.
- Nilai akhir.
- Jumlah jawaban benar.
- Jumlah jawaban salah.
- Jumlah seluruh soal.
- Pembahasan setiap soal.

Pada pembahasan, siswa dapat melihat jawaban yang dipilih dan jawaban yang benar. Dengan begitu, siswa tahu bagian yang masih perlu dipelajari.

### Langkah 8: Membuat Halaman Leaderboard

Leaderboard digunakan untuk menampilkan peringkat nilai siswa.

Tampilkan beberapa informasi seperti:

- Peringkat.
- Nama peserta.
- Jumlah jawaban benar.
- Nilai.

## 4. Membuat Tombol di Canva

Agar desain Canva bisa dicoba seperti sebuah web:

1. Klik tombol atau teks yang ingin diberi link.
2. Klik ikon **Link**.
3. Masukkan alamat halaman yang dituju.
4. Klik **Selesai**.

Contoh link:

- Tombol Mulai Kuis menuju halaman kuis.
- Tombol Materi menuju halaman materi.
- Tombol Kembali menuju halaman beranda.

Canva dapat digunakan untuk membuat contoh tampilan dan alur halaman. Namun, fitur seperti penilaian, soal acak, penyimpanan nilai, dan suara tombol perlu dibuat menggunakan kode web.

## 5. Mengubah Desain Canva Menjadi Web

Setelah desain selesai, buat bagian-bagian web berdasarkan desain tersebut.

Contoh pembagian halaman:

| Desain Canva | Halaman Web |
|---|---|
| Beranda | `app/page.tsx` |
| Materi | `app/materi/page.tsx` |
| Petunjuk | `app/petunjuk/page.tsx` |
| Kuis | `app/quiz/page.tsx` |
| Hasil | `app/result/page.tsx` |
| Leaderboard | `app/leaderboard/page.tsx` |

Warna, tulisan, tombol, dan kartu dari Canva kemudian dibuat ulang menggunakan HTML, React, dan Tailwind CSS.

## 6. Menambahkan Fitur Kuis

### Soal Acak

Web memilih 10 soal secara acak dari kumpulan soal. Karena itu, setiap peserta bisa mendapatkan susunan soal yang berbeda.

### Penilaian

Setelah tombol kirim ditekan:

1. Jawaban dikirim ke server.
2. Server mencocokkan jawaban dengan kunci jawaban.
3. Server menghitung jawaban benar dan salah.
4. Nilai ditampilkan di halaman hasil.

### Pembahasan Jawaban

Halaman hasil menampilkan semua soal yang sudah dijawab. Jawaban yang benar diberi tanda hijau, sedangkan jawaban yang salah diberi tanda merah.

### Suara Tombol

File suara `roblox-click-sound.mp3` digunakan sebagai suara setiap kali pengguna mengklik tombol atau pilihan jawaban.

## 7. Menguji Web

Sebelum web digunakan, lakukan beberapa pengujian:

1. Coba membuka web di HP dan laptop.
2. Masukkan nama yang berbeda.
3. Pastikan hanya ada 10 soal.
4. Coba pilih jawaban.
5. Coba tombol berikutnya dan sebelumnya.
6. Pastikan nilai benar.
7. Periksa pembahasan jawaban.
8. Coba suara pada setiap tombol.
9. Periksa apakah leaderboard menampilkan nilai.

## 8. Kesimpulan

Canva membantu membuat rancangan web dengan cepat dan mudah. Dengan Canva, kita dapat menentukan warna, bentuk tombol, susunan halaman, dan tampilan web sebelum mulai membuat kode.

Setelah itu, rancangan Canva diubah menjadi web menggunakan Next.js dan React. Hasilnya adalah web kuis PPKn yang dapat digunakan untuk belajar, mengerjakan soal, melihat nilai, dan mengetahui jawaban yang benar.
