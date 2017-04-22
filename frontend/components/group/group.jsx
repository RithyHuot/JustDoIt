import React from 'react';
import Spinner from '../shared/spinner.jsx';
import GroupBanner from './group_banner';
import GroupUser from './group_user';
import GroupDetail from './group_detail';

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
    const { groups, params, currentUser } = this.props;
    let group = groups.filter(
      (object) => object.id == this.props.params.groupId
    );

    if (group.length < 1) return <Spinner />;
    return(
      <div className='group-page'>
        <GroupBanner group={ group }/>
        <div className='group-page-body'>
          <GroupUser user={ currentUser } group={ group }/>
          <GroupDetail group={ group } />
        </div>
      </div>
    );
    }
}

export default Group;
