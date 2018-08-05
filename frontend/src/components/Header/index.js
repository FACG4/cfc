import React, { Component } from 'react';
import FontAwesomeIcon from 'react-fontawesome'

import HeaderTitle from './HeaderTitle/HeaderTitle';
import Notifications from './Notifications';

import './style.css';

class Header extends Component {

  // the title should come from the selected nav

  render(){
    return(
      <header className="App-header">
        <Notifications />
        <HeaderTitle title={this.props.title} />
        
        <a className="menu">
          <FontAwesomeIcon name="bars" />
        </a>
        <a className="angle-left">
          <FontAwesomeIcon name="angle-left" />
        </a>
      </header>
    );
  }
}

export default Header;