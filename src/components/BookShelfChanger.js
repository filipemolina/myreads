import React, { Component } from 'react'

class BookShelfChanger extends Component {

  // When the change event happens, get the value of the select and call the parent's method received by props
  // to change the shelf of the current book
  handleChange = (e) => {
    this.props.onMoveBook(e.target.value)
  }

  render () {
    return (
      <div className="book-shelf-changer">
        <select defaultValue={this.props.shelf} onChange={this.handleChange}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookShelfChanger
