'use strict'

var gBooks = getBooks();

function getBooks() {
    var books = [

        {
            id: makeId(),
            title: 'Lord of the Rings',
            price: 220,
            imgUrl: 'lori-ipsi.jpg'
        },
        {
            id: makeId(),
            title: 'Martin Eden',
            price: 150,
            imgUrl: 'lori-ipsi.jpg'
        },
        {
            id: makeId(),
            title: 'The Shining',
            price: 75,
            imgUrl: 'lori-ipsi.jpg'
        },
    ]

    return books;
}

function getBookById(bookId){
    const book = gBooks.find(book => book.id === bookId);
    return book;
}

function removeBook(bookId) {

    const idx = gBooks.findIndex(book => book.id === bookId);
    gBooks.splice(idx, 1);
}

function updatePrice(bookId, newPrice) {

    const idx = gBooks.findIndex(book => book.id === bookId);
    gBooks[idx].price = newPrice;
}

function addBook(newTitle, newPrice){

    var newBook = {
        id: makeId(),
        title: newTitle,
        price: newPrice
    }

    gBooks.push(newBook);
}

