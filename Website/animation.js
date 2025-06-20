// File: animation.js

document.addEventListener('DOMContentLoaded', function() {

    // 1. Pilih semua elemen yang ingin diberi efek animasi saat scroll
    // Anda bisa menambahkan selector lain di sini, dipisahkan koma
    const elementsToReveal = document.querySelectorAll('.about-text, .about-image, .project-card, .team-card, #mission .container, .project-hero-text, .project-hero-image, .project-story-text, .project-media-column');

    // 2. Opsi untuk Intersection Observer
    // threshold: 0.1 berarti callback akan dijalankan saat 10% dari elemen terlihat
    const observerOptions = {
        root: null, // null berarti viewport browser
        threshold: 0.1
    };

    // 3. Callback function yang akan dijalankan setiap kali elemen target intersect
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Cek apakah elemen masuk ke dalam viewport
            if (entry.isIntersecting) {
                // Tambahkan class 'visible' ke elemen tersebut
                entry.target.classList.add('visible');

                // Hentikan pengamatan pada elemen ini setelah animasi berjalan sekali
                // agar animasi tidak berulang setiap kali scroll
                observer.unobserve(entry.target);
            }
        });
    };

    // 4. Buat observer baru
    const observer = new IntersectionObserver(revealCallback, observerOptions);

    // 5. Terapkan class awal dan mulai amati setiap elemen
    elementsToReveal.forEach(element => {
        // Tambahkan class .reveal-on-scroll ke semua elemen target
        element.classList.add('reveal-on-scroll');
        // Mulai amati elemen tersebut
        observer.observe(element);
    });

});