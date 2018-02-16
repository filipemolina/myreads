import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// Imports from Material-UI
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import ContentFilter from 'material-ui/svg-icons/content/filter-list'

class ListBooksTitle extends Component {
  render() {
    const showBackButton = this.props.showBackButton

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
            iconElementRight={<IconButton><ContentFilter /></IconButton>}
            onLeftIconButtonClick={() => console.log("Clicou em Abrir Menu")}
            onRightIconButtonClick={this.props.clickHandler}
          />
        )}
      </div>
    )
  }
}
// Use the withRouter high-order component to make the history prop available
export default withRouter(ListBooksTitle)
