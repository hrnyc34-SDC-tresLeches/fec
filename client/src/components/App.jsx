import React, { useState } from 'react';
import RatingsReviewsMain from './RatingsReviews/RatingsReviewsMain.jsx';
import RelatedItemsContainer from '../containers/RelatedItems/RelatedItems.js';
import QAModuleContainer from '../containers/QAContainers/QAModuleContainer.js';
// import './RatingsReviews/will-style.css';
import ProductDetailMain from '../components/ProductDetail/ProductDetailMain.jsx';

const App = () => {
  return (
    <div>
      <div id='pdcontainer'>
        <ProductDetailMain />
      </div>
      <div id="ri_container">
      </div>
      <div id="container">
      <RelatedItemsContainer />
        <QAModuleContainer/>
      </div>
      <div id='rContainer'>
        <RatingsReviewsMain />
      </div>
    </div>
  );
};

export default App;
