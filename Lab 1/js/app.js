$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	var sidebarView = new SidebarView($("#sidebarView"), model);
	var dishsearchView = new DishsearchView($("#dishsearchView"), model);
	var dishitemView = new DishitemView($("#dishitemView"), model);
	var peopleView = new PeopleView($("#peopleView"), model);
	var menuDescription = new MenuDescription($("#menuDescription"), model);
	var menuOverview = new MenuOverview($("#menuOverview"), model);

});