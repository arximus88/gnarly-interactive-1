// Interactive functionality for Gnarly Brands page
document.addEventListener('DOMContentLoaded', function() {
    
    // Contact button interaction
    const contactButton = document.querySelector('.contact-button');
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            // Add click animation or contact form functionality
            console.log('Contact button clicked');
            // You can add contact form modal or redirect functionality here
        });
    }

    // Logo Wheel - Horizontal Scrolling System
    const logoWheel = document.querySelector('.logo-wheel');
    const logoWheelContainer = document.querySelector('.logo-wheel-container');
    
    if (logoWheel && logoWheelContainer) {
        /*
         * SMART LOGO WHEEL SYSTEM:
         * - Automatically duplicates logos based on CSS variables
         * - No manual HTML duplication needed
         * - Calculates positioning dynamically
         */
        
        // Get CSS variables for wheel configuration
        const rootStyles = getComputedStyle(document.documentElement);
        const logoCount = parseInt(rootStyles.getPropertyValue('--wheel-logo-count')) || 5;
        const repetitions = parseInt(rootStyles.getPropertyValue('--wheel-repetitions')) || 3;
        
        // Get original logos
        const originalLogos = Array.from(logoWheel.querySelectorAll('.logo-item'));
        console.log(`Found ${originalLogos.length} unique logos, will create ${repetitions} repetitions for seamless loop`);
        
        // Create repeated logo sets for seamless animation
        // We need enough repetitions to ensure smooth looping
        for (let rep = 1; rep < repetitions; rep++) {
            originalLogos.forEach((logo, index) => {
                const clone = logo.cloneNode(true);
                // Keep data attributes for interaction
                clone.dataset.repetition = rep;
                clone.dataset.originalIndex = index;
                logoWheel.appendChild(clone);
            });
        }
        
        // Set the total width for seamless animation
        const logoWidth = parseInt(rootStyles.getPropertyValue('--wheel-logo-width')) || 80;
        const logoSpacing = parseInt(rootStyles.getPropertyValue('--wheel-logo-spacing')) || 120;
        const totalWidth = (logoWidth + logoSpacing) * logoCount * repetitions;
        logoWheel.style.width = `${totalWidth}px`;
        
        // Add click functionality to all logos (original + cloned)
        const allLogoItems = document.querySelectorAll('.logo-item');
        allLogoItems.forEach((item, index) => {
            item.addEventListener('click', function() {
                const logoName = this.dataset.logo;
                const repetition = this.dataset.repetition || 0;
                console.log(`Clicked on ${logoName} logo (repetition ${repetition}, position ${index})`);
            });
        });
        
        // Performance monitoring
        if (window.performance && window.performance.mark) {
            window.performance.mark('logo-wheel-initialized');
        }
        
        console.log(`Logo wheel created: ${logoCount} unique logos × ${repetitions} repetitions = ${allLogoItems.length} total`);
        console.log(`Total wheel width: ${totalWidth}px for seamless scrolling`);
    }

    // Header animations
    const header = document.querySelector('.header');
    if (header) {
        // Add scroll-based header effects if needed
        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;
            // Add scroll effects here if the page becomes scrollable
        });
    }

    // Glass video and fallback handling
    const glassVideo = document.querySelector('.glass-video');
    const glassImage = document.querySelector('.glass-image');
    
    if (glassVideo) {
        // Handle video load and error states
        glassVideo.addEventListener('loadeddata', function() {
            console.log('Glass video loaded successfully');
            if (glassImage) {
                glassImage.style.opacity = '0.3'; // Keep some overlay effect
            }
        });
        
        glassVideo.addEventListener('error', function() {
            console.log('Glass video failed to load, using image fallback');
            if (glassImage) {
                glassImage.style.opacity = '1';
                glassImage.style.backgroundImage = 'url("glass.png")';
            }
        });
        
        // Ensure video plays
        glassVideo.play().catch(e => {
            console.log('Video autoplay prevented:', e);
        });
    }
    
    // Subtle parallax effect for glass media
    if (glassImage) {
        window.addEventListener('mousemove', function(e) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            // Very subtle parallax effect
            const translateX = (x - 0.5) * 5;
            const translateY = (y - 0.5) * 5;
            
            const glassMedia = document.querySelector('.glass-media');
            if (glassMedia) {
                glassMedia.style.transform = `translate(${translateX}px, ${translateY}px)`;
                glassMedia.style.transition = 'transform 0.2s ease-out';
            }
        });
    }

    // Typography animation for hero text
    const heading = document.querySelector('.heading');
    if (heading) {
        // Add text reveal animation on load
        heading.style.opacity = '0';
        heading.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heading.style.opacity = '1';
            heading.style.transform = 'translateY(0)';
            heading.style.transition = 'all 0.8s ease-out';
        }, 300);
    }

    // Logotype animation
    const logotype = document.querySelector('.logotype');
    if (logotype) {
        logotype.style.opacity = '0';
        logotype.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            logotype.style.opacity = '1';
            logotype.style.transform = 'translateY(0)';
            logotype.style.transition = 'all 0.6s ease-out';
        }, 100);
    }

    // Performance optimization for animations
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Disable animations for users who prefer reduced motion
        const style = document.createElement('style');
        style.textContent = `
            .logo-wheel { animation: none !important; }
            * { transition: none !important; }
        `;
        document.head.appendChild(style);
    }
    
    console.log('Gnarly Brands interactive page loaded successfully');
    console.log('Features: 3D logo wheel, glass video background, smooth animations');
});