import {getCategories, getTopBooks, getBooksByCategory, getBookById} from "./apiService"

const combinedFiction = document.querySelector(".print-e-book-fiction .gallery");
const combinedNonfiction = document.querySelector(".print-e-book-nonfiction .gallery");
const hardcoverFiction = document.querySelector(".hardcover-fiction .gallery");
const hardcoverNonfiction = document.querySelector(".hardcover-nonfiction .gallery")

const renderCategory = (category) => {
    getBooksByCategory(category).then(result => {
        let string = "";
        result.data.map(element => {
        string += `<div class="card">
            <img src="${element.book_image}" alt="${element.alt}" class="book-cover">
        <div class="desc">
           <p class="book-title">${element.title}</p>
           <p class="book-author">${element.author}</p>
       </div>
   </div>` 
    })
    return string;
})}
renderCategory("Combined Print and E-Book Fiction");
const categories = {combinedFiction : {name: "Combined Print and E-Book Fiction", element: combinedFiction}, combinedNonfiction : {name: "Combined Print and E-Book Nonfiction", element: combinedNonfiction}, hardcoverFiction : {name: "Hardcover Fiction", element: hardcoverFiction}, hardcoverNonfiction : {name: "Hardcover Nonfiction", element: hardcoverNonfiction}};

const renderBooksToCategories = (categories) => {
    categories.forEach(category => {
        category.element.insertAdjacentHTML("afterbegin", renderCategory(category.name));
    })
}
