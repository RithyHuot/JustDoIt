import React from 'react';

class HomeGroupItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { group, redirectToGroup } = this.props;
    return(
      <li className='home-group-items' onClick={ redirectToGroup(group.id) }>
        <img src={ group.image_url } className='home-group-images'/>
        <div className='group-name'>
          { group.name }
        </div>
        <div className='group-user-count'>
          We're { group.user_count } Members
        </div>
      </li>
    );
  }
}

export default HomeGroupItems;
