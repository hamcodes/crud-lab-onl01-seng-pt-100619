import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props
    console.log('props in review:')
    console.log(this.props)
    if (this.props.review.restaurantId === this.props.restaurantId) {
      return (
        <div>
          <li>
            {review.text}
          </li>
          <button onClick={() => this.props.deleteReview(this.props.review.restaurantId, this.props.review.id)}> X </button>
        </div>
      );
    }
  }

};

export default Review;