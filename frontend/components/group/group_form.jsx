import React from 'react';
import { Link, withRouter } from 'react-router';

class GroupForm extends React.Component {
  constructor(props){
    super(props);
    debugger

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // componentWillMount(){
  //   const { group, currentUser } = this.props;
  //   const organizerId = group[0].organizer[0].id;
  //   if (organizerId !== currentUser.id) {
  //     this.props.router.push(`/group/${ group[0].id }`);
  //   }
  // }

  componentWillMount(){
    debugger
  }

  renderErrors() {
    const errors = this.props.errors.map((error, i) => (
      <li className='error-msg' key={`error-${i}`}>
        { error }
      </li>
    ));
    return (
      <ul >
        { errors }
      </ul>
    );
  }

  componentWillUnmount(){
    if (this.props.errors !== undefined) {
       this.props.receiveErrors([]);
    }
  }

  handleSubmit(e) {
  }

  handleInput(field) {
    return (e) => (
      this.setState({
        [field]: e.currentTarget.value
      })
    );
  }

  render() {
    return (
      <div>
        Hey
      </div>
    );
  }


}

export default withRouter(GroupForm);
