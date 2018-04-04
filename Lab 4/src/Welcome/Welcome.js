import React, { Component } from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
      <div className="lg-col-12 md-col-12 sm-col-12 xs-col-12" id = "first_grid">
        <h6>Welcome to Siri and Hedvigs fabulous website about your dinner planning </h6>
        <br></br>
        <div>
        <Link to="/search">
        <button className= "start_button btn" id="button">Create dinner</button>
        </Link>
        </div>
        </div>  
      </div>
    );
  }
}

export default Welcome;


