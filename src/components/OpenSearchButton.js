import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// High-order Component from Material UI to get access to the theme variables
import muiThemeable from 'material-ui/styles/muiThemeable'

class OpenSearchButton extends Component {
  render() {

    // Set the css of the button to use the color of the theme that will come through the props
    // because of the muiThemeable HOC
    const style = {
      backgroundColor: this.props.muiTheme.palette.primary1Color,
    }

    return (
      <div className="open-search">
        <Link style={style} to="/search">Add a book</Link>
      </div>
    )
  }
}

// Utilizing the HOC Component
export default muiThemeable() (OpenSearchButton)
