import React, {Component} from 'react';
import './Dishes.css';
// Alternative to passing the moderl as the component property, 
// we can import the model instance directly
import {modelInstance} from '../data/DinnerModel';
import { Link } from 'react-router-dom';


class Dishes extends Component {
  constructor(props) {
    super(props);
    // We create the state to store the various statuses
    // e.g. API data loading or error 
    this.state = {
      status: 'INITIAL',
      type: '1',
      filter: undefined
    }

    this.handleType = this.handleType.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDish = this.handleDish.bind(this);
  }

  handleType(event) {
     this.setState({type: event.target.value});
  }

  handleFilter(event) {
      this.setState({filter: event.target.value});
  }

  handleDish(event){
      this.props.model.setCurrentDish(event.target.id);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
      this.setState({
      status: 'INTIAL'
    })
    var menu_types = ["all","main course","appetizer", "dessert", "side dish", "salad", "bread", "breakfast", "soup", "beverage", "sauce", "drink"];
    var types = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    var type = "";
    for(var i = 0; i<types.length; i++){
      if(this.state.type === types[i]){
        type = menu_types[i];
      }
    }
    modelInstance.getAllDishes(type, this.state.filter).then(dishes => {
      this.setState({
        status: 'LOADED',
        dishes: dishes.results
      })
    }).catch(() => {
      this.setState({
        status: 'ERROR'
      })
    })

  }

  // this methods is called by React lifecycle when the 
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to call the API and get the data
  componentDidMount = () => {

    // when data is retrieved we update the state
    // this will cause the component to re-render
    modelInstance.getAllDishes().then(dishes => {
      this.setState({
        status: 'LOADED',
        dishes: dishes.results
      })
    }).catch(() => {
      this.setState({
        status: 'ERROR'
      })
    })
  }


  render() {
    let dishesList = null;
    let path = "https://spoonacular.com/recipeImages/";
    
    // depending on the state we either generate
    // useful message to the user or show the list
    // of returned dishes
    switch (this.state.status) {
      case 'INITIAL':
      dishesList = <div className="loader" id="loading_wheel"></div>
      break;
      case 'LOADED':
      dishesList = this.state.dishes.map((dish) =>
        <div key={dish.id} className= 'menu_dishes col-lg-3 col-md-3 col-sm-3 col-xs-3'>
        <Link to="dish">
        <img src={path + dish.image} id={dish.id} alt={dish.title} onClick={this.handleDish}></img>
        <h4 key={dish.id}>{dish.title}</h4>
        </Link>
        </div>
        )
      break;
      default:
      dishesList = <div className="loader" id="loading_wheel"></div>
      
      break;
      
    }

    return (

      <div className="Dishes">
      <nav className="navbar navbar-default navbar-fixed-side" id="navbar_left">
      <h3>Find a dish</h3>
      <div className="row">
      <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
      </div>

      <div className="row">
      <form onSubmit={this.handleSubmit}>
      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
      <input type="text" value={this.state.value} onChange={this.handleFilter} id="keyword_form keyword" placeholder='Enter keyword'/>
      </div>      
      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3" id = "select_type">
      <select id = "type" className="select" value={this.state.type} onChange={this.handleType}>
      <option value="1">All</option>
      <option value="2">Main Course</option>
      <option value="3">Appetizer</option>
      <option value="4">Dessert</option>
      <option value="5">Side Dish</option>
      <option value="6">Salad</option>
      <option value="7">Bread</option>
      <option value="8">Breakfast</option>
      <option value="9">Soup</option>
      <option value="10">Beverage</option>
      <option value="11">Sauce</option>
      <option value="12">Drink</option>
      </select>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3" >
      <input type="submit" id="button" className="btn btn-default" value="Search" />
      </div>
      </form>
      </div>
      <br></br>
      <br></br>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "food_pictures">
      <span id="all_dishes"></span>
      <nav>
      <div>
      {dishesList}
      </div>
      </nav>

      
      </div>
      </nav>
      </div>
      );
  }
}

export default Dishes;
