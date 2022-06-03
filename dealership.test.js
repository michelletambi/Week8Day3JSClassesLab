const {
    Dealership,
    // count,
    // addCar,
    // getManufacturers,
    // findByManufacturer,
    // totalValueOfCars   
} = require('./dealership');

const Car = require('./car');

// make some cars

describe('dealership tests', () =>{

    test('can initialise dealership', () => {
        // arrange
        const dealer = new Dealership("pushers", 5, null);
        // act
        const actual = dealer.name;
        const expected = "pushers";
        // assert
        expect(actual).toBe(expected);
        
    })

    test('can count total number of cars', () => {
        // arrange
        const car1 = new Car("tesla", 5, "3 cylinder");
        const dealer = new Dealership("pushers", 6, [car1])
        // act
        const actual = dealer.count();
        const expected = 1;
        // assert
        expect(actual).toBe(expected);
    })

    test('can add a car', () => {
        // arrange
        const car1 = new Car("tesla", 5, "3 cylinder");
        const car2 = new Car("mercedes", 6, "4 cylinder");
        const dealer = new Dealership("pushers", 6, [car1]);
        dealer.addCar(car2);
        // act
        const actual = dealer.currentCars.length
        const expected = 2
        // assert
        expect(actual).toBe(expected);
    })
    


















})