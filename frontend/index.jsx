import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store.js';
import Modal from 'react-modal';

import * as groupActions from './actions/group_actions';

// window.store = configureStore();
// window.requestGroups = groupActions.requestGroups;
// window.requestGroup = groupActions.requestGroup;
// window.createGroup = groupActions.createGroup;
// window.updateGroup = groupActions.updateGroup;
// window.deleteGroup = groupActions.deleteGroup;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.current_user) {
    const preloadedState = { session: { currentUser: window.current_user} };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
