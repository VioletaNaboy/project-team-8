import { getBookById } from '../apiService';
import { renderBook } from './renderModal';

function getArrBookId(id) {
  return getBookById(id)
    .then(result => result.data)
    .catch(err => console.log(err));
}

function getDataBooksById(id) {
  getBookById(id)
    .then(result => {
      return result.data;
    })
    .then(({ book_image, title, author, description, buy_links }) => {
      renderBook(id, book_image, title, author, description, buy_links);
    })
    .catch(err => console.log(err));
}

export { getArrBookId, getDataBooksById };
