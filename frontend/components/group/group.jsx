import React from 'react';
import GroupBanner from './group_banner';
import Spinner from '../shared/spinner.jsx';

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
    const { groups, params } = this.props;
    let group = groups.filter(
      (object) => object.id == this.props.params.groupId
    );

    if (group.length < 1) return <Spinner />;
    return(
      <div className='group-page'>
        <GroupBanner group={ group }/>
      </div>
    );
    }
}

export default Group;
