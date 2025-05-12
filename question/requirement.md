1. Buatlah 1 struktur json array object yang berisi informasi, terserah anda.
2. Tampilkan 1 label dan buatlah 1 tombol yang bisa merubah value label. Label adalah value dari json yang sudah anda bikin di soal no 1
3. Buatlah 1 fitur yang berupa http request ke url : http://jsonplaceholder.typicode.com/posts dan cetak responsenya pada console log
4. Buatlah 1 html dengan mencetak hasil response dari soal no 3 ke dalam bentuk table. maksimal 10 data.
5. Buatlah 1 function untuk menghapus salah satu data pada soal no 4.
6. Hapuslah salah satu key dari object pada json response soal no 4.
7. Buatlah function hashing dari string berikut menggunakan
   tanggalhariini+namadepananda+pria+ifabula. Contoh : 01112018kenpriaifabula. Hasil
   hashing akan di cetak pada console log
8. Cobalah melakukan debuging pada file “testdebug.html” dan perbaiki file tersebut jabarkan errornya di line mana saja.
9. Buatlah satu halaman :
   a. 1 textbox username
   b. 1 textbox password
   c. 1 tombol login
   d. 1 tombol logout
   e. 1 label “selamat datang”
   Buatlah logic login dengan store data username dan password kedalam localStorage.
   Pertama2 hide tombol logout dan label selamat datang. Jika sudah melakukan login
   kemudian hide textbox username dan password beserta tombol login, munculkan label
   selamat datang plus username yang di login dan tombol logout. Ketika logout mohon di
   bersihkan localStoragenya.
10. Buatlah project nodejs menggunakan express. Buat 2 API dengan 2 method yang yaitu “GET” dan “POST”. Data request maupun response boleh ditentukan anda.
11. Tambahkan header pada saat request ke API di soal no 10 :

    a. User-id : ifabula

    b. Scope: user

    Validasilah proses request ke API anda dan jika header diatas tidak cocok, balikan

    ```
        response :
        {
            responseCode: 401,
            responseMessage: "UNAUTHORIZED"
        }
    ```

1 dan 2 adalah 1 konteks
3, 4, 5 dan 6 juga 1 konteks
10 dan 11 juga 1 konteks
