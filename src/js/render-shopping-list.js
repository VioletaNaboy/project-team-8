import { loadFromLocalStoradge, saveToLocalStoradge } from './localStorageApi';
import { createPagination } from './pagination';

import createMarkupLibraryCard from './shopping-list-card';

const shoppingListEl = document.querySelector('.shopping-list-cards');
const emptyShoppingListEl = document.querySelector('.empty-shopping-list');

const shoppingList = loadFromLocalStoradge('shopping-list');

createPagination();

export function renderShoppingList(dataArr) {
  shoppingListEl.innerHTML = '';

  if (dataArr.length === 0) {
    emptyShoppingListEl.classList.remove('display-none');
  } else {
    const shoppingListCard = dataArr
      .map(card => createMarkupLibraryCard(card))
      .join('');
    shoppingListEl.insertAdjacentHTML('beforeend', shoppingListCard);
    const shoppingListCardRef = document.querySelectorAll(
      '.shopping-list-remove-btn'
    );
    shoppingListCardRef.forEach(card =>
      card.addEventListener('click', onRemoveCard)
    );
  }
}

function onRemoveCard(event) {
  let LocalStorageData = loadFromLocalStoradge('shopping-list');

  const id = event.currentTarget.id;

  LocalStorageData = LocalStorageData.filter(({ _id }) => _id !== id);

  localStorage.setItem('shopping-list', JSON.stringify(LocalStorageData));

  shoppingListEl.innerHTML = '';
  LocalStorageData = loadFromLocalStoradge('shopping-list');

  createPagination();
}
