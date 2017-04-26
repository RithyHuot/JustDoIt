import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';


const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser
  });
};

// const mapDisplayToProps = (dispatch) => {
//   return({
//
//   });
// };

export default connect(mapStateToProps, null)(UserProfile);
