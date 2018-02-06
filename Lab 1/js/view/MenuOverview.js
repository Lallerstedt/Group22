
var MenuOverview = function (container, model) {

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
        var detail = full_menu[dish].description;
        menu_items += "<div class= 'col-lg-2 col-md-2 col-sm-2 col-xs-12'><br><img src=";
        menu_items += img_path;
        menu_items += ">";
        menu_items += "</div>";
				menu_items += "<div class='col-lg-5 col-md-5 col-sm-5 col-xs-12'>";
			  menu_items += "<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>";
				menu_items += "<h3>"+ name + "</h3>";
				menu_items += "</div>"
				menu_items += "<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>";
				menu_items += detail;
				menu_items += "</div>"
				menu_items += "</div>"
				menu_items += "<h3>Preperation</h3><div class='col-lg-5 col-md-5 col-sm-5 col-xs-12'>";
				menu_items += detail;
				menu_items += "</div>"
      	menu_items += "</div><br><br><br><br><br><br><br>"
				item.html(menu_items);
  		}
    }
  }
}
