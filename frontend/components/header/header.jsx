import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import Modal from 'react-modal';
import SignInForm from '../session/session_container';
import ModalStyle from '../shared/modal_style.js';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  redirectToHome () {
    hashHistory.push('/');
  }

  handleClick () {
    this.props.logout().then(
      () => this.props.router.push('/')
    );
  }

  componentWillUpdate(){
    this.props.receiveErrors([]);
  }

  render() {
    let logout;
    let welcome;
    let login;
    let signup;

    if (this.props.currentUser) {
      logout = (<button onClick={this.handleClick.bind(this)}> Log Out</button>);
      welcome = (<span className='welcome-msg'> Welcome, {this.props.currentUser.first_name} {this.props.currentUser.last_name}
    </span>);
  } else {
    login = (<span onClick={ this.openModal }>Login</span>);
  }

    return (
      <nav>
        <div className='header-inner'>
          <div className='header-right'>
            <span className='header-create-group'> Create a Group </span>
          </div>
          <div className='header-center'>
            <img src='/images/logo.png' onClick={this.redirectToHome}/>
          </div>
          <div className='header-left'>
            <ul>
              { welcome }
              &nbsp; &nbsp;
              <span onClick={ this.openModal }>Login</span>
              &nbsp; &nbsp;
              <Link onClick={ this.closeModal } to='/signup' className='header-link-signup'>Sign up</Link>
              &nbsp; &nbsp;
              { logout }
            </ul>
          </div>
        </div>
        <Modal
          isOpen={ this.state.modalOpen }
          onRequestClose={ this.closeModal }
          style={ ModalStyle }
          contentLabel='login-modal'
          >
          <button className='close-button' onClick={this.closeModal}> X </button>
          <SignInForm closeModal={ this.closeModal }/>
        </Modal>
      </nav>
    );
  }
}

export default withRouter(Header);
