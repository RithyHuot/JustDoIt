import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import SignupFormContainer from './session/signup_container';
import GroupContainer from './group/group_container';
import HomeContainer from './home/home_container';
// import SessionFormContainer from './session/session_container';

const Root = ({ store }) => {
  const redirectIfLoggIn  = () => {
    if (store.getState().session.currentUser) {
      hashHistory.push('/');
    }
  };

  const redirectToHome = () => {
    if (store.getState().session.currentUser) {
      hashHistory.push('/home');
    }
  };

  return (<Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } >
        <IndexRoute onEnter= { redirectToHome } />
        <Router path='home' component={ HomeContainer }/>
        <Route path='group/:groupId' component={ GroupContainer } />
      </Route>
      <Route path='/signup' component={ SignupFormContainer } onEnter={ redirectIfLoggIn } />
    </Router>
  </Provider>);
}
;
// <IndexRoute component={ App } />
// <Route path='/login' component={ SessionFormContainer } onEnter={ redirectIfLoggIn }/>
// <Route path="/" component={ App } onEnter= { redirectToHome }>
export default Root;
