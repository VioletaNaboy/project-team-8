const modal = document.querySelector('.modal');
const closeButton = modal.querySelector('.icon-close');
const signUpHeader = document.querySelector('.sign-up-header');

export function closeModal() {
  modal.classList.add('hidden');
}
function openModal() {
  modal.classList.remove('hidden');
}
signUpHeader.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);

window.addEventListener('click', function (event) {
  if (event.target === modal) {
    closeModal();
  }
});
