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

  }

  componentDidUpdate(newProps) {
    if (newProps.loggedIn) {
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
          <div className='signup-header'> Sign up </div>
          { this.renderErrors() }
          <div>
            <br />
            <label id='name'> Name: </label>
            <input
              type='text'
              value={ this.state.name }
              onChange={ this.handleInput("name") }
              className='login-input'
            />
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
            <input type='submit' value='Sign up' />
          </div>
        </form>
        <br />
        <div>
          Already a member? <Link to='/login'> Log in </Link>
        </div>
      </div>
    );
  }

}


export default withRouter(Signup);
