
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

hamburger.onclick = () => {
    navbarNav.classList.toggle('active');
};


const searchForm = document.querySelector('.search-form');
const searchBoxInput = document.querySelector('#search-box');

document.querySelector('#search').addEventListener('click', (e) => {
    e.preventDefault();
    searchForm.classList.toggle('active');
    if (searchForm.classList.contains('active')) {
        searchBoxInput.focus();
    }
});

// Tutup navbar-nav kalau klik di luar area menu
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

const searchMap = {
    'home': '#home',
    'beranda': '#home',
    'tentang kami': '#about',
    'tentang': '#about',
    'about': '#about',
    'menu': '#menu',
    'video': '#video',
    'dokumentasi': '#video',
    'berita': '#news',
    'news': '#news',
    'jadwal band': '#jadwal',
    'jadwal': '#jadwal',
    'band': '#jadwal',
    'kontak': '#contact',
    'contact': '#contact'
};

function goToSearchResult(keyword) {
    const query = keyword.trim().toLowerCase();
    if (!query) return;

    const targetId = searchMap[query];
    if (!targetId) return;

    const target = document.querySelector(targetId);
    if (!target) return;

    const offset = 90;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });

    searchForm.classList.remove('active');
    searchBoxInput.value = '';
}

searchBoxInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        goToSearchResult(searchBoxInput.value);
    }
});


document.addEventListener("DOMContentLoaded", () => {
    renderNews();
    renderJadwal();
    feather.replace();
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;

        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const offset = 90;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            navbarNav.classList.remove('active');
            searchForm.classList.remove('active');
        }
    });
});

const galleryImages = document.querySelectorAll('.menu-gallery img');

if (galleryImages.length > 0) {
    const overlay = document.createElement('div');
    overlay.classList.add('lightbox-overlay');
    overlay.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <img src="" alt="Preview">
    `;
    document.body.appendChild(overlay);

    const lightboxImg = overlay.querySelector('img');
    const lightboxClose = overlay.querySelector('.lightbox-close');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeLightbox() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    lightboxClose.addEventListener('click', closeLightbox);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });
}

const videoThumbs = document.querySelectorAll('.video-thumb');

if (videoThumbs.length > 0) {
    const videoOverlay = document.createElement('div');
    videoOverlay.classList.add('video-modal-overlay');
    videoOverlay.innerHTML = `
        <span class="video-modal-close">&times;</span>
        <video controls></video>
    `;
    document.body.appendChild(videoOverlay);

    const modalVideo = videoOverlay.querySelector('video');
    const videoModalClose = videoOverlay.querySelector('.video-modal-close');

    videoThumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const src = thumb.getAttribute('data-video');
            modalVideo.src = src;
            videoOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            modalVideo.play();
        });
    });

    function closeVideoModal() {
        videoOverlay.classList.remove('active');
        document.body.style.overflow = '';
        modalVideo.pause();
        modalVideo.currentTime = 0;
    }

    videoModalClose.addEventListener('click', closeVideoModal);

    videoOverlay.addEventListener('click', (e) => {
        if (e.target === videoOverlay) closeVideoModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeVideoModal();
    });
}

const revealElements = document.querySelectorAll('.reveal');

if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => revealObserver.observe(el));
}