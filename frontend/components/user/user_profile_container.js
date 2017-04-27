import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { requestGroups } from '../../actions/group_actions';

const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser,
    groups: Object.values(state.groups.groups)
  });
};

const mapDisplayToProps = (dispatch) => {
  return({
    requestGroups: () => dispatch(requestGroups())
  });
};

export default connect(mapStateToProps, mapDisplayToProps)(UserProfile);
