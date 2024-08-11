document.addEventListener('DOMContentLoaded', () => {
  const navList = document.getElementById('navList');

  document.querySelectorAll('.nav-link').forEach((anchor) => {
    anchor.addEventListener('click', function handleNavClick(e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
      }
      navList.classList.remove('show');
    });
  });

  // See more button
  document.querySelector('.see-more').addEventListener('click', () => { // eslint-disable-next-line no-alert
    alert('See more clicked!');
  });

  // Modal functionality
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

  Object.keys(modals).forEach((modalId) => {
    document.getElementById(`close${modalId.charAt(0).toUpperCase() + modalId.slice(1)}Modal`).addEventListener('click', () => closeModal(modalId));

    window.addEventListener('click', (event) => {
      if (event.target === modals[modalId]) {
        closeModal(modalId);
      }
    });
  });

  // Form validation and submission
  document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Remove this line to allow form submission

    const name = document.getElementById('name').value.trim(); // Ensure IDs match your form
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) { // eslint-disable-next-line no-alert
      alert('Please fill out all required fields.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) { // eslint-disable-next-line no-alert
      alert('Please enter a valid email address.');
      return;
    }

    // Form submission
    const form = document.getElementById('contactForm');
    form.action = 'https://formspree.io/f/xblrodky';
    form.method = 'POST';
    form.submit(); // Ensure this line is reached and not blocked
    form.reset();
  });
});
