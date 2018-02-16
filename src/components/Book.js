import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'
import Rating from './Rating'
import Spinner from './Spinner'

// Material UI Imports
import { Card, CardText, CardMedia } from 'material-ui/Card'

class Book extends Component {

  _isMounted = false

  // Usually, setting initial state with props is not recommended, but in this case, this component doesn't care if the
  // shelf property of the book would change elsewhere, there is no other way to change it, just through the BookShelfChanger component
  // that will call the changeShelf method of this class. This is needed because when a user changes the shelf of a book in the search page
  // the search is not fired again, so the book keep showing the old shelf selected on the menu. More on that:
  // https://medium.com/@justintulk/react-anti-patterns-props-in-initial-state-28687846cc2e
  state = {
    isLoading : false,
    shelf: this.props.book.shelf
  }

  // Indicate whether the component is currently mounted, according to React blog article:
  // https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
  componentDidMount(){
    this._isMounted = true
  }

  componentWillUnmount(){
    this._isMounted = false
  }

  // The BookShelfChanger Component calls this method with the new shelf the current book must be placed on,
  // then, the moveBookHandler from the App Component is called to actually move the book. This way the state
  // is kept concise between all pages of the App
  changeShelf = (shelf) => {
    // Show the Spinner Component
    this.setState({isLoading: true, shelf})
    // Move the book
    this.props.moveBookHandler(this.props.book, shelf).then(() => {
      if(this._isMounted){
        this.setState({isLoading: false})
      } else {
      }
    })
  }

  // This is a curried function that will be used to create 2 differente functions
  shortenText = (length) => {
    return function(title){
      if(title.length > length){
        return title.substr(0, length) + "..."
      } else {
        return title
      }
    }
  }

  // Utilize the curried function to create these two specialized functions
  shortenTitle = this.shortenText(15)
  shortenAuthors = this.shortenText(16)

  concatAuthors = (authors) => {
    // Test if the book has authors (magazines doesn't). If so, iterate through them
    if(typeof authors !== 'undefined'){
      return this.shortenAuthors(authors.join(", "))
    }
  }

  render() {

    // Receive the book from props
    const { book } = this.props

    // Variable that will store the book's cover
    let cover

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

    return(
      <Card className="book-card">
        {/* Cover Picture */}
        <CardMedia>
          {/* Control when the Spinner Component is shown */}
          {this.state.isLoading && (
            <div className="overlay">
              <Spinner width="40%" height="40%" top="70px" left="50px" marginLeft="none"/>
            </div>
          )}
          <img src={cover} alt={book.title} className="book-cover-img"/>
        </CardMedia>

        {/* Title and Menu */}
        <CardText className="padding-8 font-12">
          <span className="bold">{this.shortenTitle(book.title)}</span>
          <BookShelfChanger shelf={this.state.shelf} onMoveBook={this.changeShelf} book={book}/>
        </CardText>

        {/* Authors */}
        <CardText className="padding-0 font-12">
          <div className="book-authors">{this.concatAuthors(book.authors)}</div>
        </CardText>

        {/* Rating */}
        <CardText className="padding-0 star-rating">
          {/* If this book has an averageRating property, pass it to the Rating component. Otherwise pass 0 */}
          <Rating stars={ book.averageRating ? book.averageRating : 0 } />
        </CardText>
      </Card>
    )
  }
}

export default Book
