import NoImageAvailable from '../../img/shopping-list/No-Image-Available-116-165.jpg';
import iconAmazonDesk from '../../img/shopping-list/icon-amazon-desktop.png';
import iconAmazonDesk2 from '../../img/shopping-list/icon-amazon-desktop@2x.png';
import iconAmazonMobile from '../../img/shopping-list/icon-amazon-mobile.png';
import iconAmazonMobile2 from '../../img/shopping-list/icon-amazon-mobile@2x.png';
import iconAppleBooksDesk from '../../img/shopping-list/icon-apple-books-desktop.png';
import iconAppleBooksDesk2 from '../../img/shopping-list/icon-apple-books-desktop@2x.png';
import iconAppleBooksMobile from '../../img/shopping-list/icon-apple-books-mobile.png';
import iconAppleBooksMobile2 from '../../img/shopping-list/icon-apple-books-mobile@2x.png';
import iconBooksShopDesk from '../../img/shopping-list/icon-book-shop-desktop.png';
import iconBooksShopDesk2 from '../../img/shopping-list/icon-book-shop-desktop@2x.png';
import iconBooksShopMobile from '../../img/shopping-list/icon-book-shop-mobile.png';
import iconBooksShopMobile2 from '../../img/shopping-list/icon-book-shop-mobile@2x.png';

const modal = document.querySelector('.pop-up-book-info');

function renderBook(id, book_image, title, author, description, buy_links) {
  const amazon = buy_links.find(buy_link => buy_link.name === 'Amazon');
  const apple = buy_links.find(buy_link => buy_link.name === 'Apple Books');
  const bookshop = buy_links.find(buy_link => buy_link.name === 'Bookshop');

  if (!title) {
    title = 'book title';
  }

  if (!author) {
    author = 'book author';
  }

  if (!description) {
    description = 'No description for this book yet.';
  }

  const markup = `<img class="pop-up-book-img" src="${book_image}" alt="${title}" onerror="this.src=${NoImageAvailable}" loading="lazy"><div class="pop-up-wrap" id="${id}"><h2 class="pop-up-book-title">${title}</h2><p class="pop-up-book-author">${author}</p><p class="pop-up-book-desc">${description}</p><ul class="pop-up-buy-list">
<li>
    <a class='pop-up-buylink amazon' href="${amazon.url}" target="_blank">
    <picture width="62" height="19">
                  <source
                    srcset="${iconAmazonDesk} 1x, ${iconAmazonDesk2} 2x"
                    media="(min-width: 768px)"
                  />
                  <source
                    srcset="${iconAmazonMobile} 1x, ${iconAmazonMobile2} 2x"
                    media="(max-width: 767px)"
                  />
                  <img
                    src="${iconAmazonDesk}"
                    alt="${amazon.name}"
                    loading="lazy"
                    width="62" height="19"
                  />
                </picture></a>
</li>
<li>
    <a class='pop-up-buylink' href="${apple.url}" target="_blank">
    <picture width="33" height="32">
                  <source
                    srcset="${iconAppleBooksDesk} 1x, ${iconAppleBooksDesk2} 2x"
                    media="(min-width: 768px)"
                  />
                  <source
                    srcset="${iconAppleBooksMobile} 1x, ${iconAppleBooksMobile2} 2x"
                    media="(max-width: 767px)"
                  />
                  <img
                    src="${iconAppleBooksDesk}"
                    alt="${apple.name}"
                    loading="lazy"
                    width="33" height="32"
                  />
                </picture></a>
</li>
<li>
    <a class='pop-up-buylink' href="${bookshop.url}" target="_blank">
    <picture width="38" height="36">
                  <source
                    srcset="${iconBooksShopDesk} 1x, ${iconBooksShopDesk2} 2x"
                    media="(min-width: 768px)"
                  />
                  <source
                    srcset="${iconBooksShopMobile} 1x, ${iconBooksShopMobile2} 2x"
                    media="(max-width: 767px)"
                  />
                  <img
                    src="${iconBooksShopDesk}"
                    alt="${bookshop.name}"
                    loading="lazy"
                    width="38" height="36"
                  />
                </picture></a>
</li>
</ul></div>`;

  modal.insertAdjacentHTML('beforeend', markup);
}

export { renderBook };
