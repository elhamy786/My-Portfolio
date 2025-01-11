document.addEventListener('DOMContentLoaded', () => {
  const modals = {
    pokemon: document.getElementById('pokemonModal'),
    roman: document.getElementById('romanModal'),
    catInfo: document.getElementById('catInfoModal'),
    palindrome: document.getElementById('palindromeModal'),
    phoneValidator: document.getElementById('phoneValidatorModal'),
    cashRegister: document.getElementById('cashRegisterModal'),
    calculator: document.getElementById('calculatorModal'),
    elhamyFlowerShop: document.getElementById('elhamyFlowerShopModal'),
    drumMachine: document.getElementById('drumMachineModal'),
    dogsGallery: document.getElementById('dogsGalleryModal'),
    galaxyShowcase: document.getElementById('galaxyShowcaseModal'),
    pomodoroClock: document.getElementById('pomodoroClockModal'),
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
  document.getElementById('openPalindromeModal').addEventListener('click', () => openModal('palindrome'));
  document.getElementById('openPhoneValidatorModal').addEventListener('click', () => openModal('phoneValidator'));
  document.getElementById('openCashRegisterModal').addEventListener('click', () => openModal('cashRegister'));
  document.getElementById('openCalculatorModal').addEventListener('click', () => openModal('calculator'));
  document.getElementById('openElhamyFlowerShopModal').addEventListener('click', () => openModal('elhamyFlowerShop'));
  document.getElementById('openDrumMachineModal').addEventListener('click', () => openModal('drumMachine'));
  document.getElementById('openDogsGalleryModal').addEventListener('click', () => openModal('dogsGallery'));
  document.getElementById('openGalaxyShowcaseModal').addEventListener('click', () => openModal('galaxyShowcase'));
  document.getElementById('openPomodoroClockModal').addEventListener('click', () => openModal('pomodoroClock'));

  Object.keys(modals).forEach((modalId) => {
    document.getElementById(`close${modalId.charAt(0).toUpperCase() + modalId.slice(1)}Modal`).addEventListener('click', () => closeModal(modalId));
    window.addEventListener('click', (event) => {
      if (event.target === modals[modalId]) {
        closeModal(modalId);
      }
    });
  });
});

// Get the elements
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
