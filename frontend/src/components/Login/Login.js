import React, { Component } from 'react';
import fetch from '../../helpers/fetch';
import './style.css';
class Login extends Component {

state = {
    error: undefined,
    response: []
  }

 handelLogin = (e) => {
  e.preventDefault();
  const inputsValues = {
    userName:e.target.userName.value,
    password:e.target.password.value
  }

  if(inputsValues.userName.trim() && inputsValues.password.trim()){
    e.target.userName.value = "";
    e.target.password.value = "";
    const handleFetch = {
      method: 'POST',
      url: '/login',
      data: inputsValues,
    }


fetch(handleFetch, (response) => {
response = JSON.parse(response);
console.log(response);
this.setState(() =>   (
  {response: Object.assign({}, response),
  error: response.msg
              }
            )
          )
        }
    );

  }  else{
    this.setState(()=>(
      {error: "All fields are required"}
    ));
  }

}


render(){
  return(
    <div className="container">
    <div className="login-header">
    <h3 className="login-header--title"> Sign In </h3>
    <h3 className="login-header--title"> SignUp </h3>
    </div>
    <form className="login-form" method="POST" onSubmit={this.handelLogin} >
    <div className="login-input">
    <input className="login-input-field" name="userName" type="text" placeholder="Username" />
    <input className="login-input-field" name="password" type="password" placeholder="Password" />
    </div>
    <button className="big-button">Sign In</button>
    </form>
  {this.state.error &&  <div className="login-error-msg">
    { <h3>{this.state.error}</h3>}
    </div>}
</div>
  )
}
}

export default Login;