document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('hamburger'); // Changed to 'hamburger'
    const navList = document.getElementById('navList'); // Changed to 'navList'

    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('show');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // See more button click
    document.querySelector('.see-more').addEventListener('click', () => {
        alert('See more clicked!');
    });

    // Form submission handling
    document.getElementById('contactForm').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted successfully!');
    });
});