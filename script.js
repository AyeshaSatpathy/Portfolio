document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    const navLinks = document.querySelectorAll('.main-header nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    // CSS handles smooth scroll
                }
            }
        });
    });

    // --- Cursor Logic ---
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    function updateCursor(e) {
        const { clientX: x, clientY: y } = e;

        cursorDot.style.left = `${x}px`;
        cursorDot.style.top = `${y}px`;

        setTimeout(() => {
            cursorOutline.style.left = `${x}px`;
            cursorOutline.style.top = `${y}px`;
        }, 50);
    }

    document.addEventListener('mousemove', updateCursor);

    document.addEventListener('mousedown', () => {
        cursorDot.classList.add('active');
        cursorOutline.classList.add('active');
    });

    document.addEventListener('mouseup', () => {
        cursorDot.classList.remove('active');
        cursorOutline.classList.remove('active');
    });

    document.addEventListener('mouseleave', () => {
        cursorDot.style.opacity = '0';
        cursorOutline.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursorDot.style.opacity = '1';
        cursorOutline.style.opacity = '1';
    });
});
