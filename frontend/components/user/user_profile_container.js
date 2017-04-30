import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { requestGroups } from '../../actions/group_actions';
import { requestUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser,
    user: state.user,
    groups: Object.values(state.groups.groups)
  });
};

const mapDisplayToProps = (dispatch) => {
  return({
    requestGroups: () => dispatch(requestGroups()),
    requestUser: (userId) => dispatch(requestUser(userId))
  });
};

export default connect(mapStateToProps, mapDisplayToProps)(UserProfile);
