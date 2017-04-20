import React from 'react';
import HeaderContainer from './header/header_container';
import WelcomeVideoContainer from './welcome/welcome_container';

const App = ({ children }) => (
  <div>
    <HeaderContainer />
    <WelcomeVideoContainer />
    { children }
  </div>
);

export default App;
