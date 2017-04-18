import React from 'react';
import { Link, withRouter } from 'react-router';

class Greeting extends React.Component {
  constructor (props) {
    super(props);
  }

  handleClick () {
    this.props.logout().then(
      () => this.props.router.push('/login')
    );
  }

  personalGreeting() {
    let logout;
    if (this.props.currentUser) {
      logout = (<button onClick={this.handleClick.bind(this)}> Log Out</button>);
    }

    return (
      <nav>
        <div className='header-inner'>
          <div className='header-right'>
            <span className='header-create-group'> Create a Group </span>
          </div>
          <div className='header-center'>
            <img src='/images/logo.png'/>
          </div>
          <div className='header-left'>
            {}
          </div>
        </div>
          { logout }
      </nav>
    );
  }

  sessionLink() {
    return(
      <nav>
        <Link to='/login' activeClassName='current'> Login </Link>
         &nbsp; OR &nbsp;
        <Link to='/signup' activeClassName='current'> Sign up </Link>
      </nav>
    );
  }

  render () {

    return this.personalGreeting();
    // if (this.props.currentUser) {
    //   return this.personalGreeting();
    // } else {
    //   return (<h1>Loading...</h1>);
    // }
  }
}

export default withRouter(Greeting);
