import { saveToLocalStoradge, loadFromLocalStoradge } from '../localStorageApi';
import { getArrBookId } from './getDataBooksById';

const addBookBtn = document.querySelector('.pop-up-modal-btn');
addBookBtn.addEventListener('click', onAddBtnClick);

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
this.arrayIds = this.objectBooks.map(
  bookId => bookId._id
); 
  }

  setCurrentBookId() {
    this.currentBookId = loadFromLocalStoradge(this.currentBookKey);
  }

  getCurrentIds() {
    this.arrayIds = this.savedObject.map(
      bookId => bookId._id
    ); 
  }
}

const storageBooks = new StorageBooks();

function checkBook(id) {
  addBookBtn.textContent = 'Add to shopping list';
  saveToLocalStoradge(storageBooks.currentBookKey, id);

if(storageBooks.savedObject) {
  storageBooks.objectBooks = storageBooks.savedObject;
  storageBooks.getCurrentIds();
}

  storageBooks.getArrayIds();

  if (storageBooks.arrayIds.includes(id)) {
    addBookBtn.textContent = 'remove from the shopping list';
  }
}

async function onAddBtnClick() {
  storageBooks.setCurrentBookId()

  if(storageBooks.savedObject) {
    storageBooks.objectBooks = storageBooks.savedObject;
    storageBooks.getCurrentIds();
  }

  if (storageBooks.arrayIds.includes(storageBooks.currentBookId)) {
     removeBtnClick();
  } else {
    const objectBook = await getArrBookId(storageBooks.currentBookId);

    storageBooks.objectBooks.push(objectBook);
    saveToLocalStoradge(storageBooks.key, storageBooks.objectBooks);

    addBookBtn.textContent = 'remove from the shopping list';
  }
}

function removeBtnClick() {
  const indexBook = storageBooks.arrayIds.indexOf(storageBooks.currentBookId);

  storageBooks.objectBooks.splice(indexBook, 1);
  saveToLocalStoradge(storageBooks.key, storageBooks.objectBooks);
  addBookBtn.textContent = 'Add to shopping list';
}

export { checkBook };
