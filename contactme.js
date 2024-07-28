function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (firstName && lastName && email && message) {
        alert(`Thank you for your message, ${firstName} ${lastName}!`);
        // You can add additional code here to handle the form data, such as sending it to a server
    } else {
        alert('Please fill in all required fields.');
    }
}