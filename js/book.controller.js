'use strict'


function onInit() {
    renderBooks();
}

function renderBooks() {
    var books = getBooks();
    const elBooksList = document.querySelector('.book-list')
    const strHtmls = books.map(book =>
        `<tr>
            <td class="title">${book.title}</td>
        
            <td class="price">${book.price}</td>

            <td class="active">
                <button class="read" onclick="onShowDetails('${book.id}')">Read</button>
                <button class="update" onclick="onUpdateBook('${book.id}')">Update</button>
                <button class="delete" onclick="onRemoveBook('${book.id}')" class="delete">Delete</button>
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

function onShowDetails(bookId){
    const elModal = document.querySelector('.modal');
    const elData = elModal.querySelector('pre');
    
    const todo = getBookById(bookId);
    
    elData.innerText = JSON.stringify(todo, null, 2);
    elModal.showModal();
}