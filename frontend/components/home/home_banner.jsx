import React from 'react';

const HomeBanner = (props) => {
  return (
    <div className='home-banner-container'>
      <div className='home-outer-container'>
        <div className='home-text'>
          <span>Find a Group</span>
        </div>
        <div className='home-group-count'>
          <span>{ props.groups.length } Groups nearby</span>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
