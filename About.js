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
