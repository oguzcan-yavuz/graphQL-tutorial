import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getBookQuery } from '../queries/queries'

class BookDetails extends Component {
  displayBookDetails () {
    const { book } = this.props.data
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <h4>Genre: {book.genre}</h4>
          <h4>Author: {book.author.name}</h4>
          <h4>All books by this author:</h4>
          <ul className='all-books'>
            {book.author.books.map(book => <li key={book.id}>{book.name}</li>)}
          </ul>
        </div>
      )
    } else {
      return <p>No book selected...</p>
    }
  }

  render () {
    return (
      <div id='book-details'>
        {this.displayBookDetails()}
      </div>
    )
  }
}

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(BookDetails)
