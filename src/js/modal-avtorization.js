const modalAvtrOpenBtnEls = document.querySelectorAll('.modal-avtr__open-btn');

if (modalAvtrOpenBtnEls.length > 0) {
  const modalAvtrContainerEl = document.querySelector('.modal-avtr');
  const modalAvtrCloseBtnEls = document.querySelector(
    '.modal-avtr__form-icon-close'
  );
  modalAvtrOpenBtnEls.forEach(function (modalAvtrOpenBtnEl) {
    modalAvtrOpenBtnEl.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock');
      modalAvtrContainerEl.classList.toggle('_active-modal');
    });
  });
  modalAvtrCloseBtnEls.addEventListener('click', () => {
    modalAvtrContainerEl.classList.remove('_active-modal');
  });
}
