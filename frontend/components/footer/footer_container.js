import { connect } from 'react-redux';
import Footer from './footer';
import { login } from '../../actions/session_actions';


const mapStateToProps = (state) =>({
  currentUser: state.session.currentUser
});

const mapDisplayToProps = (dispatch) => {
  return ({
    login: (user) => dispatch(login(user))
  });
};

export default connect(mapStateToProps, mapDisplayToProps)(Footer);
