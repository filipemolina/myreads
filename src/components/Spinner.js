import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Spinner.css'

/**
* This component was created using the excelent resources found at http://tobiasahlin.com/spinkit/
* Both the HTML and CSS had to be modified in order for them to work properly in the context of this project.
* Nevertheless, all credits to @tobiasahlin
*/

// High-order Component from Material UI to get access to the theme variables
import muiThemeable from 'material-ui/styles/muiThemeable'

class Spinner extends Component {
  render() {

    // Use the with and height from props to determine the size of the spinner
    const parentStyle = {
      width: this.props.width,
      height: this.props.height,
    }

    // Receive the primary1Color from the muiTheme, so the spinner is in line with the app's theme
    const childStyle = {
      backgroundColor: this.props.muiTheme.palette.primary1Color,
    }

    return (
      <div className="spinner-container">
        <div className="sk-circle" style={parentStyle}>
          <div className="sk-circle1 sk-child">
            <div className="pseudo" style={childStyle}></div>
          </div>
          <div className="sk-circle2 sk-child">
            <div className="pseudo" style={childStyle}></div>
          </div>
          <div className="sk-circle3 sk-child">
            <div className="pseudo" style={childStyle}></div>
          </div>
          <div className="sk-circle4 sk-child">
            <div className="pseudo" style={childStyle}></div>
          </div>
          <div className="sk-circle5 sk-child">
            <div className="pseudo" style={childStyle}></div>
          </div>
          <div className="sk-circle6 sk-child">
            <div className="pseudo" style={childStyle}></div>
          </div>
          <div className="sk-circle7 sk-child">
            <div className="pseudo" style={childStyle}></div>
          </div>
          <div className="sk-circle8 sk-child">
            <div className="pseudo" style={childStyle}></div>
          </div>
          <div className="sk-circle9 sk-child">
            <div className="pseudo" style={childStyle}></div>
          </div>
          <div className="sk-circle10 sk-child">
            <div className="pseudo" style={childStyle}></div>
          </div>
          <div className="sk-circle11 sk-child">
            <div className="pseudo" style={childStyle}></div>
          </div>
          <div className="sk-circle12 sk-child">
            <div className="pseudo" style={childStyle}></div>
          </div>
        </div>
      </div>
    )
  }
}

// Specifying the PropTypes for this Component
Spinner.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
}

export default muiThemeable() (Spinner)
