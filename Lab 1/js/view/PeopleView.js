
var PeopleView = function (container, model) {


	//Number of guests

	var numberOfGuests = container.find("#numberOfGuests");

	numberOfGuests.html("<h3> My dinner: " + model.getNumberOfGuests() + " personer </h3><br>");


	}
