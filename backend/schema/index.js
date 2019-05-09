'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

const typeDefs = `
  type User {
    _id: ID
    gender: String!
    name: String!
    age: Int!
  }
  
  input UserFilter {
    age: Int
    age_gte: Int
    age_lte: Int
    gender: String
  }
  
  type Query {
    Users(filter: UserFilter): [User!]!
  }
  `

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({ typeDefs, resolvers })
