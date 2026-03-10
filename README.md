# 🎯 Tengga (Kulino Auto-Scraper & Task Manager)

**Tengga** adalah asisten pribadi berbasis otomatisasi untuk mengekstrak, melacak, dan mengelola tugas-tugas kuliah dari portal Moodle/Kulino secara otomatis.

Daripada mengecek kalender Kulino setiap hari secara manual dan berakhir panik karena ada tugas mepet, Tengga akan melakukan _deep scraping_ menggunakan Playwright dan menyajikan jadwal tugasmu ke dalam bentuk _dashboard_ web yang modern, rapi, dan estetik.

## ✨ Fitur Utama

- **🤖 Automated Deep Scraping:** Mengambil data tugas dan mata kuliah langsung dari kalender Moodle secara dinamis.
- **🧠 Smart Pagination & History:** Bot cerdas yang hanya mengambil data baru dan mengingat tugas yang sudah disubmit (hemat waktu & memori).
- **⚡ 100% Type-Safe:** Seluruh _codebase_ dibangun menggunakan TypeScript yang ketat.
- **🎨 Modern Web UI:** Dashboard interaktif bergaya Kanban Board dengan indikator urgensi _real-time_, dibangun dengan React, Vite, dan Tailwind CSS v4.
- **☁️ Cloud Automation:** _(Segera Hadir)_ Berjalan otomatis setiap tengah malam via GitHub Actions dan _dashboard_ yang dapat diakses di mana saja via Vercel.

## 📂 Struktur Project

Project ini menggunakan konsep _monorepo_ yang memisahkan antara mesin pengambil data (Scraper) dan antarmuka pengguna (Web).

- [`/scraper`](./scraper) - Mesin backend/bot menggunakan Node.js, TypeScript, dan Playwright.
- [`/web`](./web) - Frontend dashboard premium menggunakan React, Vite, dan Bun.

## 🚀 Cara Menjalankan

Karena project ini terbagi menjadi dua ekosistem, silakan masuk ke masing-masing folder untuk melihat instruksi teknis dan cara menjalankannya:

1. **Menjalankan Mesin Bot:** Baca [Scraper README](./scraper/README.md)
2. **Menjalankan UI Dashboard:** Baca [Web README](./web/README.md)

---

_Dibuat oleh seorang Pendekar, untuk mengalahkan kemalasan mengecek tugas Kulino._ 🚀
