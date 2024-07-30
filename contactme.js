function submitForm() {
    // Get form elements
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const company = document.getElementById('company').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
        alert('Please fill out all required fields.');
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate phone number (simple validation for digits only)
    const phonePattern = /^\d+$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number (digits only).');
        return;
    }

    // If all validations pass
    const form = document.getElementById('contactForm');
    form.action = "https://formspree.io/f/xblrodky";
    form.method = "POST";
    form.submit();
    
    alert('Your message has been sent!');
    form.reset(); // Optionally reset the form
}
