import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDisplayToProps = (dispatch) => {
  return ({ logout: () => dispatch(logout()) });
};

export default connect(mapStateToProps, mapDisplayToProps)(Greeting);
