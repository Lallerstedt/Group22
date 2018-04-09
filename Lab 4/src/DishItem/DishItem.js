import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {modelInstance} from '../data/DinnerModel';

class DishItem extends Component {

  constructor(props) {
    super(props)
    // we put on state the properties we want to use and modify in the component
    this.state = {
      status: 'INIITIAL',
      numberOfGuests: this.props.model.getNumberOfGuests(),
      currentDish: {}
    }

    //and methods below
    this.addToMenu = this.addToMenu.bind(this);
  }

  addToMenu(event){
    this.props.model.addToMenu(this.state.currentDish);
    //this.props.model.addToMenu(2019);
    //alert("Meny!" + this.props.model.getMenu());
  }

  // this methods is called by React lifecycle when the
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to setup model observer
  componentDidMount() {

    this.props.model.addObserver(this);
    modelInstance.getDish(this.props.model.getCurrentDish()).then(dish => {
      this.setState({
        status: 'LOADED',
        currentDish: dish
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
    this.props.model.removeObserver(this);

  }

  // in our update function we modify the state which will
  // cause the component to re-render
  update() {
    this.setState({
      numberOfGuests: this.props.model.getNumberOfGuests(),
    })
  }

  // our handler for the input's on change event
  onNumberOfGuestsChanged = (e) => {
    this.props.model.setNumberOfGuests(+e.target.value)
  }

  // our handler for the input's on change event
  onCurrentDishChanged = (e) => {
    this.props.model.setCurrentDish(+e.target.value)
  }

  render() {

    let dishesList = null;
    //let path = "https://spoonacular.com/recipeImages/";

    // depending on the state we either generate
    // useful message to the user or show the list
    // of returned dish
    switch (this.state.status) {
      case 'INITIAL':
      dishesList = <div className="loader" id="loading_wheel"></div>
      break;
      case 'LOADED':
      dishesList =
      <div className ="row" id="dish_info">

      <div className= 'menu_dishes col-lg-4 col-md-4 col-sm-4 col-xs-12'>
      <h2 key={this.state.currentDish.id}>{this.state.currentDish.title}</h2>
      <div className= 'col-lg-4 col-md-4 col-sm-4 col-xs-12'>
      <img src={this.state.currentDish.image} id={this.state.currentDish.id} alt={this.state.currentDish.title}></img>
      </div>
      </div>

      <br></br>
      <br></br>

      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" id = "ingredients_area">
      <h5>Ingredients for: {this.state.numberOfGuests} <span id="dish_number"></span> people</h5>

      <div className="row">


      {this.state.currentDish.extendedIngredients.map((i) =>
        <div>
        <div className='col-lg-5 col-md-5 col-sm-5 col-xs-4'>
        {i.name}
        </div>
        <div className='col-lg-3 col-md-3 col-sm-3 col-xs-1'>
        {i.amount* modelInstance.getNumberOfGuests()}
        </div>
        <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
        {i.unit}<br></br>
        </div>
        </div>
        )}

      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "total_price">
      <div className="row">
      <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
      </div>
      <span id="dishinfo_totalPrice">{this.props.model.getNumberOfGuests() * this.state.currentDish.pricePerServing}</span> SEK
      <br></br>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
      <div id="dishInfoPrice">
      <p id="dishPrice"></p>
      </div>
      </div>
      </div>
      </div>
      <div className="row" >


      <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
      <h2>Preparation</h2>
      <span id="dish_description">
      {this.state.currentDish.instructions}
      </span>
      <br></br>
      </div>
      </div>

      <div id ="prep_button_area">
      <br></br>
      <br></br>

      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
      </div>

      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
      <button className = "menu_add btn btn-default" type="button" onClick={this.addToMenu} id = {this.state.currentDish}>Add to menu</button>
      </div>

      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
      </div>

      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
      <Link to="/search">
      <button className = "back_search btn btn-default" type="button" id = "button">Back to search</button>
      </Link>
      </div>
      <div>
      <br></br>
      </div>

      </div>

      </div>



      break;
      default:

      dishesList = <div className="loader" id="loading_wheel"></div>

      break;

    }


    return (


      <div className="dish">
      <nav className="navbar navbar-default navbar-fixed-side" id="navbar_left">

      <ul>{dishesList}</ul>


       <br></br>
      <br></br>

      </nav>
      </div>





      );
  }
}






export default DishItem;
