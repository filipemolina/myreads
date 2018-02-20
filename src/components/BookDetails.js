import React, { Component } from 'react'
import ListBooksTitle from './ListBooksTitle'
import OpenSearchButton from './OpenSearchButton'
import BookInfo from './BookInfo'

class BookDetails extends Component {
	render() {
	  return (
	  	<div className="book-details">
		  	<ListBooksTitle 
		  		showBackButton={false} 
		  		openMenuHandler={this.props.openMenuHandler}
		  	/>
		  	<BookInfo bookId={this.props.match.params.bookId} />
		  	<OpenSearchButton />
		  </div>
		)
	}
}

export default BookDetails