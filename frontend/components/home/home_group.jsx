import React from 'react';
import GroupItems from './home_group_items';
import { withRouter } from 'react-router';

const HomeGroup = (props) => {
  const redirectToGroup = (groupId) => () => {
    if (props.location.pathname !== `/group/${groupId}`) {
      props.router.push(`/group/${groupId}`);
    }
  };
  const groupItems = props.groups.map((group, i) => {
    return (
      <GroupItems redirectToGroup={ redirectToGroup } key={ `group-item-${i}` } group={ group } requestGroup={ props.requestGroup } />
    );
  });

  return (
    <ul className='home-group'>
      { groupItems }
    </ul>
  );
};

export default withRouter(HomeGroup);
