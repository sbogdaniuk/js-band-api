const { find } = require('lodash')

const { faker } = require('./utils')

const genToken = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

const users = []

const getUser = params => find(users, params)

const createUser = (params = {}) => {
  const { username = faker.name.findName() } = params
  const newUser = {
    username,
    avatar: `https://api.adorable.io/avatars/100/${username.toLowerCase()}.png`,
    token: genToken(),
  }

  users.push(newUser)
  return newUser
}

module.exports = {
  getUser,
  createUser,
}
