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
      </div>
    );
  }
}

export default GroupUser;
