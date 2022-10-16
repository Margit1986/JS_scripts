/* Meal Maker - Codecademy homework (okt 2022): 
A restaurant has hired you to create a function for their website that allows them to set a meal and price each morning for Today’s Special. 
Use your knowledge of getters and setters to make sure anyone who uses the new function can generate a meal and a price for Today’s Special without any embarrassing errors!*/

//holding the meal, price, and their respective getters and setters in an object named menu. The menu object will hold the meal and price of Today’s Special as properties and they shouldn’t be altered directly.
const menu = { 
    _meal: '', //This will eventually hold the name of the meal, should not be altered directly.
    _price: 0, //This will eventually hold the price of the meal, should not be altered directly.
    set meal (mealToCheck) {
      //if statement that checks if mealToCheck is a string. If it is, returning the object’s _meal property with mealToCheck assigned as the value.
      if (typeof mealToCheck === 'string') { 
        return this._meal = mealToCheck; 
      } 
    }, 
    set price (priceToCheck) {
      //if statement that checks if priceToCheck is a number. If it is, returning the object’s _price property with priceToCheck assigned as the value.
      if (typeof priceToCheck  === 'number') { 
        return this._price = priceToCheck; 
      } 
    },
    //using a getter method that proactively checks if a meal and price have been properly set, before returning the values.
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today’s Special is ${this._meal} for $${this._price}.`; 
      } else {
        return 'Meal or price was not set correctly!'; 
      }
    }
  }; 
  //using the meal setter to assign a string to a meal, and the price setter to assign a number to a price:
  menu.meal = 'Spaghetti';
  menu.price = 16;
  //using the getter method to console.log() Today’s Special.
  console.log(menu.todaysSpecial); 
  