# 🎨 Tenggat - Web Dashboard

Ini adalah antarmuka pengguna (Frontend) untuk project **Tenggat**. Aplikasi web ini bertugas membaca data tugas Kulino yang telah diekstrak oleh bot _scraper_, lalu menampilkannya dalam bentuk yang estetik, mudah dibaca, dan interaktif.

## 🛠️ Tech Stack

- **Framework:** React
- **Language:** TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4
- **Package Manager:** Bun

## 🚀 Progress Saat Ini

- [x] Inisialisasi Vite + React + TS.
- [x] Konfigurasi Tailwind CSS v4 (Sistem baru tanpa `tailwind.config.js`).
- [ ] Integrasi data pembacaan `data.json` dari hasil scraping.
- [ ] Desain antarmuka utama bergaya **Kanban Board** (To Do, Urgent, Done).

## 💻 Cara Menjalankan Lokal

1. Pastikan kamu berada di dalam direktori `web/`:

   ```bash
   cd web
   ```

2. Install semua _dependencies_:

   ```bash
   bun install
   ```

3. Jalankan _development server_:

   ```bash
   bun run dev
   ```

4. Buka browser dan akses `http://localhost:5173`.

---

_Catatan: Web ini mengambil data secara statis dari file `data.json` yang digenerate oleh backend scraper._
