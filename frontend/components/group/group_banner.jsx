import React from 'react';
import { Link, withRouter } from 'react-router';

class GroupBanner extends React.Component {

  // componentDidMount(){
  //   this.props.requestGroup(parseInt(this.props.params.groupId));
  // }

  render() {
    const { group } = this.props;
    return(
      <div className='group-banner-container'>
        <div className='group-outer-container'>
          <div className='group-banner'>
            { group[0].name }
          </div>
          <div className='group-nav'>
            <div className='group-left'>
              <div className='home'>
                <Link to={`/groups/${group[0].id}`}>Home</Link>
              </div>
              <div className='members'>
                <Link to={`/groups/${group[0].id}`}>Members</Link>
              </div>
              <div className='create-event-button'>
                <Link to={`/groups/${group[0].id}/event/new`}>Create Event</Link>
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

export default withRouter(GroupBanner);
