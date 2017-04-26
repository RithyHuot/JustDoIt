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

    this.state = {
      name: '',
      date: '',
      description: '',
      location: '',
      group_id: this.props.params.groupId
    };
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

    const { name, location, description, date } = this.state;
    let submitValue = 'Create Event';

    return(
      <div className='event-form-container'>

        <EventFormBanner />
        { this.renderErrors() }

        <div className='event-form'>
          <form onSubmit={ this.handleSubmit }>
            <div className='event-name'>
              <label id='event-name'>What will your event's name be?</label>
              <input required id='event-name' value={ name } placeholder=" e.g. Let's meetup  @ The Coffee Shop!" onChange={this.handleInput('name')}/>
            </div>
            <div className='event-location'>
              <label id='event-location'>Where will your event be hosted?</label>
              <input required id='event-location' placeholder=' e.g. New York, NY' value={ location } onChange={this.handleInput('location')}/>
            </div>
            <div className='event-date'>
              <label id='event-date'> When will your event start?</label>
              <input required type='datetime-local' defaultValue={ date } onChange={this.handleInput('date')}/>
            </div>
            <div className='event-description'>
              <label id='event-description'>Describe who should attend and why? </label>
              <textarea required value={ description } onChange={this.handleInput('description')}>
              </textarea>
            </div>
            <input className='event-form-submit' type='submit' value={ submitValue } />
          </form>
        </div>

      </div>
    );
  }
}

export default withRouter(EventForm);
