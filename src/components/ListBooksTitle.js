import React, { Component } from 'react'

// Imports from Material-UI
import AppBar from 'material-ui/AppBar'

class ListBooksTitle extends Component {
  render() {
    return (
      <AppBar
        title="My Reads"
        onLeftIconButtonClick={() => console.log("Clicou em Abrir Menu")}
      />
    )
  }
}

export default ListBooksTitle
