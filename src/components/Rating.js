import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Rating.css'

/**
* The CSS for this component is havily inspired by this article on css-tricks.com
* https://css-tricks.com/star-ratings/
*/

class Rating extends Component {

  // Method that receives the rating of a book and returns an array with 5 positions, each containing
  // the class that should be respectively applied to the star-rating portion of the book
  calculateRating(stars) {
    
    // Array that will store the classes of the five stars
    let totalStars = []
    // Number of full stars (rating rounded down)
    const fullStars = Math.floor(stars)
    // If the rating is bigger than itself rounded down, then there is a half star
    const halfStar = stars > fullStars ? 1 : 0
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

    return totalStars
  }

  render() {

    const { book } = this.props

    // Obtain the ratings
    const stars = book.averageRating ? book.averageRating : 0
    const totalStars = this.calculateRating(stars)

    return (
      <div className="rating">
        <span className={`star-icon ${totalStars[0]}`}>☆</span>
        <span className={`star-icon ${totalStars[1]}`}>☆</span>
        <span className={`star-icon ${totalStars[2]}`}>☆</span>
        <span className={`star-icon ${totalStars[3]}`}>☆</span>
        <span className={`star-icon ${totalStars[4]}`}>☆</span>
      </div>
    )
  }
}

// Specifying the PropTypes for this Component
Rating.propTypes = {
  book: PropTypes.object
}

export default Rating
