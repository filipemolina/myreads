import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {

  // The BookShelfChanger Component calls this method with the new shelf the current book must be placed on,
  // then, the moveBookHandler from the App Component is called to actually move the book. This way the state
  // is kept concise between all pages of the App
  changeShelf = (shelf) => {
    this.props.moveBookHandler(this.props.book, shelf)
  }

  render() {

    // Receive the book from props
    const { book } = this.props

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
          <BookShelfChanger shelf={this.props.shelf} onMoveBook={this.changeShelf} book={book}/>
        </div>
        <div className="book-title">{book.title}</div>

        {/* iterate through all authors of this book */}
        {book.authors.map((author) => (
          <div key={author} className="book-authors">{author}</div>
        ))}
      </div>
    )
  }
}

export default Book
