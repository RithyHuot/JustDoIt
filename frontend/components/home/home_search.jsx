import React from 'react';

const SearchBar = (props) => {
  return (
    <div className='home-search-container'>
      <div className='home-search'>
        <div className='search'>
          <input type='search' placeholder='All Groups'/>
          <span>within 10miles of Location</span>
        </div>
      </div>
      <div className='home-nav'>
        <div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
