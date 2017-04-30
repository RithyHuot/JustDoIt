import React from 'react';
import { withRouter, Link } from 'react-router';
import Spinner from '../shared/spinner.jsx';

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.handleInput = this.handleInput.bind(this);
    this.redirectToUsersEdit = this.redirectToUsersEdit.bind(this);
  }

  componentDidMount(){
    const { groups, requestGroups, user, params, requestUser } = this.props;
    if (groups.length === 0) {
      requestGroups();
    }

    if ( !user ) {
      requestUser(params.memberId);
    }
  }

  componentWillUpdate(newProps){
    const { params, requestUser } = this.props;
    if (newProps.groups.length < 2){
      this.props.requestGroups();
    }
    
    if ( newProps.user.id != params.memberId) {
        requestUser(params.memberId);
    }
  }

  handleInput(field) {
    return (e) => (
      this.setState({
        [field]: e.currentTarget.value
      })
    );
  }

  redirectToUsersEdit() {
    this.props.router.push(`/member/${this.props.params.memberId}/edit`);
  }

  render(){
    const { currentUser, groups, user, params } = this.props;

    if (groups.length === 0 || !user ) return <Spinner />;

    const userGroups = groups.map((obj, i) =>{
      let anyUser = obj.users.some((x) => x.id === user.id);

      if (anyUser){
        return(
          <li key={`group-${i}`} className='user-group-container'>
            <div className='user-group-image'>
              <img src={obj.image_url} />
            </div>
            <div className='user-group-name'>
              <Link className='user-group-link' to={`/group/${obj.id}`}>{ obj.name }</Link>
              <div>
                Member
              </div>
            </div>
          </li>
        );
      }
    });

    let editButton;
    if (currentUser.id == params.memberId) {
      editButton = <button onClick={this.redirectToUsersEdit} >Edit Profile</button>;
    }

    let count = userGroups.filter((x) => x !== undefined );

    const date = new Date(user.joined);
    return(
      <div className='user-profile-container'>
        <div className='user-profile-left'>
          <div className='user-profile-name'>
            Welcome, {user.first_name } { user.last_name }
          </div>
          <div className='user-profile-info-container'>
            <div className='user-profile-info'>
              <div className='user-location'>
                <div className='user-location-text'>
                  Location:
                </div>
                <div className='user-location-info'>
                  { user.location }
                </div>
              </div>
              <div className='user-joined'>
                <div className='user-joined-text'>
                  JustDoIt member since:
                </div>
                <div className='user-joined-info'>
                  { date.toDateString() }
                </div>
              </div>
            </div>
            <div className='user-profile-bio'>
              { user.bio }
            </div>
          </div>
          <div className='user-group-count'>
            Member of { count.length } Groups
          </div>
          <ul className='user-groups'>
            { userGroups }
          </ul>
        </div>
        <div className='user-profile-right'>
          <div className='user-image'>
            <img src={ user.image_url } />
          </div>
          <div className='user-edit-profile'>
            { editButton }
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserProfile);
