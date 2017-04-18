import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store.js';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.current_user) {
    const preloadedState = { session: { currentUser: window.current_user} };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
