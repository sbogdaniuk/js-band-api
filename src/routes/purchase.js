const { get, isEmpty } = require('lodash')

const purchase = (req, res) => {
  const ids = get(req.body, 'books')

  if (isEmpty(ids)) {
    res
      .status(400)
      .json({
        message: 'Please provide list of ids in format: { books: [...] }'
      })
  } else {
    res
      .status(200)
      .json({
        message: 'Thank you for purchasing books in our store!'
      })
  }
}

module.exports = purchase
