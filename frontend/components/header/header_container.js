import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  user: state.user
});

const mapDisplayToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout())
  });
};

export default connect(mapStateToProps, mapDisplayToProps)(Header);
