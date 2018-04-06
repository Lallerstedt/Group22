for(var i = 0; i < this.props.model.getMenu().length; i++){
        dishesList = this.state.dishes.map((dish) =>
      <div>
      <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
      {dish.title}
      </div>
      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
      {dish.pricePerServing}
      </div>
      </div>
      </div>
      )
    }
        dishesList += 


      <div>
      <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
      Titel
      </div>
      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
      pris
      </div>
      </div>
      </div>
      
     

    dishesList += 
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
      <h5 className="totalPrice">Total pris</h5>
      </div>
      </div>
      </div>

  
      