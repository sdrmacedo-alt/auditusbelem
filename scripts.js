// AUDITUS - Vanilla JavaScript Implementation

document.addEventListener('DOMContentLoaded', function() {
    // Theme Management
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    updateThemeIcons(currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const isDark = document.documentElement.classList.contains('dark');
        const newTheme = isDark ? 'light' : 'dark';
        
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', newTheme);
        updateThemeIcons(newTheme);
    });
    
    function updateThemeIcons(theme) {
        if (theme === 'dark') {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
    }
    
    // Mobile Menu
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    mobileMenuToggle.addEventListener('click', function() {
        const isOpen = !mobileMenu.classList.contains('hidden');
        
        if (isOpen) {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        } else {
            mobileMenu.classList.remove('hidden');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        }
    });
    
    // Close mobile menu when clicking on links
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });
    
    // Stores Popover
    const storesTrigger = document.getElementById('stores-trigger');
    const storesPopover = document.getElementById('stores-popover');
    
    storesTrigger.addEventListener('click', function(e) {
        e.stopPropagation();
        storesPopover.classList.toggle('hidden');
    });
    
    // Close popover when clicking outside
    document.addEventListener('click', function(e) {
        if (!storesTrigger.contains(e.target) && !storesPopover.contains(e.target)) {
            storesPopover.classList.add('hidden');
        }
    });
    
    // Hero Carousel
    const carouselTrack = document.getElementById('carousel-track');
    const carouselPrev = document.getElementById('carousel-prev');
    const carouselNext = document.getElementById('carousel-next');
    const carouselDots = document.querySelectorAll('.carousel-dot');
    const slides = document.querySelectorAll('.carousel-slide');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoSlideInterval;
    
    function updateCarousel() {
        const translateX = -currentSlide * 100;
        carouselTrack.style.transform = `translateX(${translateX}%)`;
        
        // Update dots
        carouselDots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
                dot.classList.remove('bg-gray-300', 'hover:bg-gray-400');
                dot.classList.add('bg-primary', 'w-6');
            } else {
                dot.classList.remove('active');
                dot.classList.remove('bg-primary', 'w-6');
                dot.classList.add('bg-gray-300', 'hover:bg-gray-400');
            }
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
    }
    
    // Event listeners for carousel
    carouselNext.addEventListener('click', nextSlide);
    carouselPrev.addEventListener('click', prevSlide);
    
    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
    
    // Auto-slide functionality
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000);
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    // Start auto-slide
    startAutoSlide();
    
    // Pause auto-slide on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoSlide);
        carouselContainer.addEventListener('mouseleave', startAutoSlide);
    }
    
    // Services Data and Rendering
    const services = [
        {
            icon: 'stethoscope',
            title: 'Avaliação Auditiva Completa',
            description: 'Exame detalhado com equipamentos de última geração para diagnóstico preciso da sua condição auditiva.',
            features: ['Audiometria tonal', 'Logoaudiometria', 'Imitanciometria', 'Mensuração In Situ'],
            price: 'Gratuito'
        },
        {
            icon: 'headphones',
            title: 'Adaptação de Aparelhos',
            description: 'Processo personalizado de seleção e adaptação do aparelho auditivo ideal para seu perfil e necessidades.',
            features: ['Seleção personalizada', 'Ajustes finos', 'Período de adaptação', 'Acompanhamento técnico'],
            price: 'Incluso'
        },
        {
            icon: 'settings',
            title: 'Manutenção e Ajustes',
            description: 'Serviços técnicos especializados para manter seu aparelho auditivo sempre funcionando perfeitamente.',
            features: ['Limpeza profissional', 'Ajustes de software', 'Verificação técnica', 'Atualizações'],
            price: 'A partir de R$ 50'
        },
        {
            icon: 'shield',
            title: 'Garantia e Suporte',
            description: 'Cobertura completa com suporte técnico especializado e garantia estendida para sua tranquilidade.',
            features: ['Garantia estendida', 'Suporte 24/7', 'Reparos cobertos', 'Aparelho reserva'],
            price: 'Incluso'
        },
        {
            icon: 'user-check',
            title: 'Acompanhamento Personalizado',
            description: 'Monitoramento contínuo da sua adaptação com retornos regulares e ajustes conforme necessário.',
            features: ['Consultas de retorno', 'Ajustes personalizados', 'Orientações de uso', 'Acompanhamento familiar'],
            price: 'Incluso'
        },
        {
            icon: 'clock',
            title: 'Atendimento Domiciliar',
            description: 'Levamos nossos serviços até você com atendimento especializado no conforto da sua casa.',
            features: ['Visita domiciliar', 'Avaliação no local', 'Entrega e ajustes', 'Flexibilidade de horários'],
            price: 'Consulte valores'
        }
    ];
    
    function getIconSVG(iconName) {
        const icons = {
            'stethoscope': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>`,
            'headphones': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 7.464a5 5 0 010 7.072M12 6l-4 4 4 4m8-4h-8"></path>`,
            'settings': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>`,
            'shield': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>`,
            'user-check': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>`,
            'clock': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>`
        };
        return icons[iconName] || icons['settings'];
    }
    
    function renderServices() {
        const servicesContainer = document.querySelector('#servicos .grid.md\\:grid-cols-2.lg\\:grid-cols-3');
        if (!servicesContainer) return;
        
        servicesContainer.innerHTML = services.map(service => `
            <div class="card-premium h-full">
                <div class="flex flex-col h-full space-y-6">
                    <div class="flex items-center space-x-4">
                        <div class="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg class="w-7 h-7 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                ${getIconSVG(service.icon)}
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-primary">${service.title}</h3>
                            <div class="text-secondary font-semibold">${service.price}</div>
                        </div>
                    </div>

                    <p class="text-muted-foreground leading-relaxed flex-grow">
                        ${service.description}
                    </p>

                    <div class="space-y-2">
                        <h4 class="font-semibold text-primary text-sm">Inclui:</h4>
                        <ul class="space-y-1">
                            ${service.features.map(feature => `
                                <li class="flex items-center text-sm text-muted-foreground">
                                    <div class="w-1.5 h-1.5 bg-secondary rounded-full mr-2 flex-shrink-0"></div>
                                    ${feature}
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <button class="btn-premium-secondary w-full group mt-auto" onclick="window.open('https://wa.me/5591981214819', '_blank')">
                        Agendar Serviço
                        <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    // Render services
    renderServices();
    
    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Create WhatsApp message
            const whatsappMessage = `
Olá! Gostaria de entrar em contato.

*Nome:* ${name}
*Telefone:* ${phone}
*E-mail:* ${email}
*Assunto:* ${subject || 'Não informado'}

*Mensagem:*
${message}
            `.trim();
            
            const whatsappURL = `https://wa.me/5591981214819?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappURL, '_blank');
        });
    }
    
    // Smooth Scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize Leaflet Map
    function initializeMap() {
        const mapContainer = document.getElementById('map');
        if (!mapContainer) return;
        
        try {
            // Initialize the map centered on Brazil
            const map = L.map('map').setView([-14.2350, -51.9253], 4);
            
            // Add OpenStreetMap tiles
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);
            
            // Define store locations
            const stores = [
                {
                    name: 'AUDITUS BELÉM',
                    address: 'Trav. Dom Romualdo de Seixas, 832<br>Umarizal - Belém, PA<br>CEP: 66050-110',
                    phone: '(91) 98121-4819',
                    coords: [-1.4558, -48.4902]
                },
                {
                    name: 'AUDITUS FORTALEZA',
                    address: 'Rua Monsenhor Bruno, 1153 Ed Scopa<br>Aldeota - Fortaleza, CE<br>CEP: 60140-190',
                    phone: '(85) 99221-6433',
                    coords: [-3.7319, -38.5267]
                },
                {
                    name: 'AUDITUS SÃO LUÍS',
                    address: 'Av. Professor Carlos Cunha<br>Ed. Medical Jaracaty, Sala 813<br>São Luís, MA<br>CEP: 65076-908',
                    phone: '(98) 98111-7197',
                    coords: [-2.5307, -44.3068]
                }
            ];
            
            // Add markers for each store
            stores.forEach(store => {
                const marker = L.marker(store.coords).addTo(map);
                marker.bindPopup(`
                    <div class="p-2">
                        <h3 class="font-bold text-primary">${store.name}</h3>
                        <p class="text-sm text-muted-foreground mb-2">${store.address}</p>
                        <p class="text-sm font-semibold">${store.phone}</p>
                        <a href="https://wa.me/55${store.phone.replace(/\D/g, '')}" target="_blank" class="inline-block mt-2 text-sm text-primary hover:underline">
                            Conversar no WhatsApp
                        </a>
                    </div>
                `);
            });
            
        } catch (error) {
            console.error('Error initializing map:', error);
            mapContainer.innerHTML = '<div class="flex items-center justify-center h-full text-muted-foreground">Mapa indisponível no momento</div>';
        }
    }
    
    // Initialize map
    initializeMap();
    
    // Scroll animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);
        
        // Observe elements with animation classes
        const animateElements = document.querySelectorAll('.animate-slide-up, section');
        animateElements.forEach(el => observer.observe(el));
    }
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Header scroll effect
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('backdrop-blur-xl');
        } else {
            header.classList.remove('backdrop-blur-xl');
        }
        
        lastScrollY = currentScrollY;
    });
});

// Global utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const targetPosition = section.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}