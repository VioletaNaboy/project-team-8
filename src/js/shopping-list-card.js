import sprite from '../img/shopping-list/sprite-shopping-list.svg';
import NoImageAvailable from '../img/shopping-list/No-Image-Available-116-165.jpg';

export default function createMarkupLibraryCard({
  _id,
  title,
  list_name,
  author,
  book_image,
  description,
  buy_links,
}) {
  const booksShops = createShoopsList(buy_links);

  return `<div class="shopping-list-card" id="${_id}">
      <button class="shopping-list-remove-btn" type="button" id="${_id}">
        <svg class="shopping-list-remove-icone" width="18" height="18">
          <use href="${sprite}#icon-trash"></use>
        </svg>
      </button>
      <img
        src="${book_image}" onerror="this.src='img/shopping-list/No-Image-Available-116-165.jpg'"
        alt="${title}"
        class="shopping-list-book-image"
        width="116"
        height="165"
        loading="lazy"
      />
      <div class="shopping-list-description-block">
        <h2 class="shopping-list-book-title">${title}</h2>
        <p class="shopping-list-book-categoty">${list_name}</p>
        <p class="shopping-list-description-text">
          ${description}
        </p>
        <div class="shopping-list-bottom-wrapper">
          <p class="shopping-list-book-author">${author}</p>
          <div class="shopping-list-links-wrapper">
            <ul class="shopping-list-buy-links">
            <li class="shopping-list-buy-item">
              <a href="${booksShops['Amazon']}" class="shopping-list-buy-link"
              target="_blank" rel="noreferrer noopener"
              >
                <picture class="shopping-list-shop-icone" width="32" height="11">
                  <source
                    srcset="
                      ../img/shopping-list/icon-amazon-desktop.png 1x,
                      ../img/shopping-list/icon-amazon-desktop@2x.png 2x
                    "
                    media="(min-width: 768px)"
                  />
                  <source
                    srcset="
                      ../img/shopping-list/icon-amazon-mobile.png 1x,
                      ../img/shopping-list/icon-amazon-mobile@2x.png 2x
                    "
                    media="(max-width: 767px)"
                  />
                  <img
                    src="../img/shopping-list/icon-amazon-desktop.png"
                    alt="icon amazon"
                    loading="lazy"
                  />
                </picture>
              </a>
            </li>
            <li class="shopping-list-buy-item">
              <a href="${booksShops['Apple Books']}" class="shopping-list-buy-link"
              target="_blank" rel="noreferrer noopener"
              >
                <picture class="shopping-list-shop-icone" width="16" height="16">
                  <source
                    srcset="
                      ./img/shopping-list/icon-apple-books-desktop.png 1x,
                      ./img/shopping-list/icon-apple-books-desktop@2x.png 2x
                    "
                    media="(min-width: 768px)"
                  />
                  <source
                    srcset="
                      ./img/shopping-list/icon-apple-books-mobile.png 1x,
                      ./img/shopping-list/icon-apple-books-mobile@2x.png 2x
                    "
                    media="(max-width: 767px)"
                  />
                  <img
                    src="./img/shopping-list/icon-apple-books-desktop.png"
                    alt="icon apple books"
                    loading="lazy"
                  />
                </picture>
              </a>
            </li>
            <li class="shopping-list-buy-item">
              <a href="${booksShops['Bookshop']}" class="shopping-list-buy-link"
              target="_blank" rel="noreferrer noopener"
              >
                 <picture class="shopping-list-shop-icone" width="16" height="16">
                  <source
                    srcset="
                      img/shopping-list/icon-book-shop-desktop.png 1x,
                      img/shopping-list/icon-book-shop-desktop@2x.png 2x
                    "
                    media="(min-width: 768px)"
                  />
                  <source
                    srcset="
                      img/shopping-list/icon-book-shop-mobile.png 1x,
                      img/shopping-list/icon-book-shop-mobile@2x.png 2x
                    "
                    media="(max-width: 767px)"
                  />
                  <img
                    src="img/shopping-list/icon-book-shop-desktop.png"
                    alt="icon book shop"
                    loading="lazy"
                  />
                </picture>
              </a>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>`;
}

function createShoopsList(shopsLink) {
  const booksShops = {};
  shopsLink.map(({ name, url }) => {
    booksShops[name] = url;
  });
  return booksShops;
}
