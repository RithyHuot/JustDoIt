import React from 'react';
import { withRouter, Link } from 'react-router';
import Spinner from '../shared/spinner.jsx';

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    if (this.props.currentUser) {
      this.state = this.props.currentUser;
    }
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

    let showUser = user;
    let editButton;

    if (currentUser && currentUser.email !== 'demo@justdoit.com'){
      if ( params.memberId == currentUser.id) {
        showUser = currentUser;
        editButton = <button onClick={this.redirectToUsersEdit} >Edit Profile</button>;
      }
    }

    const userGroups = groups.map((obj, i) =>{
      let anyUser = obj.users.some((x) => x.id === showUser.id);

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


    let count = userGroups.filter((x) => x !== undefined );

    const date = new Date(showUser.joined);
    return(
      <div className='user-profile-container'>
        <div className='user-profile-left'>
          <div className='user-profile-name'>
            Welcome, {showUser.first_name } { showUser.last_name }
          </div>
          <div className='user-profile-info-container'>
            <div className='user-profile-info'>
              <div className='user-location'>
                <div className='user-location-text'>
                  Location:
                </div>
                <div className='user-location-info'>
                  { showUser.location }
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
              { showUser.bio }
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
            <img src={ showUser.image_url } />
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
