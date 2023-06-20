import { getDataBooksById } from "./getDataBooksById";

const refs = {
  galleryBooks: document.querySelector('.catalog'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  bookInfo: document.querySelector('.pop-up-book-info'),
  body: document.querySelector('body'),
};

refs.galleryBooks.addEventListener('click', onGalleryBookClick);
refs.closeModalBtn.addEventListener('click', closeModal);
refs.modal.addEventListener('click', closeOnBackdrop);

function onGalleryBookClick (evt) {

    if (!evt.target.closest('.card')) {
        return;
    }

    const id = evt.target.closest('.card').id;
    getDataBooksById(id);
    openModal();
    }

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}

function openModal() {
  clearBookInfo();
  window.addEventListener('keydown', closeByEsc);
  toggleModal();
}

function closeModal() {
  toggleModal();
  window.removeEventListener('keydown', closeByEsc);
}

function closeByEsc({ code }) {
  if (code === 'Escape') {
    closeModal();
  }
}

function closeOnBackdrop(e) {
  if (!e.target.classList.contains('pop-up-backdrop')) {
    return;
  }
  closeModal();
}

  function clearBookInfo() {
    refs.bookInfo.innerHTML = '';
  }