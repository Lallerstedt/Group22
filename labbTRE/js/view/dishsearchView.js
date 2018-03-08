var DishsearchView = function (container, model, type, search) {

	//model.addObserver(this);

	var self = this;

	this.rePaint = function(menu){
		for (dish in menu){
			var img_path = [];
			img_path += "https://spoonacular.com/recipeImages/";
			img_path += menu[dish].image;
			var img_id = menu[dish].id;
			var name = [];
			name += menu[dish].title;
			menu_items += "<nav>"
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

	var menu_types = ["all","main course","appetizer", "dessert", "side dish", "salad", "bread", "breakfast", "soup", "beverage", "sauce", "drink"];


	model.getAllDishes(this.search_select.val(), this.search_string, function(dishes){
		menu = dishes.results;
		self.rePaint(menu);
	}, function(error) {
 			//alert ("ERROR");
 		});

	this.update = function(type,search){
		item.html("");
		menu_items="";
		for(menu_type in menu_types){
			if(type == menu_types[menu_type]){
				model.getAllDishes(type, search, function(dishes){
					menu = dishes.results;
					item.html("");
					menu_items="";
					self.rePaint(menu);
				}, function(error) {
 			//alert ("ERROR");
 		});
			}
			if(search != undefined){
				model.getAllDishes(type, search, function(dishes){
					menu=dishes.results;
					self.rePaint(menu);
				}, function(error) {
 			//alert ("ERROR");
 		});

				console.log("Sök är: " + search);
			if(search == undefined){
				if(type === undefined || type == "all"){
					model.getAllDishes(type, search, function(dishes){
						console.log("uppdaterar efter: default");
					}, function(error) {
 				//alert ("ERROR");
 			});
				}
			}
				return;
			}
		}
	}
}
