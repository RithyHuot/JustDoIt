import React from 'react';
import Spinner from '../shared/spinner.jsx';
import GroupBanner from './group_banner';
import GroupUser from './group_user';
import GroupDetail from './group_detail';
import GroupMember from './group_member';
import EventDetail from '../event/event_detail';

class Group extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const { groups, events, params, requestGroup, requestEvent, location } = this.props;
    let group = groups.filter(
      (object) => object.id == params.groupId
    );

    if( group.length < 1 ) {
      requestGroup(params.groupId);
    }
    let eventObj;
    if (location.pathname === `/group/${params.groupId}/event/${params.eventId}`) {
      eventObj = this.props.events.filter(
        (object) => object.id == params.eventId
      );
      if( eventObj.length < 1 ) {
        requestEvent(params.eventId);
      }
    }
  }

  render(){
    const { groups, params, currentUser, location, addUserToGroup, removeUserFromGroup, events, addUserToEvent, removeUserFromEvent } = this.props;
    let group = groups.filter(
      (object) => object.id == params.groupId
    );


    if (group.length < 1) return <Spinner />;

    let eventObj;
    if (location.pathname === `/group/${params.groupId}/event/${params.eventId}`) {
      eventObj = events.filter(
        (object) => object.id == params.eventId
      );
      if (eventObj.length < 1) return <Spinner />;
    }

    let path;

    if (location.pathname === `/group/${params.groupId}/members`) {
      path = <GroupMember group={ group } />;
    } else if (location.pathname === `/group/${params.groupId}`) {
      path = <GroupDetail group={ group } />;
    } else {
      path = <EventDetail
              events={eventObj}
              addUserToEvent={addUserToEvent}
              removeUserFromEvent={removeUserFromEvent}
              currentUser={currentUser}
              groups={groups}
              />;
    }

    return(
      <div className='group-page'>
        <GroupBanner
          group={ group }
          user={ currentUser }
          addUserToGroup={ addUserToGroup }
          removeUserFromGroup={ removeUserFromGroup }
          />
        <div className='group-page-body'>
          <GroupUser
            user={ currentUser }
            group={ group }/>
          { path }
        </div>
      </div>
    );
  }
}

export default Group;
