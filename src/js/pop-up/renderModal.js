const modal = document.querySelector('.pop-up-book-info');

function renderBook(id, book_image, title, author, description, buy_links) {
  const amazon = buy_links.find(buy_link => buy_link.name === 'Amazon');
  const apple = buy_links.find(buy_link => buy_link.name === 'Apple Books');
  const bookshop = buy_links.find(buy_link => buy_link.name === 'Bookshop');

  if(!book_image) {
    book_image = '../../img/no-image.jpg';
  }
  
  if(!title) {
title = 'book title';
  }
  
  if(!author) {
author = 'book author';
  }
  
  if(!description) {
    description = 'No description for this book yet.';
  }

  const markup = `<img class="pop-up-book-img" src="${book_image}" alt="${title}"><div class="pop-up-wrap" id="${id}"><h2 class="pop-up-book-title">${title}</h2><p class="pop-up-book-author">${author}</p><p class="pop-up-book-desc">${description}</p><ul class="pop-up-buy-list">
<li>
    <a href="${amazon.url}" target="_blank"><img class="pop-up-buy-img" src="../img/amazon.png" alt="${amazon.name}"></a>
</li>
<li>
    <a href="${apple.url}" target="_blank"><img class="pop-up-buy-img" src="../img/apple.png" alt="${apple.name}"></a>
</li>
<li>
    <a href="${bookshop.url}" target="_blank"><img class="pop-up-buy-img" src="../img/bookshop.png" alt="${bookshop.url}"></a>
</li>
</ul></div>`;

  modal.insertAdjacentHTML('beforeend', markup);
};

export { renderBook };