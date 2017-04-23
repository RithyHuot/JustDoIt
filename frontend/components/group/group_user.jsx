import React from 'react';
import { Link } from 'react-router';

class GroupUser extends React.Component {
  render() {
    const { user, group } = this.props;
    const date = new Date(group[0].founded).toString();
    return (
      <div className='group-user-container'>
        <div className='group-pic'>
          <img src={ group[0].image_url }/>
        </div>
        <div className='group-user-info'>
          <div className='group-location'>
            { group[0].location }
          </div>
          <div className='group-founded'>
            Founded: { date.slice(4,16) }
          </div>
          <div className='group-members'>
            Members: { group[0].user_count }
          </div>
        </div>
        <div className='group-organizer'>
          <div className='group-organizer-text'>
            Organizers:
          </div>
          <div className='group-organizer-name'>
            <img className='group-organizer-image' src={ group[0].organizer[0].image_url }/>
            <span>{ group[0].organizer[0].first_name } { group[0].organizer[0].last_name } </span>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupUser;
