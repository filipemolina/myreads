import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Imports from Material UI
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'

class BookShelfChanger extends Component {

  // When the change event happens, get the value of the select and call the parent's method received by props
  // to change the shelf of the current book
  handleChange = (e, value) => {
    this.props.onMoveBook(value)
  }

  render () {
    return (
      <IconMenu
        className="shelf-changer-menu"
        iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
        onChange={this.handleChange}
        value={this.props.shelf}
      >
        <MenuItem value="none" primaryText="Move To..." disabled={true}/>
        <Divider />
        <MenuItem value="currentlyReading" primaryText="Currently Reading"/>
        <MenuItem value="wantToRead" primaryText="Want to Read"/>
        <MenuItem value="read" primaryText="Read"/>
        <MenuItem value="none" primaryText="Remove from Collection"/>
      </IconMenu>
    )
  }
}

// Specifying the PropTypes for this Component
BookShelfChanger.propTypes = {
  shelf: PropTypes.string,
  onMoveBook: PropTypes.func
}

export default BookShelfChanger
