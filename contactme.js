// Function to save form data to LocalStorage
function saveFormData() {
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  // Save to LocalStorage
  localStorage.setItem('firstName', firstName);
  localStorage.setItem('lastName', lastName);
  localStorage.setItem('email', email);
  localStorage.setItem('phone', phone);
  localStorage.setItem('message', message);
}

// Function to load form data from LocalStorage
function loadFormData() {
  const savedFirstName = localStorage.getItem('firstName');
  const savedLastName = localStorage.getItem('lastName');
  const savedEmail = localStorage.getItem('email');
  const savedPhone = localStorage.getItem('phone');
  const savedMessage = localStorage.getItem('message');

  if (savedFirstName) document.getElementById('firstName').value = savedFirstName;
  if (savedLastName) document.getElementById('lastName').value = savedLastName;
  if (savedEmail) document.getElementById('email').value = savedEmail;
  if (savedPhone) document.getElementById('phone').value = savedPhone;
  if (savedMessage) document.getElementById('message').value = savedMessage;
}

// Function to submit the form
function submitForm() {
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!firstName || !lastName || !email || !message) { // eslint-disable-next-line no-alert
    alert('Please fill out all required fields.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) { // eslint-disable-next-line no-alert
    alert('Please enter a valid email address.');
    return;
  }

  // Check for capital letters in the email
  if (/[A-Z]/.test(email)) { // eslint-disable-next-line no-alert
    alert('Email must be in lowercase only.');
    return;
  }

  const phonePattern = /^\d+$/;
  if (!phonePattern.test(phone)) { // eslint-disable-next-line no-alert
    alert('Please enter a valid phone number (digits only).');
    return;
  }

  const form = document.getElementById('contactForm');
  form.action = 'https://formspree.io/f/xblrodky';
  form.method = 'POST';
  form.submit();

  alert('Your message has been sent!');

  // Clear LocalStorage after submitting
  localStorage.removeItem('firstName');
  localStorage.removeItem('lastName');
  localStorage.removeItem('email');
  localStorage.removeItem('phone');
  localStorage.removeItem('message');

  form.reset();
}

// Add event listener to save data on input change
document.querySelectorAll('#firstName, #lastName, #email, #phone, #message').forEach(input => {
  input.addEventListener('input', saveFormData);
});

// Load saved data when the page loads
window.addEventListener('load', loadFormData);

// Form submit event listener
document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  submitForm();
});

const popupMenu = document.getElementById('menu');
const openBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

function openMenu() {
  popupMenu.style.display = 'flex';
}

function closeMenu() {
  popupMenu.style.display = 'none';
}

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
