# RadioCurate AI

> **Clinical Decision-Support UI** untuk membantu tim radioterapi membandingkan rencana terapi aktif dengan cohort kasus serupa, membaca insight yang explainable, dan menyajikan komunikasi pasien yang lebih empatik.

![React](https://img.shields.io/badge/React-18-149ECA?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)
![Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter)
![Charts](https://img.shields.io/badge/Recharts-2-22B5BF)
![License](https://img.shields.io/badge/Status-Prototype-orange)

---

## 📌 Ringkasan Proyek

**RadioCurate AI** adalah aplikasi front-end berbasis React + TypeScript yang memodelkan workspace analitik klinis untuk:

- membandingkan rencana radioterapi dengan kasus sukses serupa,
- menilai kualitas plan (quality, risk, OAR constraints),
- menampilkan tren global cohort,
- meningkatkan transparansi AI (explainability + audit),
- serta menyiapkan alur komunikasi klinis yang lebih terstruktur.

Aplikasi ini saat ini menggunakan **mock dataset** (belum terhubung ke backend klinis produksi) dan didesain untuk pengembangan lanjutan menuju integrasi pipeline DICOM/registri.

---

## ✨ Fitur Utama

### 1) Landing Experience (Product Story)
- Hero section, value proposition, trust/safety reminder, CTA ke dashboard.
- Ringkasan “live plan summary” untuk memberi konteks cepat sebelum masuk workspace.

### 2) Clinical Operations Dashboard
- KPI cards (validated matches, active reviews, confidence median, coverage global).
- Daftar perbandingan pasien terbaru + rekomendasi AI yang bisa ditindak.
- Alerts & quick actions untuk alur kerja klinis harian.

### 3) Patient Case Comparison
- Tab berbasis konteks: **Patient / Plan / Outcomes / Explainability**.
- Searchable similar-case list dengan filter teks.
- Visual outcome trend menggunakan line chart.
- Komponen penjelasan untuk mendukung keputusan klinisi.

### 4) Treatment Plan Analysis
- Quality scoring card.
- Dose distribution vs benchmark (bar chart).
- Organ-at-risk metrics dengan indikator batas (limit) dan warning.
- Suggested optimization areas sebelum approval plan.

### 5) Global Insights
- Technique adoption trends (VMAT, IMRT, Proton).
- Distribution heatmap cohort berdasarkan usia dan region penyakit.
- Filter panel prototipe untuk simulasi similarity slicing.

### 6) Explainability & Audit
- Daftar faktor yang berpengaruh terhadap matching dan confidence.
- Penekanan bahwa confidence **bukan pengganti** validasi manusia.
- Kartu transparansi model + disclaimer proses klinis.

### 7) Admin & Data Management (Prototype)
- Dataset status card (sync, model version, role access).
- Placeholder health indicators untuk pipeline ETL/validasi/indexing.
- Placeholder RBAC cards untuk ekspansi governance.

---

## 🧠 Analisa Arsitektur & Fungsi (Mendalam)

## 1. Arsitektur Aplikasi

### Front-end stack
- **React 18** untuk komposisi UI deklaratif.
- **TypeScript** untuk type safety domain data klinis simulatif.
- **Vite** untuk build cepat + DX modern.
- **React Router (createBrowserRouter)** untuk navigasi multipage.
- **Recharts** untuk visualisasi data klinis.

### Routing layer
Rute utama:
- `/` landing
- `/dashboard`
- `/case-comparison`
- `/plan-analysis`
- `/global-insights`
- `/explainability`
- `/admin`

Semua halaman operasional memakai **AppShell** (sidebar + header + content container) agar UX konsisten lintas modul.

### Data layer (saat ini)
Semua data disimpan di `src/data/mock-data.ts`:
- navigation metadata,
- statistik dashboard,
- cohort serupa,
- metrics OAR,
- outcome trend,
- global trend,
- explainability factors,
- dataset status.

Pendekatan ini memudahkan migrasi ke backend API karena kontrak data sudah terstruktur lewat tipe TypeScript (`Stat`, `SimilarCase`, `NavItem`, dll).

---

## 2. Pola Desain Komponen

### a) Layout components
- `AppShell`: wrapper halaman internal (sidebar + header).
- `SidebarNav`: navigasi utama berbasis data `navigation`.
- `HeaderBar`: title/subtitle + search + status badge.

### b) Shared domain components
Komponen seperti `PatientSummaryCard`, `RiskAlertCard`, `TreatmentPlanCard`, `DatasetStatusCard`, `ExplainabilityCard` dipisah untuk:
- reusability,
- readability,
- mempermudah maintainability saat data source berubah.

### c) UI primitives
Folder `src/components/ui` berisi komponen dasar (`Card`, `Badge`, `Button`, `Input`, `Tabs`, `Progress`, `Skeleton`, dll) yang menjadi fondasi design system internal.

Dampaknya:
- styling lebih konsisten,
- refactor lebih aman,
- halaman baru bisa dikembangkan cepat tanpa mengulang pattern UI.

---

## 3. Alur Fungsi per Halaman

### `/dashboard`
Menyediakan snapshot operasional: KPI, daftar review terakhir, alert kritikal, dan quick action.

### `/case-comparison`
Fokus pada pembandingan 1 kasus terhadap cohort serupa:
- filtering case,
- timeline treatment pathway,
- trend outcome,
- explainability details.

### `/plan-analysis`
Membandingkan kualitas plan aktif terhadap benchmark:
- distribusi dosis,
- OAR metrics,
- area optimasi.

### `/global-insights`
Menyajikan perspektif agregat lintas registri:
- adoption trend teknik,
- distribusi cohort,
- panel parameter similarity.

### `/explainability`
Menyederhanakan interpretasi confidence model dan faktor dominan keputusan.

### `/admin`
Menampilkan kesiapan data-operasional (status ingestion, indikator pipeline, role placeholder).

---

## 4. Temuan Kekuatan Codebase

- **Struktur modular**: pemisahan page/layout/shared/ui jelas.
- **Type safety cukup baik** di data mock dan props.
- **Design language konsisten** dengan card-centric dashboard style.
- **Scalable foundation** untuk migrasi dari prototype ke aplikasi terintegrasi backend.

## 5. Area Pengembangan Selanjutnya

1. Integrasi API nyata (registry service, model service, audit service).
2. State management terpusat (mis. TanStack Query + cache layer).
3. Validasi data klinis + empty/error state lebih kaya.
4. Otentikasi, RBAC, dan audit trail end-to-end.
5. Unit test + integration test + E2E test.
6. i18n (Indonesia/English) untuk adopsi lintas institusi.

---

## 🗂️ Struktur Direktori

```bash
src/
├── components/
│   ├── layout/        # App shell, header, sidebar
│   ├── shared/        # Domain cards/components per use-case klinis
│   └── ui/            # Primitive UI (button, badge, card, tabs, dll)
├── data/
│   └── mock-data.ts   # Seluruh data simulasi aplikasi
├── pages/             # Halaman utama sesuai route
├── lib/               # Utility helper (cn, formatPercent)
├── main.tsx           # Entry point React
└── router.tsx         # Definisi route aplikasi
```

---

## 🚀 Menjalankan Proyek

### Prasyarat
- Node.js 18+ (disarankan 20+)
- npm

### Instalasi
```bash
npm install
```

### Mode development
```bash
npm run dev
```

### Build production
```bash
npm run build
```

### Preview build
```bash
npm run preview
```

---

## ⚠️ Clinical Disclaimer

RadioCurate AI adalah **alat pendukung keputusan klinis** (decision-support) dan **bukan** sistem diagnosis/final prescription otomatis. Semua insight wajib diverifikasi oleh tenaga medis berlisensi sesuai protokol institusi.

---

## 👤 Author

**Lettu Kes dr. Muhammad Sobri Maulana, S.Kom, CEH, OSCP, OSCE**  
GitHub: [github.com/sobri3195](https://github.com/sobri3195)  
Email: [muhammadsobrimaulana31@gmail.com](mailto:muhammadsobrimaulana31@gmail.com)

---

## 🌐 Connect & Community

- Website: <https://muhammadsobrimaulana.netlify.app>
- Landing page: <https://muhammad-sobri-maulana-kvr6a.sevalla.page/>
- YouTube: <https://www.youtube.com/@muhammadsobrimaulana6013>
- Telegram: <https://t.me/winlin_exploit>
- TikTok: <https://www.tiktok.com/@dr.sobri>
- Grup WhatsApp: <https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl>
- Gumroad: <https://maulanasobri.gumroad.com/>
- Toko Online Sobri: <https://pegasus-shop.netlify.app>

---

## 💝 Donasi & Dukungan

Jika project ini bermanfaat, dukungan Anda sangat berarti:

- Lynk: <https://lynk.id/muhsobrimaulana>
- Trakteer: <https://trakteer.id/g9mkave5gauns962u07t>
- KaryaKarsa: <https://karyakarsa.com/muhammadsobrimaulana>
- Nyawer: <https://nyawer.co/MuhammadSobriMaulana>

---

## 📄 Status

Project ini adalah **prototype UI** untuk eksplorasi workflow radiotherapy intelligence. Siap dikembangkan ke tahap integrasi backend, keamanan data medis, dan validasi klinis institusional.
