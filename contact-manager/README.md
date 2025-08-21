
# Contact Manager App

Aplikasi CRUD sederhana untuk mengelola daftar kontak. Dibuat menggunakan **React + Axios** dengan API endpoint yang diatur melalui **environment variable**. Aplikasi ini juga menggunakan **SweetAlert2** untuk konfirmasi delete dan **Tailwind CSS** untuk styling.

---

## Fitur
- **Create**: Tambahkan kontak baru
- **Read**: Tampilkan daftar kontak dari API
- **Update**: Edit data kontak
- **Delete**: Hapus kontak dengan konfirmasi dialog

---

## Tech Stack
- **React** (Vite)
- **Axios** untuk request API
- **SweetAlert2** untuk popup konfirmasi
- **Tailwind CSS** untuk styling
- **Environment Variables** (VITE_API_URL)

---

## Instalasi

1. **Clone Repository**
   ```bash
   git clone https://github.com/coderzhaxor/fundamental.git
   cd fundamental/contact-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Buat file `.env`**
   Tambahkan URL API di root project:
   ```
   VITE_API_URL=http://localhost:3000/contacts
   ```

4. **Jalankan Aplikasi**
   ```bash
   npm run dev
   ```

---

## Struktur Folder
```
contact-manager/
├── src/
│   ├── App.jsx        # Komponen utama
│   ├── main.jsx       # Entry point React
│   └── ...
├── public/
├── .env               # Environment variable
├── .gitignore
├── package.json
└── README.md
```

---

## Cara Menggunakan
1. **Tambahkan Kontak**  
   Isi form **Nama** dan **Nomor Telepon**, lalu klik **Tambahkan Kontak**.
2. **Edit Kontak**  
   Klik tombol **Edit**, ubah data, lalu klik **Simpan Perubahan**.
3. **Hapus Kontak**  
   Klik tombol **Delete** → Konfirmasi pada dialog popup.

---

## Endpoint API yang Digunakan

| Method   | Endpoint             | Deskripsi             |
|----------|----------------------|-----------------------|
| GET      | `/contacts`          | Ambil semua kontak     |
| POST     | `/contacts`          | Tambahkan kontak baru  |
| PUT      | `/contacts/:id`      | Perbarui kontak        |
| DELETE   | `/contacts/:id`      | Hapus kontak           |
