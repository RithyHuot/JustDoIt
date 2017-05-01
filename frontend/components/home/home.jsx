import React from 'react';
import Spinner from '../shared/spinner.jsx';
import HomeBanner from './home_banner';
import SearchBar from './home_search';
import GroupItems from './home_group';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestGroups();
  }

  componentWillUpdate(newProps){
    if (newProps.groups.length !== this.props.groups.length) {
      this.props.receiveErrors([]);
    }
  }

  render(){
    const { groups, requestGroup, searchGroup, errors, location, params } = this.props;
    if (!groups[0] && errors.length < 1){
      return <Spinner />;
    }
    let homeGroups = groups;
    let category;
    let groupItem;

    if (location.pathname === `/category/${params.categoryQuery}`) {
      homeGroups = groups.filter((group) => group.category === params.categoryQuery);
      category = params.categoryQuery;
    }

    if (errors.length > 0 ){
      groupItem =
        (<div className='search-result-error'>
          No Results Found
        </div>);
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
