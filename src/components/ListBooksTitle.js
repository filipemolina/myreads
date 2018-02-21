import { withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Imports from Material-UI
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import ContentFilter from 'material-ui/svg-icons/content/filter-list'

// Although this is a stateless component, it cannot be tranformed into a functional statelesse component due to the fact
// that is must use the HOC withRouter

class ListBooksTitle extends Component {
  render() {
    // Receive the configurations form the props
    const { isSearching, showBackButton, showFilterButton } = this.props

    // Create configuration variables that will define, according to the props, the layout and behavior of the appbar
    let elemLeft, elemRight, leftIconCallBack, rightIconCallback

    ////////////////////////////////////////////// Test if the bar should show the back button

    if(showBackButton){
      // Set the left icon to the Arrow Bac and the callback function to be executed accordingly
      elemLeft = <IconButton><NavigationArrowBack /></IconButton>
      leftIconCallBack = () => this.props.history.goBack()
    } else {
      // Set the left icon to false, so the default menu icon will be shown, and set the callback to open the menu
      elemLeft = null
      leftIconCallBack = () => this.props.openMenuHandler()
    }

    /////////////////////////////////////////////// Test if the bar should show the filter button

    if(showFilterButton){
      // Set the callback function of the filter button
      rightIconCallback = this.props.clickHandler

      // Test wich icon must be shown on the right
      if(isSearching)
        // Set the icon on the right to the Filter icon
        elemRight = <IconButton><NavigationClose /></IconButton>
      else
        // Set the icon on the right to the close icon
        elemRight = <IconButton><ContentFilter /></IconButton>
    } else {

      // Set both icon and callback to false
      elemRight = null
      rightIconCallback = null

    }

    // Render the AppBar with all the configurations
    return (
      <AppBar
        title="MyReads"
        iconElementLeft={elemLeft}
        iconElementRight={elemRight}
        onLeftIconButtonClick={leftIconCallBack}
        onRightIconButtonClick={rightIconCallback}
      />
    )
  }
}

// Specifying the PropTypes for this Component
ListBooksTitle.propTypes = {
  isSearching: PropTypes.bool,
  showBackButton: PropTypes.bool,
  showFilterButton: PropTypes.bool,
  clickHandler: PropTypes.func,
  openMenuHandler: PropTypes.func

}

// Use the withRouter high-order component to make the history prop available
export default withRouter(ListBooksTitle)
