import React, { Component } from 'react'
import Book from './Book'

class BooksGrid extends Component {
  render() {

    // Receive the books from props
    const { books } = this.props

    return (
      <ol className="books-grid">

        {/* Test if the books variable is set and is an array. If so, map through it to show each book as a list item with a Book Component inside */}
        {Array.isArray(books) && books.map((book) => (
          <li key={book.id}>
            <Book book={book} moveBookHandler={this.props.moveBookHandler}/>
          </li>
        ))}

      </ol>
    )
  }
}

export default BooksGrid
