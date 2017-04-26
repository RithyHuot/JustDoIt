import React from 'react';
import Spinner from '../shared/spinner.jsx';
import EventListItem from './event_list_item';
import { withRouter } from 'react-router';

class EventList extends React.Component {
  constructor(props){
    super(props);
    this.sortEvent = this.sortEvent.bind(this);
    this.redirectToCreateEvent = this.redirectToCreateEvent.bind(this);
  }

  componentDidMount(){
    const { events, params, requestEvents } = this.props;
    if (events) {
      let group = events.filter((obj) => obj.group_id == params.group_id);
      if (group.length < 1) {
        requestEvents(params.groupId);
      }
    }
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

  redirectToCreateEvent() {
    let groupId = this.props.params.groupId;
    this.props.router.push(`/group/${groupId}/event/new`);
  }

 render(){
   const { events, params, addUserToEvent, removeUserFromEvent, currentUser } = this.props;
   const groupId = params.groupId;


   if (events.length < 1) {
     let group = events.filter((obj) => obj.group_id == params.groupId);
     if (group.length < 1) {
       return (
         <div className='group-event'>
           <div className='group-event-create-text'>
             No Upcoming Events
           </div>
           <div className='group-event-create-button'>
             <button onClick={ this.redirectToCreateEvent }> Create an Event </button>
           </div>
         </div>
       );
     }
   }

   let sortedEvents = this.sortEvent(events);
   const eventLists = sortedEvents.map(
     (e, i) => {
       return (<EventListItem
         key={`event-${i}`}
         event={e}
         groupId={groupId}
         addUserToEvent={addUserToEvent}
         removeUserFromEvent={removeUserFromEvent}
         currentUser={currentUser}
         />);
       }
     );
   return (
     <div>
      { eventLists }
    </div>
   );
 }
}

export default withRouter(EventList);
