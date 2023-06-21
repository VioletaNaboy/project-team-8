import Pagination from 'tui-pagination';
import { loadFromLocalStoradge } from './localStorageApi';
import { renderShoppingList } from './render-shopping-list';

let currentPage = 1;
const paginationContainerEl = document.getElementById(
  'tui-pagination-container'
);
const container = document.getElementById('tui-pagination-container');

let startItemIndex = 0;

export function createPagination() {
  const shoppingList = loadFromLocalStoradge('shopping-list');
  console.log('hhh', shoppingList);
  console.log(currentPage);
  //   renderShoppingList(shoppingList);

  let dataToRenderShoppingList = shoppingList.slice(
    startItemIndex,
    startItemIndex + 3
  );
  //   let dataToRenderShoppingList;
  //   if (shoppingList.length % 3 === 0) {
  //     dataToRenderShoppingList = shoppingList.slice(
  //       startItemIndex - 3,
  //       startItemIndex
  //     );
  //   } else {
  //     dataToRenderShoppingList = shoppingList.slice(
  //       startItemIndex,
  //       startItemIndex + 3
  //     );
  //   }

  if (!shoppingList) {
    return;
  } else if (shoppingList.length < 4) {
    paginationContainerEl.classList.add('display-none');
    return renderShoppingList(dataToRenderShoppingList);
  }
  //   let dataToRenderShoppingList = shoppingList.slice(
  //     startItemIndex,
  //     startItemIndex + 3
  //   );

  const paginationOptions = {
    totalItems: shoppingList.length,
    itemsPerPage: 3,
    visiblePages: 3,
    page: currentPage,
  };
  console.log(shoppingList.length);
  renderShoppingList(dataToRenderShoppingList);

  console.log('test1');

  const instance = new Pagination(container, paginationOptions);
  instance.setTotalItems(shoppingList.length);

  //   instance.reset();
  console.log('fff', shoppingList.length);
  instance.on('afterMove', pagination);
  function pagination(event) {
    // if (shoppingList.length < 4) {
    //   console.log('sll', shoppingList.length);
    //   return renderShoppingList(shoppingList);
    // }

    startItemIndex = event.page * 3 - 3;
    dataToRenderShoppingList = shoppingList.slice(
      startItemIndex,
      startItemIndex + 3
    );
    currentPage = event.page;
    console.log(event.page);
    console.log('object', dataToRenderShoppingList);

    renderShoppingList(dataToRenderShoppingList);

    // currentPage = event.page;
  }
}
