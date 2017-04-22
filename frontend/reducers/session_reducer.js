import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState =
{
  currentUser: null,
  errors: []
};

export const sessionReducer = (state = defaultState, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state, { currentUser: action.currentUser });
      return newState;
    case RECEIVE_ERRORS:
      newState = Object.assign({}, state, { errors: action.errors});
      return newState;
    default:
      return state;
  }

};
