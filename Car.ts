// Car.ts
import { Vehicle } from "./Veichle";

class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log('Car engine started');
    }
}

// Create an instance of the Car class and call the start method
const myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();  // Output: Car engine started
