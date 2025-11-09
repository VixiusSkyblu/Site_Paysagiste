// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileNav.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});

// Newsletter Form
const newsletterForm = document.getElementById('newsletterForm');
const newsletterSuccess = document.getElementById('newsletterSuccess');
const newsletterEmail = document.getElementById('newsletterEmail');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Hide form and show success message
    newsletterForm.style.display = 'none';
    newsletterSuccess.style.display = 'block';
    
    // Reset after 3 seconds
    setTimeout(() => {
        newsletterForm.style.display = 'flex';
        newsletterSuccess.style.display = 'none';
        newsletterEmail.value = '';
    }, 3000);
});

// Contact Form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Ici vous pouvez ajouter le code pour envoyer le formulaire
    // Par exemple avec PHP ou un service email
    alert('Votre message a été envoyé ! Nous vous répondrons dans les plus brefs délais.');
    
    // Reset form
    contactForm.reset();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to header on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});
