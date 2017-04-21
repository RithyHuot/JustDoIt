import { connect } from 'react-redux';
import Group from './group';
import { requestGroup } from '../../actions/group_actions';


const mapStateToProps = (state) => {
  return({
    group: Object.values(state.groups.groups),
    currentUser: state.session.currentUser
  });
};

const mapDisplayToProps = (dispatch) => {
  return ({
    requestGroup: (groupId) => dispatch(requestGroup(groupId))
  });
};


export default connect(mapStateToProps, mapDisplayToProps)(Group);
