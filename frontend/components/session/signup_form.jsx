import React from 'react';
import merge from 'lodash/merge';
import { Link, withRouter } from 'react-router';
import SignupHeader from './signup_header';
import Modal from 'react-modal';
import SignInForm from '../session/session_container';
import ModalStyle from '../shared/modal_style.js';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  componentDidUpdate(newProps) {
    if (newProps.loggedIn) {
      this.props.router.push('/');
    }
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push('/');
    }
  }

  handleInput(field) {
    return (e) => (
      this.setState({
        [field]: e.currentTarget.value
      })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const newUser = merge({}, this.state);
    this.props.signup(newUser)
      .then(() => this.redirectIfLoggedIn());
  }

  componentWillUnmount(){
    if (this.props.errors !== undefined) {
      this.props.receiveErrors([]);
    }
  }

  renderErrors() {
    const errors = this.props.errors.map((error, i) => (
      <li className='error-msg' key={`error-${i}`}>
        { error }
      </li>
    ));
    return (
      <ul>
        { errors }
      </ul>
    );
  }

  render () {
    return (
      <div className='signup'>
        <SignupHeader />

        <Modal
          isOpen={ this.state.modalOpen }
          onRequestClose={ this.closeModal }
          style={ ModalStyle }
          contentLabel='login-modal'
          >
          <button className='close-button' onClick={this.closeModal}> X </button>
          <SignInForm closeModal={ this.closeModal }/>
        </Modal>

        <form className='signup-form' onSubmit={this.handleSubmit}>
          <div id='signup-text'> Sign up </div>
          { this.renderErrors() }
          <div>
            <br />
            <label htmlFor='name'> First Name:
              <br />
              <input
                required
                type='text'
                value={ this.state.firstName }
                onChange={ this.handleInput("first_name") }
                className='login-input'
                placeholder='eg. Jon'
              />
            </label>
            <br />
            <label htmlFor='name'> Last Name:
              <br />
              <input
                required
                type='text'
                value={ this.state.lastName }
                onChange={ this.handleInput("last_name") }
                className='login-input'
                placeholder='eg. Snow'
              />
            </label>


            <br />
            <label htmlFor='email'> Email address:
              <br />
              <input
                required
                type='email'
                value={ this.state.email }
                onChange={ this.handleInput("email") }
                className='login-input'
                placeholder='eg. demo@justdoit.com'
              />
            </label>
            <br />
            <label htmlFor='password'> Password:
              <br />
              <input
                required
                type='password'
                value={ this.state.password }
                onChange={ this.handleInput("password") }
                className='login-input'
              />
            </label>
            <br />
            <input type='submit' className='signup-submit' value='Sign up' />
          </div>
          <div className='signup-signin'>
            Already a member? <span onClick={ this.openModal } > Sign in</span>
        </div>
        </form>

      </div>
    );
  }

}

export default withRouter(Signup);
