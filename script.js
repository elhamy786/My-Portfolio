document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.getElementById('hamburger');
  const navList = document.getElementById('navList');

  // Toggle mobile menu
  mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('show');
  });

  // Handle navigation link clicks
  document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      // Check if the link is internal or external
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault(); // Prevent default only for internal links
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      }

      // Close the mobile menu after clicking (optional)
      navList.classList.remove('show');
    });
  });
});
document.querySelector('.see-more').addEventListener('click', () => {
  alert('See more clicked!'); // This line shows the alert
  });
  document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Form submitted successfully!'); // This line shows the alert
  });
document.addEventListener('DOMContentLoaded', () => {
  const modals = {
    pokemon: document.getElementById('pokemonModal'),
    roman: document.getElementById('romanModal'),
    catInfo: document.getElementById('catInfoModal'),
  };

  const openModal = (modalId) => {
    modals[modalId].style.display = 'flex';
  };

  const closeModal = (modalId) => {
    modals[modalId].style.display = 'none';
  };

  document.getElementById('openPokemonModal').addEventListener('click', () => openModal('pokemon'));
  document.getElementById('openRomanModal').addEventListener('click', () => openModal('roman'));
  document.getElementById('openCatInfoModal').addEventListener('click', () => openModal('catInfo'));
  

  Object.keys(modals).forEach(modalId => {
    document.getElementById(`close${modalId.charAt(0).toUpperCase() + modalId.slice(1)}Modal`).addEventListener('click', () => closeModal(modalId));
    
    window.addEventListener('click', (event) => {
      if (event.target === modals[modalId]) {
        closeModal(modalId);
      }
    });
  });
});
function submitForm() {
  const firstName = document.getElementById('firstName').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!firstName || !lastName || !email || !message) {
    alert('Please fill out all required fields.');
    return;
}
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
  alert('Please enter a valid email address.');
  return;
}
const phonePattern = /^\d+$/;
if (!phonePattern.test(phone)) {
  alert('Please enter a valid phone number (digits only).');
  return;
}
const form = document.getElementById('contactForm');
  form.action = "https://formspree.io/f/xblrodky";
  form.method = "POST";
  form.submit();
alert('Your message has been sent!');
  form.reset();
}