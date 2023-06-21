import { saveToLocalStoradge, loadFromLocalStoradge } from '../localStorageApi';
import { getArrBookId } from './getDataBooksById';

const addBookBtn = document.querySelector('.pop-up-modal-btn');
addBookBtn.addEventListener('click', onAddBtnClick);

const shoppingListKey = 'shopping-list';
const shoppingListBookIds = [];

const currentBookKey = 'current-book';

function checkBook(id) {
  const objectBookIds = shoppingListBookIds.map(
    shoppingListBookId => shoppingListBookId._id
  );
  saveToLocalStoradge(currentBookKey, id);
  addBookBtn.textContent = 'Add to shopping list';

  if (objectBookIds.includes(id)) {
    addBookBtn.textContent = 'remove from the shopping list';
  }
}

async function onAddBtnClick() {
  const currentBookId = loadFromLocalStoradge(currentBookKey);
  const objectBookIds = shoppingListBookIds.map(
    shoppingListBookId => shoppingListBookId._id
  );

  if (objectBookIds.includes(currentBookId)) {
    removeBtnClick(currentBookId, objectBookIds);
  } else {
    const objectBook = await getArrBookId(currentBookId);

    shoppingListBookIds.push(objectBook);
    saveToLocalStoradge(shoppingListKey, shoppingListBookIds);

    addBookBtn.textContent = 'remove from the shopping list';
  }
}

function removeBtnClick(currentBookId, objectBookIds) {
  const indexBook = objectBookIds.indexOf(currentBookId);

  shoppingListBookIds.splice(indexBook, 1);
  saveToLocalStoradge(shoppingListKey, shoppingListBookIds);
  addBookBtn.textContent = 'Add to shopping list';
}

export { checkBook };
