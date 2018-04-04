var SidebarView = function(container,model) {


	//Number of guests

	var numberOfGuests = container.find(".numberOfGuests");
	numberOfGuests.html(model.getNumberOfGuests());
	var total_price = container.find(".totalPrice");

	this.plusButton = container.find(".plus_guest");
	this.minusButton = container.find(".minus_guest");


	// Menu

	var items = container.find(".menu");
	var yourmenu = model.getMenu();
	var menu_items = [];
	var n = [];
	var price = 0;


	for(dish in yourmenu){
		model.getDish(yourmenu[dish], function(dishes){

			n += "<div class='row'>"
			n += "<div class='col-lg-6 col-md-6 col-sm-6 col-xs-6'>"
			n += dishes.title;
			n += "</div><div class='col-lg-6 col-md-6 col-sm-6 col-xs-6'>"
			n += dishes.pricePerServing*model.getNumberOfGuests();
			n += "0 kr";
			n += "</div></div>";

			price = price + (model.getNumberOfGuests()*dishes.pricePerServing);
			//total_price.html(price*model.getNumberOfGuests() + " kr");
			total_price.html(price.toFixed(2));
    //knapp



    items.html(n);

}, function(error) {
 			//alert ("ERROR");
 		});


	}




	this.confirm = container.find(".confirm_button");


	model.addObserver(this);
	this.update = function(){
		SidebarView(container, model);
		model.removeObserver(this);
	}


}


