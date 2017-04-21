import React from 'react';
import Spinner from '../shared/spinner.jsx';
import HomeBanner from './home_banner';
import SearchBar from './home_search';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestGroups();
  }

  render(){
    const { groups } = this.props;
    if (!groups[0]) return <Spinner />;

    return(
      <div>
        <HomeBanner groups={ groups } />
        <SearchBar />
      </div>
    );
  }
}

export default Home;
