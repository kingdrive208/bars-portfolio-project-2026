 // Mobile Navigation
        const hamburger = document.getElementById('hamburger');
        const mobileNav = document.getElementById('mobileNav');
        const closeMenu = document.getElementById('closeMenu');
        const overlay = document.getElementById('overlay');
        
        hamburger.addEventListener('click', () => {
            mobileNav.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeMenu.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        overlay.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.mobile-nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
        
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert(`Thank you, ${name}! Your message about "${subject}" has been sent successfully. I will get back to you at ${email} within 24 hours.`);
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Back to top button
        const backToTop = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.style.opacity = '1';
                backToTop.style.visibility = 'visible';
            } else {
                backToTop.style.opacity = '0';
                backToTop.style.visibility = 'hidden';
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Add fade-in animation to elements when they come into view
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        document.querySelectorAll('.skill-item, .portfolio-item, .contact-item, .hero-left-container, .hero-image, .tech-icon, .stat-item, .profile-photo-container').forEach(item => {
            item.style.opacity = '0';
            observer.observe(item);
        });
        
        // Add animation delay to elements for staggered effect
        document.querySelectorAll('.skill-item').forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
        });
        
        document.querySelectorAll('.tech-icon').forEach((item, index) => {
            item.style.animationDelay = `${index * 0.05}s`;
        });
        
        // Particle background effect
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random properties
                const size = Math.random() * 4 + 1;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const duration = Math.random() * 20 + 10;
                const delay = Math.random() * 5;
                
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${posX}%`;
                particle.style.top = `${posY}%`;
                particle.style.opacity = Math.random() * 0.3 + 0.1;
                particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
                
                particlesContainer.appendChild(particle);
            }
        }
        
        // Typing animation for code lines
        function animateCodeLines() {
            const codeLines = document.querySelectorAll('.code-line');
            codeLines.forEach((line, index) => {
                line.style.opacity = '0';
                line.style.transform = 'translateX(-20px)';
                line.style.transition = `opacity 0.5s ${index * 0.15}s, transform 0.5s ${index * 0.15}s`;
                
                setTimeout(() => {
                    line.style.opacity = '1';
                    line.style.transform = 'translateX(0)';
                }, 500 + (index * 150));
            });
        }
        
        // Profile photo hover effect
        function setupProfilePhoto() {
            const profilePhoto = document.querySelector('.profile-photo-container');
            if (profilePhoto) {
                profilePhoto.addEventListener('mouseenter', () => {
                    profilePhoto.style.transform = 'scale(1.08)';
                });
                
                profilePhoto.addEventListener('mouseleave', () => {
                    profilePhoto.style.transform = 'scale(1)';
                });
            }
        }
        
        // Initialize effects
        document.addEventListener('DOMContentLoaded', () => {
            createParticles();
            animateCodeLines();
            setupProfilePhoto();
            
            // Preload animations
            setTimeout(() => {
                document.querySelectorAll('.fade-in').forEach(el => {
                    el.style.opacity = '1';
                });
            }, 100);
        });
        
        // Interactive tech icons
        document.querySelectorAll('.tech-icon').forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                const iTag = icon.querySelector('i');
                iTag.style.transform = 'scale(1.3)';
                iTag.style.filter = 'drop-shadow(0 0 15px currentColor)';
            });
            
            icon.addEventListener('mouseleave', () => {
                const iTag = icon.querySelector('i');
                iTag.style.transform = 'scale(1)';
                iTag.style.filter = 'drop-shadow(0 0 0px currentColor)';
            });
        });