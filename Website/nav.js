document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mainNav = document.getElementById('main-nav');

    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener('click', () => {
            // Toggle class 'active' pada navigasi untuk memunculkannya
            mainNav.classList.toggle('active');
            // Toggle class 'active' pada tombol untuk animasi X
            hamburgerBtn.classList.toggle('active');
        });
    }
});