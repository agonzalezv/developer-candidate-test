import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Users from './Users'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
})

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div className="container">
        <nav className="nav">
          <Link className="nav-link" to="/all">
            Everyone
          </Link>
          <Link className="nav-link" to="/male">
            Male
          </Link>
          <Link className="nav-link" to="/female">
            Female
          </Link>
          <Link className="nav-link" to="/over30">
            Over 30
          </Link>
          <Link className="nav-link" to="/under30">
            Under 30
          </Link>
        </nav>
        <Route path="/:type" component={Users} />
      </div>
    </Router>
  </ApolloProvider>
)

export default App
