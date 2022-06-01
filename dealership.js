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
// make some cars
const car1 = new Car("tesla", 5, "3 cylinder");
const car2 = new Car("mercedes", 6, "4 cylinder");

const dealer = new Dealership(
    "pushers",
    5,
    [car1]
)
// console.log(dealer.count());
// this function adds a car to the dealership.
Dealership.prototype.addCar = function(car){
    this.currentCars.push(car);
}
dealer.addCar(car2);
console.log(dealer.currentCars);

