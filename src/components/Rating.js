import React, { Component } from 'react'

class Rating extends Component {

  render() {
    // Obtain the rating
    const rating = this.props.stars

    // Array that will store the classes of the five stars
    let totalStars = []

    // Number of full stars (rating rounded down)
    const fullStars = Math.floor(rating)

    // If the rating is bigger than itself rounded down, then there is a half star
    const halfStar = rating > fullStars ? 1 : 0

    // Calculate the number of blank stars
    const blankStars = 5 - fullStars - halfStar

    // Place all the full stars on the array
    for(let i=0; i<fullStars; i++){
        totalStars.push('full')
    }

    // Place one half star if needed
    if(halfStar)
      totalStars.push('half')

    // Place all the blank stars on the array
    for(let j=0; j<blankStars; j++){
        totalStars.push('')
    }
    return (
      <div>
        <span className={`star-icon ${totalStars[0]}`}>☆</span>
        <span className={`star-icon ${totalStars[1]}`}>☆</span>
        <span className={`star-icon ${totalStars[2]}`}>☆</span>
        <span className={`star-icon ${totalStars[3]}`}>☆</span>
        <span className={`star-icon ${totalStars[4]}`}>☆</span>
      </div>
    )
  }
}

export default Rating
