const data = require('./db.json')

const generateBook = (book) => ({
  ...book,
  price: Math.ceil((Math.random() * 50 + 10) * 100) / 100,
  count: Math.ceil(Math.random() * 15 + 2)
})

const books = data.books.map((book, i) => generateBook({
  id: String(i + 1),
  ...book,
}))

module.exports = books
