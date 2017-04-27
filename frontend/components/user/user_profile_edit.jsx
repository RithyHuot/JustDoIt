import React from 'react';
import { withRouter } from 'react-router';

class UserProfileForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.currentUser;
    this.renderErrors = this.renderErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillMount(){
    const { params, currentUser, router } = this.props;
    if (params.memberId != currentUser.id) {
      router.push(`/member/${params.memberId}`);
    }
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

  handleInput(field) {
    return (e) => (
      this.setState({
        [field]: e.currentTarget.value
      })
    );
  }

  handleSubmit(e){
    e.preventDefault();
    const { router, params, updateUser } = this.props;
    updateUser(this.state)
      .then(() =>
        router.push(`/member/${params.memberId}`)
      );
  }

  render() {
    const { first_name, last_name, location, bio } = this.state;

    return(
      <div className='user-profile-edit-container'>
        { this.renderErrors }
        <form onSubmit={this.handleSubmit}>
          <div className='user-profile-edit-name'>
            <label htmlFor='user-profile-edit-first-name'> First Name: </label>
            <input
              required
              id='user-profile-edit-first-name'
              value={ first_name }
              onChange={this.handleInput('first_name')}
              />
            <label htmlFor='user-profile-edit-last-name'> First Name: </label>
            <input
              required
              id='user-profile-edit-last-name'
              value={ last_name }
              onChange={this.handleInput('last_name')}
              />
          </div>
          <div className='user-profile-edit-location'>
            <label htmlFor='user-profile-edit-location'> Location: </label>
            <input
              required
              id='user-profile-edit-location'
              defaultValue={ location }
              onChange={this.handleInput('location')}
              />
          </div>
          <div className='user-profile-edit-bio'>
            <label htmlFor='user-profile-edit-bio'> Bio: </label>
            <textarea
              required
              id='user-profile-edit-bio'
              defaultValue={ bio }
              onChange={this.handleInput('bio')}
              >
            </textarea>
          </div>
          <input className='user-profile-form-submit' type='submit' value='Update Profile' />
        </form>
      </div>
    );
  }
}

export default UserProfileForm;
