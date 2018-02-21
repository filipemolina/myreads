import React, { Component } from 'react'
import Spinner from './Spinner'
import Rating from './Rating'
import PropTypes from 'prop-types'

import * as BooksAPI from '../BooksAPI'
import "./BookInfo.css"

// Imports from Material UI
import { Card, CardText, CardMedia, CardHeader, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class BookInfo extends Component {

	state = {
		isExpanded: false,
		book: null,
		authors: "",
		cover: ""
	}

	toggleText(){
		this.setState((prevState) => ({
			isExpanded: !prevState.isExpanded
		}))
	}

	componentDidMount() {
		// Make a call for the provided BooksApi to get all the info of the book
		BooksAPI.get(this.props.bookId).then((book) => {
			
			const authors = book.authors ? book.authors.join(", ") : ""

			let cover = ""

			// To avoid errors of inconsistency, check if book.imageLinks exists, and then try to get one of the properties.
	    // First thumbnail and then smallThumbnail
	    if(typeof book.imageLinks !== 'undefined'){
	      if(typeof book.imageLinks.thumbnail !== 'undefined'){
	        cover = book.imageLinks.thumbnail
	      } else {
	        cover = book.imageLinks.smallThumbnail
	      }
	    } else {
	      cover = "icons/bookCover.jpg"
	    }

	    this.setState({
	    	book,
	    	authors,
	    	cover
	    })

		})
	}

	// Method that converts camelcase Strings to "normal case"
  capitalize(text){
    return text
    // insert a space before all caps
    .replace(/([A-Z])/g, ' $1')
    // uppercase the first character
    .replace(/^./, function(str){ return str.toUpperCase(); })
  }

	render () {

		const { book, authors, cover } = this.state

		return (
			<div className="book-info-container">
				{!book ? (
					<Spinner width="30vh" height="30vh" top="30vh" left="50%" marginLeft="-15vh" />
				):(
					<Card className="card-details">
						<CardHeader title={book.title} subtitle={`Authors: ${authors}`}/>
						<CardMedia className="bg-book">
							<img src={cover} className="bg-cover" alt="Book background"/>
							<div className="book-assets">
								<img src={cover} className="main-cover" alt="Book Cover"/>
								<Rating book={book} />
							</div>
						</CardMedia>
						<CardText className={`description-box ${this.state.isExpanded ? "expanded" : "retracted"}`}>
							<p className="description">Description:</p>
							<p>{book.description}</p>
						</CardText>
						<CardActions>
							<FlatButton label={!this.state.isExpanded ? "Read More..." : "Read Less"} primary={true} onClick={() => this.toggleText()}/>
						</CardActions>
						<CardText className="centralize">
								<div><b>Page count:</b> {book.pageCount}</div>
								<div><b>Language:</b> {book.language}</div>
								<div><b>Publish Date:</b> {book.publishedDate}</div>
								<div><b>Shelf:</b> {this.capitalize(book.shelf)}</div>
						</CardText>
						<CardActions className="align-right">
							<FlatButton label="Preview" primary={true} href={book.previewLink} />
						</CardActions>
					</Card>
				)}
			</div>
		)
	}
}

// Specifying the PropTypes for this Component
BookInfo.propTypes = {
	bookId: PropTypes.string
}

export default BookInfo