var DishsearchView = function (container, model, type, search) {

 model.addObserver(this);

	this.rePaint = function(menu){
		for (dish in menu){
			var img_path = [];
			img_path += "images/";
			img_path += menu[dish].image;
			var img_id = menu[dish].id;
			var name = [];
			name += menu[dish].name;
      menu_items += "<nav id = 'bajs'>"
			menu_items += "<div class= 'menu_dishes col-lg-3 col-md-3 col-sm-3 col-xs-3'><img src=";
			menu_items += img_path;
			menu_items +=" id=" + img_id;
			menu_items += ">";
			menu_items += "<h4>";
			menu_items += String(name);
			menu_items += "</h4></div></nav>";
		}

		item.html(menu_items);

	}


	this.search_select = container.find("#type");
	this.search_string = container.find(".keyword");
	this.search_button = container.find("#button");

	var item = container.find("#all_dishes");
	var menu;
	var menu_items = [];

	var menu_types = ["all","main dish","starter", "dessert"];

	for(menu_type in menu_types){
		if(type == menu_types[menu_type]){
			menu = model.getSelectedDish(type);
		}
		if(type === undefined || type == "all"){
			menu = model.getAllInfo();
		}
	}

	if(search){
		menu = model.search(search);
	}
	if(search == undefined){
	}



this.rePaint(menu);

	this.update = function(type,search){
		item.html("");
		menu_items="";
		for(menu_type in menu_types){
			if(type == menu_types[menu_type]){
				menu = model.getSelectedDish(type);
			}
			if(search != undefined){
				menu = model.search(search);
        console.log("Menyn är: " + menu);
        if(menu.length == 0){
            alert("There is no such keyword in the database.");
            menu = model.getAllInfo();
            this.rePaint(menu);
            return;
        }
			}
			if(search == undefined){
				if(type === undefined || type == "all"){
					menu = model.getAllInfo();
				}
			}

		}


		console.log("hello world");

		this.rePaint(menu);



	}

}
