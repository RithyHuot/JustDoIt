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
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFile = this.handleFile.bind(this);

    const { location, groups, params } = this.props;

    if (location.pathname === `/group/${params.groupId}/edit` && groups.length !== 0){
      let group = groups.filter(
          (object) => object.id == params.groupId
        );

      let foundedGroup = group[0];

      this.state =  {
        id: foundedGroup.id,
        name: foundedGroup.name,
        category: foundedGroup.category,
        location: foundedGroup.location,
        description: foundedGroup.description,
        founded: foundedGroup.founded,
        image_url: foundedGroup.image_url,
        imageFile: null,
        imageUrl: null
      };
    } else {
      this.state = this.defaultState();
    }
  }

  defaultState() {
    let founded = new Date;
    return ({
      name: '',
      category: '--Please select a category--',
      location: '',
      description: '',
      founded: `${founded}`
    });
  }

  componentWillMount(){
    const { location, groups, params, requestGroup, currentUser, router } = this.props;
    let groupEdit;
    if (location.pathname === `/group/${params.groupId}/edit`
      && groups.length === 0){
        requestGroup(params.groupId)
          .then((group) =>{
            if(group.group[params.groupId].organizer[0].id !== currentUser.id){
              router.push(`/group/${params.groupId}`);
            }
            this.setState( group.group[params.groupId] );
          });
        }

    if (groups.length !== 0 && location.pathname === `/group/${params.groupId}/edit`) {
      groupEdit = groups.filter(
        (object) => object.id == params.groupId
      );

      if (currentUser.id !== groupEdit[0].organizer[0].id) {
        router.push(`/group/${params.groupId}`);
      }
    }
  }

  componentWillUpdate(newProps) {
    if (newProps.location.pathname === `/group/new` && this.props.location.pathname !== `/group/new`) {
      this.setState(this.defaultState());
    }
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
    e.preventDefault();
    const { id, name, category, location, description, founded, imageFile }
    = this.state;

    if (this.props.location.pathname === `/group/${this.props.params.groupId}/edit`){

      let formData = new FormData();
      formData.append("group[id]", id );
      formData.append("group[name]", name);
      formData.append("group[category]", category);
      formData.append("group[founded]", founded);
      formData.append("group[description]", description);
      formData.append("group[location]", location);

      if (imageFile) {
        formData.append("group[image]", imageFile);
      }

      this.props.updateGroup(formData)
        .then(() => this.props.router.push(`/group/${this.props.params.groupId}`));
    } else {
      this.props.createGroup(this.state)
      .then(() => {
        this.props.router.push(`/home`);
      });
    }
  }

  handleFile(e) {
    e.preventDefault();
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null});
    }
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

  handleDelete(){
    this.props.deleteGroup(this.props.params.groupId)
      .then(() => {
        this.props.router.push('/home');
      });
  }

  render() {
    const { name, category, location, description, image_url, imageUrl } = this.state;

    let deleteButton;
    let updateFile;
    let submitValue = 'Agree & Continue';
    if (this.props.location.pathname === `/group/${this.props.params.groupId}/edit`) {
      deleteButton = <button className='group-form-delete' onClick={ this.handleDelete }> Delete Group </button>;
      submitValue = 'Update Group';
    }

    let imgURL;
    let imgURLButton;
    let imgURLButtonOrg;

    if (imageUrl) {
      imgURL = <img src={ imageUrl }/>;
    }

    if (!imageUrl) {
      imgURLButton =
      <div className='group-image-button-org'>
        <div className='group-image-update'>
          <label htmlFor="file">
            <i className="fa fa-upload" aria-hidden="true"></i> Choose a file
          </label>
          <input type="file" name="file" id="file" className="group-image-inputfile" onChange={ this.handleFile } />
        </div>
      </div>;
    } else {
      imgURLButtonOrg =
      <div className='group-image-update'>
        <label htmlFor="file">
          <i className="fa fa-upload" aria-hidden="true"></i> Choose a file
        </label>
        <input type="file" name="file" id="file" className="group-image-inputfile" onChange={ this.handleFile } />
      </div>;
    }

    if (this.props.location.pathname === `/group/${this.props.params.groupId}/edit`) {
      updateFile =
        <div className='group-image-file-container'>
          <div className='group-image-file'>
            <img src={ image_url } />
          </div>
          <div className='group-image-preview'>
            { imgURLButton }
            { imgURL }
          </div>
          { imgURLButtonOrg }
      </div>;
    }

    return (
      <div className='group-form-top'>
        <GroupFormBanner />
        <div className='group-form-inner'>
          <div className='group-form-container'>
            { this.renderErrors() }
            <div className='group-form'>
              <form onSubmit={ this.handleSubmit } >
                <div className='group-location'>
                  <label htmlFor='group-location'>{"What's your new Group's hometown?"}</label>
                  <input required id='group-location' placeholder='e.g. New York, NY' value={ location } onChange={this.handleInput('location')}/>
                </div>

                <div className='group-categories'>
                  <label htmlFor='group-categories'>What will your group be about?</label>

                  <select id='group-categories' value={ category } onChange={this.handleInput('category')}>
                    <option className='group-form-dropdown-cat' disabled={ true }>--Please select a category--</option>
                    { this.renderDropdownBox() };
                  </select>
                </div>

                <div className="group-name">
                  <label htmlFor='group-name'>What will your Meetup's name be?</label>
                  <input required id='group-name' value={ name }
                    placeholder=' e.g. Let do something awesome together!'
                    onChange={this.handleInput('name')}/>
                </div>

                <div className='group-description'>
                  <label htmlFor='group-description'>Describe who should join, and what your group will do </label>
                  <textarea id='group-description' required value={ description } onChange={this.handleInput('description')}>
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
                <input className='group-form-submit' type='submit' value={ submitValue } />
                { deleteButton }
              </form>
            </div>
          </div>
          { updateFile }
        </div>
      </div>
    );
  }


}

export default withRouter(GroupForm);
