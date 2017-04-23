import React from 'react';
import Spinner from '../shared/spinner.jsx';
import GroupBanner from './group_banner';
import GroupUser from './group_user';
import GroupDetail from './group_detail';
import GroupMember from './group_member';

class Group extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    let group = this.props.groups.filter(
      (object) => object.id == this.props.params.groupId
    );

    if( group.length < 1) {
      this.props.requestGroup(this.props.params.groupId);
    }
  }

  render(){
    const { groups, params, currentUser, location } = this.props;
    let group = groups.filter(
      (object) => object.id == params.groupId
    );

    let path;

    if (location.pathname === `/group/${params.groupId}/members`) {
      path = <GroupMember group={ group } />;
    } else {
      path = <GroupDetail group={ group } />;
    }

    if (group.length < 1) return <Spinner />;
    return(
      <div className='group-page'>
        <GroupBanner group={ group }/>
        <div className='group-page-body'>
          <GroupUser user={ currentUser } group={ group }/>
          { path }
        </div>
      </div>
    );
    }
}

export default Group;
