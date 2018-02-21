import React from 'react'
import PropTypes from 'prop-types'

// Imports from Material UI
import IconButton from 'material-ui/IconButton'
import ActionSearch from 'material-ui/svg-icons/action/search'

export const SearchBar = (props) => (

  <div className="search-books-bar">
    <IconButton><ActionSearch /></IconButton>
    <div className="search-books-input-wrapper">
      {/*
        NOTES: The search from BooksAPI is limited to a particular set of search terms.
        You can find these search terms here:
        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
        you don't find a specific author or title. Every search is limited by search terms.
      */}
      <input 
        onChange={(e) => props.handleSearch(e.target.value)} 
        type="text" 
        placeholder="Search by title or author"
      />

    </div>
  </div>

)

// Specifying the PropTypes for this Component
SearchBar.propTypes = {
  handleSearch: PropTypes.func,
}
