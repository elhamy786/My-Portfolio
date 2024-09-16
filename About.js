const images = [
  'images/Python.jpg',
  'images/web development.jpg',
  'images/Health.jpg',
  'images/Writer.jpg',
];
let currentIndex = 0;
document.getElementById('profilePicture').addEventListener('click', function handleClick() {
  currentIndex = (currentIndex + 1) % images.length;
  this.src = images[currentIndex];
});

 // Get the elements
 const popupMenu = document.getElementById('menu');
 const openBtn = document.getElementById('menu-btn'); // Ensure correct ID
 const closeBtn = document.getElementById('close-btn');

 // Open the popup
 openBtn.addEventListener('click', function() {
   popupMenu.style.display = 'flex'; // Show the menu
 });

 // Close the popup
 closeBtn.addEventListener('click', function() {
   popupMenu.style.display = 'none'; // Hide the menu
 });
