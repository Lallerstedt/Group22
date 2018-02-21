var PeopleController = function(view, model, state) {
 
  view.goBack.click(function(){
  	state.changeState(".second");
  });
}
