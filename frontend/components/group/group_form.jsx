import React from 'react';
import { Link, withRouter } from 'react-router';
import GroupFormBanner from './group_form_banner';

class GroupForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.renderDropdownBox = this.renderDropdownBox.bind(this);

    this.state ={
      name: '',
      category: '--Please select a category--',
      location: '',
      description: ''
    };
  }

  // componentWillMount(){
  //   const { group, currentUser } = this.props;
  //   const organizerId = group[0].organizer[0].id;
  //   if (organizerId !== currentUser.id) {
  //     this.props.router.push(`/group/${ group[0].id }`);
  //   }
  // }

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
    e.preventDefault();
    this.props.createGroup(this.state)
      .then(() => this.props.router.push('/home'));
  }

  handleInput(field) {
    return (e) => (
      this.setState({
        [field]: e.currentTarget.value
      })
    );
  }

  renderDropdownBox() {
    const categories =['Movements', 'Outdoors & Adventure', 'Tech', 'Family',
     'Health & Wellness', 'Sports & Fitness', 'Learning', 'Photography', 'Food & Drink',
     'Writing', 'Language & Culture', 'Music', 'LGBTQ', 'Film', 'Sci-Fi & Games',
     'Beliefs', 'Arts', 'Book Clubs', 'Dance', 'Pets', 'Hobbies & Crafts',
     'Fashion & Beauty', 'Social', 'Career & Business'];

     const dropdownBox = categories.map((category, i) => {
       return (
         <option className='group-form-dropdown-cat' key={`option-${i}`}  value={ category }>
           { category }
         </option>
       );
     });

     return dropdownBox;
  }

  render() {
    const { name, category, location, description } = this.state;
    return (
      <div className='group-form-container'>
        <GroupFormBanner />
        { this.renderErrors() }
        <div className='group-form'>
          <form onSubmit={ this.handleSubmit } >
            <div className='group-location'>
              <label id='group-location'>What's your new Group's hometown?</label>
              <input id='group-location' placeholder='e.g. New York, NY' value={ location } onChange={this.handleInput('location')}/>
            </div>

            <div className='group-categories'>
              <label id='group-categories'>What will your group be about?</label>

              <select id='group-categories' value={ category } onChange={this.handleInput('category')}>
                <option className='group-form-dropdown-cat' disabled={ true }>--Please select a category--</option>
                { this.renderDropdownBox() };
              </select>
            </div>

            <div className='group-name'>
              <label id='group-name'>What will your Meetup's name be?</label>
              <input id='group-name' value={ name } placeholder=' e.g. Let do something awesome together!' onChange={this.handleInput('name')}/>
            </div>

            <div className='group-description'>
              <label id='group-description'>Describe who should join, and what your group will do </label>
              <textarea value={ description } onChange={this.handleInput('description')}>
              </textarea>
            </div>

            <div className='group-agreement'>
              <div className='group-agreement-heading'>
                What is means to be a JustDoIt Member
              </div>
              <ul className='group-agreement-list'>
                <li>Real, in-person conversations</li>
                <li>Open and honest intentions</li>
                <li>Always safe and respectful</li>
                <li>Put your members first</li>
              </ul>
            </div>
            <input className='group-form-submit' type='submit' value='Agree & Continue' />
          </form>
        </div>
      </div>
    );
  }


}

export default withRouter(GroupForm);
