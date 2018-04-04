var DishItemController = function(view, model, state) {

    view.menuAdd.click(function(){
      model.addDishToMenu(model.getCurrentDish());
    });

    view.backSearch.click(function(){
      	state.changeState(".second");
    });

  	view.update();

}
