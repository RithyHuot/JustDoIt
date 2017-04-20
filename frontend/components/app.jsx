import React from 'react';
import HeaderContainer from './header/header_container';
import WelcomeVideoContainer from './welcome/welcome_container';
import ExploreContainer from './explore/explore_container';
import FooterContainer from './footer/footer_container';

const App = ({ children }) => (
  <div>
    <div className='welcome-header'>
      <HeaderContainer />
      <WelcomeVideoContainer />
    </div>
    <ExploreContainer />
    { children }
    <FooterContainer />
  </div>
);

export default App;
