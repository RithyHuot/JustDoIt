import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return ({loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors});
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  // let actionType;
  // if (formType === 'login') {
  //   actionType = login;
  // } else {
  //   actionType = signup;
  // }
  return ({
    login: (user) => dispatch(login(user)),
    formType
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
