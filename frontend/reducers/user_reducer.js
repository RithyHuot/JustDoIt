import { RECEIVE_USER, RECEIVE_ERRORS } from '../actions/user_actions';
import merge from 'lodash/merge';

const defaultState =
{
  errors: []
};

export const userReducer = (state = defaultState, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      newState = merge({}, state, action.user);
      return newState;
    case RECEIVE_ERRORS:
      newState = Object.assign({}, state, { errors: action.errors});
      return newState;
    default:
      return state;
  }

};
