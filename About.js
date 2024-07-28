const images = [
    'images/Python.jpg',
    'images/web development.jpg',
    'images/Health.jpg',
    'images/Writer.jpg',
];

let currentIndex = 0;

document.getElementById('profilePicture').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    this.src = images[currentIndex];
});
