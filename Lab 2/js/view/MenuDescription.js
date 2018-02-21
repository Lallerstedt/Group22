
var MenuDescription = function (container, model) {

  this.printMenu = container.find(".print");

	// Total_price

  var show_menu = container.find("#showmenu")
  show_menu.html("<h4>" + model.getFullMenu() + "</h4>");

  var item = container.find("#dish_name");
  var yourmenu = model.getFullMenu();
  var menu_items = [];


  for(dish in yourmenu){
    var img_path = [];
    img_path += "images/";
    img_path += yourmenu[dish].image;
    var name = [];
    name += yourmenu[dish].name;
    var price = yourmenu[dish].price;
    menu_items += "<div class= col-lg-3 col-md-3 col-sm-3 col-xs-3></div>";
    menu_items += "<div class= col-lg-2 col-md-2 col-sm-2 col-xs-2></div>";
    menu_items += "<div class= col-lg-3 col-md-3 col-sm-3 col-xs-3><img src=";
    menu_items += img_path;
    menu_items += ">";
    menu_items += "<h4>";
    menu_items += name;
    menu_items +=  " ";
    menu_items += price*model.getNumberOfGuests();
    menu_items += " SEK";
    menu_items += "</h4>";
    menu_items += "</div>";
  }

  item.html(menu_items);


  var total_price = container.find("#totalPrice");
  total_price.html("<h5> Total: <br> " + model.getTotalMenuPrice()*model.getNumberOfGuests() + " kr </h5>");



  model.addObserver(this);

this.update = function(){
  MenuDescription(container,model);
  model.removeObserver(this);
}

}
