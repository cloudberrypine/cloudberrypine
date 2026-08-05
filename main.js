const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

function updateNav() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 32);
}

updateNav();
window.addEventListener('scroll', updateNav, { passive: true });

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const open = navLinks.classList.toggle('open');
        nav.classList.toggle('menu-open', open);
        navToggle.setAttribute('aria-expanded', String(open));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            nav.classList.remove('menu-open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function createFireflies() {
    const container = document.getElementById('fireflies');
    if (!container || reducedMotion) return;

    const count = window.innerWidth < 700 ? 15 : 35;
    for (let index = 0; index < count; index += 1) {
        const firefly = document.createElement('div');
        const size = Math.random() * 4 + 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 8 + 6;
        const delay = Math.random() * -10;
        const dx = (Math.random() - 0.5) * 200;
        const dy = (Math.random() - 0.5) * 200;
        const hue = Math.random() > 0.7 ? '50, 90%, 70%' : '150, 70%, 65%';

        firefly.className = 'firefly';
        firefly.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: hsl(${hue});
            box-shadow: 0 0 ${size * 3}px hsl(${hue}), 0 0 ${size * 8}px hsla(${hue}, 0.3);
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
            --dx: ${dx}px;
            --dy: ${dy}px;
        `;
        container.appendChild(firefly);
    }
}

createFireflies();

const reveals = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((element) => element.classList.add('visible'));
} else {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -24px' });

    reveals.forEach((element) => observer.observe(element));
}

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');

document.querySelectorAll('[data-lightbox]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const image = trigger.querySelector('img');
        if (!lightbox || !lightboxImage || !image) return;
        lightboxImage.src = trigger.dataset.lightboxSrc || image.currentSrc || image.src;
        lightboxImage.alt = image.alt;
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    });
});

function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

if (lightbox) lightbox.addEventListener('click', closeLightbox);
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLightbox();
});
