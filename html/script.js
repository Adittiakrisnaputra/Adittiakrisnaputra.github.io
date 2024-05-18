const form = document.getElementById('guestbook-form');
const namaInput = document.getElementById('nama');
const emailInput = document.getElementById('email');
const pesanInput = document.getElementById('pesan');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = namaInput.value;
    const email = emailInput.value;
    const pesan = pesanInput.value;

    const body = `
        Nama: ${nama}
        Email: ${email}
        Pesan: ${pesan}
    `;

    // Ganti dengan email tujuan Anda
    const tujuanEmail = "adittiakrisnaputra@gmail.com";

    // Ganti dengan subject email
    const subject = "Pesan Buku Tamu";

    // Kirim email menggunakan API Email (misalnya SendGrid, Mailgun)
    // Ganti dengan API key dan kode program email Anda
    sendEmail(tujuanEmail, subject, body);

    alert("Pesan Anda telah terkirim!");

    // Kosongkan formulir
    namaInput.value = "";
    emailInput.value = "";
    pesanInput.value = "";
});

// Fungsi untuk mengirim email (ganti dengan kode API email Anda)
function sendEmail(tujuanEmail, subject, body) {
    // Implementasikan kode API email Anda di sini
}
