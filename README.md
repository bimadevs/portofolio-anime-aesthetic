# 🌸 Anime Aesthetic Portfolio Website

![Next.js](https://img.shields.io/badge/Next.js-13.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.0-0055FF?style=for-the-badge&logo=framer)

Website portofolio dengan tema anime/manga yang menggabungkan estetika visual Jepang dengan teknologi web modern. Proyek ini dibangun menggunakan Next.js, TypeScript, TailwindCSS, dan Framer Motion untuk menciptakan pengalaman yang imersif dan interaktif.

![Preview Website](https://images.unsplash.com/photo-1578125042745-1eabe0cb3b0d?q=80&w=1920&auto=format&fit=crop)

## ✨ Fitur Utama

- 🎨 **Desain Anime/Manga** - Estetika visual yang terinspirasi dari anime dan manga Jepang
- 🇯🇵 **Teks Bilingual** - Kombinasi teks Jepang dan Indonesia untuk pengalaman yang otentik
- 🌸 **Animasi Sakura** - Animasi kelopak bunga sakura yang jatuh di hero section
- 📝 **Dialog Box Visual Novel** - Gaya dialog box seperti di visual novel Jepang
- ✨ **Efek Hover Anime** - Efek hover yang terinspirasi dari anime pada tombol dan kartu
- 🎭 **Manga Speed Lines** - Efek speed lines bergaya manga di beberapa bagian
- 📱 **Responsif** - Tampilan yang optimal di semua ukuran perangkat

## 🚀 Teknologi

- **Next.js** - Framework React untuk aplikasi web
- **TypeScript** - Superset JavaScript dengan tipe statis
- **TailwindCSS** - Framework CSS utility-first
- **Framer Motion** - Library untuk animasi
- **Unsplash API** - Sumber gambar berkualitas tinggi

## 📋 Struktur Komponen

Website ini terdiri dari beberapa komponen utama:

1. **Navbar** - Navigasi utama website
2. **Hero** - Section pembuka dengan animasi sakura dan efek parallax
3. **About** - Informasi tentang developer dengan gaya visual novel
4. **Projects** - Showcase proyek dengan kartu bergaya anime
5. **Skills** - Visualisasi skill dengan animasi particle
6. **Contact** - Formulir kontak dengan speech bubble bergaya manga
7. **Footer** - Footer dengan elemen dekoratif anime

## 🛠️ Instalasi dan Penggunaan

### Prasyarat

- Node.js (versi 18.0 atau lebih baru)
- npm atau yarn

### Langkah Instalasi

1. Clone repositori ini:
   ```bash
   git clone https://github.com/bimadevs/portofolio-anime-aesthetic.git
   cd portofolio-anime-aesthetic
   ```

2. Install dependensi:
   ```bash
   npm install
   # atau
   yarn install
   ```

3. Jalankan server pengembangan:
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 📝 Kustomisasi

### Mengubah Gambar

Semua gambar diambil dari Unsplash dan dikonfigurasi di file `src/app/lib/images.ts`. Anda dapat mengubah URL gambar sesuai kebutuhan.

```typescript
// src/app/lib/images.ts
export const images = {
  heroBg: "URL_GAMBAR_ANDA",
  characterPortrait: "URL_GAMBAR_ANDA",
  // ...
};
```

### Mengubah Konten

Konten teks dapat diubah langsung di file komponen masing-masing di direktori `src/app/components/`.

### Menambahkan Proyek

Untuk menambahkan proyek baru, edit array `projects` di file `src/app/components/Projects.tsx`:

```typescript
const projects = [
  {
    id: 5, // Tambahkan ID baru
    title: "新しいプロジェクト",
    subtitle: "New Project",
    description: "Deskripsi proyek baru Anda",
    image: images.newProject, // Tambahkan gambar di images.ts
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  // ...proyek lainnya
];
```

## 📱 Responsivitas

Website ini dirancang untuk responsif di berbagai ukuran layar:
- **Mobile** - Tampilan optimal untuk perangkat dengan lebar < 640px
- **Tablet** - Tampilan optimal untuk perangkat dengan lebar 640px - 1024px
- **Desktop** - Tampilan optimal untuk perangkat dengan lebar > 1024px

## 🌐 Deployment

### Deploy ke Vercel

Cara termudah untuk men-deploy aplikasi Next.js adalah menggunakan [Vercel Platform](https://vercel.com/new).

1. Push kode ke repositori GitHub Anda
2. Import proyek di Vercel
3. Vercel akan otomatis mendeteksi Next.js dan mengonfigurasi build settings

### Deploy ke Hosting Lain

Untuk men-deploy ke hosting lain, build aplikasi terlebih dahulu:

```bash
npm run build
# atau
yarn build
```

Kemudian deploy folder `.next` sesuai dengan dokumentasi hosting Anda.

## 🤝 Kontribusi

Kontribusi selalu diterima! Jika Anda ingin berkontribusi:

1. Fork repositori
2. Buat branch fitur (`git checkout -b feature/amazing-feature`)
3. Commit perubahan Anda (`git commit -m 'Add some amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buka Pull Request

## 📄 Lisensi

Proyek ini dilisensikan di bawah lisensi MIT - lihat file [LICENSE](LICENSE) untuk detail.

## 🙏 Pengakuan

- Gambar dari [Unsplash](https://unsplash.com)
- Inspirasi desain dari berbagai anime dan manga
- Font dan ikon dari berbagai sumber open-source

---

Dibuat dengan 💜 dan teknologi modern
