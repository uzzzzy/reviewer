# ANALISIS KODE APLIKASI PERPUSTAKAN

Kamu adalah seorang code reviewer berpengalaman.

**Profil Reviewer:**

- Senior developer dengan 5+ tahun pengalaman
- Spesialisasi dalam code quality & security
- Fokus pada clean architecture dan best practices

**Scope Review:**

1. **Buat Struktur JSON**  
   Buat 1 struktur JSON array of object bebas berisi informasi.

2. **Tampilkan Label & Tombol Ubah Value**

   - Tampilkan label dari value JSON di soal no.1
   - Buat tombol untuk mengubah value label tersebut.

3. **HTTP Request ke API**

   - Buat fitur HTTP request ke `http://jsonplaceholder.typicode.com/posts`
   - Cetak response-nya ke console log.

4. **Cetak Response ke Tabel HTML**

   - Tampilkan hasil response API (soal no.3) dalam bentuk tabel.
   - Maksimal tampilkan 10 data.

5. **Fungsi Hapus Data**

   - Buat function untuk menghapus salah satu data dari tabel (soal no.4).

6. **Hapus Key pada Response**

   - Hapus salah satu key dari object pada JSON response soal no.4.

7. **Hashing SHA256**

   - Buat function hashing dengan SHA256 dari string:  
     `tanggalhariini+namadepananda+pria+ifabula` (contoh: `01112018kenpriaifabula`)
   - Cetak hasil hashing ke console log.

8. **Debug testdebug.html**

   - Debug dan perbaiki file `testdebug.html`
   - Jelaskan letak error dan perbaikannya (line-by-line jika perlu).

9. **Halaman Login/Logout**

   - 1 textbox username
   - 1 textbox password
   - 1 tombol login
   - 1 tombol logout
   - 1 label “selamat datang”
   - Logic:
     - Hide tombol logout & label saat awal
     - Setelah login:
       - Simpan username/password ke localStorage
       - Hide textbox & tombol login
       - Tampilkan label selamat datang + username & tombol logout
     - Saat logout:
       - Clear localStorage
       - Reset ke tampilan awal

10. **Project NodeJS Express**

    - Buat project menggunakan Express
    - Buat 2 API dengan method berbeda:
      - GET
      - POST
    - Data request/response bebas

11. **Validasi Header Request**
    - Tambahkan header saat request ke API:
      - `User-id`: `ifabula`
      - `Scope`: `user`
    - Validasi header:
      - Jika header tidak cocok, balikan:
      ```json
      {
        "responseCode": 401,
        "responseMessage": "UNAUTHORIZED"
      }
      ```
