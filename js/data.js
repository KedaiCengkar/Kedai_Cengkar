// =======================================================
// DATA BERITA & JADWAL BAND
// Edit isi array di bawah ini untuk mengubah konten.
// TIDAK perlu edit file HTML.
// =======================================================

// Setiap berita: date, title, text, linkText, linkHref
const newsData = [
    {
        date: "1 Jul - 30 Sep 2026",
        title: "Promo Diskon 10% Spesial!",
        text: "Nikmati diskon 10% untuk semua menu di Kedai Cengkar. Promo berlaku dari 1 Juli hingga 30 September 2026, jangan sampai kelewatan!",
        linkText: "Lihat Menu",
        linkHref: "#menu"
    },
    {
        date: "18 Agt 2026",
        title: "Live Akustik Setiap malam sabtu,minggu,senin",
        text: "Nikmati suasana ngopi ditemani alunan musik akustik dari musisi lokal setiap malam sabtu,minggu,senin",
        linkText: "Lihat Jadwal",
        linkHref: "#jadwal"
    },
];

// Setiap jadwal band: day, date, band, genre, time
const jadwalData = [
    {
        day: "Jumat",
        date: "21 Agt",
        band: "Ghani Arul",
        genre: "Akustik · Pop & Folk",
        time: "16.00 - 21.00"
    },
    {
        day: "Sabtu",
        date: "22 Agt",
        band: "Nalar/ Do It Project",
        genre: "Akustik · Pop & Folk",
        time: "16.00 - 21.00"
    },
    {
        day: "Minggu",
        date: "23 Agt",
        band: "Nalar/ Do It Project",
        genre: "Akustik · Pop & Folk",
        time: "16.00 - 21.00"
    }
    // Mau nambah jadwal? Tinggal copy blok { ... } di atas,
    // tempel di bawah ini (jangan lupa koma), lalu ganti isinya.
];