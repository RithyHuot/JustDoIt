import React from 'react';
import Modal from 'react-modal';
import ModalStyle from '../shared/modal_style.js';

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: this.props.modalOpen,
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  render() {
    const { TypeComponent } = this.props;

    return(
      <Modal
        isOpen={ this.state.modalOpen }
        onRequestClose={ this.closeModal }
        style={ ModalStyle }
        contentLabel='login-modal'
        >
        <button className='close-button' onClick={this.closeModal}> X </button>
        <TypeComponent closeModal={ this.closeModal }/>
      </Modal>
    )
  }

}

export default ModalComponent;
