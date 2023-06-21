import { saveToLocalStoradge, loadFromLocalStoradge } from '../localStorageApi';
import { getArrBookId } from './getDataBooksById';

const addBookBtn = document.querySelector('.pop-up-modal-btn');
const removeTxt = document.querySelector('.pop-up-remove-txt');
addBookBtn.addEventListener('click', onAddBtnClick);
// Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.
export default class StorageBooks {
  constructor() {
    this.key = 'shopping-list';
    this.objectBooks = [];
    this.arrayIds = [];
    this.currentBookKey = 'current-book';
    this.currentBookId = '';
    this.savedObject = loadFromLocalStoradge(this.key);
  }

  getArrayIds() {
    this.arrayIds = this.objectBooks.map(bookId => bookId._id);
  }

  setCurrentBookId() {
    this.currentBookId = loadFromLocalStoradge(this.currentBookKey);
  }

  getCurrentIds() {
    this.arrayIds = this.savedObject.map(bookId => bookId._id);
  }
}

const storageBooks = new StorageBooks();

function checkBook(id) {
  switchAddBtn();
  saveToLocalStoradge(storageBooks.currentBookKey, id);

  if (storageBooks.savedObject) {
    storageBooks.objectBooks = storageBooks.savedObject;
    storageBooks.getCurrentIds();
  }

  storageBooks.getArrayIds();
  if (storageBooks.arrayIds.includes(id)) {
    switchRemoveBtn();
  }
}

async function onAddBtnClick() {
  storageBooks.setCurrentBookId();

  if (storageBooks.savedObject) {
    storageBooks.objectBooks = storageBooks.savedObject;
    storageBooks.getCurrentIds();
  }

  if (storageBooks.arrayIds.includes(storageBooks.currentBookId)) {
    removeBtnClick();
  } else {
    const objectBook = await getArrBookId(storageBooks.currentBookId);

    storageBooks.objectBooks.push(objectBook);
    saveToLocalStoradge(storageBooks.key, storageBooks.objectBooks);

    switchRemoveBtn();
  }
}

function removeBtnClick() {
  const indexBook = storageBooks.arrayIds.indexOf(storageBooks.currentBookId);

  storageBooks.objectBooks.splice(indexBook, 1);
  saveToLocalStoradge(storageBooks.key, storageBooks.objectBooks);
  switchAddBtn();
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

export { checkBook };
