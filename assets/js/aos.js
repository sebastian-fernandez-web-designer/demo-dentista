AOS.init({ 
    once: true, 
    offset: 50,
    duration: 800 
});

// 1. LÓGICA NAVBAR AL SCROLL
const navbar = document.getElementById('mainNavbar');
const topBar = document.querySelector('.top-bar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Navbar visible/invisible
    if (currentScroll > 70) {
        navbar.classList.add('navbar-visible');
    } else {
        navbar.classList.remove('navbar-visible');
    }

    // Top-bar oculta al bajar, aparece al subir
    if (currentScroll > lastScroll && currentScroll > 50) {
        topBar.style.transform = 'translateY(-100%)';
    } else {
        topBar.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

// 2. LÓGICA DARK MODE
const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector('i');
const html = document.documentElement;

// Cargar preferencia guardada
if (localStorage.getItem('theme') === 'dark') {
    html.setAttribute('data-theme', 'dark');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    if (html.getAttribute('data-theme') === 'light' || !html.hasAttribute('data-theme')) {
        html.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'light');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});
