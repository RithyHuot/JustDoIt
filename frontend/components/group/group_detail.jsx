import React from 'react';
import { Link, withRouter } from 'react-router';

class GroupDetail extends React.Component {
  render (){
    const { group } = this.props;
    return(
      <div className='group-detail-container'>
        <div className='group-detail-description'>
          <div className='group-welcome'> Welcome to the {group[0].name}! </div>
          <div className='group-description'>{ group[0].description } </div>
        </div>
        <div className='group-detail-event'>
          <div className='group-event'>
            SOME EVENT
          </div>
          <div className='group-event'>
            SOME EVENT
          </div>
          <div className='group-event'>
            SOME EVENT
          </div>
          <div className='group-event'>
            SOME EVENT
          </div>
        </div>
      </div>
    );
  }
}

export default GroupDetail;
