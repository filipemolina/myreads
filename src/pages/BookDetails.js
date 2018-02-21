import React from 'react'
import ListBooksTitle from '../components/ListBooksTitle'
import OpenSearchButton from '../components/OpenSearchButton'
import BookInfo from '../components/BookInfo'
import PropTypes from 'prop-types'

export const BookDetails = (props) => (

	<div className="book-details">
  	<ListBooksTitle 
  		showBackButton={false} 
  		openMenuHandler={props.openMenuHandler}
  	/>
  	<BookInfo bookId={props.match.params.bookId} />
  	<OpenSearchButton />
  </div>

)

// Specifying the PropTypes for this Component
BookDetails.propTypes = {
	openMenuHandler: PropTypes.func,
	match: PropTypes.object,
}
