const loader = document.querySelector('.loader');

const showLoader = () => {
  loader.classList.remove('hiddenLoader');
};

const hideLoader = () => {
  loader.classList.add('hiddenLoader');
};

export { showLoader, hideLoader };
