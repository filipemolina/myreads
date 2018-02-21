import escapeRegExp from 'escape-string-regexp'
import React, { Component } from 'react'
import { BookShelf } from './BookShelf'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import sortBy from 'sort-by'

class BookTab extends Component {

  state = {
    query : ""
  }

  // Change the query when the user types on the filter field
  handleChange = (query) => {
    this.setState({ query })
  }

  render() {

    const { books, shelf, isSearching } = this.props
    const { query } = this.state

    // If the user is searching, show only books that match the query

    let showingBooks

    if(isSearching && this.state.query){
      const match = new RegExp(escapeRegExp(query), 'i')
      showingBooks = books.filter((book) => match.test(book.title))
    } else {
      showingBooks = books
    }

    showingBooks.sort(sortBy('title'))

    return (
      <div>
        {/* Show the input for filtering the list of books */}
        {isSearching && (
          <div className="filter-books">
              <input
                onChange={(e) => this.handleChange(e.target.value)}
                type="text"
                placeholder="Filter by title"
              />
          </div>
        )}

        {/* If there are no books, show the Spinner Component */}
        {books.length === 0 && (
          <div style={{ height: "400px"}}>
            <Spinner width="20vh" height="20vh"/>
          </div>
        )}

        <BookShelf
          shelf={shelf}
          books={showingBooks}
          moveBookHandler={this.props.moveBookHandler}
        />
      </div>
    )
  }
}

// Specifying the PropTypes for this Component
BookTab.propTypes = {
  books: PropTypes.array,
  shelf: PropTypes.string,
  isSearching: PropTypes.bool,
  moveBookHandler: PropTypes.func
}

export default BookTab
