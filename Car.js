"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log('Car engine started');
    }
}
// Create an instance of the Car class and call the start method
const myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start(); // Output: Car engine started
