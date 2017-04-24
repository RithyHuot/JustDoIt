import * as APIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveEvents = (events) => {
  return {
    type: RECEIVE_EVENTS,
    events
  };
};

export const receiveEvent = (event) => {
  return {
    type: RECEIVE_EVENT,
    event
  };
};

export const removeEvent = (event) => {
  return {
    type: REMOVE_EVENT,
    event
  };
};

export const requestEvents = (groupId) => (dispatch) => {
  return APIUtil.requestEvents(groupId)
    .then(
      (eventsRes) => dispatch(receiveEvents(eventsRes)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
};

export const requestEvent = (eventId) => (dispatch) => {
  return APIUtil.requestEvent(eventId)
    .then(
      (eventRes) => dispatch(receiveEvent(eventRes)),
      (errors) => dispatch(receiveErrors(errors))
    );
};

export const updateEvent = (event) => (dispatch) => {
  return APIUtil.updateEvent(event)
    .then(
      (eventRes) => dispatch(receiveEvent(eventRes)),
      (errors) => dispatch(receiveErrors(errors))
    );
};

export const deleteEvent = (eventId) => (dispatch) => {
  return APIUtil.deleteEvent(eventId)
    .then(
      (eventRes) => dispatch(removeEvent(eventRes)),
      (errors) => dispatch(receiveErrors(errors))
    );
};

export const createEvent = (event) => (dispatch) => {
  return APIUtil.createEvent(event)
    .then(
      (eventRes) => dispatch(receiveEvent(eventRes)),
      (errors) => dispatch(receiveErrors(errors))
    );
};

export const addUserToEvent = (eventId) => (dispatch) => {
  return APIUtil.addUserToEvent(eventId)
    .then(
      (eventRes) => dispatch(receiveEvent(eventRes)),
      (errors) => dispatch(receiveErrors(errors))
    );
};

export const removeUserFromEvent = (eventId) => (dispatch) => {
  return APIUtil.removeUserFromEvent(eventId)
    .then(
      (eventRes) => dispatch(receiveEvent(eventRes)),
      (errors) => dispatch(receiveErrors(errors))
    );
};
