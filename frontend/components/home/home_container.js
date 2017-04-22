import React from 'react';
import { connect } from 'react-redux';
import { requestGroups, requestGroup } from '../../actions/group_actions';
import Home from './home';

const mapStateToProps = (state) => {
  return({
    groups: Object.values(state.groups),
    currentUser: state.session.currentUser
  });
};

const mapDisplayToProps = (dispatch) => {
  return({
    requestGroups: () => dispatch(requestGroups()),
    requestGroup: (groupId) => dispatch(requestGroup(groupId))
  });
};

export default connect(mapStateToProps, mapDisplayToProps)(Home);
