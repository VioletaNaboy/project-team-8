export default function createMarkupLibraryCard({
  title,
  list_name,
  author,
  book_image,
  description,
  buy_links,
}) {
  const booksShops = createShoopsList(buy_links);
  //   console.log(booksShops);

  return `<div class="shoping-card">
      <button class="remove-btn" type="button">
        <svg class="remove-icone" width="34" height="34">
          <use href="#"></use>
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
        <p class="book-author">${author}</p>
        <ul class="buy-links">
          <li class="buy-item">
            <a href="${booksShops['Amazon']}" class="buy-link">
               <img 
               src="img/shopping-list/icon-amazon.png" 
               alt="icon amazon" 
               class="shop-icone" 
               width="48" 
               height="15"/>
            </a>
          </li>
          <li class="buy-item">
            <a href="${booksShops['Apple Books']}" class="buy-link">
               <img 
               src="img/shopping-list/icon-apple-books.png" 
               alt="icon amazon" 
               class="shop-icone" 
               width="28" 
               height="27"/>
            </a>
          </li>
          <li class="buy-item">
            <a href="${booksShops['Bookshop']}" class="buy-link">
              <img 
               src="img/shopping-list/icon-book-shop.png" 
               alt="icon amazon" 
               class="shop-icone" 
               width="32" 
               height="30"/>
            </a>
          </li>
        </ul>
      </div>
    </div>`;
}
const testBook = {
  _id: '643282b1e85766588626a0b2',
  list_name: 'Audio Fiction',
  date: '2023-04-01T00:00:00.000Z',
  age_group: '',
  amazon_product_url:
    'https://www.amazon.com/Daisy-Jones-Taylor-Jenkins-Reid/dp/1524798622?tag=NYTBSREV-20',
  article_chapter_link: '',
  author: 'Taylor Jenkins Reid',
  book_image:
    'https://storage.googleapis.com/du-prd/books/images/9781524798628.jpg',
  book_image_width: 325,
  book_image_height: 495,
  book_review_link:
    'https://www.nytimes.com/2019/03/04/books/review/daisy-jones-six-taylor-jenkins-reid.html',
  book_uri: 'nyt://book/bd6e9bf1-e330-5495-9058-cde02152bfd4',
  contributor: 'by Taylor Jenkins Reid',
  contributor_note: '',
  created_date: '2023-04-05 23:10:05',
  description:
    'A fictional oral history charting the rise and fall of a ’70s rock ’n’ roll band. Read by Jennifer Beals, Benjamin Bratt, Judy Greer and Pablo Schreiber. 9 hours, 3 minutes unabridged.',
  first_chapter_link: '',
  price: '0.00',
  primary_isbn10: '',
  primary_isbn13: '9781984845306',
  publisher: 'Random House Audio',
  rank: 2,
  rank_last_week: 0,
  sunday_review_link: '',
  title: 'DAISY JONES & THE SIX',
  updated_date: '2023-04-05 23:10:05',
  weeks_on_list: 0,
  buy_links: [
    {
      name: 'Amazon',
      url: 'https://www.amazon.com/Daisy-Jones-Taylor-Jenkins-Reid/dp/1524798622?tag=NYTBSREV-20',
    },
    {
      name: 'Apple Books',
      url: 'https://goto.applebooks.apple/9781984845306?at=10lIEQ',
    },
    {
      name: 'Barnes and Noble',
      url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781984845306',
    },
    {
      name: 'Books-A-Million',
      url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FDAISY%252BJONES%252B%252526%252BTHE%252BSIX%252FTaylor%252BJenkins%252BReid%252F9781984845306&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DDAISY%252BJONES%252B%252526%252BTHE%252BSIX%252BTaylor%252BJenkins%252BReid',
    },
    {
      name: 'Bookshop',
      url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781984845306&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DDAISY%2BJONES%2B%2526%2BTHE%2BSIX',
    },
    {
      name: 'IndieBound',
      url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781984845306%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DDAISY%2BJONES%2B%2526%2BTHE%2BSIX%2BTaylor%2BJenkins%2BReid%26aff%3DNYT',
    },
  ],
  __v: 0,
};

// console.log(createMarkupLibraryCard(testBook));

function createShoopsList(shopsLink) {
  const booksShops = {};
  shopsLink.map(({ name, url }) => {
    booksShops[name] = url;
  });
  //   console.log(booksShops);
  return booksShops;
}
// createShoopsList(testBook);
