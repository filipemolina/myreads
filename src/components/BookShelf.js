import React from 'react'
import { BooksGrid } from './BooksGrid'
import PropTypes from 'prop-types'

export const BookShelf = (props) => {

  const { shelf } = props

  return (
    <div className="bookshelf">
      <div className="bookshelf-books">
        <BooksGrid 
          shelf={shelf} 
          books={props.books} 
          moveBookHandler={props.moveBookHandler}
        />
      </div>
    </div>
  )
}

// Specifying the PropTypes for this Component
BookShelf.propTypes = {
  shelf: PropTypes.string,
  books: PropTypes.array,
  moveBookHandler: PropTypes.func
}
