import React, { Component } from 'react';
class FinalMenu extends Component {

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
    let final;
    let steps;


      final = this.state.menu.map((dish) =>

        <div className="col-sm-12 col-lg-12 col-md-12 col-sx-12">
        <div row>
        <div className="col-sm-7 col-lg-7 col-md-7 col-sx-7">
        <h4 key={dish.id}>{dish.title}</h4>
        </div>
        <div className="col-sm-5 col-lg-5 col-md-5 col-sx-5">
        <h4>Instructions</h4>
        </div>
        </div>

        <div className="col-sm-12 col-lg-12 col-md-12 col-sx-12">
        <h5>{dish.steps}</h5>
        </div>

        <div row>
        <div className="col-sm-6 col-lg-6 col-md-6 col-sx-6">
        <img src={dish.image} id={dish.id} alt={dish.title} onClick={this.handleDish}></img>
        <h5>Ready in minutes: {dish.readyInMinutes} minutes </h5>
        </div>
        <div  className="col-sm-6 col-lg-6 col-md-6 col-sx-6">
        <h5 key={dish.id}>{dish.instructions}</h5>
        </div>
        </div>
        </div>
        )


/*  steeps = this.state.menu.analyzedInstructions.map((dish) =>
)*/

    return (
      <div className="Overview">
      <nav className="navbar navbar-default navbar-fixed-side">
      <div className="row" >
      <div className="col-sm-8 col-lg-8 col-md-8 col-sx-8">
      {final}
      </div>
      <div className="col-sm-4 col-lg-4 col-md-4 col-sx-4">
      {steps}
      </div>
      </div>
      <br/>
      </nav>
      </div>
      );
    }
  }

  export default FinalMenu;
