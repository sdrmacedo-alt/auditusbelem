// Mobile Menu Functionality
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
}

function closeMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
}

// Theme Toggle Functionality
function toggleTheme() {
    const body = document.body;
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    
    body.classList.toggle('dark-theme');
    sunIcon.classList.toggle('hidden');
    moonIcon.classList.toggle('hidden');
    
    // Save theme preference
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Initialize theme from localStorage
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    } else {
        body.classList.remove('dark-theme');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }
}

// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

// Auto-advance carousel
function startCarousel() {
    setInterval(() => {
        nextSlide();
    }, 3000);
}

// Smooth Scrolling for Navigation Links
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
}

// Fade-in Animation on Scroll
function animateOnScroll() {
    const animatedElements = document.querySelectorAll('.section-header, .feature-card, .stat-item, .location, .form-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(element);
    });
}

// Form Handling
function handleContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.name || !data.phone || !data.email || !data.message) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            if (!document.getElementById('privacy').checked) {
                alert('Por favor, aceite a política de privacidade.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = 'Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                form.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Header Background on Scroll
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

// Close mobile menu when clicking outside
function handleOutsideClick() {
    document.addEventListener('click', function(e) {
        const mobileMenu = document.querySelector('.mobile-menu');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            if (!mobileMenu.classList.contains('hidden')) {
                closeMobileMenu();
            }
        }
    });
}

// Preload Images
function preloadImages() {
    const images = [
        '/src/assets/mulher-aparelho-auditivo.jpg',
        '/src/assets/casal-restaurante-omnia.jpg',
        '/src/assets/aparelhos-pessoas-ao-redor.jpg',
        '/src/assets/jovem-festa-enzo-q.jpg'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    startCarousel();
    smoothScroll();
    animateOnScroll();
    handleContactForm();
    handleHeaderScroll();
    handleOutsideClick();
    preloadImages();
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Handle window resize
window.addEventListener('resize', function() {
    // Close mobile menu on resize
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});

// Add keyboard navigation for carousel
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

// Performance optimization: Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    }
}

// Add touch/swipe support for carousel on mobile
let touchStartX = 0;
let touchEndX = 0;

function handleGesture() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
}

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
});

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', function() {
    lazyLoadImages();
});