import React, { Component } from 'react'
import BookShelf from './BookShelf'
import Spinner from './Spinner'

// Imports from Material UI
import { Tabs, Tab } from 'material-ui/Tabs'

class ListBooksContent extends Component {
  render() {
    // Receive the books array from props
    const { books } = this.props

    // Separate the books by the shelves they occupy
    const booksCurrentlyReading = books.filter((book) => book.shelf === "currentlyReading")
    const booksWantToRead = books.filter((book) => book.shelf === "wantToRead")
    const booksRead = books.filter((book) => book.shelf === "read")

    return(
      <div className="list-books-content">
        <div>
          <Tabs>
            <Tab label="Currently Reading">
                {/* Show the input for filtering the list of books */}
                {this.props.isSearching && (
                  <div className="filter-books">
                      <input type="text" placeholder="Filter by title or author"/>
                  </div>

                )}

                {/* If there are no books, show the Spinner Component */}
                {books.length === 0 && (
                  <Spinner width="30vh" height="30vh" top="30vh" left="50%" marginLeft="-15vh"/>
                )}

                <BookShelf
                  shelf="currentlyReading"
                  books={booksCurrentlyReading}
                  moveBookHandler={this.props.moveBookHandler}
                />
            </Tab>
            <Tab label="Want To Read">
                <BookShelf shelf="wantToRead" books={booksWantToRead} moveBookHandler={this.props.moveBookHandler}/>
            </Tab>
            <Tab label="Read">
                <BookShelf shelf="read" books={booksRead} moveBookHandler={this.props.moveBookHandler}/>
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default ListBooksContent
