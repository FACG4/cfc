import Modal from 'react-modal';
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import './style.css';
const customStyles = {
  content : {
    width: '80%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    background: 'none',
    border: 'none',
    transform: 'translate(-50%, -50%)'
  }
};

class ConnectProfile extends Component {
    
  render(){
    const {
      image, full_name, email, location, sitution, looking, offer, age
    } = this.props.data;
    return (
      <Modal
        isOpen={this.props.openProfileModal}
        onRequestClose={this.props.closeProfileModal}
        style={customStyles}
      >
        <div className="connection-profile">
          <FontAwesome name="times" className="profile-close-icon" onClick={this.props.closeProfileModal}/>
          <div className="head">
            <img className="image-style" src={image}/>
            <h2>{full_name}</h2>
          </div>
          {this.props.err?<p className="error">{this.props.err}</p>:''}        
          <p className="lable">Location:</p>
          <p className="field">{location}</p>
          <p className="lable">Age:</p>
          <p className="field">{age}</p>
          <p className="lable">Cared For Situtation</p>
          <p className="field">{sitution}</p>
          <p className="lable">What am I looking for?</p>
          <p className="field">{looking}</p>
          <p className="lable">What can I offer to other carers?</p>
          <p className="field">{offer}</p>
          <button onClick={this.props.closeProfileModal}>back</button>
        </div>
      </Modal>
    );
  }
}

export default ConnectProfile;
