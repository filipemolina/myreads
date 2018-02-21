import React from 'react'
import PropTypes from 'prop-types'
import BookTab from './BookTab'

// Imports from Material UI
import { Tabs, Tab } from 'material-ui/Tabs'


export const ListBooksContent = (props) => {
  // Receive the books array from props
  const { books } = props

  // Separate the books by the shelves they occupy
  const booksCurrentlyReading = books.filter((book) => book.shelf === "currentlyReading")
  const booksWantToRead = books.filter((book) => book.shelf === "wantToRead")
  const booksRead = books.filter((book) => book.shelf === "read")

  return(
    <div className="list-books-content">
      <div>
        <Tabs>
          <Tab label="Currently Reading">
            <BookTab
              shelf="currentlyReading"
              isSearching={props.isSearching}
              books={booksCurrentlyReading}
              moveBookHandler={props.moveBookHandler}
            />
          </Tab>
          <Tab label="Want To Read">
            <BookTab
              shelf="wantToRead"
              isSearching={props.isSearching}
              books={booksWantToRead}
              moveBookHandler={props.moveBookHandler}
            />
          </Tab>
          <Tab label="Read">
            <BookTab
              shelf="Read"
              isSearching={props.isSearching}
              books={booksRead}
              moveBookHandler={props.moveBookHandler}
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

// Specifying the PropTypes for this Component
ListBooksContent.propTypes = {
  books: PropTypes.array,
  isSearching: PropTypes.bool,
  moveBookHandler: PropTypes.func,
  
}

export default ListBooksContent
