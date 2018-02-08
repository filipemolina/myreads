import React, { Component } from 'react'
import BooksGrid from './BooksGrid'

class BookShelf extends Component {

  // Method that converts camelcase Strings to "normal case"
  capitalize(text){
    return text
    // insert a space before all caps
    .replace(/([A-Z])/g, ' $1')
    // uppercase the first character
    .replace(/^./, function(str){ return str.toUpperCase(); })
  }

  render() {

    const { shelf } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.capitalize(shelf)}</h2>
        <div className="bookshelf-books">
          <BooksGrid shelf={shelf} books={this.props.books} moveBookHandler={this.props.moveBookHandler}/>
        </div>
      </div>
    )
  }
}

export default BookShelf
