document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const siteNav = document.querySelector('.site-nav');
    const yearSpan = document.getElementById('year');

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    if (navToggle && siteNav) {
        navToggle.addEventListener('click', () => {
            const isOpen = siteNav.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        siteNav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                siteNav.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
});

