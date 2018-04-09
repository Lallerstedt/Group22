import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import {model} from '../data/DinnerModel';
class Overview extends Component {

  constructor(props) {
    super(props);
    // We create the state to store the various statuses
    // e.g. API data loading or error
    this.state = {
      status: 'INITIAL',
      menu: this.props.model.getMenu()
    }
  }

  componentDidMount = () => {
    this.props.model.addObserver(this);

    // when data is retrieved we update the state
    // this will cause the component to re-render
    /*var menu = this.props.model.getMenu()
    for(var i = 0; i < menu.length; i++){
      modelInstance.getDish(menu[i]).then(dishes => {
      this.setState({
        status: 'LOADED',
        i: dishes
      })
    }).catch(() => {
      this.setState({
        status: 'ERROR'
      })
    })
  }*/

    }

  componentWillUnmount() {
      this.props.model.removeObserver(this)
  }

  update() {
    this.setState({
      numberOfGuests: this.props.model.getNumberOfGuests(),
      menu: this.props.model.getMenu()
    })

  }

  render() {

    let dishesList;
    let finalPrice = 0;


      dishesList = this.state.menu.map((dish) =>
        <div key={dish.id} className="col-sm-3 col-lg-3 col-md-3 col-sx-12">
        <img src={dish.image} id={dish.id} alt={dish.title} onClick={this.handleDish}></img>
        <h4 key={dish.id}>{dish.title}</h4>
        </div>
        )

        this.state.menu.map((dish) =>
         finalPrice += dish.pricePerServing * this.props.model.getNumberOfGuests()
         )

    return (
      <div className="Overview">
      <nav className="navbar navbar-default navbar-fixed-side">
      <div className = "menuDescription row">
      <div className="col-sm-1 col-lg-1 col-md-1 col-sx-0">
      </div>
      <div className="col-sm-9 col-lg-9 col-md-9 col-sx-10"><br/>
<center>
  {dishesList}
</center>

      </div>
      <div className="col-sm-2 col-lg-2 col-md-2 col-sx-2">
      <h5>Total price: {finalPrice}</h5>
      </div>
      </div>
      <br/>
      <center>
      <Link to="/finalmenu">
      <button className="print btn btn-default" id = "button">Print Full Recipe</button>
      </Link>

      </center>

      <br/>
      </nav>
      </div>
      );
  }
}

export default Overview;
