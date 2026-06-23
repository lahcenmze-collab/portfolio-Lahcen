/**
 * Portfolio Lahcen Mze Soilihi - Script Principal
 * Interactions, animations et contrôle du DOM
 * Generated: 2026-06-23
 */

// ===================================================
// 1. INITIALIZATION
// ===================================================

/**
 * Initialize Lucide icons on page load
 */
function initializeIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// ===================================================
// 2. NAVBAR STYLING ON SCROLL
// ===================================================

/**
 * Update navbar appearance based on scroll position
 * Adds glass-morphism effect when scrolled
 */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.style.background = 'rgba(2,2,2,0.85)';
            navbar.style.backdropFilter = 'blur(12px)';
            navbar.style.borderBottom = '1px solid rgba(38,38,38,0.5)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
            navbar.style.borderBottom = '1px solid transparent';
        }
    }, { passive: true });
}

// ===================================================
// 3. MOBILE MENU MANAGEMENT
// ===================================================

/**
 * Handle mobile menu interactions
 */
function initMobileMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const closeMenuBtn = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    if (!menuBtn || !mobileMenu) return;

    /**
     * Open mobile menu
     */
    function openMenu() {
        mobileMenu.classList.add('open');
        menuOverlay?.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        menuBtn.setAttribute('aria-expanded', 'true');
        mobileMenu.setAttribute('aria-hidden', 'false');
    }

    /**
     * Close mobile menu
     */
    function closeMenu() {
        mobileMenu.classList.remove('open');
        menuOverlay?.classList.add('hidden');
        document.body.style.overflow = '';
        menuBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
    }

    // Event listeners
    menuBtn.addEventListener('click', openMenu);
    closeMenuBtn?.addEventListener('click', closeMenu);
    menuOverlay?.addEventListener('click', closeMenu);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
            closeMenu();
        }
    });

    // Close on link click
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

// ===================================================
// 4. INTERSECTION OBSERVER - ANIMATIONS
// ===================================================

/**
 * Animate elements when they enter viewport
 */
function initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('observe-hidden');
                entry.target.classList.add('observe-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('[data-observe]').forEach(el => {
        observer.observe(el);
    });
}

// ===================================================
// 5. ACTIVE NAVIGATION LINK TRACKING
// ===================================================

/**
 * Update active navigation link based on scroll position
 */
function initActiveNavTracking() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length === 0 || navLinks.length === 0) return;

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 200) {
                current = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }, { passive: true });
}

// ===================================================
// 6. CONTACT FORM HANDLING
// ===================================================

/**
 * Handle contact form submission
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const toast = document.getElementById('toast');

    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Show success toast
        if (toast) {
            toast.classList.add('show');
            contactForm.reset();

            // Auto-hide after 3 seconds
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
    });
}

// ===================================================
// 7. SMOOTH SCROLLING
// ===================================================

/**
 * Enable smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===================================================
// 8. SKILL BARS ANIMATION
// ===================================================

/**
 * Animate skill bars when skills section enters viewport
 */
function initSkillBars() {
    const skillSection = document.getElementById('skills');
    if (!skillSection) return;

    let skillAnimated = false;

    const skillObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillAnimated) {
                skillAnimated = true;

                // Stagger animation for each skill bar
                document.querySelectorAll('.skill-bar-fill').forEach((bar, index) => {
                    bar.style.animationDelay = `${index * 100}ms`;
                });
            }
        });
    }, {
        threshold: 0.2
    });

    skillObs.observe(skillSection);
}

// ===================================================
// 9. CURSOR GLOW EFFECT (DESKTOP)
// ===================================================

/**
 * Create custom cursor glow effect on desktop devices
 */
function initCursorGlow() {
    // Only on desktop/tablet with mouse support
    if (!window.matchMedia('(min-width: 768px)').matches) return;

    const glow = document.createElement('div');
    glow.style.cssText = `
        position: fixed;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(56,189,248,0.04), transparent 70%);
        pointer-events: none;
        z-index: 30;
        transform: translate(-50%, -50%);
    `;

    document.body.appendChild(glow);

    // Update glow position on mouse move
    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    }, { passive: true });
}

// ===================================================
// 10. MAIN INITIALIZATION
// ===================================================

/**
 * Initialize all components when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    initializeIcons();
    initNavbarScroll();
    initMobileMenu();
    initIntersectionObserver();
    initActiveNavTracking();
    initContactForm();
    initSmoothScroll();
    initSkillBars();
    initCursorGlow();

    // Log initialization complete (development)
    if (process.env.NODE_ENV !== 'production') {
        console.log('✓ Portfolio initialized successfully');
    }
});

// ===================================================
// 11. PERFORMANCE MONITORING (Optional)
// ===================================================

/**
 * Report Web Vitals for performance monitoring
 * This is optional and can be removed if not needed
 */
if ('PerformanceObserver' in window) {
    try {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                // Log or send metrics to analytics
                console.debug('Performance:', entry.name, entry.duration);
            }
        });
        observer.observe({ entryTypes: ['navigation', 'resource'] });
    } catch (e) {
        // Silently fail if not supported
    }
}
