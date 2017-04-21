import React from 'react';
import GroupBanner from './group_banner';
import Spinner from '../shared/spinner.jsx';

class Group extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestGroup(this.props.params.groupId);
  }

  render(){
    const { group } = this.props;
    if (!group[0]) return <Spinner />;
    return(
      <div className='group-page'>
        <GroupBanner group={ group }/>
      </div>
    );
    }
}

export default Group;
