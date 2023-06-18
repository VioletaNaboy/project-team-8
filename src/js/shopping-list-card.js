import sprite from '../img/shopping-list/sprite-shopping-list.svg';
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

  return `<div class="shoping-card" id="${_id}">
      <button class="remove-btn" type="button" id="${_id}">
        <svg class="remove-icone" width="18" height="18">
          <use href="${sprite}#icon-trash"></use>
        </svg>
      </button>
      <img
        src="${book_image}" onerror="this.src='img/shopping-list/No-Image-Available-116-165.jpg'"
        alt="${title}"
        class="book-image"
        width="116"
        height="165"
      />
      <div class="description-block">
        <h2 class="book-title">${title}</h2>
        <p class="book-categoty">${list_name}</p>
        <p class="description-text">
          ${description}
        </p>
        <div class="bottom-wrapper">
          <p class="book-author">${author}</p>
          <div class="links-wrapper">
            <ul class="buy-links">
            <li class="buy-item">
              <a href="${booksShops['Amazon']}" class="buy-link"
              target="_blank" rel="noreferrer noopener"
              >
                <picture class="shop-icone" width="32" height="11">
                  <source
                    srcset="
                      ../img/shopping-list/icon-amazon-desktop.png,
                      ../img/shopping-list/icon-amazon-desktop@2x.png
                    "
                    media="(min-width: 768px)"
                  />
                  <source
                    srcset="
                      ../img/shopping-list/icon-amazon-mobile.png,
                      ../img/shopping-list/icon-amazon-mobile@2x.png
                    "
                    media="(max-width: 767px)"
                  />
                  <img
                    src="../img/shopping-list/icon-amazon-desktop.png, ./img/shopping-list/icon-amazon-desktop@2x.png"
                    alt="icon amazon"
                  />
                </picture>
              </a>
            </li>
            <li class="buy-item">
              <a href="${booksShops['Apple Books']}" class="buy-link"
              target="_blank" rel="noreferrer noopener"
              >
                <picture class="shop-icone" width="16" height="16">
                  <source
                    srcset="
                      ./img/shopping-list/icon-apple-books-desktop.png,
                      ./img/shopping-list/icon-apple-books-desktop@2x.png
                    "
                    media="(min-width: 768px)"
                  />
                  <source
                    srcset="
                      ./img/shopping-list/icon-apple-books-mobile.png,
                      ./img/shopping-list/icon-apple-books-mobile@2x.png
                    "
                    media="(max-width: 767px)"
                  />
                  <img
                    src="./img/shopping-list/icon-apple-books-desktop.png, ./img/shopping-list/icon-apple-books-desktop@2x.png"
                    alt="icon apple books"
                  />
                </picture>
              </a>
            </li>
            <li class="buy-item">
              <a href="${booksShops['Bookshop']}" class="buy-link"
              target="_blank" rel="noreferrer noopener"
              >
                 <picture class="shop-icone" width="16" height="16">
                  <source
                    srcset="
                      img/shopping-list/icon-book-shop-desktop.png,
                      img/shopping-list/icon-book-shop-desktop@2x.png
                    "
                    media="(min-width: 768px)"
                  />
                  <source
                    srcset="
                      img/shopping-list/icon-book-shop-mobile.png,
                      img/shopping-list/icon-book-shop-mobile@2x.png
                    "
                    media="(max-width: 767px)"
                  />
                  <img
                    src="img/shopping-list/icon-book-shop-desktop.png, ./img/shopping-list/icon-book-shop-desktop@2x.png"
                    alt="icon book shop"
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
