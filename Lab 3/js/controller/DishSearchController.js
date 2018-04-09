
var DishSearchController = function(view, model, state) {

    // Drop down types:

    view.search_select.change(function(){
      var type = view.search_select.val();
      if(type == 1){
        view.update("all");
      }
      if(type == 2){
        view.update("main course");

      }
      if(type == 3){
        view.update("appetizer");
      }
      if(type == 4){
        view.update("dessert");
      }
      if(type == 5){
        view.update("side dish");
      }
      if(type == 6){
        view.update("salad");
      }
      if(type == 7){
        view.update("bread");
      }
      if(type == 8){
        view.update("breakfast");
      }
      if(type == 9){
        view.update("soup");
      }
      if(type == 10){
        view.update("beverage");
      }
      if(type == 11){
        view.update("sauce");
      }
      if(type == 12){
        view.update("drink");
      }
  });

  //Search button

    view.search_button.click(function(){
      var string = view.search_string.val();
      if(string){
        view.update(undefined, string);
      }
      if(string == undefined){
        view.update(undefined, undefined);
      }
    });



    $("#food_pictures").click(function(event){
      var id = event.target.id;
      model.setCurrentDish(id);
      state.changeState(".dishinfo");
  });

}
