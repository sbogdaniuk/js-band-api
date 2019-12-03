const { isEmpty } = require('lodash')

const { getUser } = require('../users')

const login = (req, res) => {
  const { email, password } = req.body || {}
  const user = getUser({ email, password })

  if (isEmpty(user)) {
    res
      .status(400)
      .json({
        message: 'Invalid credentials'
      })
  } else {
    res
      .status(200)
      .json(user)
  }
}

module.exports = login
