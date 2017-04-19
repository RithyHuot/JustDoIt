import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import Signup from './signup_form';

const mapStateToProps = (state) => {
  return ({loggedIn: Boolean(state.session.currentUser),
  errors: Object.values(state.session.errors)});
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);

  return ({
    signup: (user) => dispatch(signup(user)),
    formType
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
