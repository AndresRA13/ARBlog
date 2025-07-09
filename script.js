// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Navigation functionality with smooth scrolling
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');
    
    // Function to update active nav item based on scroll position
    function updateActiveNavItem() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === current) {
                item.classList.add('active');
            }
        });
    }
    
    // Smooth scrolling for navigation links
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Smooth scrolling for home buttons
    const homeButtons = document.querySelectorAll('.home-buttons a');
    homeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active nav item on scroll
    window.addEventListener('scroll', updateActiveNavItem);
    
    // Activity card hover effects
    const activityCards = document.querySelectorAll('.activity-card');
    
    activityCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Activity links functionality
    const activityLinks = document.querySelectorAll('.activity-link');
    
    activityLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Activity link clicked');
            // You can add specific functionality for each activity here
        });
    });
    
    // Collaboration button functionality
    const collaborationBtn = document.querySelector('.collaboration-card .btn-primary');
    
    if (collaborationBtn) {
        collaborationBtn.addEventListener('click', function() {
            alert('¡Gracias por tu interés! Pronto implementaremos un formulario de contacto.');
        });
    }
    
    // Add scroll animations
    function addScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe cards for animation
        const cards = document.querySelectorAll('.card, .activity-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }
    
    addScrollAnimations();
    
    // Audio player enhancements
    const audioElements = document.querySelectorAll('audio');
    
    audioElements.forEach(audio => {
        audio.addEventListener('play', function() {
            console.log('Audio started playing');
        });
        
        audio.addEventListener('pause', function() {
            console.log('Audio paused');
        });
        
        audio.addEventListener('ended', function() {
            console.log('Audio finished playing');
        });
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // Number keys for quick navigation
        if (e.key >= '1' && e.key <= '3') {
            const sections = ['home', 'about', 'activities'];
            const index = parseInt(e.key) - 1;
            if (sections[index]) {
                const targetSection = document.getElementById(sections[index]);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        }
    });
    
    // Initialize active nav item
    updateActiveNavItem();
});