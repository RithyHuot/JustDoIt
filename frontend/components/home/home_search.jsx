import React from 'react';
import { withRouter } from 'react-router';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.redirectToHome = this.redirectToHome.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchTimeout = null;
  }

  redirectToHome(){
    const { location, router } = this.props;
    if (location.pathname !== '/home') {
      router.push('/home');
    }
  }

  handleSearch(e){
    const query = e.target.value;
    clearTimeout(this.searchTimeout);

    this.searchTimeout = setTimeout(() => {
      this.props.searchGroup(query);
    }, 100);
  }

  render(){
    return (
      <div className='home-search-container'>
        <div className='home-search'>
          <div className='search'>
            <div className='search-bar'>
              <i className="fa fa-search" aria-hidden="true"></i>
              <input type='search' onChange={ this.handleSearch } placeholder=' All Groups'/>
            </div>
            <span>within 10 miles of New York, NY</span>
          </div>
        </div>
        <div className='home-nav'>
          <div className='home-groups'>
            <button onClick={ this.redirectToHome }>
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
  }
}

export default withRouter(SearchBar);
