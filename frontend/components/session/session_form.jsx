import React from 'react';
import merge from 'lodash/merge';
import { Link, withRouter, hashHistory } from 'react-router';
import Modal from 'react-modal';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidUpdate(newProps) {
    if (newProps.loggedIn) {
      hashHistory.push('/');
    }
  }

  componentWillUnmount(){
    if (this.props.errors !== undefined) {
       this.props.receiveErrors([]);
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
    const user = merge({}, this.state);
    this.props.login(user)
      .then(() => {
        this.props.closeModal();
        if(this.props.location.pathname !== '/home'){
          hashHistory.push('/home');
        }
      });
  }

  renderErrors() {
    const errors = this.props.errors.map((error, i) => (
      <li className='error-msg' key={`error-${i}`}>
        { error }
      </li>
    ));
    return (
      <ul >
        { errors }
      </ul>
    );
  }

  guestLogin(email, password) {
    return (event) => {
      event.preventDefault();
      this.setState({ email: "", password: "" }, () => {
        this.setValue(email, "email", () => {
          this.setValue(password, "password", () => {
            this.handleSubmit(new Event('dummy'));
          });
        });
      });
    };
  }

  setValue(value, field, callback) {
    if (!value) return callback();
    this.setState({ [field]: this.state[field] + value[0] });
    setTimeout(() => {
      this.setValue(value.slice(1), field, callback);
    }, 30);
  }

  render () {
    return (
      <div className='login' >
        <form className='login' onSubmit={this.handleSubmit}>
          <div className='login-header'>
            <span id='login-text'> Log in </span>
            <div id='sign-link'>
             Not registered with us yet? <Link onClick={ this.props.closeModal } to='/signup'> Sign up </Link>
           </div>
          </div>
          { this.renderErrors() }
          <div>
            <br />
            <label id='email'> Email address:
            <br/>
              <input
                required
                type='text'
                value={ this.state.email }
                onChange={ this.handleInput("email") }
                className='login-input'
              />
              </label>
            <br />
            <label id='password'> Password:
            <br/>
              <input
                required 
                type='password'
                value={ this.state.password }
                onChange={ this.handleInput("password") }
                className='login-input'
              />
            </label>
            <br />
            <input className='login-submit' type='submit' value='Login' />
            <br />
            <div className='demo-submit-container'>
              <input className='demo-submit' type='submit' value='Demo Login' onClick={ this.guestLogin("demo@justdoit.com", "password123")}/>
            </div>
          </div>
        </form>
        <br />
      </div>
    );
  }
}

export default withRouter(SessionForm);
