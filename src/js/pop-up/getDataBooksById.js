import { getBookById } from '../apiService'
import { renderBook } from './renderModal';

async function getDataBooksById(id) {
    await getBookById(id)
      .then(result => {
        return result.data;
      })
      .then(({ book_image, title, author, description, buy_links }) =>
        renderBook(id, book_image, title, author, description, buy_links)
      )
      .catch(err => console.log(err));
    };

    export { getDataBooksById };