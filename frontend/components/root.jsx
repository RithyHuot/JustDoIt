import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import SessionFormContainer from './session/session_container';
import SignupFormContainer from './session/signup_container';

const redirectIfLoggIn  = () => {
  if (window.current_user) {
    hashHistory.push('/');
  }
};

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component= { App }>
        <Route path='/signup' component={ SignupFormContainer } onEnter={ redirectIfLoggIn } />
        <Route path='/login' component={ SessionFormContainer } onEnter={ redirectIfLoggIn }/>
      </Route>
    </Router>
  </Provider>
);
// <IndexRoute component={ App } />

export default Root;
