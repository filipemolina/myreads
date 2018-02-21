import { withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import UserProfile from './UserProfile'
import PropTypes from 'prop-types'

// Imports from Material UI
import ActionSearch from 'material-ui/svg-icons/action/search'
import ActionBook from 'material-ui/svg-icons/action/book'
import MenuItem from 'material-ui/MenuItem'
import Drawer from 'material-ui/Drawer'

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

// Specifying the PropTypes for this Component
SideMenu.propTypes = {
	handleClose: PropTypes.func,
	open: PropTypes.bool,
}

// Use the HOC withRouter from react-router-dom to get access to the navigation and history methods
export default withRouter(SideMenu)