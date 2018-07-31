import React, { Component } from 'react';
import logo from './careandshare.png';

import ('../style.css');

const Title = ({ title }) => {
    return(
      <a href="#">
        {title?<h1>{title}</h1>:<img className="App-header-title" src={logo} alt="logo"/>}
      </a>
    );
}

export default Title;