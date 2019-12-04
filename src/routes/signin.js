const { getUser, createUser } = require('../users')

const signin = (req, res) => {
  const { username } = req.body || {}
  const { length } = username
  if (length > 3 && length < 17) {
    const user = getUser({ username }) || createUser({ username })
    res
      .status(200)
      .json(user)
  } else {
    res
      .status(400)
      .json({
        message: 'Invalid credentials'
      })
  }
}

module.exports = signin
