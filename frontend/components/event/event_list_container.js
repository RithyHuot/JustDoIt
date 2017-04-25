import { connect  } from 'react-redux';
import EventList from './event_list';
import { requestEvents } from '../../actions/event_actions';

const mapStateToProps = (state) => {
  return({
    events: Object.values(state.events.events),
    currentUser: state.session.currentUser
  });
};

const mapDisplayToProps = (dispatch) => {
  return({
    requestEvents: (groupId) => dispatch(requestEvents(groupId))
  });
};

export default connect(mapStateToProps, mapDisplayToProps)(EventList);
