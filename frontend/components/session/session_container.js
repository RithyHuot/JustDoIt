import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return ({loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors});
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    login: (user) => dispatch(login(user))
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
