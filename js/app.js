        // Mobile menu toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Back to top button
        const backToTopBtn = document.getElementById('back-to-top');
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.remove('hidden');
            } else {
                backToTopBtn.classList.add('hidden');
            }
        });
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu if open
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Modo oscuro
        const toggleDarkBtn = document.getElementById('toggle-dark');
        const darkIcon = document.getElementById('dark-icon');
        let darkMode = false;
        toggleDarkBtn.addEventListener('click', () => {
            darkMode = !darkMode;
            // Body
            document.body.classList.toggle('bg-gray-900', darkMode);
            document.body.classList.toggle('text-white', darkMode);
            document.body.classList.toggle('bg-gray-50', !darkMode);

            // Navbar y footer
            document.querySelectorAll('nav, footer').forEach(el => {
                el.classList.toggle('bg-gray-900', darkMode);
                el.classList.toggle('bg-white', !darkMode);
                el.classList.toggle('text-white', darkMode);
            });

            // Secciones y tarjetas
            document.querySelectorAll('.bg-white').forEach(el => {
                el.classList.toggle('bg-gray-800', darkMode);
                el.classList.toggle('text-white', darkMode);
                el.classList.toggle('bg-white', !darkMode);
            });
            document.querySelectorAll('.bg-gray-50').forEach(el => {
                el.classList.toggle('bg-gray-900', darkMode);
                el.classList.toggle('text-white', darkMode);
                el.classList.toggle('bg-gray-50', !darkMode);
            });

            // Enlaces y textos
            document.querySelectorAll('a, p, h1, h2, h3, h4, h5, h6, span, li, label, input, textarea, select, .text-blue-900, .text-blue-600, .text-gray-700, .text-gray-600, .text-blue-200').forEach(el => {
                if (darkMode) {
                    el.classList.add('text-gray-200');
                    el.classList.remove('text-blue-900', 'text-blue-600', 'text-gray-700', 'text-gray-600', 'text-blue-200');
                } else {
                    el.classList.remove('text-gray-200');
                }
            });

            // Botones
            document.querySelectorAll('button, .bg-blue-600, .hover\:bg-blue-700').forEach(el => {
                if (darkMode) {
                    el.classList.add('bg-gray-700');
                    el.classList.remove('bg-blue-600', 'hover:bg-blue-700');
                } else {
                    el.classList.remove('bg-gray-700');
                    el.classList.add('bg-blue-600');
                }
            });

            // Cambia el ícono
            if (darkMode) {
                darkIcon.classList.remove('fa-moon');
                darkIcon.classList.add('fa-sun');
            } else {
                darkIcon.classList.remove('fa-sun');
                darkIcon.classList.add('fa-moon');
            }
        });
    // Animaciones fade-in al hacer scroll
    function revealOnScroll() {
        document.querySelectorAll('.fade-in').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                el.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('DOMContentLoaded', revealOnScroll);

    // Microinteracción copiar teléfono
    document.querySelectorAll('.text-blue-600.hover\:underline').forEach(el => {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            const text = el.textContent;
            navigator.clipboard.writeText(text);
            let feedback = document.createElement('span');
            feedback.className = 'copy-feedback visible';
            feedback.textContent = 'Copiado';
            el.parentElement.appendChild(feedback);
            setTimeout(() => feedback.remove(), 1200);
        });
    });