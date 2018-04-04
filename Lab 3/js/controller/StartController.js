
var StartController = function(view, model, state) {
  view.startButton.click(function(){
  state.changeState(".second");
  });

}
