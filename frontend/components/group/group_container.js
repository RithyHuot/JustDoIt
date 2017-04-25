import { connect } from 'react-redux';
import Group from './group';
import { requestGroup, addUserToGroup, removeUserFromGroup } from '../../actions/group_actions';
import { requestEvent, addUserToEvent, removeUserFromEvent } from '../../actions/event_actions';


const mapStateToProps = (state) => {
  return({
    groups: Object.values(state.groups.groups),
    currentUser: state.session.currentUser,
    events: Object.values(state.events.events)
  });
};

const mapDisplayToProps = (dispatch) => {
  return ({
    requestGroup: (groupId) => dispatch(requestGroup(groupId)),
    addUserToGroup: (groupId) => dispatch(addUserToGroup(groupId)),
    removeUserFromGroup: (groupId) => dispatch(removeUserFromGroup(groupId)),
    requestEvent: (eventId) => dispatch(requestEvent(eventId)),
    addUserToEvent: (eventId) => dispatch(addUserToEvent(eventId)),
    removeUserFromEvent: (eventId) => dispatch(removeUserFromEvent(eventId))
  });
};


export default connect(mapStateToProps, mapDisplayToProps)(Group);
