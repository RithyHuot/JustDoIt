import { connect  } from 'react-redux';
import EventList from './event_list';
import { requestEvents, addUserToEvent, removeUserFromEvent } from '../../actions/event_actions';

const mapStateToProps = (state) => {

  return({
    events: Object.values(state.events.events),
    groups: Object.values(state.groups.groups),
    currentUser: state.session.currentUser
  });
};

const mapDisplayToProps = (dispatch) => {
  return({
    requestEvents: (groupId) => dispatch(requestEvents(groupId)),
    addUserToEvent: (eventId) => dispatch(addUserToEvent(eventId)),
    removeUserFromEvent: (eventId) => dispatch(removeUserFromEvent(eventId))
  });
};

export default connect(mapStateToProps, mapDisplayToProps)(EventList);
