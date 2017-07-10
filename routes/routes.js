const https = require('https')

module.exports = [{
  method: 'GET',
  path: '/',
  handler (request, reply) {
    'use strict'
    reply.view('index.jsx')
  }
}, {
  method: 'GET',
  path: '/pokemon/{id}',
  handler (request, reply) {
    let options = {
      hostname: 'pokeapi.co',
      port: 443,
      path: `/api/v2/pokemon/${request.params.id}/`,
      method: 'GET'
    }
    let body = ''
    let req = https.request(options, (res) => {
      'use strict'
      res.on('data', (data) => {
        body += data
      })
      res.on('end', () => {
        let parsed = JSON.parse(body)
        reply.view('show.jsx', parsed)
      })
    })

    req.on('error', (e) => {
      'use strict'
      console.log(e)
    })
    req.end()
  }
}]
