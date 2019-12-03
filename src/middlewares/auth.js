const { find, isEmpty, split, last } = require('lodash')

const { getUser } = require('../users')

const isAuthorized = (req) => {
  const token = last(split(req.get('Authorization'), ' '))
  const user = getUser({ token })
  return !isEmpty(user)
}

const skipAuthRoutes = [
  { method: 'POST', url: '/login' },
]

const skipAuth = (req) => {
  const { method, url } = req
  return !isEmpty(find(skipAuthRoutes, { method, url }))
}

const auth = (req, res, next) => {
  if (!skipAuth(req) && !isAuthorized(req)) {
    res
      .status(401)
      .json({ message: 'Unauthorized' })
  } else {
    // continue to JSON Server router
    next()
  }
}

module.exports = auth
