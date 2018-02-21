var SidebarView = function(container,model) {


	//Number of guests

	var numberOfGuests = container.find(".numberOfGuests");
	numberOfGuests.html(model.getNumberOfGuests());

	this.plusButton = container.find(".plus_guest");
	this.minusButton = container.find(".minus_guest");


	// Menu

	var items = container.find(".menu");
	var yourmenu = model.getFullMenu();
	var menu_items = [];
	var n = [];

	for (dish in yourmenu){
		n += "<div class='row'>"
	    n += "<div class='col-lg-6 col-md-6 col-sm-6 col-xs-6'>"
		n += yourmenu[dish].name;
		n += "</div><div class='col-lg-6 col-md-6 col-sm-6 col-xs-6'>"
		n += yourmenu[dish].price*model.getNumberOfGuests();
		n += "</div></div>"
	}
		items.html(n);



	//var single_price = container.find(".singlePrice");
	//var fullprice = model.getPrice(fullmenu[dish].id);
  	//var menu_price = [];
  	var price = [];

  	


    var total_price = container.find(".totalPrice");

    total_price.html(model.getTotalMenuPrice()*model.getNumberOfGuests() + " kr");

    //knapp


	this.confirm = container.find(".confirm_button");


    model.addObserver(this);
    this.update = function(){
    	SidebarView(container, model);
    	model.removeObserver(this);
    }


}


