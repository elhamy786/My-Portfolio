document.addEventListener('DOMContentLoaded', () => {
  const modals = {
    pokemon: document.getElementById('pokemonModal'),
    roman: document.getElementById('romanModal'),
    catInfo: document.getElementById('catInfoModal'),
    palindrome: document.getElementById('palindromeModal'),
    phoneValidator: document.getElementById('phoneValidatorModal'),
    cashRegister: document.getElementById('cashRegisterModal'),
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

  Object.keys(modals).forEach((modalId) => {
    document.getElementById(`close${modalId.charAt(0).toUpperCase() + modalId.slice(1)}Modal`).addEventListener('click', () => closeModal(modalId));
    
    window.addEventListener('click', (event) => {
      if (event.target === modals[modalId]) {
        closeModal(modalId);
      }
    });
  });
});