'use strict'

var gBooks

function getBooks(){
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

