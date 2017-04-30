import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import SignupFormContainer from './session/signup_container';
import GroupContainer from './group/group_container';
import HomeContainer from './home/home_container';
import GroupFormContainer from './group/group_form_container';
import EventFormContainer from './event/event_form_container';
import UserContainer from './user/user_profile_container';
import UserFormContainer from './user/user_form_container';

const Root = ({ store }) => {

  const redirectIfNotLoggedIn  = () => {
    if (!store.getState().session.currentUser) {
      hashHistory.push('/home');
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
        <Route path='member/:memberId' component={ UserContainer } onEnter={ redirectIfNotLoggedIn }/>
        <Route path='member/:memberId/edit' component={ UserFormContainer }/>
        <Route path='group/new' component={ GroupFormContainer } onEnter={ redirectIfNotLoggedIn }/>
        <Route path='group/:groupId/edit' component= { GroupFormContainer } onEnter={ redirectIfNotLoggedIn }/>
        <Route path='group/:groupId/event/new' component={ EventFormContainer } onEnter={ redirectIfNotLoggedIn } />
        <Route path='group/:groupId/event/:eventId/edit' component={ EventFormContainer } onEnter={ redirectIfNotLoggedIn }/>
        <Route path='group/:groupId' component={ GroupContainer } onEnter={ redirectIfNotLoggedIn }>
          <Route path='members' component={ GroupContainer } />
          <Route path='event/:eventId' component={ GroupContainer }/>
        </Route>
      </Route>
      <Route path='/signup' component={ SignupFormContainer } onEnter={ redirectToHome } />
    </Router>
  </Provider>);
};

export default Root;
