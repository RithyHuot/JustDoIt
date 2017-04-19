import { connect } from 'react-redux';
import { signup, receiveErrors } from '../../actions/session_actions';
import Signup from './signup_form';

const mapStateToProps = (state) => {
  return ({loggedIn: Boolean(state.session.currentUser),
  errors: Object.values(state.session.errors)});
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    signup: (user) => dispatch(signup(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
