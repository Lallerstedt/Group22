import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import DishItem from '../DishItem/DishItem';

class Dish extends Component {
  render() {
    return (
      <div className="Dish">
        {/* We pass the model as property to the Sidebar component */}
        <Sidebar model={this.props.model}/>
        <DishItem model={this.props.model}/>
      </div>
    );
  }
}

export default Dish;
