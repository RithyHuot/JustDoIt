import React from 'react';
import { Link } from 'react-router';

const EventListItem = (props) => {
  const { event, groupId, addUserToEvent, removeUserFromEvent, currentUser } = props;
  let going;
  const users = event.users.map(
    (user, i) => {

      if (currentUser) {
        if (user.id === currentUser.id) {
          going = true;
        }
      }

      return (
        <Link key={`user-event-${i}`} to={`/member/${user.id}`}>
          <img src={user.image_url} className='event-user'/>
        </Link>
      );
    }
  );
  const date = new Date(event.date).toString();

  let rsvp;
  if (currentUser) {
    if (going) {
      rsvp = <span onClick={() => removeUserFromEvent(event.id)}>You are going!</span>;
    } else {
      rsvp = <span onClick={() => addUserToEvent(event.id)}>RSVP</span>;
    }
  } else {
    rsvp = <Link to='/signup'>Signup </Link>;
  }

  return (
    <div className='group-event'>
     <div className='event-name'>
       <Link to={`/group/${groupId}/event/${event.id}`}> { event.name }</Link>
     </div>
     <div className='event-detail-container'>
       <div className='event-detail'>
         <div className='event-location'>
           { event.location}
         </div>
         <div className='event-members'>
           { users }
         </div>
         <div className='event-description'>
           { event.description }
         </div>
       </div>
       <div className='event-logistic'>
         <div className='event-date'>
           { date.slice(0,11) }
         </div>
         <div className='event-rsvp'>
           { rsvp }
         </div>
         <div className='event-attendance'>
           <b>{ event.user_count }</b> going
         </div>
       </div>
     </div>
    </div>
  );
};

export default EventListItem;
