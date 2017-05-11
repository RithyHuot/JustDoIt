import React from 'react';
import Spinner from '../shared/spinner.jsx';
import HomeBanner from './home_banner';
import SearchBar from './home_search';
import GroupItems from './home_group';
import Calendar from '../calendar/calendar';
import { Link } from 'react-router';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const { location, requestGroups, requestUserEvents, currentUser } = this.props;
     requestGroups();

     if ( currentUser) {
       requestUserEvents(currentUser.id);
       }

  }

  componentWillUpdate(newProps){
    const { location, requestGroups, requestUserEvents, currentUser } = this.props;
    if (newProps.groups.length !== this.props.groups.length) {
      this.props.receiveErrors([]);
    }
  }

  render(){
    const { groups, requestGroup, searchGroup,
            errors, location, params,
            events, addUserToEvent, removeUserFromEvent,
            currentUser
          } = this.props;

    if (!groups[0] && errors.length < 1 && !events[0]){
      return <Spinner />;
    }

    let homeGroups = groups;
    let category;
    let groupItem;

    if (location.pathname === `/category/${params.categoryQuery}`) {
      homeGroups = groups.filter((group) => group.category === params.categoryQuery);
      category = params.categoryQuery;
    }

    if (errors.length > 0 && location.pathname === '/home'){
      groupItem =
        (<div className='search-result-error'>
          No Results Found
        </div>);
    } else if (location.pathname === '/calendar') {
      if ( currentUser ){
        groupItem = (
          <Calendar
          events={events}
          addUserToEvent={addUserToEvent}
          removeUserFromEvent={removeUserFromEvent}
          currentUser={currentUser}
          groups={groups}
          />
        );
      } else {
        groupItem = (
          <div className='calendar-no-user'>
            <p>Please Login or Signup</p>
            <Link to='/signup'> Signup </Link>
          </div>
        );
      }
    } else {
      groupItem = (
        <GroupItems groups={ homeGroups } requestGroup={ requestGroup }/>
      );
    }

    return(
      <div>
        <HomeBanner groups={ homeGroups } category={category}/>
        <SearchBar searchGroup={ searchGroup } />
        { groupItem }
      </div>
    );
  }
}

export default Home;
