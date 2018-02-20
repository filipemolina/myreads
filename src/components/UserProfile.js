import React, { Component } from 'react'
import './UserProfile.css'
import userPicture from '../icons/user.jpg'

// Imports from Material UI
import Avatar from 'material-ui/Avatar'

class UserProfile extends Component {
	render () {
		return (
			<div className="profile-bg">
				<Avatar src={userPicture} size={120} />
				<div className="user-name">Jane Doe</div>
			</div>
		)
	}
}

export default UserProfile