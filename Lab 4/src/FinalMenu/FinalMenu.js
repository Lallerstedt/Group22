import React, { Component } from 'react';
class FinalMenu extends Component {

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
      <div className="row" >
      <div className="col-sm-1 col-lg-1 col-md-1 col-sx-1">
      </div>
      <div className="col-sm-3 col-lg-3 col-md-3 col-sx-3">
      <h2>Picture</h2>
      <h3>Name</h3>
      </div>
      <div className="col-sm-4 col-lg-4 col-md-4 col-sx-4">
      <h3>Preparation</h3>
      </div>
      <div className="col-sm-4 col-lg-4 col-md-4 col-sx-4">
      <h3>Fact</h3>
      </div>
      </div>
      <br/>

      <div className="row" >
      <div className="col-sm-1 col-lg-1 col-md-1 col-sx-1">
      </div>
      <div className="col-sm-3 col-lg-3 col-md-3 col-sx-3">
      <h2>Picture</h2>
      <h3>Name</h3>
      </div>
      <div className="col-sm-4 col-lg-4 col-md-4 col-sx-4">
      <h3>Preparation</h3>
      </div>
      <div className="col-sm-4 col-lg-4 col-md-4 col-sx-4">
      <h3>Fact</h3>
      </div>
      </div>
      </nav>
      </div>
      );
    }
  }

  export default FinalMenu;
