import React from 'react';
import { connect } from 'react-redux';
import UserProfileForm from './user_profile_edit';
import { updateUser } from '../../actions/session_actions';


const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser,
    errors: Object.values(state.groups.errors)
  });
};

const mapDisplayToProps = (dispatch) => {
  return({
    updateUser: (user) => dispatch(updateUser(user))
  });
};

export default connect(mapStateToProps, mapDisplayToProps)(UserProfileForm);
