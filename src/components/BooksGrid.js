import React, { Component } from 'react'
import Book from './Book'

class BooksGrid extends Component {
  render() {

    // Receive the books from props
    const { books } = this.props

    return (
      <ol className="books-grid">

        {/* Show each book as a list item with a Book Component inside receiving the book from props */}
        {books.map((book) => (
          <li key={book.id}>
            <Book shelf={this.props.shelf} book={book} moveBookHandler={this.props.moveBookHandler}/>
          </li>
        ))}

      </ol>
    )
  }
}

export default BooksGrid
