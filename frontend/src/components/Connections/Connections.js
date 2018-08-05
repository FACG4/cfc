

/* eslint-disable */
import React, { Component } from 'react';
import Image from './Connection/image';
import OptionModal from './Connection/imageModal';
import './style.css';


class Connection extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: undefined,
      response: [],
      // fullName: [],
      // image: [],
      userId: [],
      modalId: 0,
    };
    this.handelOpenModel = this.handelOpenModel.bind(this);
    this.handelCloseModel = this.handelCloseModel.bind(this);
  }

  componentDidMount() {
    const url = '/api/MyFriends';
    fetch(url, {
      method: 'POST',
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then((response) => {
        this.setState(() => (
          {
            response,
            // fullName: response.map(a => a.full_name),
            // image: response.map(b => b.image),
            // userId: response.map(c => c.id),
          }
        ));
      });
  }

  handelOpenModel(id) {
    this.setState({
      selectedOption: true,
      modalId: id,

    });
  }

  handelCloseModel(action) {
    this.setState(() => ({
      selectedOption: false,
    }));

    if (action.type === 'del') { this.setState({ response: this.state.response.filter(friend => friend.id !== action.id) }); }
  }


  render() {
    const {
      response, selectedOption, fullName, image, userId,
    } = this.state;
    console.log(response);
    return (
      <div className="flex-container">
        {

  this.state.response.map((friend, id) => (
    <Image
      key={id}
      name={friend.full_name}
      src={friend.image}
      id={friend.id}
      openModel={this.handelOpenModel}
    />

  ))}
        <OptionModal selectedOption={selectedOption} closeModel={this.handelCloseModel} userId={this.state.modalId} alluser={this.state.userId} />

      </div>
    );
  }
}

export default Connection;
