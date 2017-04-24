import { connect } from 'react-redux';
import Group from './group';
import { requestGroup, addUserToGroup, removeUserFromGroup, createGroup, updateGroup, deleteGroup } from '../../actions/group_actions';


const mapStateToProps = (state) => {
  return({
    groups: Object.values(state.groups.groups),
    currentUser: state.session.currentUser
  });
};

const mapDisplayToProps = (dispatch) => {
  return ({
    requestGroup: (groupId) => dispatch(requestGroup(groupId)),
    addUserToGroup: (groupId) => dispatch(addUserToGroup(groupId)),
    removeUserFromGroup: (groupId) => dispatch(removeUserFromGroup(groupId))
  });
};


export default connect(mapStateToProps, mapDisplayToProps)(Group);
