import React, { Component } from 'react'
import BookTab from './BookTab'

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
              <BookTab
                shelf="currentlyReading"
                isSearching={this.props.isSearching}
                books={booksCurrentlyReading}
                moveBookHandler={this.props.moveBookHandler}
              />
            </Tab>
            <Tab label="Want To Read">
              <BookTab
                shelf="wantToRead"
                isSearching={this.props.isSearching}
                books={booksWantToRead}
                moveBookHandler={this.props.moveBookHandler}
              />
            </Tab>
            <Tab label="Read">
              <BookTab
                shelf="Read"
                isSearching={this.props.isSearching}
                books={booksRead}
                moveBookHandler={this.props.moveBookHandler}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default ListBooksContent
