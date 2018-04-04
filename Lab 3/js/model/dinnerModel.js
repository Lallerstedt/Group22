//DinnerModel Object constructor
var DinnerModel = function() {

	//TODO Lab 1 implement the data structure that will hold number of guest
	// and selected dishes for the dinner menu

	var numberOfGuests = 1;
	var currentDish;
	var menu = [];
	var observers = [];
	var online;

	this.addObserver = function(observer){
		observers.push(observer);
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

	this.getMenu = function(){
		return menu;
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

				if(menu.length == 0){
					//The menu is empty
					menu.push(id);
					this.notifyObservers();
					return menu;
				}
				if(menu.length != 0){
					//The menu is not empty
					for(menu_dish in dishes){
						if(menu_dish[menu_dish] == id){
							//If we have the same dish in the menu
							menu_dish[menu_dish] = id;
							this.notifyObservers();
							return menu;
						}
						else if(menu[menu_dish]==menu[menu.length-1]){
							//If we haven't found the same dish in the menu
							menu.push(id);
							this.notifyObservers();
							return menu;
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



	///function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type, filter, callback, errorCallback) {
		var API_KEY = "Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB";
		var URL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?number=50";

		if(type!=1 && type != undefined) {
			URL += "&type=" + type;
		}
		if(typeof(filter) == "string"){
			URL += "&query=" + filter;
		}

			$.ajax( {

			

			url: URL,
			headers: {
				'X-Mashape-Key': API_KEY
			},
			beforeSend: function(){
        		$('#loading_wheel').show();
    		},
			success: function(data) {
				$('#loading_wheel').hide();
				callback(data)
			},
			error: function(error) {
				errorCallback(error)
			}
		})
			if(!navigator.onLine){
			alert("You seem to be offline. Please check your internet connection to use the website.")
		}

		
			

		
	}

	//function that returns a dish of specific ID
	this.getDish = function (id, callback, errorCallback) {

		var API_KEY = "Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB";
		var URL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + id + "/information";

		
			$.ajax( {

			url: URL,
			headers: {
				'X-Mashape-Key': API_KEY
			},
			beforeSend: function(){
        		$('#loading_wheel').show();
    		},
			success: function(data) {
				$('#loading_wheel').hide();
				callback(data)
			},
			error: function(error) {
				errorCallback(error)
			}
		}) 
		
		if(!navigator.onLine){
			alert("You seem to be offline. Please check your internet connection to use the website.")
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
