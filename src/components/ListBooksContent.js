import React, { Component } from 'react'
import BookShelf from './BookShelf'

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
          <BookShelf shelf="currentlyReading" books={booksCurrentlyReading} moveBookHandler={this.props.moveBookHandler}/>
          <BookShelf shelf="wantToRead" books={booksWantToRead} moveBookHandler={this.props.moveBookHandler}/>
          <BookShelf shelf="read" books={booksRead} moveBookHandler={this.props.moveBookHandler}/>
        </div>
      </div>
    )
  }
}

export default ListBooksContent
