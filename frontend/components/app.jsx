import React from 'react';
import HeaderContainer from './header/header_container';
import WelcomeVideoContainer from './welcome/welcome_container';
import ExploreContainer from './explore/explore_container';

const App = ({ children }) => (
  <div>
    <HeaderContainer />
    <WelcomeVideoContainer />
    <ExploreContainer />
    { children }
  </div>
);

export default App;
