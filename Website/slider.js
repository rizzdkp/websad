console.log("File slider.js berhasil terhubung dan berjalan!");

// Sisa kodemu ada di bawah...
document.addEventListener('DOMContentLoaded', function() {
    // ...
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider .slide');
    const nextBtn = document.querySelector('.slider-btn.next');
    const prevBtn = document.querySelector('.slider-btn.prev');

    // Cek apakah elemen slider ada di halaman ini
    if (slides.length > 0 && nextBtn && prevBtn) {
        let currentSlide = 0;

        function showSlide(n) {
            // Sembunyikan semua slide
            slides.forEach(slide => slide.classList.remove('active'));
            // Tampilkan slide yang dipilih
            slides[n].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        // Event listeners untuk tombol
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Tampilkan slide pertama saat halaman dimuat
        showSlide(currentSlide);
    }
});