// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bmi-form');
    const resultBMI = document.getElementById('result-bmi');
    const resultDesc = document.getElementById('result-description');
    const kethasil = document.getElementById('hasilnyaini');
    const artikelbmi = document.getElementById('artikel-bmi');
    const penyakitbmi = document.getElementById('penyakit');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Ambil nilai dari input
        const bb = parseFloat(document.getElementById('input-bb').value); // Berat badan (kg)
        const tb = parseFloat(document.getElementById('input-tb').value) / 100; // Tinggi badan (m)
        const usia = parseInt(document.getElementById('input-usia').value); // Usia
        const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked'); // Jenis kelamin

        // Validasi input
        if (!jenisKelamin || isNaN(bb) || isNaN(tb) || isNaN(usia)) {
            alert('Silakan lengkapi semua input dengan benar.');
            return;
        }

        // Hitung BMI
        const bmi = bb / (tb * tb);

        // Tentukan kategori BMI
        let keterangan = '';
        let kethasilnya = '';
        let artikelhasil = '';
        let penyakithasil = '';

        if (bmi <= 18.5) {
            keterangan = 'Kekurangan berat badan';
            kethasilnya = 'Kurang dari 18,5';
            artikelhasil = 'Kekurangan berat badan. Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.';
            penyakithasil = 'Infertilitas, Anemia, Osteoporosis, Sistem Imun Lemah';
        } else if (bmi <= 24.9) {
            keterangan = 'Normal ideal';
            kethasilnya = 'Diantara 18,5 dan 24,9';
            artikelhasil = 'berat badan yang normal.Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.';
            penyakithasil = 'Tidak ada';
        } else if (bmi <= 29.9) {
            keterangan = 'Kelebihan berat badan';
            kethasilnya = 'Diantara 25 dan 30';
            artikelhasil = 'overweight atau berat badan berlebih.Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.';
            penyakithasil = 'Diabetes, Hipertensi, Sakit Jantung, Osteoarthritis';
        } else {
            keterangan = 'Kegemukan (Obesitas)';
            kethasilnya = 'Lebih dari 30';
            artikelhasil = 'overweight atau berat badan berlebih.Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.';
            penyakithasil = 'Diabetes, Hipertensi, Sakit Jantung, Osteoarthritis';
        }

        // Tampilkan hasil BMI dan deskripsi
        resultBMI.textContent = bmi.toFixed(1); // Tampilkan BMI dengan satu angka di belakang koma
        resultDesc.textContent = `Anda memiliki ${keterangan}.`;
        resultDesc.style.fontWeight = 'bold'; // Menambahkan style tebal pada deskripsi hasil
        kethasil.textContent = `Hasil BMI ${kethasilnya}.`;
        artikelbmi.textContent = `Anda berada dalam kategori ${artikelhasil}.`;
        penyakitbmi.textContent = penyakithasil
    });

    // Reset form
    const resetButton = document.querySelector('.reset');
    resetButton.addEventListener('click', function(event) {
        event.preventDefault();
        form.reset();
        resultBMI.textContent = 'Tidak ada data'; // Mengosongkan hasil BMI
        resultDesc.textContent = ''; // Mengosongkan deskripsi hasil
        resultDesc.style.fontWeight = 'normal'; // Mengembalikan style deskripsi ke normal
    });
});
