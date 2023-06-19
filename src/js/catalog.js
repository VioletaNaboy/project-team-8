import {getCategories, getTopBooks, getBooksByCategory, getBookById} from "./apiService"
const combinedFiction = document.querySelector(".print-e-book-fiction .gallery-and-genre-type");
const combinedNonfiction = document.querySelector(".print-e-book-non-fiction .gallery-and-genre-type");
const hardcoverFiction = document.querySelector(".hardcover-fiction .gallery-and-genre-type");
const hardcoverNonfiction = document.querySelector(".hardcover-non-fiction .gallery-and-genre-type")
const renderCategoryInObject = (category, object) => {
    getBooksByCategory(category).then(result => {
        object.insertAdjacentHTML('beforeend', `<div class="gallery">${result.data.map(element=>{return `<div class="card"><img src="${element.book_image}" class="book-cover"><div class="desc">
    <div class="desc">
    <p class="book-card-title">${element.title}</p>
    <p class="book-card-author">${element.author}</p>
    </div>
    </div></div>`}).join("")}</div>`);
})}
const renderSelectCategoryInObject = (category, object) => {
    getBooksByCategory(category).then(result => {
    object.insertAdjacentHTML('beforeend', `<div class="gallery-select">${result.data.map(element=>{return `<div class="card"><img src="${element.book_image}" class="book-cover"><div class="desc">
    <div class="desc">
    <p class="book-card-title">${element.title}</p>
    <p class="book-card-author">${element.author}</p>
    </div>
    </div></div>`}).join("")}</div>`);
})}
const categories = [{name: "Combined Print and E-Book Fiction", element: combinedFiction}, {name: "Combined Print and E-Book Nonfiction", element: combinedNonfiction}, {name: "Hardcover Fiction", element: hardcoverFiction}, {name: "Hardcover Nonfiction", element: hardcoverNonfiction}];
const renderBooksToCategories = (categories) => {
    categories.map(category => {
        renderCategoryInObject(category.name, category.element)
    })
    }
renderBooksToCategories(categories)
const list = document.querySelector(".category__list");
const catalog = document.querySelector(".catalog");
list.addEventListener("click", (e)=>{

    if (e.target.nodeName === "UL"){
        return
    }
    catalog.innerHTML = "";
    let categoryName = e.target.getAttribute("name");
    let categoryStrList = categoryName.split(" ");
    let categoryLastSpan = `<span>${categoryStrList[categoryStrList.length-1]}</span>`;
    catalog.insertAdjacentHTML("afterbegin", `<h1 class="catalog-header">${categoryStrList.slice(0, categoryStrList.length-1).join(" ")} ${categoryLastSpan}</h1>`)
    
    renderSelectCategoryInObject(categoryName, catalog);

})