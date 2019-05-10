'use strict'

const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')

const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')

const schema = require('./schema/index')

const start = async () => {
  const app = express()
  app.use(cors())

  app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))

  // browser playground (optional)
  app.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql'
    })
  )

  const PORT = 4000
  app.listen(PORT, () => {
    console.log(`GraphQL server running on port ${PORT}.`)
  })
}

start()
