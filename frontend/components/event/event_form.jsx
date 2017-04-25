import React from 'react';
import { withRouter } from 'react-router';
import EventFormBanner from './event_form_banner';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { params, router, createEvent, updateEvent, location } = this.props;
    if (location.pathname === `/group/${params.groupId}/event/${params.eventId}/edit`){
      this.props.updateEvent(this.state)
        .then(() => router.push(`/group/${params.groupId}/event/${params.eventId}`));
    } else {
      createEvent(this.state)
      .then(() => {
        router.push(`/group/${params.groupId}`);
      });
    }
  }

  handleInput(field) {
    return (e) => (
      this.setState({
        [field]: e.currentTarget.value
      })
    );
  }

  handleDelete(){
    this.props.deleteEvent(this.props.params.eventId)
      .then(() => {
        this.props.router.push(`/group/${this.props.params.groupId}`);
      });
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

  render(){
    return(
      <div className='event-form-container'>
        { this.renderErrors() }
        <div className='event-form-header'>
          <EventFormBanner />
        </div>
        <div className='event-form-name'>
        </div>
        <div className='event-form-location'>
        </div>
        <div className='event-form-date'>
        </div>
        <div className='event-description'>
        </div>
      </div>
    );
  }
}

export default withRouter(EventForm);
