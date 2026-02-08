// ============================================
// SMOOTH SCROLL NAVIGATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only prevent default for hash links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        const toggler = document.querySelector('.navbar-toggler');
                        toggler.click();
                    }

                    // Scroll to element
                    targetElement.scrollIntoView({ behavior: 'smooth' });

                    // Update active link
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-custom');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            // Optionally unobserve after animation
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all fade-in-scroll elements
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in-scroll');
    fadeElements.forEach(element => {
        element.style.animationPlayState = 'paused';
        observer.observe(element);
    });
});

// ============================================
// SMOOTH SCROLL BEHAVIOR FOR CTA BUTTONS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('a[href^="#"]');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's a navbar link (already handled)
            if (!this.closest('.navbar-nav')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// ============================================
// MOBILE MENU CLOSE ON LINK CLICK
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                const toggler = document.querySelector('.navbar-toggler');
                toggler.click();
            }
        });
    });
});

// ============================================
// COUNTER ANIMATION (Optional Enhancement)
// ============================================
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ============================================
// HOVER EFFECTS FOR CARDS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.feature-card, .skill-card, .project-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});

// ============================================
// ANIMATE ELEMENTS ON LOAD
// ============================================
window.addEventListener('load', function() {
    // Trigger animations for hero section
    const fadeElements = document.querySelectorAll('.fade-in');
    const slideElements = document.querySelectorAll('[class*="slide-up"]');

    fadeElements.forEach(el => {
        el.style.opacity = '1';
    });

    slideElements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });
});

// ============================================
// PROGRESSIVE ENHANCEMENT
// ============================================
// Ensure CSS animations work even if JavaScript fails
document.documentElement.style.scrollBehavior = 'smooth';

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Ensure all interactive elements are keyboard accessible
    const interactiveElements = document.querySelectorAll('a, button');

    interactiveElements.forEach(element => {
        // Ensure they have proper focus states
        element.style.outline = 'none';
    });

    // Add keyboard navigation for social icons
    const socialLinks = document.querySelectorAll('.social-icons a, .social-icons-contact a');

    socialLinks.forEach(link => {
        link.setAttribute('tabindex', '0');
    });
});

// ============================================
// FORM VALIDATION (if needed in future)
// ============================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Lazy load images if needed
if ('IntersectionObserver' in window) {
    const imageElements = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    imageElements.forEach(img => imageObserver.observe(img));
}

// ============================================
// SCROLL TO TOP FUNCTIONALITY
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Create scroll to top button (optional)
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollTopBtn);

    // Add styles for scroll to top button
    const style = document.createElement('style');
    style.textContent = `
        .scroll-top-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: var(--primary-color);
            color: white;
            border: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 1.2rem;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            box-shadow: var(--shadow-lg);
            transition: all 0.3s ease;
            z-index: 1000;
        }

        .scroll-top-btn:hover {
            background-color: var(--primary-dark);
            transform: translateY(-5px);
        }

        .scroll-top-btn.show {
            display: flex;
        }
    `;
    document.head.appendChild(style);

    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    // Scroll to top on click
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ============================================
// PRELOAD IMAGES FOR BETTER PERFORMANCE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Preload critical images if any
    const images = [
        // Add any critical image URLs here
    ];

    images.forEach(imageUrl => {
        const img = new Image();
        img.src = imageUrl;
    });
});