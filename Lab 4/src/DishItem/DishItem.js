import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class DishItem extends Component {

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

      <div className="Dishes">

      <h3>Dishes</h3>
      <h2>HALLÅ {this.state.value}</h2>
      <ul>
    {/*{dishesList}*/}
    </ul>

    <nav className="navbar navbar-default navbar-fixed-side" id="navbar_left">
    <div className ="row" id="dish_info">
    <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
    <h2>Namn</h2>
    <img id="dishinfo_img" src="dishes.image" alt="{dish.title}"></img>
    </div>

    <br></br>
    <br></br>
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" id = "ingredients_area">
    <h5>Ingredients for: {this.state.numberOfGuests} <span id="dish_number"></span> people</h5>
    <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
    <div id="dishitemView">
    <span id="dish_ingredients"></span>


    <p>Ingredients!</p>


  {/*Placeholders nedan */}
  <div className='col-lg-5 col-md-5 col-sm-5 col-xs-4'>
  <p>namn</p><br></br>
  </div>
  <div className='col-lg-3 col-md-3 col-sm-3 col-xs-1'>
  <p>kvantitet</p><br></br>
  </div>
  <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
  <p>unit</p><br></br>
  </div>
  <div className='col-lg-1 col-md-1 col-sm-1 col-xs-1'>
  </div>


  {/*{dishesList.extendedIngredients.map(function(name, quantity, unit,index){
    return 
    <div className='col-lg-7 col-md-7 col-sm-7 col-xs-4'>
    <p key={index}>{name}</p><br></br>
    </div>
    <div className='col-lg-1 col-md-1 col-sm-1 col-xs-1'>
    <p key={index}>{quantity}</p><br></br>
    </div>
    <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
    <p key={index}>{unit}</p><br></br>
    </div>
    <div className='col-lg-1 col-md-1 col-sm-1 col-xs-1'>
    </div>;
  })} */}










  </div>
  </div>
  </div>
  <br></br>
  <br></br>
  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "total_price">
  <div className="row">
  <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
  </div>
  <span id="dishinfo_totalPrice"></span> SEK
  </div>
  <br></br>
  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
  <div id="dishInfoPrice">
  <span id="dishPrice"></span>
  </div>
  </div>
  </div>
  </div>
  <br></br>
  </div>

  <div className="row" >
  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
  <h2>Preparation</h2>
  <span id="dish_description">
  Instruktioner
{/*dishes.instructions;*/}
</span>
<br></br>
</div>

<div id ="prep_button_area">
<br></br>
<br></br>

<div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
</div>
<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
<button className = "menu_add btn btn-default" type="button" id = "button">Add to menu</button>
</div>
<div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
<Link to="/search">
<button className = "back_search btn btn-default" type="button" id = "button">Back to search</button>
</Link>
</div>


</div>
</div>
</nav>
</div>




);
}
}






export default DishItem;
