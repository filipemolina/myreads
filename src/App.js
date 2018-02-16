import React from 'react'
import { Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
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
    return new Promise((resolve, reject) => {
      // Make an API call to get all books currently in my shelves and set the state when the response is ready
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
        resolve()
      }).catch((err) => {
        reject(err)
      })
    })
  }

  // Method to handle the transference of books between shelves
  moveBook(book, shelf) {
    return new Promise((resolve, reject) => {
      // Make and API call to the BooksAPI to change the shelf of this particular book
      BooksAPI.update(book, shelf).then((result) => {
        // Retrieve the updated information
        this.getAllBooks().then(() => {
          resolve()
        }).catch((err) => {
          reject(err)
        })
      }).catch((err) => {
        reject(err)
      })
    })
  }

  // Method that receives a book_id and returns the name of the shelf the book currently is, or "none" if it is not in state.books
  getShelf(book_id){
    const index = this.state.books.findIndex((book, index) => {
      return book.id === book_id
    })

    if(index > -1)
      return this.state.books[index].shelf
    else
      return "none"
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="app">

          {/********** Book Shelves Route **********/}
          <Route exact path="/" render={() => (
            <BookList
              books={this.state.books}
              moveBookHandler={(book, shelf) => this.moveBook(book, shelf)}
            />
          )} />

          {/********** Search Route **********/}
          <Route path="/search" render={() => (
            <Search
              collection={this.state.books}
              getShelf={(book_id) => this.getShelf(book_id)}
              moveBookHandler={(book, shelf) => this.moveBook(book, shelf)}
            />
          )}/>

        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
