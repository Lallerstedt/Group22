var DishitemView = function (container, model) {

	var numberOfGuests = container.find("#dish_number");
	numberOfGuests.html(model.getNumberOfGuests());

	this.menuAdd = container.find(".menu_add");
	this.backSearch = container.find(".back_search");

	var item_name = container.find("#dish_info");
	var item_desc = container.find("#dish_description");
	var item_ing = container.find("#dish_ingredients");

	var current_dish = model.getCurrentDish();
	var dish;
	var dish_info;
	var dish_item = [];
	var item_description = [];
	var item_ingredients = [];


	if(current_dish !== undefined){
		model.getDish(current_dish, function(dishes){
		// console.log("resultat är: " + dishes.results);
		var name = [];
		name = dishes.title;
		dish_item += "<div class='col-lg-4 col-md-4 col-sm-4 col-xs-12'><h2>";
		dish_item += name;
		dish_item += "</h2>";
		var img_path = [];
		img_path += dishes.image;
		dish_item+= "<img id=dishinfo_img src=" + img_path + "></div>";
		var item_description = dishes.instructions;

			var ing_name =[];
			ing_name += "<div class='col-lg-7 col-md-7 col-sm-7 col-xs-4'>";
			var ing_quantity = [];
			ing_quantity += "</div><div class='col-lg-1 col-md-1 col-sm-1 col-xs-1'>";
			var ing_unit = [];
			ing_unit += "</div><div class='col-lg-2 col-md-2 col-sm-2 col-xs-2'>";
			var ing_price = [];
			ing_price += "</div><div class='col-lg-1 col-md-1 col-sm-1 col-xs-1'>";

			for(ing in dishes.extendedIngredients){
				ing_name += dishes.extendedIngredients[ing].name;
				ing_name += "<br>";
				ing_quantity += dishes.extendedIngredients[ing].amount * model.getNumberOfGuests();
				ing_quantity += "<br>";
				ing_unit += dishes.extendedIngredients[ing].unit;
				ing_unit += "<br>"
				//ing_price += parseInt(ingredient_array[ingredient].price) * model.getNumberOfGuests() + "kr";
				//ing_price += "<br>"
			}
			item_ingredients += ing_name + ing_quantity + ing_unit +  ing_price +"</div>";


			item_name.html(dish_item);
			item_desc.html(item_description);
			item_ing.html(item_ingredients);


			var totalPrice = container.find("#dishinfo_totalPrice");
			var total_price = dishes.pricePerServing * model.getNumberOfGuests();
			totalPrice.html(total_price);


		}, function(error) {
 			//alert ("ERROR");
 		});
	}



 model.addObserver(this);

 this.update = function(){
 	DishitemView(container, model);
 	model.removeObserver(this);
 }
}
