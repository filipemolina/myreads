import React, { Component } from 'react'
import './Spinner.css'

// High-order Component from Material UI to get access to the theme variables
import muiThemeable from 'material-ui/styles/muiThemeable'

class Spinner extends Component {
  render() {

    const parentStyle = {
      width: this.props.width,
      height: this.props.height,
      top: this.props.top,
      left: this.props.left,
      marginLeft: this.props.marginLeft,
    }

    const childStyle = {
      backgroundColor: this.props.muiTheme.palette.primary1Color,
    }

    return (
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
    )
  }
}

export default muiThemeable() (Spinner)
