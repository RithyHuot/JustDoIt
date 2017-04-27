import React from 'react';
import { withRouter } from 'react-router';

class UserProfileForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.currentUser;
    this.renderErrors = this.renderErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        Hello
        <form onSubmit={this.handleSubmit}>
        </form>
      </div>
    );
  }
}

export default UserProfileForm;
