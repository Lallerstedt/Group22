
var MenuOverview = function (container, model) {

  var item = container.find("#dish_name");
  var your_menu = model.getFullMenu();
  var menu_items = [];



    for(dish in your_menu){
        var img_path = [];
        img_path += "images/";
        img_path += your_menu[dish].image;
        var name = [];
        name += your_menu[dish].name;
        var detail = your_menu[dish].description;
        menu_items += "<div class= 'col-lg-2 col-md-2 col-sm-2 col-xs-12'><br><img src=";
        menu_items += img_path;
        menu_items += ">";
        menu_items += "</div>";
        menu_items += "<div class='col-lg-5 col-md-5 col-sm-5 col-xs-12'>";
        menu_items += "<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>";
        menu_items += "<h3>"+ name + "</h3>";
        menu_items += "</div>"
        menu_items += "<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>";
        menu_items += detail;
        menu_items += "</div>"
        menu_items += "</div>"
        menu_items += "<h3>Preperation</h3><div class='col-lg-5 col-md-5 col-sm-5 col-xs-12'>";
        menu_items += detail;
        menu_items += "</div>"
        menu_items += "</div><br><br><br><br><br><br><br>"


    }
    item.html(menu_items);


    model.addObserver(this);
  this.update = function(){
    MenuOverview(container,model);
    model.removeObserver(this);
  }


}
