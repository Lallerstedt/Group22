$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	var startpage= $(".startView").show();
	var second= $(".second").hide();
	var dishsearch= $(".dishsearch").hide();
	var yourmenu = $(".yourmenu").hide();
	var dishinfo = $(".dishinfo").hide();
	var menuinfo = $(".menuinfo").hide();

	var currentState1 = startpage;

	//The views

	var startView = new StartView($(".startView"), model);
	var sidebarView = new SidebarView($(".sidebarView"), model);
	var dishsearchView = new DishsearchView($(".dishsearchView"), model);
	var dishitemView = new DishitemView($(".dishitemView"), model);
	var peopleView = new PeopleView($(".peopleView"), model);
	var menuDescription = new MenuDescription($(".menuDescription"), model);
	var menuOverview = new MenuOverview($(".menuOverview"), model);

	//The controllers

	var startController = new StartController(startView, model, this);
	var secondController = new SecondController(sidebarView, model, this);
	var dishSearchController = new DishSearchController(dishsearchView, model, this);
	var dishItemController = new DishItemController(dishitemView, model, this);
	var descriptionController = new DescriptionController(menuDescription, model, this);
	var peopleController = new PeopleController(peopleView, model, this);

	this.changeState=function(state1, state2){
		if(state2===undefined){
			currentState1 = $(currentState1).hide();
			currentState1 = $(state1);
			currentState1.show();
		}
		if(state2!=undefined){
			currentState1 = $(currentState1).hide();
			currentState1 = $(state1);
			currentState2 = $(state2);
			currentState2.show();
			currentState2.show();

		}
		
	}


});
