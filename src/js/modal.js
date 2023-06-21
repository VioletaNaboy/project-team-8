const modal = document.querySelector('.modal');
const closeButton = modal.querySelector('.icon-close');

export function closeModal() {
  modal.style.display = 'none';
}

closeButton.addEventListener('click', closeModal);

window.addEventListener('click', function (event) {
  if (event.target === modal) {
    closeModal();
  }
});



