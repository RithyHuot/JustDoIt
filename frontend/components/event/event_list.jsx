import React from 'react';
import Spinner from '../shared/spinner.jsx';
import EventListItem from './event_list_item';
import { withRouter } from 'react-router';

class EventList extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if (this.props.events.length < 2) {
      this.props.requestEvents(this.props.params.groupId);
    }
  }

 render(){
   const { events, params, addUserToEvent, removeUserFromEvent, currentUser } = this.props;
   const groupId = params.groupId;

   const eventLists = events.map(
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

   if (events.length < 1) {
     return <Spinner />;
   }

   return (
     <div>
      { eventLists }
    </div>
   );
 }
}

export default withRouter(EventList);
