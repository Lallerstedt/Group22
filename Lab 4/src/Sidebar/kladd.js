<div>
      <div>
      <div className="row">
      {dish}
      {"hej" + i}
      {this.state.i.title}
      <div key={this.state.i.id} className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
      {this.state.menu.i}
      </div>
      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
      {this.state.i.pricePerServing}
      </div>
      </div>
      </div>

      <div>
      <div>
      <br></br>
      <br></br>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
      <h5>Total price</h5>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
      <div id="sidebarView_totalPrice">
      <h5 className="totalPrice">{total_price+=this.state.i.pricePerServing}</h5>
      </div>
      </div>
      </div>

      </div>
        )

      
      }
      if(this.props.model.getMenu().length === 0){
        dishesList = 
      <div>
      <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
      Your menu is empty
      </div>
      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
      </div>

      <div>
      <br></br>
      <br></br>
      </div>

      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
      <h5>Total price</h5>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
      <div id="sidebarView_totalPrice">
      <h5 className="totalPrice">0 kr</h5>
      </div>
      </div>
      </div>

      </div>
      }
  