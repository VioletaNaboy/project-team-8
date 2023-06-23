import {
  getCategories,
  getTopBooks,
  getBooksByCategory,
  getBookById,
} from './apiService';
import { showLoader, hideLoader } from './loader.js';
const list = document.querySelector('.category__list');
const catalog = document.querySelector('.catalog');
const allCategories = document.querySelector('.category_title');

const renderTopBooks = (topBooks, object) => {
  hideLoader();
  object.insertAdjacentHTML(
    'beforeend',
    `${topBooks.data
      .map(
        item => `<div class="main-block">
  <div class="gallery-and-genre-type">
      <p class="genre-type">${item.list_name}</p>
      <div class="gallery" id="${item.list_name.split(' ').join('-')}">
     ${item.books
       .map(book => {
         return ` <div class="card" id=${book._id}><div class="wrapper"><img src="${book.book_image}" class="book-cover"><div class="overlay-box">
         <p class="overlay-text">
           Quick view
         </p>

         </div>
         </div>
      <div class="desc">
      <p class="book-card-title">${book.title}</p>
      <p class="book-card-author">${book.author}</p>
      
      </div></div>`;
       })
       .join('')}
      
  </div>
  <button class="see-more">SEE MORE</button>
</div>`
      )
      .join('')}`
  );
};
showLoader();
getTopBooks().then(result => {
  renderTopBooks(result, catalog);
  const seeBtn = document.querySelectorAll('.see-more');
  const originHeight = document.querySelector('.gallery').clientHeight;
  seeBtn.forEach((item, index) => {
    item.addEventListener('click', async () => {
      const block = document.getElementById(
        result.data[index].list_name.split(' ').join('-')
      );
      if (item.textContent === 'SEE MORE') {
        block.style.height = originHeight * 2 + 'px';
        block.style.overflowY = 'scroll';
        block.innerHTML = '';
        item.textContent = 'SEE LESS';
        renderSelectCategoryInObject(result.data[index].list_name, block);
      } else {
        block.innerHTML = '';
        renderSelectCategoryInObject(result.data[index].list_name, block);
        block.style.height = originHeight + 'px';
        block.style.overflowY = 'hidden';
        item.textContent = 'SEE MORE';
      }
    });
  });
});

allCategories.addEventListener('click', async () => {
  catalog.innerHTML = '';
  showLoader();
  catalog.insertAdjacentHTML(
    'afterbegin',
    `<h1 class="catalog-header">Best Seller <span>Books</span></h1>`
  );

  const topBooks = await getTopBooks();
  renderTopBooks(topBooks, catalog);
});

const renderSelectCategoryInObject = (category, object) => {
  getBooksByCategory(category).then(result => {
    hideLoader();
    object.insertAdjacentHTML(
      'beforeend',
      `<div class="gallery-select">${result.data
        .map(element => {
          return `<div class="card" id=${element._id}><div class="wrapper"><img src="${element.book_image}" class="book-cover"><div class="overlay-box">
          <p class="overlay-text">
            Quick view
          </p>
 
          </div>
          </div>
    <div class="desc">
    <p class="book-card-title">${element.title}</p>
    <p class="book-card-author">${element.author}</p>

    </div></div>`;
        })
        .join('')}</div>`
    );
  });
};

list.addEventListener('click', e => {
  if (e.target.nodeName === 'UL') {
    return;
  }
  catalog.innerHTML = '';
  showLoader();
  let categoryName = e.target.getAttribute('name');
  let categoryStrList = categoryName.split(' ');
  let categoryLastSpan = `<span>${
    categoryStrList[categoryStrList.length - 1]
  }</span>`;
  catalog.insertAdjacentHTML(
    'afterbegin',
    `<h1 class="catalog-header">${categoryStrList
      .slice(0, categoryStrList.length - 1)
      .join(' ')} ${categoryLastSpan}</h1>`
  );

  renderSelectCategoryInObject(categoryName, catalog);
});
