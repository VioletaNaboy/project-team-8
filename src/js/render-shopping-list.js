import createMarkupLibraryCard from './shopping-list-card';

const shoppingListEl = document.querySelector('.shopping-list-container');

function renderShoppingList(arr) {
  const shoppingListCard = arr
    .map(card => createMarkupLibraryCard(card))
    .join('');
  //   console.log(shoppingListCard);
  shoppingListEl.insertAdjacentHTML('beforeend', shoppingListCard);
}

/* |=========================| Тестовий масив |=========================| */
const testBookArr = [
  {
    _id: '643282b1e85766588626a0b6',
    list_name: 'Business Books',
    date: '2023-04-09T09:28:39.163Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/0593652886?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Rick Rubin with Neil Strauss',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780593652886.jpg',
    book_image_width: 341,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/da28ca16-1ebd-55aa-aba3-fde278604a82',
    contributor: 'by Rick Rubin with Neil Strauss',
    contributor_note: '',
    created_date: '2023-04-05 23:10:12',
    description:
      'David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0593652886',
    primary_isbn13: '9780593652886',
    publisher: 'Penguin Press',
    rank: 2,
    rank_last_week: 0,
    sunday_review_link: '',
    title:
      'THE CREATIVE ACT dsfdsfsdfsdfsdg fdrfgdreftertret  ewrewrewrerwerwerewrwerewrew',
    updated_date: '2023-04-05 23:10:12',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/0593652886?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780593652886?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593652886',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BCREATIVE%252BACT%252FRick%252BRubin%252Bwith%252BNeil%252BStrauss%252F9780593652886&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BCREATIVE%252BACT%252BRick%252BRubin%252Bwith%252BNeil%252BStrauss',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593652886&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BCREATIVE%2BACT',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593652886%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BCREATIVE%2BACT%2BRick%2BRubin%2Bwith%2BNeil%2BStrauss%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b1e85766588626a0d6',
    list_name: 'Business Books',
    date: '2023-04-01T00:00:00.000Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/0593239911?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Matthew Desmond',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780593239919.jpg',
    book_image_width: 329,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/f21834a2-0566-54a6-bf85-b2aabf4a71e0',
    contributor: 'by Matthew Desmond',
    contributor_note: '',
    created_date: '2023-04-05 23:10:12',
    description:
      'David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0593239911',
    primary_isbn13: '9780593239919',
    publisher: 'Crown',
    rank: 3,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'POVERTY, BY AMERICA',
    updated_date: '2023-04-05 23:10:12',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/0593239911?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780593239919?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593239919',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FPOVERTY%25252C%252BBY%252BAMERICA%252FMatthew%252BDesmond%252F9780593239919&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DPOVERTY%25252C%252BBY%252BAMERICA%252BMatthew%252BDesmond',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593239919&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DPOVERTY%252C%2BBY%2BAMERICA',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593239919%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DPOVERTY%252C%2BBY%2BAMERICA%2BMatthew%2BDesmond%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b1e85766588626a087',
    list_name: 'Business Books',
    date: '2023-04-09T09:28:38.379Z',
    age_group: '',
    amazon_product_url:
      'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'James Clear',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780735211292.jpg',
    book_image_width: 328,
    book_image_height: 495,
    book_review_link: '',
    book_uri: 'nyt://book/0398a355-c032-534e-a0af-647b06f0840d',
    contributor: 'by James Clear',
    contributor_note: '',
    created_date: '2023-04-05 23:10:12',
    description:
      'David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0735211299',
    primary_isbn13: '9780735211292',
    publisher: 'Avery',
    rank: 1,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'ATOMIC HABITS',
    updated_date: '2023-04-05 23:10:12',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780735211292?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780735211292',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FATOMIC%252BHABITS%252FJames%252BClear%252F9780735211292&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DATOMIC%252BHABITS%252BJames%252BClear',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780735211292&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DATOMIC%2BHABITS',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780735211292%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DATOMIC%2BHABITS%2BJames%2BClear%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b2e85766588626a15a',
    list_name: 'Business Books',
    date: '2023-04-09T09:28:39.564Z',
    age_group: '',
    amazon_product_url:
      'https://www.amazon.com/Dare-Lead-Brave-Conversations-Hearts/dp/0399592520?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Brené Brown',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780399592522.jpg',
    book_image_width: 326,
    book_image_height: 495,
    book_review_link: '',
    book_uri: 'nyt://book/e9569270-fe3a-5fe4-a068-7eca3da622e7',
    contributor: 'by Brené Brown',
    contributor_note: '',
    created_date: '2023-04-05 23:10:13',
    description:
      'David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0399592520',
    primary_isbn13: '9780399592522',
    publisher: 'Random House',
    rank: 7,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'DARE TO LEAD',
    updated_date: '2023-04-05 23:10:13',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Dare-Lead-Brave-Conversations-Hearts/dp/0399592520?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780399592522?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780399592522',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FDARE%252BTO%252BLEAD%252FBren%2525C3%2525A9%252BBrown%252F9780399592522&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DDARE%252BTO%252BLEAD%252BBren%2525C3%2525A9%252BBrown',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780399592522&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DDARE%2BTO%2BLEAD',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780399592522%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DDARE%2BTO%2BLEAD%2BBren%25C3%25A9%2BBrown%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b2e85766588626a114',
    list_name: 'Business Books',
    date: '2023-04-09T09:28:39.340Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/1250853478?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Mehdi Hasan',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781250853479.jpg',
    book_image_width: 324,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/77c47bee-97df-5527-af0e-c6b64a4a8dd4',
    contributor: 'by Mehdi Hasan',
    contributor_note: '',
    created_date: '2023-04-05 23:10:12',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1250853478',
    primary_isbn13: '9781250853479',
    publisher: 'Holt',
    rank: 5,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'WIN EVERY ARGUMENT',
    updated_date: '2023-04-05 23:10:12',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/1250853478?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781250853479?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250853479',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWIN%252BEVERY%252BARGUMENT%252FMehdi%252BHasan%252F9781250853479&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWIN%252BEVERY%252BARGUMENT%252BMehdi%252BHasan',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250853479&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWIN%2BEVERY%2BARGUMENT',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250853479%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWIN%2BEVERY%2BARGUMENT%2BMehdi%2BHasan%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b2e85766588626a0f6',
    list_name: 'Business Books',
    date: '2023-04-09T09:28:40.275Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/0063224623?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Paris Hilton',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780063224629.jpg',
    book_image_width: 329,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/70018f37-a19d-59d7-9ede-71cb917bd6cf',
    contributor: 'by Paris Hilton',
    contributor_note: '',
    created_date: '2023-04-05 23:10:12',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0063224623',
    primary_isbn13: '9780063224629',
    publisher: 'Dey Street',
    rank: 4,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'PARIS',
    updated_date: '2023-04-05 23:10:12',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/0063224623?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780063224629?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063224629',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FPARIS%252FParis%252BHilton%252F9780063224629&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DPARIS%252BParis%252BHilton',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063224629&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DPARIS',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063224629%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DPARIS%2BParis%2BHilton%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b2e85766588626a134',
    list_name: 'Business Books',
    date: '2023-04-09T09:28:40.273Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/0593238710?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Bernie Sanders with John Nichols',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780593238714.jpg',
    book_image_width: 331,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/9dc136be-c9fa-5012-b1be-983468da1bab',
    contributor: 'by Bernie Sanders with John Nichols',
    contributor_note: '',
    created_date: '2023-04-05 23:10:12',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0593238710',
    primary_isbn13: '9780593238714',
    publisher: 'Crown',
    rank: 6,
    rank_last_week: 0,
    sunday_review_link: '',
    title: "IT'S OK TO BE ANGRY ABOUT CAPITALISM",
    updated_date: '2023-04-05 23:10:12',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/0593238710?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780593238714?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593238714',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FIT%252527S%252BOK%252BTO%252BBE%252BANGRY%252BABOUT%252BCAPITALISM%252FBernie%252BSanders%252Bwith%252BJohn%252BNichols%252F9780593238714&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DIT%252527S%252BOK%252BTO%252BBE%252BANGRY%252BABOUT%252BCAPITALISM%252BBernie%252BSanders%252Bwith%252BJohn%252BNichols',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593238714&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DIT%2527S%2BOK%2BTO%2BBE%2BANGRY%2BABOUT%2BCAPITALISM',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593238714%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DIT%2527S%2BOK%2BTO%2BBE%2BANGRY%2BABOUT%2BCAPITALISM%2BBernie%2BSanders%2Bwith%2BJohn%2BNichols%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b3e85766588626a19a',
    list_name: 'Business Books',
    date: '2023-04-01T00:00:00.000Z',
    age_group: '',
    amazon_product_url:
      'http://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman-ebook/dp/B00555X8OA?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Daniel Kahneman',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781429969352.jpg',
    book_image_width: 330,
    book_image_height: 490,
    book_review_link:
      'https://www.nytimes.com/2011/11/27/books/review/thinking-fast-and-slow-by-daniel-kahneman-book-review.html',
    book_uri: 'nyt://book/1e1ffccd-d526-5154-84de-1628b31454e9',
    contributor: 'by Daniel Kahneman',
    contributor_note: '',
    created_date: '2023-04-05 23:10:13',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0374533555',
    primary_isbn13: '9780374533557',
    publisher: 'Farrar, Straus & Giroux',
    rank: 9,
    rank_last_week: 0,
    sunday_review_link:
      'https://www.nytimes.com/2011/11/27/books/review/thinking-fast-and-slow-by-daniel-kahneman-book-review.html',
    title: 'THINKING, FAST AND SLOW',
    updated_date: '2023-04-05 23:10:13',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'http://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman-ebook/dp/B00555X8OA?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780374533557?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780374533557',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHINKING%25252C%252BFAST%252BAND%252BSLOW%252FDaniel%252BKahneman%252F9780374533557&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHINKING%25252C%252BFAST%252BAND%252BSLOW%252BDaniel%252BKahneman',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780374533557&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHINKING%252C%2BFAST%2BAND%2BSLOW',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780374533557%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHINKING%252C%2BFAST%2BAND%2BSLOW%2BDaniel%2BKahneman%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b2e85766588626a17a',
    list_name: 'Business Books',
    date: '2023-04-09T09:28:39.670Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/1401971903?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Lewis Howes',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781401971908.jpg',
    book_image_width: 333,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/3db2b56a-687b-503d-8957-97ffde177b13',
    contributor: 'by Lewis Howes',
    contributor_note: '',
    created_date: '2023-04-05 23:10:13',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1401971903',
    primary_isbn13: '9781401971908',
    publisher: 'Hay House',
    rank: 8,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'THE GREATNESS MINDSET',
    updated_date: '2023-04-05 23:10:13',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/1401971903?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781401971908?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781401971908',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BGREATNESS%252BMINDSET%252FLewis%252BHowes%252F9781401971908&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BGREATNESS%252BMINDSET%252BLewis%252BHowes',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781401971908&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BGREATNESS%2BMINDSET',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781401971908%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BGREATNESS%2BMINDSET%2BLewis%2BHowes%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b3e85766588626a1bc',
    list_name: 'Business Books',
    date: '2023-04-09T09:28:40.223Z',
    age_group: '',
    amazon_product_url:
      'http://www.amazon.com/Extreme-Ownership-U-S-Navy-SEALs-ebook/dp/B00VE4Y0Z2?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Jocko Willink and Leif Babin',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781466874961.jpg',
    book_image_width: 330,
    book_image_height: 495,
    book_review_link: '',
    book_uri: 'nyt://book/b0cec2f9-300f-5850-8c43-8a67152a96a5',
    contributor: 'by Jocko Willink and Leif Babin',
    contributor_note: '',
    created_date: '2023-04-05 23:10:13',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1250183863',
    primary_isbn13: '9781250183866',
    publisher: "St. Martin's",
    rank: 10,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'EXTREME OWNERSHIP',
    updated_date: '2023-04-05 23:10:13',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'http://www.amazon.com/Extreme-Ownership-U-S-Navy-SEALs-ebook/dp/B00VE4Y0Z2?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781250183866?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250183866',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FEXTREME%252BOWNERSHIP%252FJocko%252BWillink%252Band%252BLeif%252BBabin%252F9781250183866&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DEXTREME%252BOWNERSHIP%252BJocko%252BWillink%252Band%252BLeif%252BBabin',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250183866&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DEXTREME%2BOWNERSHIP',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250183866%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DEXTREME%2BOWNERSHIP%2BJocko%2BWillink%2Band%2BLeif%2BBabin%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
];
/* |=========================| Тестовий запит |=========================| */
// localStorage.setItem('shopping list', JSON.stringify(testBookArr));

const testLocalStorage = JSON.parse(localStorage.getItem('shopping list'));
// console.log(testLocalStorage);

renderShoppingList(testLocalStorage);
/* |=========================|  |=========================| */
const shoppingListCardRef = document.querySelectorAll('.remove-btn');
console.log(shoppingListCardRef);
