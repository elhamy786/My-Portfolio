document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('hamburger'); 
    const navList = document.getElementById('navList'); 

    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('show');
    });
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
    document.querySelector('.see-more').addEventListener('click', () => {
        alert('See more clicked!');
    });
    document.getElementById('contactForm').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted successfully!');
    });
});
