import React from 'react';
import { connect } from 'react-redux';
import HeaderContainer from './header/header_container';
import WelcomeVideoContainer from './welcome/welcome_container';
import ExploreContainer from './explore/explore_container';
import FooterContainer from './footer/footer_container';

const AppWithOutState = (props) => {
  if (!props.currentUser){
    return (
      <div>
        <HeaderContainer />
        <WelcomeVideoContainer />
        <ExploreContainer />
        <FooterContainer />
      </div>
    );
  }  else {
    return (
      <div>
        <HeaderContainer />
        { props.children }
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
