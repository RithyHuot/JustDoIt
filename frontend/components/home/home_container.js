import React from 'react';
import { connect } from 'react-redux';
import { requestGroups, requestGroup, searchGroup, receiveErrors } from '../../actions/group_actions';
import { requestUserEvents, addUserToEvent, removeUserFromEvent } from '../../actions/event_actions';
import Home from './home';

const mapStateToProps = (state) => {
  return({
    groups: Object.values(state.groups.groups),
    currentUser: state.session.currentUser,
    errors: state.groups.errors
  });
};

const mapDisplayToProps = (dispatch) => {
  return({
    requestGroups: () => dispatch(requestGroups()),
    requestGroup: (groupId) => dispatch(requestGroup(groupId)),
    searchGroup: (query) => dispatch(searchGroup(query)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    requestUserEvents: (userId) => dispatch(requestUserEvents(userId)),
    addUserToEvent: (eventId) => dispatch(addUserToEvent(eventId)),
    removeUserFromEvent: (eventId) => dispatch(removeUserFromEvent(eventId))
  });
};

export default connect(mapStateToProps, mapDisplayToProps)(Home);
