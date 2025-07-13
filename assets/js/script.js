document.addEventListener("DOMContentLoaded", function() {

    // --- Font Awesome and Typed.js Scripts ---
    // These scripts are loaded dynamically to keep the HTML clean.
    

    const typedScript = document.createElement('script');
    typedScript.src = 'https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js';
    document.head.appendChild(typedScript);
    
    typedScript.onload = () => {
        // --- Typing Animation (Home Page) ---
        const typedEl = document.querySelector('.typed-text');
        if (typedEl) {
            new Typed('.typed-text', {
                strings: ["Full Stack Developer", "Tech Enthusiast", "Problem Solver"],
                typeSpeed: 70,
                backSpeed: 50,
                loop: true
            });
        }
    };

    // --- Active Nav Link ---
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname.split("/").pop() || 'index.html';
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // --- Mobile Nav Toggle ---
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('fa-times'); // Toggles between hamburger and X icon
        });
    }

    // --- Scroll Animations ---
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
    
    // --- Back to Top Button ---
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Project Filtering ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Manage active button state
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.dataset.filter;

                projectCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

});