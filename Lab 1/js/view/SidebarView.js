
var SidebarView = function (container, model) {
	
	//Number of guests

	var numberOfGuests = container.find("#numberOfGuests");

	numberOfGuests.html(model.getNumberOfGuests());


	//this.plusButton = container.find("#plusGuest");
	//this.minusButton = container.find("#minusGuest");
	

	// Menu 

	var menu = container.find("#menu");

	dishes_menu = model.getFullMenu();
	if(dishes_menu === undefined){
		menu.html("The menu is empty");
	}
	else{
		//var result = [];

		for (var dish_temp in dishes_menu){
		menu.html(dishes_menu[dish_temp]);
		}
	}

	
	// Single dish price

	var single_price = container.find("#singlePrice");

	if(dishes_menu === undefined){
		single_price.html("0 kr");
	}
	else{
		for (dish_temp in dishes_menu){
			single_price.html(model.getPrice(dishes_menu[dish]) + " kr");
		}
	}


    // Total menu price

    
	var total_price = container.find("#totalPrice");

	total_price.html(model.getTotalMenuPrice() + " kr");


	}

 
