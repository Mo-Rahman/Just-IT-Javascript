// Objects

//  Learning objectives:
// - Explore the concept of an Object
// - To access data from within an object
// - To use functions (methods) with Objects

// properties = data contained with the object
// methods = things that the object can do.

// Objects - are contruscted of Key:value pairs
// Key - Descriptor to what the property is
// Value - Is the data contained in the property

// object example (object literal)

const coffeeShop = {
  name: "Costa",
  branchNumber: "1234",
  specialOffers: true,
  drinksMenu: ["Latte", "Tea", "Black Coffee"],
};

// GETTERS
// Bracket notation to access data
console.log(coffeeShop["name"]);
// Dot notation to access data
console.log(coffeeShop.branchNumber);

// Objects are mutable - We can change/update them.

// Combination of dot and bracket notation
console.log(coffeeShop.drinksMenu[0]);

// SETTER
// Add a new property to the object
coffeeShop.muffins = ["Blueberry", "Chocolate"];
// Bracket notation
coffeeShop["fruits"] = ["Banana", "Oranges", "Apples"];

console.log(coffeeShop);

// change/update propery

coffeeShop.breakfastOffer = "free bagle with any coffee";
coffeeShop.lunchOffer = "free coffee with any sandwich";

let offer = "no offer";
let time = 1200;

if (time < 1100) {
  offer = coffeeShop.breakfastOffer;
  console.log(offer);
} else if (time < 1500) {
  offer = coffeeShop.lunchOffer;
  console.log(offer);
}

// Methods
coffeeShop.open = () => {
  return "We are open, come on in";
};
// This is the global "this" and not the object's this. as it's an arrow function?
coffeeShop.closed = () => {
  return `sorry branch ${this.branchNumber} is closed`;
};

console.log(coffeeShop.open());
console.log(coffeeShop.closed());

// Alarm clock Object

const alarm = {
  weekendAlarm: "Sleep in it's the weekend",
  weekdayAlarm: "Get up at 7.00am",
  checkAlarm: function (day) {
    if (day === "Saturday" || day === "Sunday") {
      return this.weekendAlarm;
    } else {
      return this.weekdayAlarm;
    }
  },
};

// console.log(alarm.checkAlarm("Sunday"));
// console.log(alarm.checkAlarm("Monday"));

// HOISTING!
// Arrow function syntax - Understand hoisting and call it after the arrow function.
const squaredArrow = (number) => {
  return number * number;
};

// Function Declaration - this type of function is hoisted.
function squaredDeclaration(number) {
  return number * number;
}

// Tasks 1:  Create an object called person with keys of name age and city. Create a method that returns a sentence containing the persons details.

const person = {
  name: "John",
  age: 30,
  city: "London",
  greet: function () {
    return `Hello ${this.name} from ${this.city}`;
  },
};

// Creating a method using an arrow method.

person.greetings = () => {
  return `hello ${person.name} method!!`;
};

person.greetingfunc = function () {
  return `helloooooooo declaration - You can use the "THIS" name:${this.name} city:${this.city} function method`;
};

console.log(person.greetings());
console.log(person.greet());
console.log(person.greetingfunc());

// task 1 Chris' solution

// 2: Without editing the original person object add a list of your favourite songs to the person object and log the first song on the list to the console.

person.favouriteSongs = ["song 1", "song 2", "song 3"];

console.log(person.favouriteSongs[0]);
console.log(person);

// 3: Create a pet object with key values of name, typeOfAnimal, age and colour. Add functions / methods to your object named eat and drink. The methods should return a string saying "(pet name) is eating" and "(pet name) is drinking". Make use of the “this” keyword.

const pet = {
  name: "Benji",
  typeOfAnimal: "Dog",
  colour: "black",
  age: "21 dog years",
  drink: function () {
    return `${this.name} is drinking`;
  },
  eat: function () {
    return `${this.name} is eating ${this.typeOfAnimal} food`;
  },
};

console.log(pet.drink());
console.log(pet.eat());
