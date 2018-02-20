import React, { Component } from 'react'
import ListBooksTitle from './ListBooksTitle'
import ListBooksContent from './ListBooksContent'
import OpenSearchButton from './OpenSearchButton'

class BookList extends Component {

  state = {
    isSearching : false,
  }

  toggleSearch = () => {
    this.setState((prevState) => ({
      isSearching : !prevState.isSearching
    }));
  }

  render() {
    return (
      <div className="list-books">
        <ListBooksTitle 
          clickHandler={this.toggleSearch} 
          isSearching={this.state.isSearching}
          showBackButton={false}
          openMenuHandler={this.props.openMenuHandler}
        />
        <ListBooksContent
          books={this.props.books}
          moveBookHandler={this.props.moveBookHandler}
          isSearching={this.state.isSearching}
        />
        <OpenSearchButton />
      </div>
    )
  }

}

export default BookList
