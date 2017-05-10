import React from 'react';
import EventDetail from '../event/event_detail';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class='home-calendar'>
        <EventDetail
                events={eventObj}
                addUserToEvent={addUserToEvent}
                removeUserFromEvent={removeUserFromEvent}
                currentUser={currentUser}
                groups={groups}
                />;
      </div>
    );
  }
}

export default Calendar;
