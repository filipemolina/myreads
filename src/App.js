import React from 'react'
import { Route } from 'react-router-dom'
import BookList from './components/BookList'
import Search from './components/Search'
import BookDetails from './components/BookDetails'
import SideMenu from './components/SideMenu'

import * as BooksAPI from './BooksAPI'
import './App.css'

// Material UI Imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { purple500, purple700, grey500, yellow600 } from 'material-ui/styles/colors'

class App extends React.Component {

  // Inicial state of the App
  state = {
    books : [],
    menuIsOpen: false,
  }

  // Customizing the theme using getMuiTheme
  newTheme = getMuiTheme({
    palette: {
      primary1Color: purple500,
      primary2Color: purple700,
      primary3Color: grey500,
      accent1Color: yellow600,
    }
  })

  // Lifecycle Event that fires when the component is rendered on the page
  componentDidMount() {
    this.getAllBooks();
  }

  // Method that retrieves all the books from the API and then sets the state of the App.
  // Returns a promise that resolves when the books are retrieved from the API.
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

  // Method to handle the transference of books between shelves.
  // Returns a promise that resolves after the book is changed in the API and all the books are
  // "refreshed" calling this.getAllBooks()
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

  // Method that receives a book_id and returns the name of the shelf the book currently is, or "none" if it is not in state.books.
  // This method is used by the Search page to maintain all the books concise between pages (if a book is in the read shelf on the list
  // page it must show on the read shelf on the search page)
  getShelf(book_id){
    const index = this.state.books.findIndex((book, index) => {
      return book.id === book_id
    })

    if(index > -1)
      return this.state.books[index].shelf
    else
      return "none"
  }

  handleClose(){
    this.setState({
      menuIsOpen: false
    })
  }

  openMenu(){
    this.setState({
      menuIsOpen: true
    })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={this.newTheme}>
        <div className="app">

          <SideMenu open={this.state.menuIsOpen} handleClose={() => this.handleClose()} />

          {/********** Book Shelves Route **********/}
          <Route exact path="/" render={() => (
            <BookList
              books={this.state.books}
              moveBookHandler={(book, shelf) => this.moveBook(book, shelf)}
              openMenuHandler={() => this.openMenu()}
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

          {/********** Book Details Route **********/}
          <Route path="/book/:bookId" render={({match}) => (
            <BookDetails
              openMenuHandler={() => this.openMenu()}
              match={match}
            />
          )} />

        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
