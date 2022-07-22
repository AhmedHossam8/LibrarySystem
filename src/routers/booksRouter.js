const express = require ('express')
let booksJsonData = require('../../books_db.json');

const booksRouter = express.Router();


booksRouter.route("/").get((request, response) => {
    // home html page
    response.render("Books", books = booksJsonData)
})

booksRouter.route("/:isbn").get((request, response) => {
    var isbn = request.params
    var result = booksJsonData.filter(obj => obj.title === isbn.isbn)
    response.render("book", book = result)
})

module.exports = booksRouter;