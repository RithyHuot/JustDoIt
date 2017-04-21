import React from 'react';
import { withRouter } from 'react-router';

const SearchBar = (props) => {
  const redirectToHome = () => {
    if (props.location.pathname !== '/home') {
      props.router.push('/home');
    }
  };

  return (
    <div className='home-search-container'>
      <div className='home-search'>
        <div className='search'>
          <input type='search' placeholder=' All Groups'/>
          <span>within 10 miles of New York, NY</span>
        </div>
      </div>
      <div className='home-nav'>
        <div className='home-groups'>
          <button onClick={ redirectToHome }>
            Groups
          </button>
        </div>
        <div className='home-calendar'>
          <button>
            Calendars
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SearchBar);
