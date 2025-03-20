/**
 * Agricultura de Gravatá - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todos os componentes
    initMobileMenu();
    initScrollEffects();
    initContactForm();
    initAnimations();
});

// Menu Mobile
function initMobileMenu() {
    const navToggle = document.querySelector('.mobile-toggle');
    const mobileNav = document.querySelector('.navigation-links');
    const overlay = document.querySelector('.nav-overlay');
    const mobileLinks = document.querySelectorAll('.navigation-links li a');
    
    if (navToggle) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            document.body.classList.toggle('menu-open');
            mobileNav.classList.toggle('active');
            
            if (overlay) {
                overlay.classList.toggle('active');
            }
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', function() {
            document.body.classList.remove('menu-open');
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
    
    // Fechar menu ao clicar em links do menu
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                document.body.classList.remove('menu-open');
                mobileNav.classList.remove('active');
                if (overlay) {
                    overlay.classList.remove('active');
                }
            }
        });
    });
}

// Efeitos de scroll
function initScrollEffects() {
    // Adicionar classe ao header quando rolar a página
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Scroll suave para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetOffset = targetElement.getBoundingClientRect().top + window.scrollY;
                
                window.scrollTo({
                    top: targetOffset - headerHeight - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Inicializar formulário de contato
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envio de formulário
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            console.log('Enviando dados do formulário:', formData);
            
            // Simular uma chamada de API bem-sucedida
            setTimeout(() => {
                contactForm.style.display = 'none';
                if (thankYouMessage) {
                    thankYouMessage.style.display = 'block';
                    
                    // Reset form after 5 seconds
                    setTimeout(() => {
                        contactForm.reset();
                        contactForm.style.display = 'block';
                        thankYouMessage.style.display = 'none';
                    }, 5000);
                }
            }, 1000);
        });
    }
}

// Inicializar animações
function initAnimations() {
    // Animações baseadas em scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    // Função para verificar se elemento está visível na viewport
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
            rect.bottom >= 0
        );
    };
    
    // Função para animar elementos visíveis
    const handleScrollAnimation = () => {
        animatedElements.forEach(el => {
            if (isElementInViewport(el)) {
                el.classList.add('animated');
            }
        });
    };
    
    // Usar Intersection Observer quando disponível
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    } else {
        // Fallback para browsers mais antigos
        window.addEventListener('scroll', handleScrollAnimation);
        // Verificar elementos visíveis no carregamento inicial
        handleScrollAnimation();
    }
    
    // Aplicar delay em elementos com animação sequencial
    document.querySelectorAll('.culture-card').forEach((card, index) => {
        if (card.classList.contains('animate-on-scroll')) {
            card.style.transitionDelay = `${index * 0.1}s`;
        }
    });
    
    document.querySelectorAll('.chart-box').forEach((box, index) => {
        if (box.classList.contains('animate-on-scroll')) {
            box.style.transitionDelay = `${index * 0.2}s`;
        }
    });
} 