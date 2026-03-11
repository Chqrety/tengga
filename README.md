# 🎯 Tengga (Kulino Auto-Scraper & Task Manager)

[![Live Demo](https://img.shields.io/badge/Live_Demo-tengga--demo.vercel.app-emerald?style=for-the-badge&logo=vercel)](https://tengga-demo.vercel.app)
[![Tech Stack](https://img.shields.io/badge/Tech-React_|_Vite_|_Playwright-blue?style=for-the-badge)](#)

**Tengga** adalah asisten pribadi berbasis otomatisasi untuk mengekstrak, melacak, dan mengelola tugas-tugas kuliah dari portal Moodle/Kulino secara otomatis.

Daripada mengecek kalender Kulino setiap hari secara manual dan berakhir panik karena ada tugas mepet, Tengga akan melakukan _deep scraping_ menggunakan Playwright dan menyajikan jadwal tugasmu ke dalam bentuk _dashboard_ web yang modern, rapi, dan estetik.

## ✨ Fitur Utama

- **🤖 Automated Deep Scraping:** Mengambil data tugas dan mata kuliah langsung dari kalender Moodle secara dinamis.
- **🧠 Smart Pagination & History:** Bot cerdas yang hanya mengambil data baru dan mengingat tugas yang sudah disubmit (hemat waktu & memori).
- **⚡ 100% Type-Safe:** Seluruh _codebase_ dibangun menggunakan TypeScript yang ketat.
- **🎨 Modern Web UI:** Dashboard interaktif bergaya Kanban Board dengan indikator urgensi _real-time_, dibangun dengan React, Vite, dan Tailwind CSS v4.
- **☁️ Cloud Automation:** Dilengkapi _workflow_ GitHub Actions untuk otomatisasi harian (lihat folder `.github/workflows`).

## 📂 Struktur Project

Project ini menggunakan konsep _monorepo_ yang memisahkan antara mesin pengambil data (Scraper) dan antarmuka pengguna (Web).

- [`/scraper`](./scraper) - Mesin backend/bot menggunakan Node.js, TypeScript, dan Playwright.
- [`/web`](./web) - Frontend dashboard premium menggunakan React, Vite, dan Bun.

## 🚀 Cara Menjalankan Lokal

Karena project ini terbagi menjadi dua ekosistem, silakan masuk ke masing-masing folder untuk melihat instruksi teknis dan cara menjalankannya di lokal:

1. **Konfigurasi Mesin Bot:** Baca [Scraper README](./scraper/README.md)
2. **Konfigurasi UI Dashboard:** Baca [Web README](./web/README.md)

---

_Dibuat oleh seorang Mahasiswa, untuk mengalahkan kemalasan mengecek tugas Kulino._ 🚀
