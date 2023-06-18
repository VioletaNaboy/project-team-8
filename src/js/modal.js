const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.icon-close');
const openButton = document.querySelector('.open-modal');

export function openModal() {
  modal.style.display = 'block';
}

export function closeModal() {
  modal.style.display = 'none';
}

openButton.addEventListener('click', openModal);

closeButton.addEventListener('click', closeModal);

window.addEventListener('click', function (event) {
  if (event.target === modal) {
    closeModal();
  }
});
