import React from 'react';
import { Link } from 'react-router';

const GroupMemberItem = (props) => {
  const { user } = props;
  const date = new Date(user.joined).toString();
  return (
    <div className='group-member-user'>
      <div className='group-member-image'>
        <img src={ user.image_url } />
      </div>
      <div className='group-member-info'>
        <div className='group-member-user-name'>
          <Link to={`/member/${user.id}`}>{ user.first_name } { user.last_name } </Link>
        </div>
        <div className='group-member-join'>
          Joined on: { date.slice(4,16) }
        </div>
      </div>
    </div>
  );
};

export default GroupMemberItem;
