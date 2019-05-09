'use strict'

const connect = require('../db-connector')
const db = connect()

module.exports = {
  Query: {
    Users: async (parent, args = {}, context, info) => {
      const filter = args.filter ? buildFilter(args) : {}
      const result = await queryData(filter)
      return result
    }
  }
}

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
