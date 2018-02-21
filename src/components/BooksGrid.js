import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

export const BooksGrid = (props) => {
  // Receive the books from props
  const { books } = props

  return (
    <ol className="books-grid">

      {/* Test if the books variable is set and is an array. If so, map through it to show each book as a list item with a Book Component inside */}
      {Array.isArray(books) && books.map((book) => (
        <li key={book.id}>
          <Book 
            book={book} 
            moveBookHandler={props.moveBookHandler}
          />
        </li>
      ))}

    </ol>
  )
}

// Specifying the PropTypes for this Component
BooksGrid.propTypes = {
  books: PropTypes.array,
  moveBookHandler: PropTypes.func,
}
