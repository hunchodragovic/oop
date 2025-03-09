class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  describe() {
    console.log(`This is a ${this.brand} with a speed of ${this.speed} km/h`);
  }
}
class Car extends Vehicle {
  constructor(brand, speed, wheels) {
    super(brand, speed);
    this.wheels = wheels;
  }

  describe() {
    super.describe();
    console.log(`This car has ${this.wheels} wheels`);
  }
  boostSpeed() {
    this.speed += 20;
    console.log(`The speed is now ${this.speed} km/h`);
  }
}
class Bike extends Vehicle {
  constructor(brand, speed, type) {
    super(brand, speed);
    this.type = type;
  }

  describe() {
    super.describe();
    console.log(`This bike is a ${this.type}`);
  }
  ringBell() {
    console.log("Ring ring!");
  }
}
const myCar = new Car("Toyota", 100, "4");
myCar.describe(); // "This is a Toyota vehicle moving at 100 km/h."
myCar.boostSpeed();
myCar.describe(); // "This is a Toyota vehicle moving at 120 km/h."

const myBike = new Bike("BMX", 15, "2wheels");
myBike.describe(); // "This is a BMX vehicle moving at 15 km/h."
myBike.ringBell(); // "Ring Ring! 🚲"
