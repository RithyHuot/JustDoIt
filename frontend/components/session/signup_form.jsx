import React from 'react';
import merge from 'lodash/merge';
import { Link, withRouter } from 'react-router';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
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
    const user = merge({}, this.state);
    this.props.signup(user)
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
        <div className='signup-header'>
          <div className='signup-logo'>
            <Link to='/'><img src='/images/justdoit.png' /> </Link>
          </div>
        </div>
        <form className='signup-form' onSubmit={this.handleSubmit}>
          <div id='signup-text'> Sign up </div>
          { this.renderErrors() }
          <div>
            <br />
            <label id='name'> Name:
              <br />
              <input
                type='text'
                value={ this.state.name }
                onChange={ this.handleInput("name") }
                className='login-input'
                placeholder='eg. Jon Snow'
              />
            </label>
            <br />
            <label id='email'> Email address:
              <br />
              <input
                type='text'
                value={ this.state.email }
                onChange={ this.handleInput("email") }
                className='login-input'
                placeholder='eg. demo@justdoit.com'
              />
            </label>
            <br />
            <label id='password'> Password:
              <br />
              <input
                type='password'
                value={ this.state.password }
                onChange={ this.handleInput("password") }
                className='login-input'
              />
            </label>
            <br />
            <input type='submit' className='signup-submit' value='Sign up' />
          </div>
        </form>
      </div>
    );
  }

}
// <img width='100%' src='/images/splash.png' />

// <div>
//   Already a member? <Link to='/login'> Log in </Link>
// </div>

export default withRouter(Signup);
