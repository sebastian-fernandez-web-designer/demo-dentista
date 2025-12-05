    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        const letters = preloader.querySelectorAll('span');
        const body = document.body;

        // Añadimos clase para bloquear scroll
        body.classList.add('loading');

        const tl = gsap.timeline({
            onComplete: () => {
                preloader.style.display = 'none';
                body.classList.remove('loading');
            }
        });

        // 1. Entrada: Las letras suben desde abajo con elegancia
        tl.fromTo(letters, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.05, // Efecto ola rápido
            duration: 0.8,
            ease: "power4.out" // Easing suave y moderno
        });

        // 2. Cambio de color: De blanco a Turquesa (Branding)
        tl.to(letters, {
            color: getComputedStyle(document.documentElement).getPropertyValue('--dental-teal').trim() || '#00b4d8',
            stagger: 0.05,
            duration: 0.4,
            ease: "power2.inOut"
        }, "-=0.4"); // Empieza un poco antes de que terminen de subir

        // 3. Pausa breve para leer la marca
        tl.to({}, { duration: 0.3 });

        // 4. Salida: Se desvanecen hacia arriba limpiamente (sin glitch agresivo)
        tl.to(letters, {
            y: -50,
            opacity: 0,
            stagger: 0.03,
            duration: 0.6,
            ease: "back.in(1.7)"
        });

        // 5. Telón de fondo: Se abre verticalmente o desaparece suave
        tl.to(preloader, {
            yPercent: -100, // Desliza hacia arriba como un telón
            duration: 0.8,
            ease: "power2.inOut"
        }, "-=0.2");

        // 6. Animación de entrada de la web (Hero y Navbar)
        // Esto conecta suavemente el preloader con tu web
        tl.from(".hero-section", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.5"); 
    });