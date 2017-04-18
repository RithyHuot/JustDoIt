import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <GreetingContainer />
    { children }
  </div>
);
// <header>JustDoIt</header>

export default App;
