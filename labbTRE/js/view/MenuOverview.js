
var MenuOverview = function (container, model) {

  var item = container.find("#dish_name");
  var menu_items = [];

  var yourmenu = model.getMenu();

  for(dish in yourmenu){

   model.getDish(yourmenu[dish], function(dishes){


    var img_path = [];
    img_path += dishes.image;
    var name = [];
    name += dishes.title;
    var detail = dishes.instructions;
    menu_items += "<div class= 'col-lg-2 col-md-2 col-sm-2 col-xs-12'><br><img src=";
    menu_items += img_path;
    menu_items += ">";
    menu_items += "</div>";
    menu_items += "<div class='col-lg-10 col-md-10 col-sm-10 col-xs-12'>";
    menu_items += "<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>";
    menu_items += "<h3>"+ name + "</h3>";
    menu_items += "</div>"
    menu_items += "<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>";
    menu_items += detail;
    menu_items += "</div>"
    menu_items += "</div>"
    menu_items += "<br><br><h3>Preperation</h3><div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>";
    var instructions = dishes.analyzedInstructions;

    console.log(model.getCurrentDish());


    menu_items += "<class row><div class='col-lg-6 col-md-6 col-sm-6 col-xs-6'>";
    menu_items += "<h4>Equiment: </h4>" + "<br>";

    for(i in instructions){
      for(j in instructions[i].steps){
        var equipment = instructions[i].steps[j].equipment;
        for(k in equipment){
          menu_items += instructions[i].steps[j].equipment[k].name + "<br>";
        }
      }
    }

    menu_items += "</div>";

    menu_items += "<div class='col-lg-6 col-md-6 col-sm-6 col-xs-6'>";

    menu_items+= "<h4>Ingredients: </h4>" + "<br>";

    for(i in instructions){
      for(j in instructions[i].steps){
        var ingredients = instructions[i].steps[j].ingredients;
        for(l in ingredients){
          menu_items+= instructions[i].steps[j].ingredients[l].name + "<br>";
        }
      }
    }



        menu_items += "</div></div></div></div>";


    for(i in instructions){
        for(j in instructions[i].steps){

        menu_items += "<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>";
        menu_items += "<h4><br><br>" + instructions[i].steps[j].number +  "</h4>";
        menu_items += instructions[i].steps[j].step + "<br>";
        menu_items += "</div>";
      }
    }


       //menu_items += detail;
       menu_items += "</div>"
       menu_items += "</div><br><br><br><br><br><br><br>"

       item.html(menu_items);

     }, function(error) {
      //alert ("ERROR");
    });


 }



 model.addObserver(this);
 this.update = function(){
  MenuOverview(container,model);
  model.removeObserver(this);
}


}
