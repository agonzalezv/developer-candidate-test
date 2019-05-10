'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

// see https://graphql.org/learn/schema/#type-system for further info
const typeDefs = `
  type User {
    _id: ID
    gender: String!
    name: String!
    age: Int!
  }
  
  input UserFilter {
    age: Int
    age_gt: Int
    age_lt: Int
    gender: String
  }
  
  type Query {
    Users(filter: UserFilter): [User!]!
  }
  `

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({ typeDefs, resolvers })
