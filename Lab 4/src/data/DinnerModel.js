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
    notifyObservers();
  };

  this.getNumberOfGuests = function () {
    return numberOfGuests;
  };

  this.getCurrentDish = function () {
    return currentDish;
  }

  this.setCurrentDish = function(dish) {
    currentDish = dish;
  }

  this.addToMenu = function(id) {
    menu.push(id);
  }

  this.removeFromMenu = function(id) {
    menu.pop(id);
  }

  this.getMenu = function () {
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


  this.getDish = function (id) {
    let url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + id + "/information";
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
    observers.forEach(o => o.update());
  };
};

export const modelInstance = new DinnerModel();
