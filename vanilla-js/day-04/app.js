// Functions

// Learning objectives

// - To explore functions and look at home they work
// - To incorporate functions into our code
// - To recognise the different types of functions syntax

// Declare a function - Arrow function syntax

const greeting = () => {
  console.log("Hello World");
};

// calling / Invoking a function

greeting();

// Light switch example
let lightOn = false;

const lightSwitch = () => {
  if (lightOn) {
    lightOn = false;
    console.log("Lights off!");
  } else {
    lightOn = true;
    console.log("Lights on!");
  }
};

lightSwitch();
lightSwitch();
lightSwitch();
lightSwitch();

// Functions that take in parameters / arguments

// Parameters are required values that specify when we declare a function

const atm = (accountNumber, amount) => {
  console.log(`Account number ${accountNumber}. Withdrawn: ${amount}`);
};

// calling a function without the required arguments will return undefined values
atm();

// Arguments are passed when calling functions to make it run appropriately
atm(1234567, 200);

// Global and Local scope

const name = "Lydia";
const age = 21;
const city = "London";

const getPersonInfo = () => {
  const name = "Sarah";
  const age = 22;
  // const pet = "Gold fish";

  return `${name} is ${age} and lives in ${city}`;
};

console.log(getPersonInfo());
// console.log(age);

// Functions that call other functions

const timesTen = (num) => {
  return num * 10;
};

// A function
const timesTwenty = (num) => {
  return timesTen(num) * 2;
};
// When using return within functions - You need to call the function within a console.log, to see the output in the console.
console.log(timesTen(10));
console.log(timesTwenty(10));
// timesTen(10);

// Function Syntax options.

// Arrow function syntax
const squaredArrow = (number) => {
  return number * number;
};

console.log(squaredArrow(5));

// Function Declaration
function squaredDeclaration(number) {
  return number * number;
}

console.log(squaredDeclaration(10));

// Anonymous Function
const squaredAnon = function (number) {
  return number * number;
};

console.log(squaredAnon(3));

// 1: Write a function with parameters of first name and surname, that outputs a personalised greeting using the arguments passed to the function.

// Function Declaration
function person(firstName, surname) {
  return `Hello ${firstName} ${surname}`;
}

console.log(person("Mohammed", "Rahman"));

// Task 1 Chris' solution

const greeting2 = (firstName, surname) => {
  return `Hello ${firstName} ${surname} how are you?`;
};

console.log(greeting2("Jane", "Doe"));

// 2: Write a function that takes in a number and checks whether or not it is odd or even.

// Arrow Function
const oddEven = (num) => {
  if (num % 2 === 0) {
    return `${num} is even`;
  } else {
    return `${num} is odd`;
  }
};

console.log(oddEven(2));

// Task 2 Chris' solution

const evenOdd = (n) => {
  if (n % 2 === 0) {
    return `${n} is an even number`;
  } else {
    return `${n} is an odd number`;
  }
};

console.log(evenOdd(2));

// 3: Write an ATM function that takes in parameters of withdrawAmount and pinNumber. The function should check that the pinNumber is correct and that the withdrawAmmount is less than the account balance. If the pin is correct and the balance is sufficient, approve the transaction. If not decline the transaction.

// Arrow Function
const atm1 = (amount, pinNumber) => {
  let secretPin = 1234;
  let balance = 500;

  if (secretPin === pinNumber && balance >= amount) {
    return `Transaction of £${amount} approved`;
  } else if (secretPin !== pinNumber) {
    return `Pin:${pinNumber} is in correct`;
  } else
    return `Withdrawal amount £${amount}: £${balance} balance - insufficent funds`;
};

console.log(atm1(550, 1234));

// Task 3 Chris' solution

let accBal = 1000;
let myPin = 0000;
const withdraw = (withdrawAmount, pinNum) => {
  if (accBal >= withdrawAmount && pinNum === myPin) {
    return `Transaction approved. Please collect your  £${amount}`;
  } else if (accBal >= withdrawAmount && pinNum !== myPin) {
    return `Transaction denied. Incorrect Pin number`;
  } else {
    return `Transaction denied, Insufficient funds`;
  }
};

// Self Learning - Objects
// Object Literal
// var person1 = {
//   firstName: "Mo",
//   lastName: "Rahman",
//   job: "Web Developer",
//   favFood: "Curry",
// };

// let prop = "job";
// // console.log(person1[prop]);

// // Retrieve information using the "." dot notation

// // console.log(person1.firstName);

// // Retrieve information using the "[]" bracket notation
// // console.log(person1["lastName"]);

// // console.log(person1);

// // You can also create an object like this - It will create an empty object - using the Constructor method

// // const newPerson = new Object();
// // console.log(newPerson);
// // // To add a new key-value to this empty object
// // newPerson.firstName = "John";
// // console.log(newPerson);

// // Updating objects using dot notation
// person1.favFood = "Khao Soi";

// // Updating objects using Bracket notation
// person1["firstName"] = "Mohammed";
// // The favourite food is now Khao Soi and not Curry
// // console.log(person1.favFood);

// // View the person1 object and you can see Khao Soi.
// // console.log(person1);

// for (let prop in person1) {
//   console.log(prop + ": " + person1[prop]);
// }

// let jonny = {
//   age: 30,
//   hair: "black",
//   eyes: "brown",
//   job: "developer",
// };

// let friends = {
//   friend1: jonny,
//   friend2: {
//     age: 35,
//     hair: "brown",
//     eyes: "green",
//     job: "electrician",
//   },
// };

// console.log(friends);

// let numbers = [5, 10, 15, 20];

// const mult10 = (num) => {
//   return num * 10;
// };

// let multnumbers = numbers.map(mult10);
// console.log(multnumbers);
