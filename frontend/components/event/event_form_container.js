import { connect } from 'react-redux';
import EventForm from './event_form';
import { requestEvent, createEvent, updateEvent, deleteEvent, receiveErrors} from '../../actions/event_actions';

const mapStateToProps = (state) => {
  return({
    events: Object.values(state.events.events),
    currentUser: state.session.currentUser,
    errors: Object.values(state.groups.errors)
  });
};

const mapDisplayToProps = (dispatch) => {
  return({
    requestEvent: (eventId) => dispatch(requestEvent(eventId)),
    createEvent: (event) => dispatch(createEvent(event)),
    updateEvent: (event) => dispatch(updateEvent(event)),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors))
  });
};

export default connect(mapStateToProps, mapDisplayToProps)(EventForm);
