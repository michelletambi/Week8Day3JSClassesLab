const Car = require('./car')


describe('car class', () => {
    test('can initialise', () =>{
        // arrange
        const carTest = new Car("toyota", 20, "4 cylinder");
        // act
        const actual = carTest.manufacturer;
        const expected = "toyota";
        // assert
        expect(actual).toBe(expected);
    })
});


