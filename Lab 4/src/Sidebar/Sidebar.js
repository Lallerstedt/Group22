import React, { Component } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import {modelInstance} from '../data/DinnerModel';
class Sidebar extends Component {

  constructor(props) {
    super(props)
    
    // we put on state the properties we want to use and modify in the component
    this.state = {
      numberOfGuests: this.props.model.getNumberOfGuests(),
      menu : this.props.model.getMenu()
    }
  }

// this methods is called by React lifecycle when the 
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to setup model observer
  // this methods is called by React lifecycle when the 
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to call the API and get the data
  componentDidMount = () => {
    this.props.model.addObserver(this);
    // when data is retrieved we update the state
    // this will cause the component to re-render
    /*var menu = this.props.model.getMenu();
    for(var i = 0; i < menu.length; i++){
      //console.log(menu[i]);
      modelInstance.getDish(menu[i]).then(dishes => {
      //  console.log(this.props.model.getDish(menu[i]));
      //modelInstance.getAllDishes().then(dishes => {
        this.setState({
        status: 'LOADED',
        i: dishes
      })
    }).catch(() => {
      this.setState({
        status: 'ERROR'
      })
    })*/
    //}

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
      numberOfGuests: this.props.model.getNumberOfGuests(),
      menu: this.props.model.getMenu()
    })
  }

  // our handler for the input's on change event
  onNumberOfGuestsChanged = (e) => {
    this.props.model.setNumberOfGuests(+e.target.value)
  }



  render() {

    //let dishesList = this.props.model.getMenu();
    let dishesList;
      


      dishesList = this.state.menu.map((dish) =>
        <div>
        <h3 key={dish.id}>{dish.title}</h3>
        </div>
        )

      
      
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
      <div className="menu">
      {dishesList}
      </div>

      </div>
      <br></br>
      <center>
      <Link to='/overview'>
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
