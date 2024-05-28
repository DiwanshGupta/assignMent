import React from "react";
const StarRating = ({ rating }) => {
  const totalStars = 5;
  const filledStars = Math.round(rating);
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= filledStars) {
      // Filled stars for Rating
      stars.push(<span key={i}>&#9733;</span>);
    } else {
      // Empty stars for rating
      stars.push(<span key={i}>&#9734;</span>);
    }
  }

  return <div>{stars}</div>;
};

export default StarRating;
