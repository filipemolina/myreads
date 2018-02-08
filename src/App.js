import React from 'react'
import { Route } from 'react-router-dom'
import BookList from './components/BookList'
import Search from './components/Search'
import * as BooksAPI from './BooksAPI'
import './App.css'

class App extends React.Component {

  // Inicial state of the App
  state = {
    books : []
  }

  // Lifecycle Event that fires when the component is rendered on the page
  componentDidMount() {
    this.getAllBooks();
  }

  // Method that retrieves all the books from the API and then sets the state of the App

  getAllBooks() {
    // Make an API call to get all books currently in my shelves and set the state when the response is ready
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  // Method to handle the transference of books between shelves
  moveBook(book, shelf) {

    // Make and API call to the BooksAPI to change the shelf of this particular book
    BooksAPI.update(book, shelf).then((result) => {
      // Retrieve the updated information
      this.getAllBooks()
      //TODO: Update the books on the correct shelves based on the response of this API call, and not calling the API again
    })

  }

  render() {
    return (
      <div className="app">

        {/********** Book Shelves Route **********/}
        <Route exact path="/" render={() => (
          <BookList books={this.state.books} moveBookHandler={(book, shelf) => this.moveBook(book, shelf)}/>
        )} />

        {/********** Search Route **********/}
        <Route path="/search" component={Search} />

      </div>
    )
  }
}

export default App
