import React from 'react';
import { Link } from 'react-router';

class GroupBanner extends React.Component {
  render() {
    const { group } = this.props;
    return(
      <div className='group-banner-container'>
        <div className='group-outer-container'>
          <div className='group-banner'>
            { group.name }
          </div>
          <div className='group-nav'>
            <div className='group-left'>
              <div className='home'>
                <Link to={`/groups/${group.id}`}>Home</Link>
              </div>
              <div className='members'>
                <Link to={`/groups/${group.id}`}>Members</Link>
              </div>
              <div className='create-event-button'>
                <Link to={`/groups/${group.id}/event/new`}>Create Event</Link>
              </div>
            </div>
            <div className='group-right'>
              <div className='join-us'>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupBanner;
