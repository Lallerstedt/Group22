
var MenuDescription = function (container, model) {

	// Total_price



  var show_menu = container.find("#showmenu")
  show_menu.html("<h4>" + model.getFullMenu() + "</h4>");


  var item = container.find("#dish_name");
  var full_menu = model.getAllInfo();
  var user_menu = model.getMenu();
  var menu_items = [];


  for (dish in full_menu){
    for(user_dish in user_menu){
      if(full_menu[dish].id === user_menu[user_dish]){
        var img_path = [];
        img_path += "images/";
        img_path += full_menu[dish].image;
        var name = [];
        name += full_menu[dish].name;
        var price = model.getPrice(full_menu[dish].id);
        menu_items += "<div class= col-lg-3 col-md-3 col-sm-3 col-xs-3></div>";
        menu_items += "<div class= col-lg-2 col-md-2 col-sm-2 col-xs-2></div>";
        menu_items += "<div class= col-lg-3 col-md-3 col-sm-3 col-xs-3><img src=";
        menu_items += img_path;
        menu_items += ">";
        menu_items += "<h4>";
        menu_items += name;
        menu_items +=  " ";
        menu_items += price;
        menu_items += " SEK";
        menu_items += "</h4>";
        menu_items += "</div>";
      }

    }
  }

  item.html(menu_items);

  var total_price = container.find("#totalPrice");
  total_price.html("<h5> Total: <br> " + model.getTotalMenuPrice() + " kr </h5>");

  }
