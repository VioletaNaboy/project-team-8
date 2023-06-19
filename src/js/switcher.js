import {
  saveToLocalStoradge,
  loadFromLocalStoradge,
} from './localStorageApi.js';

const checkbox = document.querySelector('.switcher-checkbox');
const header = document.querySelector('.header');
const body = document.querySelector('body');
checkTheme();

checkbox.addEventListener('change', function () {
  if (this.checked) {
    blackTheme();
  } else {
    header.classList.remove('black-theme-header');
    body.classList.remove('black-theme-body');
    saveToLocalStoradge('darkModeEnabled', false);
  }
});

function checkTheme() {
  const theme = loadFromLocalStoradge('darkModeEnabled');
  if (theme === true) {
    checkbox.checked = true;
    blackTheme();
  }
}
function blackTheme() {
  header.classList.add('black-theme-header');
  body.classList.add('black-theme-body');
  saveToLocalStoradge('darkModeEnabled', true);
}
