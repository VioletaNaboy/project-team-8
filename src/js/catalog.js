import {getCategories, getTopBooks, getBooksByCategory, getBookById} from "./apiService"

const combinedFiction = document.querySelector(".print-e-book-fiction .gallery");
const combinedNonfiction = document.querySelector(".print-e-book-nonfiction .gallery");
const hardcoverFiction = document.querySelector(".hardcover-fiction .gallery");
const hardcoverNonfiction = document.querySelector(".hardcover-nonfiction .gallery")

const renderCategory = (category) => {
    let string = "";
    getBooksByCategory(category).then(result => result.data.forEach(element => {
       string += `<div class="card">
       <img src="${element.url}" alt="${element.alt}" class="book-cover">
       <div class="desc">
           <p class="book-title">${element.title}</p>
           <p class="book-author">${element.author}</p>
       </div>
   </div>` 
    }))
    return string
}

const categories = [combinedFiction, combinedNonfiction, hardcoverFiction, hardcoverNonfiction];

const renderBooksToCategories = (categories) => {
    categories.forEach(category => {
        category.insertAdjacentHTML("afterbegin", renderCategory(category));
    })
}
