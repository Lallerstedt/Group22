
var PeopleView = function (container, model) {

	this.goBack = container.find(".go_back");

	//Number of guests

	var numberOfGuests = container.find("#numberOfGuests");

	numberOfGuests.html("<h3> My dinner: " + model.getNumberOfGuests() + " personer </h3><br>");

	model.addObserver(this);

    this.update = function(){
    	PeopleView(container, model);
    	model.removeObserver(this);
    }



	}
