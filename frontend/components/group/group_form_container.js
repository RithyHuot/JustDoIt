import { connect } from 'react-redux';
import GroupForm from './group_form';
import { requestGroup, createGroup, updateGroup, deleteGroup, receiveErrors } from '../../actions/group_actions';


const mapStateToProps = (state) => {
  return({
    groups: Object.values(state.groups.groups),
    currentUser: state.session.currentUser,
    errors: Object.values(state.groups.errors)
  });
};

const mapDisplayToProps = (dispatch) => {
  return ({
    requestGroup: (groupId) => dispatch(requestGroup(groupId)),
    createGroup: (group) => dispatch(createGroup(group)),
    updateGroup: (group) => dispatch(updateGroup(group)),
    deleteGroup: (groupId) => dispatch(deleteGroup(groupId)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors))
  });
};


export default connect(mapStateToProps, mapDisplayToProps)(GroupForm);
