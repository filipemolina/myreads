import userPicture from '../img/user.jpg'
import React from 'react'
import './UserProfile.css'

// Imports from Material UI
import Avatar from 'material-ui/Avatar'

export const UserProfile = () => (
	<div className="profile-bg">
		<Avatar src={userPicture} size={120} />
		<div className="user-name">Jane Doe</div>
	</div>
)

export default UserProfile