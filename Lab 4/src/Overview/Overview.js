import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Overview extends Component {

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
      <div className="Overview">
      <nav className="navbar navbar-default navbar-fixed-side">
      <div className = "menuDescription row">
      <div className="col-sm-1 col-lg-1 col-md-1 col-sx-0">
      </div>
      <div className="col-sm-9 col-lg-9 col-md-9 col-sx-10"><br/>
      <div className ="row">
      <div className="col-sm-3 col-lg-3 col-md-3 col-sx-3">
      {/*<h4>Dishname</h4><img></img>
      </div>
      <div className="col-sm-3 col-lg-3 col-md-3 col-sx-3">
      <h4>Dishname</h4><img></img>
      </div>
      <div className="col-sm-3 col-lg-3 col-md-3 col-sx-3">
      <h4>Dishname</h4><img></img>
      </div>
      <div className="col-sm-3 col-lg-3 col-md-3 col-sx-3">
      <h4>Dishname</h4><img></img>
      </div>
      <div className="col-sm-3 col-lg-3 col-md-3 col-sx-3">
      <h4>Dishname</h4><img></img>
      </div>
      <div className="col-sm-3 col-lg-3 col-md-3 col-sx-3">
      <h4>Dishname</h4><img></img>*/}
      </div>
      </div>
      </div>
      <div className="col-sm-2 col-lg-2 col-md-2 col-sx-2">
      <h5>Total price: {this.state.numberOfGuests}</h5>
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
