import React from 'react';
import ProductRatingsContainer from '../../containers/RatingsReviews/ProductRatingsContainer.js';
import ReviewsListContainer from '../../containers/RatingsReviews/ReviewsListContainer.js';
// import ReviewModalContainer from '../../containers/RatingsReviews/ReviewModalContainer.js';
import './reviewStyles/ratingsReviewsMain.css';

const RatingsReviewsMain = () => {
  return (
    <div className='ratingsReviewMain'>
      < ProductRatingsContainer />
      < ReviewsListContainer />
    </div>
  );
};

export default RatingsReviewsMain;