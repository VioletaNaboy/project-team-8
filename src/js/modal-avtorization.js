const modalAvtrOpenBtnEl = document.querySelectorAll('.modal-avtr__open-btn');

if (modalAvtrOpenBtnEl) {
  const modalAvtrContainerEl = document.querySelector('.modal-avtr');

  modalAvtrOpenBtnEl.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    mobileMenuContainerInEl.classList.toggle('_active-modal');
  });
}
