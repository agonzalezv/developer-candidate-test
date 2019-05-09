'use strict'

// Initialize and fetch nedb object
const connect = require('../db-connector')
const db = connect()

// see https://www.apollographql.com/docs/apollo-server/essentials/data for further info in resolvers
module.exports = {
  Query: {
    Users: async (parent, args = {}, context, info) => {
      const filter = args.filter ? buildFilter(args) : {}
      const result = await queryData(filter)
      return result
    }
  }
}

// Create filter based on user input
const buildFilter = args => {
  const { filter } = args
  const { age, age_gte: ageGTE, age_lte: ageLTE, gender } = filter
  let bracket
  if (age) {
    bracket = age
  } else if (ageGTE) {
    bracket = { $gte: ageGTE }
  } else if (ageLTE) {
    bracket = { $lte: ageLTE }
  }
  return {
    ...(gender && { gender }),
    ...(bracket && { age: bracket })
  }
}

// search DB based on filter created above
const queryData = async (params = {}) => {
  return new Promise((resolve, reject) => {
    db.find(params, (err, doc) => {
      if (err) {
        reject(err)
      }
      resolve(doc)
    })
  })
}
