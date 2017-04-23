import { connect } from 'react-redux';
import GroupForm from './group_form';
import { createGroup, updateGroup, deleteGroup } from '../../actions/group_actions';


const mapStateToProps = (state) => {
  return({
    groups: Object.values(state.groups.groups),
    currentUser: state.session.currentUser
  });
};

const mapDisplayToProps = (dispatch) => {
  return ({
    createGroup: (group) => dispatch(createGroup(group)),
    updateGroup: (group) => dispatch(updateGroup(group)),
    deleteGroup: (groupId) => dispatch(deleteGroup(groupId))
  });
};


export default connect(mapStateToProps, mapDisplayToProps)(GroupForm);
