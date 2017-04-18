import React from 'react';
import merge from 'lodash/merge';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
  }

  componentDidUpdate(newProps) {
    this.redirectIfLoggedIn();
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
    this.props.login(user)
      .then(() => this.redirectIfLoggedIn());
  }

  renderErrors() {
    const errors = this.props.errors.map((error, i) => (
      <li key={`error-${i}`}>
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
      <div className='login'>
        <form onSubmit={this.handleSubmit}>
          <div className='login-header'>
            <span id='login-text'> Log in </span>
            <div id='sign-link'>
             Not registered with us yet? <Link to='/signup'> Sign up </Link>
           </div>
          </div>
          { this.renderErrors() }
          <div>
            <br />
            <label id='email'> Email: </label>
            <input
              type='text'
              value={ this.state.email }
              onChange={ this.handleInput("email") }
              className='login-input'
            />
            <br />
            <label id='password'> Password: </label>
            <input
              type='password'
              value={ this.state.password }
              onChange={ this.handleInput("password") }
              className='login-input'
            />

            <br />
            <input type='submit' value='Login' />
          </div>
        </form>
        <br />
      </div>
    );
  }
}

export default withRouter(SessionForm);
