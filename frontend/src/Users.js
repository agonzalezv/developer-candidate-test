import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import User from './User'

const Users = ({ match }) => {
  const { params } = match
  const query = fetchQuery(params)
  return (
    <Query query={query}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading....</p>
        if (error) return <p>Error when loading. Is your server running?...</p>
        return (
          <div className="row">
            {data.Users.map(user => (
              <User key={user._id} user={user} />
            ))}
          </div>
        )
      }}
    </Query>
  )
}

const fetchQuery = params => {
  switch (params.type) {
    case 'all':
      return gql`
        {
          Users {
            age
            name
            gender
            _id
          }
        }
      `
    case 'male':
      return gql`
        {
          Users(filter: { gender: "male" }) {
            age
            name
            gender
            _id
          }
        }
      `
    case 'female':
      return gql`
        {
          Users(filter: { gender: "female" }) {
            age
            name
            gender
            _id
          }
        }
      `
    case 'under30':
      return gql`
        {
          Users(filter: { age_lt: 30 }) {
            age
            name
            gender
            _id
          }
        }
      `
    case 'over30':
      return gql`
        {
          Users(filter: { age_gt: 30 }) {
            age
            name
            gender
            _id
          }
        }
      `
    default:
      return gql`
        {
          Users {
            age
            name
            gender
            _id
          }
        }
      `
  }
}

export default Users
