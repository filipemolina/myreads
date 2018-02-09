import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {

  cover = ""

  componentDidMount(){

  }

  // The BookShelfChanger Component calls this method with the new shelf the current book must be placed on,
  // then, the moveBookHandler from the App Component is called to actually move the book. This way the state
  // is kept concise between all pages of the App
  changeShelf = (shelf) => {
    this.props.moveBookHandler(this.props.book, shelf)
  }

  render() {

    // Receive the book from props
    const { book } = this.props

    // To avoid errors of inconsistency, check if book.imageLinks exists, and then try to get one of the properties.
    // First thumbnail and then smallThumbnail
    if(typeof book.imageLinks !== 'undefined'){
      if(typeof book.imageLinks.thumbnail !== 'undefined'){
        this.cover = book.imageLinks.thumbnail
      } else {
        this.cover = book.imageLinks.smallThumbnail
      }
    } else {
      this.cover = "icons/bookCover.jpg"
    }

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.cover}")` }}></div>
          <BookShelfChanger shelf={book.shelf} onMoveBook={this.changeShelf} book={book}/>
        </div>
        <div className="book-title">{book.title}</div>

        {/* Test if the book has authors (magazines doesn't). If so, iterate through them */}
        {typeof book.authors !== 'undefined' && book.authors.map((author) => (
          <div key={author} className="book-authors">{author}</div>
        ))}
      </div>
    )
  }
}

export default Book
