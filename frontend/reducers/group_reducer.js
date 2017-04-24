import { RECEIVE_GROUPS, RECEIVE_GROUP, REMOVE_GROUP, RECEIVE_ERRORS } from '../actions/group_actions';
import merge from 'lodash/merge';

const defaultState = {
  groups: {},
  errors: []
};

export const groupReducer = (state = defaultState, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_GROUPS:
    newState = merge({}, state, { groups: action.groups });
    return newState;
  case RECEIVE_GROUP:
    newState = Object.assign({}, state, { groups: action.group});
    return newState;
  case REMOVE_GROUP:
    newState = merge({}, state);
    delete newState[action.group.id];
    return newState;
  case RECEIVE_ERRORS:
    if (action.errors.responseJSON === undefined) {
      newState = Object.assign({}, state, { errors: action.errors });
    } else {
      newState = Object.assign({}, state, { errors: action.errors.responseJSON });
    }
    return newState;
  default:
    return state;
  }
};
