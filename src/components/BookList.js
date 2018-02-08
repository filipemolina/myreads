import React, { Component } from 'react'
import ListBooksTitle from './ListBooksTitle'
import ListBooksContent from './ListBooksContent'
import OpenSearchButton from './OpenSearchButton'

class BookList extends Component {

  render() {
    return (
      <div className="list-books">
        <ListBooksTitle />
        <ListBooksContent books={this.props.books} moveBookHandler={this.props.moveBookHandler}/>
        <OpenSearchButton />
      </div>
    )
  }

}

export default BookList
