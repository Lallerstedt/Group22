//DinnerModel Object constructor
var DinnerModel = function() {

	//TODO Lab 1 implement the data structure that will hold number of guest
	// and selected dishes for the dinner menu

	var numberOfGuests = 1;
	var currentDish;
	var menu = [];
	var observers = [];

	this.addObserver = function(observer){
		observers.push(observer);
		console.log(observers);
	}
	this.removeObserver = function(observer){
		observers.pop(observer);
	}


	this.notifyObservers=function(){
	  	observers.forEach(function(observer){
		observer.update(observer);
		});
	}

	this.getCurrentDish = function(){
		return currentDish;
	}

	this.setCurrentDish = function(id){
		currentDish = id;
		this.notifyObservers();
		return currentDish;

	}

	this.setNumberOfGuests = function(num) {
		numberOfGuests = num;
		this.notifyObservers();
		return numberOfGuests;
	}

	this.getNumberOfGuests = function() {
		return numberOfGuests;
	}

	//Returns the dish that is on the menu for selected type
	this.getSelectedDish = function(type) {
		var return_dishes = [];
		for(dish in dishes){
			if(dishes[dish].type == type){
				return_dishes.push(dishes[dish]);
			}
		}
		return return_dishes;
	}

	this.search = function(search_string){
		var return_dishes = [];
		for(dish in dishes){
			if(search_string == dishes[dish].name){
				return_dishes.push(dishes[dish]);

			}
			if(search_string == dishes[dish].id){
				return_dishes.push(dishes[dish]);
			}
			if(search_string == dishes[dish].type){
				return_dishes.push(dishes[dish]);
			}
			var temp_ingredients = dishes[dish].ingredients;
					for(ingredient in temp_ingredients){
						if(search_string == temp_ingredients[ingredient].name){
							return_dishes.push(dishes[dish]);
						}
					}
			}
		return return_dishes;

	}


	this.getMenu = function(){
		return menu;
	}
	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		var dish_array = [];
		for(yourdish in menu){
			for(dish in dishes){
				if(menu[yourdish] == dishes[dish].id){
					dish_array.push({
					"name": dishes[dish].name,
					"id": dishes[dish].id,
					"image": dishes[dish].image,
					"type": dishes[dish].type,
					"price": this.getPrice(dishes[dish].id),
					"description": dishes[dish].description,
					"ingredients": dishes[dish].ingredients
					});
				}
			}
		}
		return dish_array;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		var ingredient_array = [];
		for(menu_dish in menu){
			for(dish in dishes){
				if(dishes[dish].id ==menu[menu_dish]){
					ingredient_array.push(dishes[dish].ingredients);
					for(ingredient in ingredient_array){
						ingredient_array.push(ingredient_array[ingredient].name);
					}
				}
			}
		}
		return ingredient_string;
	}


	//Returns the price of dish by id.
	this.getPrice = function(id) {
		var price = 0;
		for(dish in dishes){
			if(dishes[dish].id ==id){
				for(ingredient in dishes[dish].ingredients){
					price += parseInt(dishes[dish].ingredients[ingredient].price, 10);
				}
			}
		}
		return price;
	}


	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var price = 0;
		for(menu_dish in menu){
			for(dish in dishes){
				if(dishes[dish].id ==menu[menu_dish]){
					price += parseInt(this.getPrice(dishes[dish].id));
				}
			}
		}
		return price;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		var temp = [];
		var okay = false;

		for(dish in dishes){
			if(id == dishes[dish].id){
				var search_type = dishes[dish].type;
				search_type = dishes[dish].type;
				temp+= "Typen på id:t är " + search_type;
					//Id:t är okej att lägga in, vsi fortsätter

				//Fallet då vi har en tom lista
				if(menu.length == 0) {
					menu.push(id);
					this.notifyObservers();
					return menu;
				}

				//Fallet då vi inte har en tom lista
				else{
					var menu_type;
					var temp= [];
					//Vi vet typen på id:t vi vill lägga in, då loopar vi över menyn och kontrollerar dess typer
					for(menu_dish in menu){
						//index_menu = parseInt(menu_dish);
						for(dish in dishes){
							if(menu[menu_dish] == dishes[dish].id){
								temp+= "Vi kollar på indexen i menyn: index " + menu[menu_dish];
								menu_type = dishes[dish].type;
								if(menu_type == search_type){
									temp+= "Vi har matchat"
									//var index = parseInt(menu_dish)+1;
									menu[menu_dish]=id;
									temp+= menu_dish;
									this.notifyObservers();
									return temp + "Skrev över, menyn: " + menu;
								}
								else if(menu[menu_dish]==menu[menu.length-1] && menu_type!= search_type){
									//Vi har nått slutet av listan och det är en ny typ
									menu.push(id);
									this.notifyObservers();
									return temp + "Ny typ, menyn: " + menu;
								}
							}
						}
					}
				}
			}
		}
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		var temp = [];
		for(menu_dish in menu){
			if(menu[menu_dish] == id){
				menu[menu_dish] = undefined;
			}
		}
		return;
	}

	//Our own function to return all dishes

	this.getDish = function(id){
		for (dish in dishes){
			if(dishes[dish].id == id){
				return dishes[dish].name;
			}
		}
	}

	this.getDishes = function(){
		var dish_array = [];
		for (dish in dishes){
			dish_array.push(dishes[dish].name);
		}
		return dish_array;
	}

	this.getDescription = function(id){
		var description_array = [];
		for(dish in dishes){
			if(dishes[dish].id == id) {
				description_array.push(dishes[dish].description);
			}
		}
		return description_array;
	}

	//All images
	this.getAllInfo = function (){
		var dish_array = [];
		for(dish in dishes){
			dish_array.push({
			"name": dishes[dish].name,
			"id": dishes[dish].id,
			"image": dishes[dish].image,
			"type": dishes[dish].type,
			"price": this.getPrice(dishes[dish].id)
			});
		}
		return dish_array;
	}

	this.getIngredients= function(ingredient_dish_id){
		var ing_array = [];
		for(dish in dishes){
			if(ingredient_dish_id == dishes[dish].id){
				for(ingredient in dishes[dish].ingredients){
				ing_array.push(dishes[dish].ingredients[ingredient]);
				}
			}
		}
		return ing_array;


	}



	///function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {
		return dishes.filter(function(dish) {
			var found = true;
			if(filter){
				found = false;
				dish.ingredients.forEach(function(ingredient) {
					if(ingredient.name.indexOf(filter)!=-1) {
						found = true;
					}
				});
				if(dish.name.indexOf(filter) != -1)
				{
					found = true;
				}
			}
			return dish.type == type && found;
		});
	}

	//function that returns a dish of specific ID
	this.getDish = function (id) {
		for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
	}


	// the dishes variable contains an array of all the
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name,
	// quantity (a number), price (a number) and unit (string
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
		},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
		},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
		},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
		},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
		}]
	},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
		},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
		},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
		}]
	},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
		},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
		},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
		}]
	},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
		},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
		},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
		},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
		},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
		},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
		},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
		},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
		},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
		},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
		},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
		}]
	},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
		},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
		},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
		}]
	},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
		},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
		},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
		}]
	},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
		},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
		},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
		}]
	},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
		}]
	},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
		}]
	},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
		}]
	}
	];

}
