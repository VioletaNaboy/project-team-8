import { saveToLocalStoradge, loadFromLocalStoradge } from '../localStorageApi';
import { getArrBookId } from './getDataBooksById';
import { id } from './openModal';

const addBookBtn = document.querySelector('.pop-up-modal-btn');
const removeTxt = document.querySelector('.pop-up-remove-txt');
addBookBtn.addEventListener('click', onAddBtnClick);

const STORAGE_KEY = 'shopping-list';
let objectBooks = [];
let arrayIds = [];

function checkBookInStorage() {
  switchAddBtn();
  checkContentsStorage();

 if(arrayIds.includes(id)) {
switchRemoveBtn();
 }
}

async function onAddBtnClick() {
  checkContentsStorage();

  if(arrayIds.includes(id)) {
removeBtnClick();
  } else {
    const objectBook = await getArrBookId(id);
    objectBooks.push(objectBook);
    saveToLocalStoradge(STORAGE_KEY, objectBooks);
    switchRemoveBtn();
  }
}

function removeBtnClick() {
  const indexBook = arrayIds.indexOf(id);
  objectBooks.splice(indexBook, 1);
  saveToLocalStoradge(STORAGE_KEY, objectBooks);
  switchAddBtn();
}

function checkContentsStorage() {
  if(loadFromLocalStoradge(STORAGE_KEY)) {
    objectBooks = loadFromLocalStoradge(STORAGE_KEY);
  }
  arrayIds = objectBooks.map(bookId => bookId._id);
}

function switchAddBtn() {
  addBookBtn.textContent = 'Add to shopping list';
  removeTxt.textContent = '';
}

function switchRemoveBtn() {
  addBookBtn.textContent = 'remove from the shopping list';
  removeTxt.textContent =
    'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
}

export { checkBookInStorage }