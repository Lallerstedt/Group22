import cookie from 'react-cookies';

const httpOptions = {
  headers: {'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'}
};

const DinnerModel = function () {

  let numberOfGuests = 2;
  let observers = [];
  let currentDish;
  let menu = [];


  this.setNumberOfGuests = function (num) {
    numberOfGuests = num;
    localStorage.setItem('numberOfGuests', num);
    notifyObservers();
  };


  this.getDish = function (id) {
    let url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + id + "/information";
    return fetch(url, httpOptions)
    .then(processResponse)
    .catch(handleError)
  }

  const dish = function (id) {
    let url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + id + "/information";
    return fetch(url, httpOptions)
    .then(processResponse)
    .catch(handleError)
  }

  /*const loadCookie = function () {

    if(idsToSave === undefined){
      menu = [];

      console.log("Cookie:" + cookie.load('menu'));
      console.log("Hittar inte en meny, " + menu);

    }  
    else{
      console.log("Det finns en meny");
      for (var i = 0; i <= idsToSave.length; i++) {
        menu.push(dish(idsToSave[i]));
      }
      for (var i = 0; i < menu.length; i++) {
        menu.push(dish(cookie.load('menu')));
      }
      console.log("What is the menu", menu)
    }
  }
  //loadCookie();
  /*this.getId = function (index) {
    return menu[index].id;
  }*/

  this.getNumberOfGuests = function () {
   if(localStorage.getItem('numberOfGuests') === null){
    numberOfGuests = 2;
  }
  else{
    numberOfGuests = localStorage.getItem('numberOfGuests');
  }
  return numberOfGuests;
}

this.getCurrentDish = function () {
  return currentDish;
}

this.setCurrentDish = function(dish) {
  currentDish = dish;
}

this.addToMenu = function(dish) {
  menu.push(dish);
  localStorage.setItem('menu', JSON.stringify(menu));
  notifyObservers();
}

this.getMenu = function () {
  if(localStorage.getItem('menu') === null){
    return menu;
  }
  menu = JSON.parse(localStorage.getItem('menu'));
  return menu;
}

  // API Calls

  this.getAllDishes = function (type, filter) {
    let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?number=50';
    if(type!==1 && type !== undefined) {
      url += "&type=" + type;

    }
    if(typeof(filter) === "string"){
      url += "&query=" + filter;

    }
    return fetch(url, httpOptions)
    .then(processResponse)
    .catch(handleError)
  }



  // API Helper methods

  const processResponse = function (response) {
    if (response.ok) {
      return response.json()
    }
    throw response;
  }

  const handleError = function (error) {
    if (error.json) {
      error.json().then(error => {
        console.error('getAllDishes() API Error:', error.message || error)
      })
    } else {
      console.error('getAllDishes() API Error:', error.message || error)
    }
  }

  // Observer pattern

  this.addObserver = function (observer) {
    observers.push(observer);
  };

  this.removeObserver = function (observer) {
    observers = observers.filter(o => o !== observer);
  };

  const notifyObservers = function () {
    // loadCookie();
    observers.forEach(o => o.update());
  };
};

export const modelInstance = new DinnerModel();
