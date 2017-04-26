import React from 'react';
import { Link } from 'react-router';
import Spinner from '../shared/spinner.jsx';

class UserProfile extends React.Component {

  componentDidMount(){
    const { groups, requestGroups } = this.props;
    if ( groups.length === 0) {
      requestGroups();
    }
  }

  componentWillUpdate(newProps){
    if (newProps.groups.length < 2){
      this.props.requestGroups();
    }
  }

  render(){
    const { currentUser, groups } = this.props;

    if (groups.length === 0) return <Spinner />;

    const userGroups = groups.map((obj, i) =>{
      let anyUser = obj.users.some((x) => x.id === currentUser.id);

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

    const date = new Date(currentUser.joined);
    return(
      <div className='user-profile-container'>
        <div className='user-profile-left'>
          <div className='user-profile-name'>
            Welcome, {currentUser.first_name } { currentUser.last_name }
          </div>
          <div className='user-profile-info-container'>
            <div className='user-profile-info'>
              <div className='user-location'>
                <div className='user-location-text'>
                  Location:
                </div>
                <div className='user-location-info'>
                  { currentUser.location } LOCATION
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
              BIO { currentUser.bio }
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
            <img src={ currentUser.image_url } />
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
