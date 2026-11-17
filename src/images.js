// Semua gambar diletakkan di folder public/images/ (lihat DAFTAR-GAMBAR.md)
// Pemakaian: img('home/hero-1.jpg')  ->  ./images/home/hero-1.jpg
export const img = (path) => `${import.meta.env.BASE_URL}images/${path}`
