const { find, omit } = require('lodash')

const { faker } = require('./utils')

const genToken = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

const users = [{
  password: '1234567890',
  email: 'js-band@ciklum.com',
  name: 'John Doe',
  avatar: faker.image.avatar(),
  token: genToken(),
}]

const getUser = params => omit(find(users, params), ['password'])

module.exports = {
  getUser,
}
