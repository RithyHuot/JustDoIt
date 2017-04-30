import React from 'react';
import { withRouter, Link } from 'react-router';

const EventDetail = (props) => {
  const { events, addUserToEvent, removeUserFromEvent, currentUser } = props;
  let going;
  const users = events[0].users.map(
    (user, i) => {
      if (user.id === currentUser.id) {
        going = true;
      }
      return (
        <div key={`user-${i}`} className='event-detail-user'>
          <img src={user.image_url} key={`user-event-${i}`} className='event-user'/>
          <Link to={`/member/${user.id}`}>
            <div key={`user-event-name-${i}`} className='event-user-name'>{ user.first_name } { user.last_name }</div>
          </Link>
        </div>
      );
    }
  );

  const handleRedirect = (path) => {
    if (props.location.pathname !== `/group/${props.events[0].id}/${path}`) {
      props.router.push(`/group/${props.params.groupId}/event/${props.events[0].id}/${path}`);
    }
  };

  const date = new Date(events[0].date);

  let rsvp;
  if (going) {
    rsvp = <span onClick={() => removeUserFromEvent(events[0].id)}>You are going!</span>;
  } else {
    rsvp = <span onClick={() => addUserToEvent(events[0].id)}>RSVP</span>;
  }

  let organizerButton;
  if(events[0].group_id == props.params.groupId) {
    organizerButton = <button onClick={ () => handleRedirect('edit') }>Edit Event </button>;
  }

  return (
    <div className='event-show-detail-container'>
      <div className='event-detail-left'>
        <div className='event-detail-header'>
          { events[0].name }
        </div>
        <div className='event-detail-logistic'>
          <div className='event-detail-date'>
            <div className='event-detail-date-year'>
              <div>
                <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
              </div>
              <div>
                { date.toDateString() }
              </div>
            </div>
            <div className='event-detail-date-time'>
              <i className="fa fa-clock-o" aria-hidden="true"></i> { date.toLocaleTimeString() }
            </div>
          </div>
          <div className='event-detail-location'>
            <div>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
            </div>
            <div>
              { events[0].location }
            </div>
          </div>
        </div>
        <div className='event-description'>
          { events[0].description }
        </div>
      </div>
      <div className='event-detail-right'>
        <div className='event-detail-rsvp'>
          <div className='event-detail-rsvp-text'>
            Are you going?
          </div>
          <div className='event-detail-rsvp-choice'>
            { rsvp }
          </div>
          <div className='organizerButton'>
            { organizerButton }
          </div>
        </div>
        <div className='event-detail-attendance'>
          { events[0].user_count } going!
        </div>
        <div className='event-detail-members'>
          { users }
        </div>
      </div>
    </div>
  );
};

export default withRouter(EventDetail);
