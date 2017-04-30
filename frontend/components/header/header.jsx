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
    this.redirectToHome = this.redirectToHome.bind(this);
    this.redirectToGroupForm = this.redirectToGroupForm.bind(this);
    this.redirectToUsers = this.redirectToUsers.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  redirectToHome () {
    if(this.props.location.pathname !== '/'){
      hashHistory.push('/');
    }
  }

  componentWillUpdate(){
    if (this.props.errors !== undefined) {
      this.props.receiveErrors([]);
    }
  }

  handleClick () {
    this.props.logout().then(
      () => {
        if(this.props.location.pathname !== '/'){
          this.props.router.push('/');
        }
      }
    );
  }

  redirectToGroupForm (){
    if (!this.props.currentUser) {
      this.openModal();
    } else {
      if (this.props.location.pathname !== '/group/new') {
        this.props.router.push('/group/new');
      }
    }
  }

  redirectToUsers (){
    const { location, currentUser, router } = this.props;
    if(location.pathname !== `/member/${currentUser.id}`){
      router.push(`/member/${currentUser.id}`);
    }
  }

  render() {
    let logout;
    let welcome;
    let login;
    let signup;
    const { currentUser } = this.props;
    if (currentUser) {
      logout = (<button id='logout-button' onClick={this.handleClick.bind(this)}> Log Out</button>);
      welcome = (<span className='welcome-msg'>
      Welcome, <span className='welcome-username'> {currentUser.first_name}</span>
    <img onClick={this.redirectToUsers} src={currentUser.image_url} className='username-image'/>
    </span>);
  } else {
    login = (<span id='login-link' onClick={ this.openModal }>Log in</span>);
    signup = (<Link onClick={ this.closeModal } to='/signup' className='signup-link'>Sign up</Link>);
  }

    return (
      <nav className='header-nav'>
        <Modal
          isOpen={ this.state.modalOpen }
          onRequestClose={ this.closeModal }
          style={ ModalStyle }
          contentLabel='login-modal'
          >
          <button className='close-button' onClick={this.closeModal}> X </button>
          <SignInForm closeModal={ this.closeModal }/>
        </Modal>
        <div className='header-inner'>
          <div className='header-left'>
            <span className='header-create-group' onClick={ this.redirectToGroupForm }> Create a Group </span>
          </div>
          <div className='header-center'>
            <img src='/images/justdoit.png' onClick={this.redirectToHome}/>
          </div>
          <div className='header-right'>
            { welcome }
            { login }
            { signup }
            { logout }
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
