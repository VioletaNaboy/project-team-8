<<<<<<< Updated upstream
import { getCategories } from './apiService.';
=======
 
export { getCategories } from './apiService.';
>>>>>>> Stashed changes

const categoryList = document.querySelector('category__list');


<<<<<<< Updated upstream
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

=======
  getCategories()
  .then(categories => {
    renderCategoryList(categories);
  })
  .catch(error => {
        console.log(error);
      });


function renderCategoryList(categories) {

    categoryList.innerHTML = categories.map(category => {
        return `
         <li class="category_list" name = "${category.list_name}">
         ${category.list_name}
         </li>`;
    }).join('');
    
    
}
  



  
>>>>>>> Stashed changes
