import { connect } from 'react-redux';
import Explore from './explore';

const mapStateToProps = (state) => {
  return { loggedIn: Boolean(state.session.currentUser)};
};

export default connect(mapStateToProps, null)(Explore);

import React from 'react';
import { Link } from 'react-router';
