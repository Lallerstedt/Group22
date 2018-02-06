var DishsearchView = function (container, model) {

	var item = container.find("#all_dishes");

	var menu = model.getAllInfo();

	var menu_items = [];


	for (dish in menu){
		var img_path = [];
		img_path += "images/";
		img_path += menu[dish].image;
		var name = [];
		name += menu[dish].name;
		menu_items += "<div class=col-lg-3 col-md-3 col-sm-3 col-xs-3><img src=";
		menu_items += img_path;
		menu_items += ">";
		menu_items += "<h4>";
		menu_items += String(name);
		menu_items += "</h4></div>";
	}

	
		item.html(menu_items);

	}