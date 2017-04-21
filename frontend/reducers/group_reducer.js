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
    return action.groups;
  case RECEIVE_GROUP:
    newState = merge({}, state);
    newState.groups[action.group.id] = action.group;
    return merge({}, state, newState);
  case REMOVE_GROUP:
    newState = merge({}, state);
    delete newState.groups[action.group.id];
    return newState;
  case RECEIVE_ERRORS:
    newState = Object.assign({}, state, {errors: action.errors});
    return newState;
  default:
    return state;
  }
};
