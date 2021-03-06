
import React, { Component } from 'react';
import FontAwesomeIcon from 'react-fontawesome';
import './style.css';

class Search extends Component {

handleSearch = (e) => {
  e.preventDefault();
  this.props.handleSearchResponse(this.props.response.filter((carer) => e.target.search.value === carer.location
  ))
}
render(){
  return (
    <div>
<form className="search-form" onSubmit={this.handleSearch}>
        <div className="search-div">
          <FontAwesomeIcon className="fas fa-search color--icon-search" />
        <input className="search-input" name="search" type="text" placeholder="search" />
          </div>
        
</form>
  </div>
)
   
}

}


export default Search;
