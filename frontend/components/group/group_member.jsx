import React from 'react';
import GroupMemberItem from './group_member_item';

class GroupMember extends React.Component {

  render(){
    const users = this.props.group[0].users.map((user, i) =>{
      return <GroupMemberItem key={`user-${i}`} user={ user } />;
    });
    return (
      <div className='group-member-container'>
        <div className='group-member-text'>
          Members
        </div>
        { users }
      </div>
    );
  }
}

export default GroupMember;
