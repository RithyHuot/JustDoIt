import { connect } from 'react-redux';
import WelcomeVideo from './welcome';

const mapStateToProps = (state) => {
  return { loggedIn: Boolean(state.session.currentUser)};
};

export default connect(mapStateToProps, null)(WelcomeVideo);
