import React, { Component } from 'react'
import ListBooksTitle from '../components/ListBooksTitle'
import { ListBooksContent } from '../components/ListBooksContent'
import OpenSearchButton from '../components/OpenSearchButton'
import PropTypes from 'prop-types'

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
          showFilterButton={true}
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

// Specifying the PropTypes for this Component
BookList.propTypes = {
  books: PropTypes.array,
  openMenuHandler: PropTypes.func,
  moveBookHandler: PropTypes.func,
}

export default BookList
