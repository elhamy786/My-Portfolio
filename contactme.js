function submitForm() {
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const company = document.getElementById('company').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
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
