import Pagination from 'tui-pagination';
import { loadFromLocalStoradge } from './localStorageApi';
import { renderShoppingList } from './render-shopping-list';

let currentPage = 1;
const paginationContainerEl = document.getElementById(
  'tui-pagination-container'
);
const container = document.getElementById('tui-pagination-container');

export function createPagination() {
  const shoppingList = loadFromLocalStoradge('shopping-list');

  if (shoppingList.length % 3 === 0) {
    currentPage = Math.ceil(shoppingList.length / 3);
  }

  let startItemIndex = currentPage * 3 - 3;
  let dataToRenderShoppingList = shoppingList.slice(
    startItemIndex,
    startItemIndex + 3
  );

  if (!shoppingList) {
    return;
  } else if (shoppingList.length < 4) {
    paginationContainerEl.classList.add('display-none');
  }

  const paginationOptions = {
    totalItems: shoppingList.length,
    itemsPerPage: 3,
    visiblePages: 3,
    page: currentPage,
  };

  renderShoppingList(dataToRenderShoppingList);

  const instance = new Pagination(container, paginationOptions);
  instance.setTotalItems(shoppingList.length);

  instance.on('afterMove', pagination);
  function pagination(event) {
    startItemIndex = event.page * 3 - 3;
    dataToRenderShoppingList = shoppingList.slice(
      startItemIndex,
      startItemIndex + 3
    );
    currentPage = event.page;
    renderShoppingList(dataToRenderShoppingList);
  }
}
