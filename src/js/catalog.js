import {getCategories, getTopBooks, getBooksByCategory, getBookById} from "./apiService"
const combinedFiction = document.querySelector(".print-e-book-fiction .gallery-and-genre-type .gallery");
const combinedNonfiction = document.querySelector(".print-e-book-non-fiction .gallery-and-genre-type .gallery");
const hardcoverFiction = document.querySelector(".hardcover-fiction .gallery-and-genre-type .gallery");
const hardcoverNonfiction = document.querySelector(".hardcover-non-fiction .gallery-and-genre-type .gallery")
const renderCategoryInObject = (category, object) => {
    getBooksByCategory(category).then(result => {
    object.insertAdjacentHTML('beforeend', result.data.slice(0, 5).map(element=>{return `<div class="card"><img src="${element.book_image}" class="book-cover"><div class="desc">
    <div class="desc">
    <p class="book-card-title">${element.title}</p>
    <p class="book-card-author">${element.author}</p>
    </div>
    </div></div>`}).join(""));
})}
const categories = [{name: "Combined Print and E-Book Fiction", element: combinedFiction}, {name: "Combined Print and E-Book Nonfiction", element: combinedNonfiction}, {name: "Hardcover Fiction", element: hardcoverFiction}, {name: "Hardcover Nonfiction", element: hardcoverNonfiction}];
const renderBooksToCategories = (categories) => {
    categories.map(category => {
        renderCategoryInObject(category.name, category.element)
    })
    }
renderBooksToCategories(categories)