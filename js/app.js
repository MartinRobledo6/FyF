document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Modo Oscuro ---
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }

    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        if (html.classList.contains('dark')) {
            localStorage.theme = 'dark';
        } else {
            localStorage.theme = 'light';
        }
    });

    // --- 2. Menú Móvil ---
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // --- 3. Lógica del Formulario a WhatsApp ---
    const form = document.getElementById('whatsapp-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const servicio = document.getElementById('servicio').value;
        // Capturamos el mensaje extra
        const consulta = document.getElementById('mensaje').value;
        
        if (!nombre || !telefono) {
            alert('Por favor, completa tu nombre y teléfono para poder contactarte.');
            return;
        }

        // Construimos el mensaje para WhatsApp
        let text = `Hola FyF, mi nombre es *${nombre}*.\n`;
        text += `Me interesa saber más sobre: *${servicio}*.\n`;
        text += `Mi teléfono es: ${telefono}.\n`;
        
        if (consulta) {
            text += `Consulta: ${consulta}`;
        }

        const url = `https://wa.me/5493564628562?text=${encodeURIComponent(text)}`;
        
        window.open(url, '_blank');
    });

    // --- 4. Efecto Scroll Navbar ---
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.classList.add('shadow-md');
        } else {
            nav.classList.remove('shadow-md');
        }
    });

    // --- 5. Botón Volver Arriba ---
    const backBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backBtn.classList.remove('opacity-0', 'invisible');
        } else {
            backBtn.classList.add('opacity-0', 'invisible');
        }
    });

    backBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
