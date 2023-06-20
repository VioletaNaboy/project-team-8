import Pagination from 'tui-pagination';
import { loadFromLocalStoradge } from './localStorageApi';
import { renderShoppingList } from './render-shopping-list';

let currentPage = 1;
const container = document.getElementById('tui-pagination-container');

export function createPagination() {
  const shoppingList = loadFromLocalStoradge('shopping-list');

  const paginationOptions = {
    totalItems: shoppingList.length,
    itemsPerPage: 3,
    visiblePages: 3,
    page: 1,
  };
  let startItemIndex = 0;
  let dataToRenderShoppingList = shoppingList.slice(0, 3);
  renderShoppingList(dataToRenderShoppingList);

  const instance = new Pagination(container, paginationOptions);
  instance.on('beforeMove', pagination);
  function pagination(event) {
    console.log(event.page);
    startItemIndex = event.page * 3 - 3;
    dataToRenderShoppingList = shoppingList.slice(
      startItemIndex,
      startItemIndex + 3
    );
    renderShoppingList(dataToRenderShoppingList);

    currentPage = event.page;
  }
}
