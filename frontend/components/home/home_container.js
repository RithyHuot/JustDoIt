import React from 'react';
import { connect } from 'react-redux';
import { requestGroups } from '../../actions/group_actions';
import Home from './home';

const mapStateToProps = (state) => {
  return({
    groups: Object.values(state.groups),
    currentUser: state.session.currentUser
  });
};

const mapDisplayToProps = (dispatch) => {
  return({
    requestGroups: () => dispatch(requestGroups())
  });
};

export default connect(mapStateToProps, mapDisplayToProps)(Home);
