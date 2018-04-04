
var MenuDescription = function (container, model) {

  this.printMenu = container.find(".print");

	// Total_price

  var show_menu = container.find("#showmenu")
  //show_menu.html("<h4>" + model.getFullMenu() + "</h4>");

  var item = container.find("#dish_name");
  var yourmenu = model.getMenu();
  var menu_items = [];
  var price = 0;


  for(dish in yourmenu){

    model.getDish(yourmenu[dish], function(dishes){
      var img_path = [];
      img_path += dishes.image;
      var name = [];
      name += dishes.title;
      //var price = yourmenu[dish].price;
      //var price = "0 kr";
      menu_items += "<div class= col-lg-3 col-md-3 col-sm-3 col-xs-3></div>";
      menu_items += "<div class= col-lg-2 col-md-2 col-sm-2 col-xs-2></div>";
      menu_items += "<div class= col-lg-3 col-md-3 col-sm-3 col-xs-3><img src=";
      menu_items += img_path;
      menu_items += ">";
      menu_items += "<h4>";
      menu_items += name;
      menu_items +=  " ";
      price += dishes.pricePerServing;
      menu_items += dishes.pricePerServing*model.getNumberOfGuests();
      menu_items += " SEK";
      menu_items += "</h4>";
      menu_items += "</div>";

      
      item.html(menu_items);


  
      var total_price = container.find("#totalPrice");
      total_price.html("<h5> Total: <br> " + price*model.getNumberOfGuests() + " kr </h5>");

    }, function(error) {
      //alert ("ERROR");
    });
    

  }





  model.addObserver(this);

  this.update = function(){
    MenuDescription(container,model);
    model.removeObserver(this);
  }

}
