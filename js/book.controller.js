'use strict'


function onInit() {
    renderBooks();
}

function renderBooks() {
    var books = gBooks
    const elBooksList = document.querySelector('.book-list')
    const strHtmls = books.map(book =>
        `<tr>
            <td>${book.title}</td>
        
            <td>${book.price}</td>

            <td>
                <button class="read">Read</button>
                <button onclick="onUpdateBook('${book.id}')">Update</button>
                <button onclick="onRemoveBook('${book.id}')" class="delete">Delete</button>
            </td>
        </tr>`)
    elBooksList.innerHTML = strHtmls.join('');
}

function onRemoveBook(bookId) {

    removeBook(bookId);

    renderBooks();
}

function onUpdateBook(bookId) {

    var newPrice = +prompt('New price:');
    updatePrice(bookId, newPrice);

    renderBooks();
}

function onAddBook(){
    var newTitle = prompt('New title:');
    var newPrice = +prompt('New price:');

    addBook(newTitle, newPrice);

    renderBooks();
}