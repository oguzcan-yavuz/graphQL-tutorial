import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getBookQuery } from '../queries/queries'

class BookDetails extends Component {
  displayBookDetails () {
    const { book } = this.props.data
    if (book) {
      return (
        <div>
          <p>Book name: {book.name}</p>
          <p>Book genre: {book.genre}</p>
          <p>Author: {book.author.name}</p>
          <p>All books by this author:</p>
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
