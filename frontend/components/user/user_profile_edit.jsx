import React from 'react';
import { withRouter } from 'react-router';

class UserProfileForm extends React.Component {
  constructor(props){
    super(props);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);

    const { currentUser } = this.props;
    this.state = {
      id: currentUser.id,
      first_name: currentUser.first_name,
      last_name: currentUser.last_name,
      image_url: currentUser.image_url,
      joined: currentUser.joined,
      bio: currentUser.bio,
      location: currentUser.location,
      imageFile: null,
      imageUrl: null
    };
  }

  componentWillMount(){
    const { params, currentUser, router } = this.props;
    if (params.memberId != currentUser.id) {
      router.push(`/member/${params.memberId}`);
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

  handleInput(field) {
    return (e) => (
      this.setState({
        [field]: e.currentTarget.value
      })
    );
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

  handleSubmit(e){
    e.preventDefault();
    const { router, params, updateUser } = this.props;
    const { id, first_name, last_name, location, bio, imageUrl, joined, imageFile }
    = this.state;

    let formData = new FormData();
    formData.append("user[id]", id );
    formData.append("user[first_name]", first_name);
    formData.append("user[last_name]", last_name);
    formData.append("user[joined]", joined);
    formData.append("user[bio]", bio);
    formData.append("user[location]", location);

    if (imageFile) {
      formData.append("user[image]", imageFile);
    }

    updateUser(formData)
      .then(() =>
        router.push(`/member/${params.memberId}`)
      );
  }

  render() {
    const { first_name, last_name, location, bio, image_url, imageUrl } = this.state;

    let imgURL;
    let imgURLButton;
    let imgURLButtonOrg;

    if (imageUrl) {
      imgURL = <img src={ imageUrl }/>;
    }

    if (!imageUrl) {
      imgURLButton =
        <div className='user-image-button-org'>
          <div className='user-profile-image-update'>
            <label htmlFor="file">
              <i className="fa fa-upload" aria-hidden="true"></i> Choose a file
            </label>
            <input type="file" name="file" id="file" className="user-profile-image-inputfile" onChange={ this.handleFile } />
          </div>
        </div>;
    } else {
      imgURLButtonOrg =
      <div className='user-profile-image-update'>
        <label htmlFor="file">
          <i className="fa fa-upload" aria-hidden="true"></i> Choose a file
        </label>
        <input type="file" name="file" id="file" className="user-profile-image-inputfile" onChange={ this.handleFile } />
      </div>;
    }

    return(
      <div className='user-profile-edit-container'>
        { this.renderErrors }
        <form className='user-profile-edit-form' onSubmit={this.handleSubmit}>
          <div className='user-profile-edit-name'>
            <label htmlFor='user-profile-edit-first-name'> First Name: </label>
            <input
              required
              id='user-profile-edit-first-name'
              value={ first_name }
              onChange={this.handleInput('first_name')}
              />
            <label htmlFor='user-profile-edit-last-name'> First Name: </label>
            <input
              required
              id='user-profile-edit-last-name'
              value={ last_name }
              onChange={this.handleInput('last_name')}
              />
          </div>
          <div className='user-profile-edit-location'>
            <label htmlFor='user-profile-edit-location'> Location: </label>
            <input
              id='user-profile-edit-location'
              defaultValue={ location }
              onChange={this.handleInput('location')}
              />
          </div>
          <div className='user-profile-edit-bio'>
            <label htmlFor='user-profile-edit-bio'> Bio: </label>
            <textarea
              id='user-profile-edit-bio'
              defaultValue={ bio }
              onChange={this.handleInput('bio')}
              >
            </textarea>
          </div>
          <input className='user-profile-form-submit' type='submit' value='Update Profile' />
        </form>
        <div className='user-profile-image-file-container'>
          <div className='user-profile-image-file'>
            <img src={ image_url } />
          </div>
          <div className='user-profile-image-preview'>
            { imgURLButton }
            { imgURL }
          </div>
            { imgURLButtonOrg }
        </div>
      </div>
    );
  }
}

export default UserProfileForm;
