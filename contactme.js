function submitForm() {
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!firstName || !lastName || !email || !message) {
    // eslint-disable-next-line no-alert
    alert('Please fill out all required fields.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    // eslint-disable-next-line no-alert
    alert('Please enter a valid email address.');
    return;
  }

  const phonePattern = /^\d+$/;
  if (!phonePattern.test(phone)) {
    // eslint-disable-next-line no-alert
    alert('Please enter a valid phone number (digits only).');
    return;
  }

  const form = document.getElementById('contactForm');
  form.action = 'https://formspree.io/f/xblrodky';
  form.method = 'POST';
  form.submit();

  // eslint-disable-next-line no-alert
  alert('Your message has been sent!');
  form.reset();
}

document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  submitForm();
});

 const popupMenu = document.getElementById('menu');
 const openBtn = document.getElementById('menu-btn');
 const closeBtn = document.getElementById('close-btn');

 openBtn.addEventListener('click', function() {
   popupMenu.style.display = 'flex';
 });

 closeBtn.addEventListener('click', function() {
   popupMenu.style.display = 'none';
 });
