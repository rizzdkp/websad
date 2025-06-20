// Menunggu sampai seluruh halaman HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {

    // DATA KONTEN: Di sini kamu bisa menyimpan semua data project
    const projectsData = [
        {
            title: "BioMech Finger Prosthesis",
            creators: "created by ira, carens, rizki, stanis",
            description: "Sebuah jari telunjuk prostesis buatan @MaximiliumXYZ_1218385 karena kecelakaan kerja yang dialaminya. Jari prostesis ini didesain khusus untuk dirinya yang kehilangan 50% telunjuk kiri. Desain jari ini tersedia secara open-source di printables.com",
            imageUrl: "images/finger4.jpg",
            detailUrl: "project-1-detail.html" 
        },
        {
            title: "Handypal",
            creators: "created by nasywa, indy, giza, alya",
            description: "Desain tangan prostetik buat teman-teman difabel, khususnya yang mengalami amputasi transradial (di bawah siku). Kita terinspirasi dari salah satu konten kreator TikTok, namanya @maidiazam.",
            imageUrl: "images/kelompok2-product.png",
            detailUrl: "project-2-detail.html"
        },
        {
            title: "Interchangeable Arm Prosthetic",
            creators: "created by talita, ray, josephine, iqbal",
            description: "Alat bantu yang dirancang untuk individu yang tidak memiliki tangan, baik karena kondisi bawaan lahir maupun akibat amputasi. Alat ini berfungsi untuk membantu mereka dalam memegang dan membawa berbagai jenis benda.",
            imageUrl: "images/kelompok3-product.jpg",
            detailUrl: "project-3-detail.html"
        },
        {
            title: "Tangan Adaptif",
            creators: "created by Zifa, Timo, Mora, Jordan",
            description: "Tangan ini terbuat dari material ringan namun kokoh seperti plastik PLA hasil cetakan 3D printing, sehingga nyaman digunakan dan mudah dirawat. Sistem mekaniknya memanfaatkan prinsip sederhana dari gerakan engsel dan pegas atau tali elastis untuk menciptakan gerakan genggam yang fungsional.",
            imageUrl: "images/TanganAdaptif.jpg",
            detailUrl: "project-4-detail.html"
        },
         {
            title: "FunGoDrop",
            creators: "created by  Sheren, Rizka, ayas, Kezia",
            description: "Media Terapi Motorik Halus Anak Lewat Permainan Edukatif",
            imageUrl: "images/fungoprot.jpg",
            detailUrl: "project-5-detail.html"
        },
        {
            title: "Livo (Live & Move)",
            creators: "created by nora, helvira, zahra, valen",
            description: "Kursi roda hasil modifikasi berdasarkan kebutuhan lansia berusia 80–85 tahun. Beliau sebelumnya menggunakan papan triplek beroda untuk mobilisasi di dalam rumah karena merasa kursi roda biasa terlalu besar dan tinggi.",
            imageUrl: "images/kelompok4-product.jpg",
            detailUrl: "project-6-detail.html"
        },
        {
            title: "Wheelcair Cup Holder",
            creators: "created by  Tubagus, Marcel, Faiz, Dhifan",
            description: "Latar belakang produk ini terbentuk karena bapak nya banyak menghabiskan waktu di kursi rodanya, sehingga kita mencoba membuat produk yang sederhana tapi bisa membantu dan bermanfaat",
            imageUrl: "images/Cupholder - Tubagus Rafly.png",
            detailUrl: "project-7-detail.html"
        },
    
        // ... (data lainnya)
    ];

    const projectGrid = document.getElementById('project-grid');

    if (projectGrid) {
        projectsData.forEach((project, index) => {
            // Bungkus luar (<a>) untuk link dan animasi AOS
            const cardLink = document.createElement('a');
            cardLink.className = 'project-card'; 
            cardLink.href = project.detailUrl;

            // ▼▼▼ PERUBAHAN LOGIKA ANIMASI DI SINI ▼▼▼
            // Menentukan tipe animasi berdasarkan posisi kartu (kiri/kanan)
            // Kartu di kolom kiri (urutan 0, 2, 4...) akan muncul dari kanan.
            // Kartu di kolom kanan (urutan 1, 3, 5...) akan muncul dari kiri.
            const animationType = (index % 2 === 0) ? 'fade-right' : 'fade-left';
            cardLink.setAttribute('data-aos', animationType);
            // ▲▲▲ AKHIR PERUBAHAN ▲▲▲

            // Bungkus dalam (<div>) untuk visual dan efek hover
            cardLink.innerHTML = `
                <div class="card-content-wrapper">
                    <img src="${project.imageUrl || 'https://via.placeholder.com/547x256/A8A6A6/000000?text=No+Image'}" alt="Gambar Produk ${project.title}" class="card-image">
                    <h3>${project.title}</h3>
                    <p class="creators">${project.creators}</p>
                    <p>${project.description}</p>
                </div>
            `;

            projectGrid.appendChild(cardLink);
        });
    }
});