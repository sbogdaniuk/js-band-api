const jsonServer = require('json-server')
const server = jsonServer.create()
const db = require('./db')
const { auth } = require('./middlewares')
const { signin, purchase } = require('./routes')

const PORT = 3000
const router = jsonServer.router(db())
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(auth)

server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    switch (req.url) {
      case '/signin':
        signin(req, res, next)
        break
      case '/purchase':
        purchase(req, res, next)
        break
      default:
        //
    }
  } else {
    // Continue to JSON Server router
    next()
  }
})

server.use(router)
server.listen(PORT, () => {
  console.log(`JSON Server is running! Open http://localhost:${PORT}`)
})
