import { RECEIVE_EVENTS, RECEIVE_EVENT, REMOVE_EVENT, RECEIVE_ERRORS } from '../actions/event_actions';
import merge from 'lodash/merge';

const defaultState = {
  events: {},
  errors: []
};

export const eventReducer = (state = defaultState, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_EVENTS:
    newState = merge({}, state, { events: action.events });
    return newState;
  case RECEIVE_EVENT:
    newState = merge({}, state, { events: {[action.event.id]: action.event}});
    newState.events[action.event.id].users = action.event.users;
    return newState;
  case REMOVE_EVENT:
    newState = merge({}, state);
    delete newState.events[parseInt(Object.keys(action.event))];
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
