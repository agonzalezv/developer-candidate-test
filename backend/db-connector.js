'use strict'

const Datastore = require('nedb')
module.exports = () => {
  return new Datastore({
    filename: 'users.json',
    autoload: true
  })
}
