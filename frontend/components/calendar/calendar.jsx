import React from 'react';
import { withRouter } from 'react-router';
import EventListItem from '../event/event_list_item';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.sortEvent = this.sortEvent.bind(this);
  }

  sortEvent(array){
    let sortedArray =
      array.sort(function(a, b) {
        a = new Date(a.date);
        b = new Date(b.date);
        return a>b ? -1 : a<b ? 1 : 0;
    });

    return sortedArray;
  }

  render() {
    const { currentUser, addUserToEvent, removeUserFromEvent, events, groups} = this.props;

    let sortedEvents = this.sortEvent(events);

    const eventLists = sortedEvents.map(
      (e, i) => {
        return (
          <div key={`event-${i}`} className='calendar-events'>
            <EventListItem
            event={e}
            groupId = {e.group_id}
            addUserToEvent={addUserToEvent}
            removeUserFromEvent={removeUserFromEvent}
            currentUser={currentUser}
            />
          </div>
        );
        }
      );

    return (
      <div className='home-calendar-event'>
        { eventLists }
      </div>
    );
  }
}

export default withRouter(Calendar);
