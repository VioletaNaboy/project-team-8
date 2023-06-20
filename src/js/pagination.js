import Pagination from 'tui-pagination';
// import { loadFromLocalStoradge } from './localStorageApi';

const container = document.getElementById('tui-pagination-container');
let currentPage = 1;
const totalItems = 10;

const instance = new Pagination(container, {
  totalItems: totalItems,
  itemsPerPage: 3,
  visiblePages: 3,
  page: currentPage,
});
instance.on('beforeMove', pagination);
export function pagination(event) {
  console.log(event.page);
  //   const shoppingList = loadFromLocalStoradge('shopping list');
  //   const startItemIndex = event.page * 3 - 3;
  //   console.log('startItemIndex', startItemIndex);
  console.log(totalItems);
  console.log('до', currentPage);
  currentPage = event.page;
  console.log('after', currentPage);
  return currentPage;
}
