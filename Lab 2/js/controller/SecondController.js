
var SecondController = function(view, model, state) {

 	view.plusButton.click(function(){

		model.setNumberOfGuests(model.getNumberOfGuests() + 1);

 	});

 	view.minusButton.click(function(){

   	    if (model.getNumberOfGuests() < 2) {
    		return
    	}
  	 	else {
    	model.setNumberOfGuests(model.getNumberOfGuests() - 1);
        }
      

    });

  view.confirm.click(function(){
    var menu = model.getFullMenu();
    if (menu.length > 0){
        state.changeState(".yourmenu");
        view.update();
    }
    else{
      alert("You have to put something in the menu!");
    }
  });


  	//state.changeState("#dishinfo");

}
