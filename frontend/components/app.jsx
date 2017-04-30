import React from 'react';
import { connect } from 'react-redux';
import HeaderContainer from './header/header_container';
import WelcomeVideoContainer from './welcome/welcome_container';
import ExploreContainer from './explore/explore_container';
import FooterContainer from './footer/footer_container';

const AppWithOutState = (props) => {
  const { currentUser, location, children } = props;
  if (!currentUser && location.pathname === '/'){
    return (
      <div className="app-container">
        <div className='top'>
          <div>
          <HeaderContainer />
          <WelcomeVideoContainer />
          <ExploreContainer />
          </div>
        </div>
        <FooterContainer />
      </div>
    );
  }  else {
    return (
      <div className="app-container">
        <div className='top'>
          <div>
            <HeaderContainer />
            { children }
          </div>
        </div>
        <FooterContainer />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser
  });
};

export default connect( mapStateToProps, null)(AppWithOutState);
