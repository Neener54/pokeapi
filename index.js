'use strict'
const Path = require('path')
const Hoek = require('hoek')
const {Server} = require('hapi')

const server = new Server()

server.register(require('vision'), (err) => {
  Hoek.assert(!err, err)
  server.views({
    engines: {
      html: require('handlebars')
    },
    relativeTo: __dirname,
    path: 'templates'
  })
})

server.connection({
  host: 'localhost',
  port: 8000
})
server.route(require('./routes/routes'))

server.start((err) => {
  if (err) {
    throw err
  }

  console.log('Server is now running on Port 8000')
})
