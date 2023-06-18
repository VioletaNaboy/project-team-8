import { getCategories } from './apiService.';

const categoryList = document.querySelector('category__list');


getCategories()
  .then(categories => {
    renderCategoryList(categories);
})
  
function renderCategoryList(categories) {

  categoryList.innerHTML = categories.map(category => {
        return `
         <li>
         <button type="button"
         class="category__list-button"
          name = "${category.list_name}">
         ${category.list_name}
         </button>
         </li>`;
  }).join('');
  
}

