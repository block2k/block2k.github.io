/**
 * AYUBA FADDAH SOLID FOUNDATION Website Scripts
 * Minimal vanilla JavaScript for interactivity
 */

(function() {
    'use strict';

    // ============================================
    // Mobile Menu Toggle
    // ============================================
    
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('#nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            const isActive = navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active', isActive);
            mobileMenuToggle.setAttribute('aria-expanded', isActive);
        });
        
        // Close mobile menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ============================================
    // Smooth Scrolling for Navigation Links
    // ============================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') {
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const headerOffset = 80; // Account for sticky header
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // Header Scroll Effect
    // ============================================
    
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    if (header) {
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });
    }

    // ============================================
    // Contact Form Handling
    // ============================================
    
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation (HTML5 validation handles most of this, but double-check)
            if (!name || !email || !subject || !message) {
                showFormMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Log form data to console (for development/testing)
            // In production, you would send this to a backend service
            console.log('Contact Form Submission:', {
                name: name,
                email: email,
                subject: subject,
                message: message,
                timestamp: new Date().toISOString()
            });
            
            // Show success message
            showFormMessage(
                'Thank you for your message! We will get back to you at ' + email + ' as soon as possible.',
                'success'
            );
            
            // Reset form
            contactForm.reset();
            
            // Optional: In a real implementation, you would send the data to a backend:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ name, email, subject, message })
            // })
            // .then(response => response.json())
            // .then(data => {
            //     showFormMessage('Thank you! Your message has been sent.', 'success');
            //     contactForm.reset();
            // })
            // .catch(error => {
            //     showFormMessage('Sorry, there was an error sending your message. Please try again later.', 'error');
            // });
        });
    }
    
    /**
     * Display form message to user
     * @param {string} text - Message text to display
     * @param {string} type - Message type: 'success' or 'error'
     */
    function showFormMessage(text, type) {
        if (!formMessage) return;
        
        formMessage.textContent = text;
        formMessage.className = 'form-message ' + type;
        formMessage.setAttribute('role', 'alert');
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Auto-hide after 10 seconds (optional)
        setTimeout(function() {
            formMessage.className = 'form-message';
            formMessage.textContent = '';
        }, 10000);
    }

    // ============================================
    // Set Current Year in Footer
    // ============================================
    
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // ============================================
    // Impact Numbers Animation (Optional Enhancement)
    // ============================================
    
    /**
     * Animate numbers when they come into view
     * This is a placeholder - update the numbers when you have real statistics
     */
    function animateNumbers() {
        const impactNumbers = document.querySelectorAll('.impact-number');
        
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.getAttribute('data-target'));
                    animateValue(entry.target, 0, target, 2000);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        impactNumbers.forEach(number => {
            observer.observe(number);
        });
    }
    
    /**
     * Animate a number from start to end over duration
     * @param {HTMLElement} element - Element to animate
     * @param {number} start - Starting value
     * @param {number} end - Ending value
     * @param {number} duration - Duration in milliseconds
     */
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentValue = Math.floor(progress * (end - start) + start);
            element.textContent = currentValue.toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.textContent = end.toLocaleString();
            }
        };
        window.requestAnimationFrame(step);
    }
    
    // Initialize number animation if impact numbers exist
    if (document.querySelectorAll('.impact-number').length > 0) {
        animateNumbers();
    }

    // ============================================
    // Accessibility: Keyboard Navigation Enhancement
    // ============================================
    
    // Ensure all interactive elements are keyboard accessible
    document.addEventListener('keydown', function(e) {
        // Close mobile menu on Escape key
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                mobileMenuToggle.focus();
            }
        }
    });

    // ============================================
    // Console Message for Developers
    // ============================================
    
    console.log('%cAYUBA FADDAH SOLID FOUNDATION', 'color: #2563eb; font-size: 16px; font-weight: bold;');
    console.log('%cWebsite loaded successfully.', 'color: #059669; font-size: 12px;');
    console.log('For contact form submissions, check the console for logged data.');
    console.log('To integrate with a backend, update the form submission handler in script.js');

})();

