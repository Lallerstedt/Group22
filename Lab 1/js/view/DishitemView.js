var DishitemView = function (container, model) {


	var item_name = container.find("#dish_info");
	var item_desc = container.find("#dish_description");
	var item_ing = container.find("#dish_ingredients");

	//var item_description = container.find("#dish_description");

	var current_dish = 1;

	var full_menu = model.getAllInfo();

	var dish_item = [];

	var item_description = [];

	var item_ingredients = [];


	for (dish in full_menu){
		if(full_menu[dish].id === current_dish){
			var name = [];
			name += full_menu[dish].name;
			dish_item += "<div class=col-lg-4 col-md-4 col-sm-4 col-xs-4><h2>";
			dish_item += name;
			dish_item += "</h2>";
			var img_path = [];
			img_path += "images/";
			img_path += full_menu[dish].image;
			dish_item+= "<img id=dishinfo_img src=" + img_path + "></div>";
			var item_description = full_menu[dish].description;
			
			var ing_name =[];
			ing_name += "<div class=col-lg-7 col-md-7 col-sm-7 col-xs-4>";
			var ing_quantity = [];
			ing_quantity += "</div><div class=col-lg-1 col-md-1 col-sm-1 col-xs-1>";
			var ing_unit = [];
			ing_unit += "</div><div class=col-lg-2 col-md-2 col-sm-2 col-xs-2>";
			var ing_price = [];
			ing_price += "</div><div class=col-lg-1 col-md-1 col-sm-1 col-xs-1>";
			for(ingredient in full_menu[dish].ingredients){	
				ing_name += full_menu[dish].ingredients[ingredient].name;
				ing_name += "<br>";
				ing_quantity += full_menu[dish].ingredients[ingredient].quantity;
				ing_quantity += "<br>";
				ing_unit += full_menu[dish].ingredients[ingredient].unit;
				ing_unit += "<br>"
				ing_price += parseInt(full_menu[dish].ingredients[ingredient].price) + "kr";
				ing_price += "<br>"
				
			}
			//item_ingredients+= ing_name + ing_quantity + ing_unit + ing_price;
			item_ingredients += ing_name + ing_quantity + ing_unit +  ing_price +"</div>";

			
			

			
		}
		
		
	}

	item_name.html(dish_item);
	item_desc.html(item_description);
	item_ing.html(item_ingredients);



	var numberOfGuests = container.find("#dish_number");

	numberOfGuests.html(model.getNumberOfGuests());

	var totalPrice = container.find("#dishinfo_totalPrice");

	totalPrice.html(model.getPrice(current_dish));
}


/*
 
            <!--
            <div class="col-sm-6" = id "ingredient">Olive oil
              <br> 
            </div>
            <div class="col-sm-1" = id "ingredient">SEK
            </div>
            <div class="col-sm-2" = id "ingredient">0.20
              <br> 
            </div> -->
            */
