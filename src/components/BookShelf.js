import React, { Component } from 'react'
import BooksGrid from './BooksGrid'

class BookShelf extends Component {

  render() {

    const { shelf } = this.props

    return (
      <div className="bookshelf">
        <div className="bookshelf-books">
          <BooksGrid 
            shelf={shelf} 
            books={this.props.books} 
            moveBookHandler={this.props.moveBookHandler}
          />
        </div>
      </div>
    )
  }
}

export default BookShelf
