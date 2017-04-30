import React from 'react';
import { withRouter } from 'react-router';
import EventFormBanner from './event_form_banner';
import Spinner from '../shared/spinner.jsx';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    const { location, events, params } = this.props;

    if (location.pathname === `/group/${params.groupId}/event/${params.eventId}/edit` && events.length !== 0){
      let event = events.filter(
          (object) => object.id == params.eventId
        );

      this.state =  event[0];
     } else {
      this.state = {
        name: '',
        date: '',
        description: '',
        location: '',
        group_id: this.props.params.groupId
      };
    }
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

  componentWillMount(){
    const { location, events, params, requestEvent, requestGroup, groups, router, currentUser } = this.props;

    if ( groups.length < 1 ) {
      requestGroup(params.groupId);
    } else {
      const ownerGroup = groups.filter((group) => group.id == params.groupId);
      if (ownerGroup[0].organizer[0].id !== currentUser.id){
        router.push(`/group/${params.groupId}`)
      }
    }


    if (location.pathname === `/group/${params.groupId}/event/${params.eventId}/edit`
      && events.length === 0){
        requestEvent(params.eventId)
          .then((event) =>{
            this.setState( event.event );
          });
      }
  }

  componentWillUnmount(){
    if (this.props.errors !== undefined) {
       this.props.receiveErrors([]);
    }
  }

  render(){
    const { name, location, description, date } = this.state;

    if ( this.props.groups.length < 1) return <Spinner />;

    let deleteButton;
    let submitValue = 'Create Event';

    if (this.props.location.pathname === `/group/${this.props.params.groupId}/event/${this.props.params.eventId}/edit`){
      deleteButton = <button className='event-form-delete' onClick={ this.handleDelete }> Delete Event </button>;
      submitValue = 'Update Event';
    }

    return(
      <div className='event-form-container'>

        <EventFormBanner />
        { this.renderErrors() }

        <div className='event-form'>
          <form onSubmit={ this.handleSubmit }>
            <div className='event-name'>
              <label htmlFor='event-name'>What will your event's name be?</label>
              <input required id='event-name' value={ name } placeholder=" e.g. Let's meetup  @ The Coffee Shop!" onChange={this.handleInput('name')}/>
            </div>
            <div className='event-location'>
              <label htmlFor='event-location'>Where will your event be hosted?</label>
              <input required id='event-location' placeholder=' e.g. New York, NY' value={ location } onChange={this.handleInput('location')}/>
            </div>
            <div className='event-date'>
              <label htmlFor='event-date'> When will your event start?</label>
              <input id='event-date' required type='datetime-local' onChange={this.handleInput('date')}/>
            </div>
            <div className='event-description'>
              <label htmlFor='event-description'>Describe who should attend and why? </label>
              <textarea id='event-description' required value={ description } onChange={this.handleInput('description')}>
              </textarea>
            </div>
            <input className='event-form-submit' type='submit' value={ submitValue } />
            { deleteButton }
          </form>
        </div>

      </div>
    );
  }
}

export default withRouter(EventForm);
