import React, { Component } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import {modelInstance} from '../data/DinnerModel';
class Sidebar extends Component {

  constructor(props) {
    super(props)

    // we put on state the properties we want to use and modify in the component
    this.state = {
      status: 'INITIAL',
      numberOfGuests: this.props.model.getNumberOfGuests(),
      menu: this.props.model.getMenu(),
    }
    this.handleMenu = this.handleMenu.bind(this);
  }

// this methods is called by React lifecycle when the
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to setup model observer
  // this methods is called by React lifecycle when the
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to call the API and get the data
  componentDidMount = () => {
    this.props.model.addObserver(this);

    modelInstance.getDish().then(dishes => {

      this.setState({
        status: 'LOADED',
      })
    }).catch(() => {
      this.setState({
        status: 'ERROR'
      })
    })
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



  handleMenu(event){

      if(this.state.menu.length > 0){
        // :)
      }
      else{
        alert("Your menu is empty");
        event.preventDefault();
      }
  }

  // our handler for the input's on change event
  onNumberOfGuestsChanged = (e) => {
    this.props.model.setNumberOfGuests(+e.target.value)
  }



  render() {

    let dishesList;
    let finalPrice = 0;



    switch (this.state.status) {
      case 'INITIAL':
      dishesList = <div className="loader" id="loading_wheel"></div>
      break;
      case 'LOADED':



      dishesList = this.state.menu.map((dish) =>
        <div className = "row">
        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
        <h5 key={dish.id}>{dish.title}</h5>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <h5 key={dish.id}>{dish.pricePerServing * this.props.model.getNumberOfGuests()}</h5>
        </div>
        </div>

        )

        this.state.menu.map((dish) =>
         finalPrice += dish.pricePerServing * this.props.model.getNumberOfGuests()
         )

        if (!this.state.menu.length) {
            dishesList = "You have nothing in the menu";
            finalPrice = 0;
        }


      break;
      default:
      dishesList = "Empty BAJS"

      break;

    }





      return (
        <div className="Sidebar">
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <nav className="navbar navbar-default navbar-fixed-side">

        <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11">
        <h5 className="numberOfGuests">Guests: <input value={this.state.numberOfGuests} onChange={this.onNumberOfGuestsChanged}/>
      </h5>
      <br></br>
      <div className = "row">
      <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
      <h5>Dish name:</h5>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
      <h5> Price: </h5>
      </div>
      </div>
      <div className="menu">
      {dishesList}

      </div>

      <br></br>
      <div className = "row">
      <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
      <h5>Total Price: </h5>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
      {finalPrice} kr
      </div>
      </div>
      </div>
        <br></br>
      <center>
      <Link to='/overview'>
      <button className="confirm_button" id="button"  onClick={this.handleMenu}> Confirm dinner</button>
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
