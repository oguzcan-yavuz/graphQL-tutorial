import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import BookList from './components/BookList'
import AddBook from './components/AddBook'
import { SERVER_URI } from './config.json'

const client = new ApolloClient({
  uri: SERVER_URI
})

class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <div id='main'>
          <h1>yvz's Reading List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    )
  }
}

export default App
