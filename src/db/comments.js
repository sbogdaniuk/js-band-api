const { flatten, times, uniqueId } = require('lodash')

const { faker } = require('../utils')
const books = require('./books')

const bookIds = books.map(d => d.id)

const generateComment = (comment) => {
  const { name, lorem } = faker
  return {
    user: [name.firstName(), name.lastName()].join(' '),
    title: lorem.sentence(),
    comment: lorem.paragraphs(),
    rating: Math.ceil((Math.random() * 3 + 2) * 10) / 10,
    ...comment,
  }
}

const comments = flatten(bookIds.map(bookId => times(3, () => generateComment({
  bookId,
  id: uniqueId(),
}))))

module.exports = comments
