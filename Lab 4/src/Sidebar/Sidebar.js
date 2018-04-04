import React, { Component } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
class Sidebar extends Component {

  constructor(props) {
    super(props)
    
    // we put on state the properties we want to use and modify in the component
    this.state = {
      numberOfGuests: this.props.model.getNumberOfGuests()
    }
  }

  // this methods is called by React lifecycle when the 
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to setup model observer
  componentDidMount() {
    this.props.model.addObserver(this)
  }

  // this is called when component is removed from the DOM
  // good place to remove observer
  componentWillUnmount() {
    this.props.model.removeObserver(this)
  }

  // in our update function we modify the state which will
  // cause the component to re-render
  update() {
    this.setState({
      numberOfGuests: this.props.model.getNumberOfGuests()
    })
  }

  // our handler for the input's on change event
  onNumberOfGuestsChanged = (e) => {
    this.props.model.setNumberOfGuests(+e.target.value)
  }

  render() {
    return (
      <div className="Sidebar">
      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
      <nav className="navbar navbar-default navbar-fixed-side">
      <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11">
      <h5 className="numberOfGuests">Guests: <input value={this.state.numberOfGuests} onChange={this.onNumberOfGuestsChanged}/>
      {/*<button className = "plus_guest" className="btn" onChange={this.onNumberOfGuestsChanged}> + </button>
      <button className="minus_guest" className="btn" onChange={this.onNumberOfGuestsChanged}> - </button>*/}
      </h5>
      <br></br>
      <div className = "row">
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
      <h5>Dish name</h5>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
      <h5> PRICE </h5>
      </div>
      </div>
      <div className="menu"></div>
      <br></br>

      <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
      <h5>Total price</h5>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
      <div id="sidebarView_totalPrice">
      <h5 className="totalPrice">Pris</h5>
      </div>
      </div>
      </div>
      </div>
      <br></br>
      <center>
      <Link to="/overview">
      <button className="confirm_button" id="button"> Confirm dinner </button>
      </Link>
      </center>
      <br></br>
      </nav>
      </div>
      </div>
      );
  }
}






export default Sidebar;
