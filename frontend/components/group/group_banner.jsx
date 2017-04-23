import React from 'react';
import { Link, withRouter } from 'react-router';

class GroupBanner extends React.Component {
  constructor(props){
    super(props);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.joinGroup = this.joinGroup.bind(this);
    this.leaveGroup = this.leaveGroup.bind(this);
  }

  handleRedirect(path) {
    if (this.props.location.pathname !== `/group/${this.props.group[0].id}/${path}`) {
      this.props.router.push(`/group/${this.props.group[0].id}/${path}`);
    }
  }

  joinGroup (){
    const groupId = this.props.group[0].id;
    this.props.addUserToGroup(groupId);
  }

  leaveGroup() {
    const groupId = this.props.group[0].id;
    this.props.removeUserFromGroup(groupId);
  }

  render() {
    const { group, user } = this.props;
    let button;
    const joined = group[0].users.some((obj) => obj.id === user.id);

    if (joined) {
      button = <button onClick={ () => this.leaveGroup() }>Leave Group</button>;
    } else {
      button = <button onClick={ () => this.joinGroup() } > Join us! </button>;
    }

    return(
      <div className='group-banner-container'>
        <div className='group-outer-container'>
          <div className='group-banner'>
            <span>{ group[0].name }</span>
          </div>
          <div className='group-nav'>
            <div className='group-left'>
              <div className='home'>
                <Link to={`/group/${group[0].id}`}>Home</Link>
              </div>
              <div className='members'>
                <Link to={`/group/${group[0].id}/members`}>Members</Link>
              </div>
              <div className='create-event-button'>
                <Link to={`/group/${group[0].id}/event/new`}>Create an Event</Link>
              </div>
            </div>
            <div className='group-right'>
              <div className='join-us'>
                { button }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(GroupBanner);
