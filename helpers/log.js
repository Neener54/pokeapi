const {Template} = require('handlebars')

Template.registerHelper('log', (data) => {
  'use strict'
  console.log(data)
})
