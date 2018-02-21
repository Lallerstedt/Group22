var DishItemController = function(view, model, state) {

    view.menuAdd.click(function(){
      model.addDishToMenu(model.getCurrentDish());

    });

    view.backSearch.click(function(){
    	view.update(undefined,undefined,true);
      	state.changeState(".second");
    });

  	view.update();

}
