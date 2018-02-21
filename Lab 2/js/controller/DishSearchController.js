
var DishSearchController = function(view, model, state) {

    // Drop down types:

    view.search_select.change(function(){
      var type = view.search_select.val();
      if(type == 1){
        view.update("all");
      }
      if(type == 2){
        view.update("main dish");

      }
      if(type == 3){
        view.update("starter");
      }
      if(type == 4){
        view.update("dessert");
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


    $("#food_pictures").click(function(){
      var id = event.target.id;
      model.setCurrentDish(id);
      state.changeState(".dishinfo");


  });



}
