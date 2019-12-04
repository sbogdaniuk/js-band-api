const { find } = require('lodash')

const genToken = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

const users = []

const getUser = username => {
  const found = find(users, { username })

  if (found) return found

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
}
