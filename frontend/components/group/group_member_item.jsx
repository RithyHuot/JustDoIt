import React from 'react';

const GroupMemberItem = (props) => {
  const { user } = props;
  return (
    <div className='group-member-user'>
      <div className='group-member-user-name'>
        {user.first_name} {user.last_name}
      </div>
    </div>
  );
};

export default GroupMemberItem;
