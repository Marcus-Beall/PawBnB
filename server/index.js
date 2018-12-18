var express = require('express')
var bp = require('body-parser')
var server = express()
var cors = require('cors')
var port = process.env.PORT || 3000

server.use(express.static(__dirname))

var whitelist = ['http://localhost:8080'];
var corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
server.use(cors(corsOptions))

require('./assets/db/mlab-config')


server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

let auth = require('./assets/auth/routes')
server.use(auth.session)
server.use(auth.router)


server.use((req, res, next) => {
  if (!req.session.uid) {
    return res.status(401).send({
      error: 'please login to continue'
    })
  }
  next()
})

let userRoutes = require('./assets/router/users')
server.use('/api/users', userRoutes)
let hostRoutes = require('./assets/router/hosts')
server.use('/api/hosts', hostRoutes)

server.use('*', (req, res, next) => {
  res.status(404).send({
    error: 'No matching routes'
  })
})


server.listen(port, () => {
  console.log('server running on port', port)
})