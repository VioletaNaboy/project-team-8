import {
  getCategories,
  getTopBooks,
  getBooksByCategory,
  getBookById,
} from './apiService';

const list = document.querySelector('.category__list');
const catalog = document.querySelector('.catalog');
const allCategories = document.querySelector('.category_title');

const renderTopBooks = (topBooks, object) => {
  object.insertAdjacentHTML(
    'beforeend',
    `${topBooks.data
      .map(
        item => `<div class="main-block">
  <div class="gallery-and-genre-type">
      <p class="genre-type">${item.list_name}</p>
      <div class="gallery">
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

getTopBooks().then(result => {
  renderTopBooks(result, catalog);
});

allCategories.addEventListener('click', async () => {
  catalog.innerHTML = '';
  catalog.insertAdjacentHTML(
    'afterbegin',
    `<h1 class="catalog-header">Best Seller <span>Books</span></h1>`
  );
  const topBooks = await getTopBooks();
  renderTopBooks(topBooks, catalog);
});

const renderSelectCategoryInObject = (category, object) => {
  getBooksByCategory(category).then(result => {
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
