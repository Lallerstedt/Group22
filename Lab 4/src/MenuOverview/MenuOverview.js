import React, { Component } from 'react';
import Overview from '../Overview/Overview';
import People from '../People/People';

class MenuOverview extends Component {
  render() {
    return (
      <div className="MenuOverview">
    {/* We pass the model as property to the Sidebar component */}
    <div className="col-sm-12 col-lg-12 col-md-12 col-sx-12">
    <People model={this.props.model} />
    </div>

    <div className="col-sm-12 col-lg-12 col-md-12 col-sx-12">
    <Overview model={this.props.model} />
    </div>

    </div>
    );
  }
}

export default MenuOverview;
