import React, { Component } from 'react'
import ListBooksTitle from './ListBooksTitle'
import SearchBar from './SearchBar'
import BooksGrid from './BooksGrid'
import * as BooksAPI from '../BooksAPI'

class Search extends Component {

  state = {
    results: []
  }

  // Method that is called by the SearchBar Component every time the search input changes.
  // Receives a string with the query and sets the state of this component according to the response
  searchBooks(query){

    // Interval that the app should wait before sending a request for the search method on the BooksAPI (in milliseconds)
    const interval = 300

    // Variable used to store the result of setTimeout and then be able to clear it
    const timeout = null

    // Test if query is not an empty string
    if(query.trim()){
      // If the timeout is already set, clear it, so the search is not done multiple times
      clearTimeout(this.timeout)
      // Wait for (interval) milliseconds before calling the API
      this.timeout = setTimeout(() => {
        // The API returns a promise...
        BooksAPI.search(query).then((results) => {
          //Avoid errors if no results are given
          if(Array.isArray(results)){
            // Iterate through all books in the result array to see if they are alread on one of the bookshelves
            // using the getShelf method defined on the Search Component
            const results_with_shelf = results.map((book) => {
              book.shelf = this.props.getShelf(book.id)
              return book
            })
            //Set the state with the result of the query
            this.setState({
              results : results_with_shelf
            })
          } else {
            // Set the results to an empty array
            this.setState({
              results: []
            })
          }
        })

      }, this.interval)
    }
  }

  render() {
    return(
      <div className="search-books">
        <ListBooksTitle showBackButton={true}/>
        <SearchBar handleSearch={(query) => this.searchBooks(query)} />
        <div className="search-books-results">
          <BooksGrid
            books={this.state.results}
            moveBookHandler={this.props.moveBookHandler}
          />
        </div>
      </div>
    )
  }
}

export default Search
