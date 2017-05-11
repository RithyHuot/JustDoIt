import { connect } from 'react-redux';
import Header from './header';
import { logout, login } from '../../actions/session_actions';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  user: state.user
});

const mapDisplayToProps = (dispatch) => {
  return ({
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout())
  });
};

export default connect(mapStateToProps, mapDisplayToProps)(Header);
