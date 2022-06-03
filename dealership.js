const Car = require('./car')

const Dealership = function(name, maxCars, currentCars){
    this.name = name;
    this.maxCars = maxCars;
    this.currentCars = currentCars;
}

// this function counts the number of cars in a dealership
Dealership.prototype.count = function(){
    return this.currentCars.length;
}

// this function adds a car to the dealership.
Dealership.prototype.addCar = function(car){
    this.currentCars.push(car);
}

// This function returns an array containing each car's manufacturer
Dealership.prototype.getManufacturers = function() {
    const manufacturers = this.currentCars.map(element => element.manufacturer);
    console.log(manufacturers);
}

// Find all cars in dealership of same manufacturer
Dealership.prototype.findByManufacturer = function(manufacturer){
    const sisters = this.currentCars.filter(e => e.manufacturer === manufacturer);
    console.log(sisters);
}

// Find total value of all cars in stock
// Map array of cars to an array of their prices
// Reduce this to find the total of prices.
Dealership.prototype.totalValueOfCars = function(){
    const initialValue = 0;
    const prices = this.currentCars.map(e => e.price);
    const total = prices.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
    );
    console.log(`The total value of cars in stock is £${total}`);
}

module.exports = {
    Dealership,
    // // count,
    // addCar,
    // getManufacturers,
    // findByManufacturer,
    // totalValueOfCars
};
  
