import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// Imports from Material-UI
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import ContentFilter from 'material-ui/svg-icons/content/filter-list'

class ListBooksTitle extends Component {
  render() {
    const showBackButton = this.props.showBackButton
    const { isSearching } = this.props

    return (
      <div>
        {showBackButton ? (
          <AppBar
            title="My Reads"
            onLeftIconButtonClick={() => this.props.history.goBack()}
            iconElementLeft={<IconButton><NavigationArrowBack /></IconButton>}
          />
        ) : (
          <AppBar
            title="My Reads"
            iconElementRight={isSearching ? <IconButton><NavigationClose /></IconButton> : <IconButton><ContentFilter /></IconButton>}
            onLeftIconButtonClick={() => this.props.openMenuHandler()}
            onRightIconButtonClick={this.props.clickHandler}
          />
        )}
      </div>
    )
  }
}
// Use the withRouter high-order component to make the history prop available
export default withRouter(ListBooksTitle)
