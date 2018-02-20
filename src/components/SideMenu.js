import React, { Component } from 'react'
import UserProfile from './UserProfile'
import { withRouter } from 'react-router-dom'

// Imports from Material UI
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import ActionBook from 'material-ui/svg-icons/action/book'
import ActionSearch from 'material-ui/svg-icons/action/search'

class SideMenu extends Component {

	navigateTo(url){
		// Close the menu
		this.props.handleClose()

		//Navigate to the desired url
		this.props.history.push(url)
	}

	render () {
		return (
			<Drawer
				docked={false}
				open={this.props.open}
				onRequestChange={() => this.props.handleClose()}
			>
				<UserProfile />
				<MenuItem onClick={() => this.navigateTo("/")} leftIcon={<ActionBook />}>My Collection</MenuItem>
				<MenuItem onClick={() => this.navigateTo("/search")} leftIcon={<ActionSearch />}>Search</MenuItem>
			</Drawer>
		)
	}
}

// Use the HOC withRouter from react-router-dom to get access to the navigation and history methods
export default withRouter(SideMenu)