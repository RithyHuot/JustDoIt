import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import SessionFormContainer from './session/session_container';
import SignupFormContainer from './session/signup_container';

const Root = ({ store }) => {
  const redirectIfLoggIn  = () => {
    if (store.getState().session.currentUser) {
      hashHistory.push('/');
    }
  };
  return (<Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/">
        <IndexRoute component={ App } />
        <Route path='/signup' component={ SignupFormContainer } onEnter={ redirectIfLoggIn } />
      </Route>
    </Router>
  </Provider>);
}
;
// <Route path='/login' component={ SessionFormContainer } onEnter={ redirectIfLoggIn }/>

export default Root;
