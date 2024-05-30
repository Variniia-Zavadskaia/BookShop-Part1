'use strict'


function onInit() {
    renderBooks()
}

function renderBooks() {
    var books = getBooks()
    const elBooksList = document.querySelector('.book-list')
    const strHtmls = books.map(book =>
        `<tr>
            <td>${book.title}/td>
        
            <td>${book.price}</td>

            <td>
                <button class="read">Read</button>
                <button onclick=" " class="update">Update</button>
                <button onclick=" " class="delete">Delete</button>
            </td>
        </tr>`)
    elBooksList.innerHTML = strHtmls.join('')
}

