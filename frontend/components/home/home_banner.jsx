import React from 'react';

const HomeBanner = (props) => {
  let bannerText;

  if (props.category){
    bannerText = <span> { props.category } </span>;
  } else {
    bannerText = <span> Find a Group</span>;
  }

  return (
    <div className='home-banner-container'>
      <div className='home-outer-container'>
        <div className='home-text'>
          { bannerText }
        </div>
        <div className='home-group-count'>
          <span>{ props.groups.length } Groups nearby</span>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
