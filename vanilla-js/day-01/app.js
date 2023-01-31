console.log('Hello world!');

// Variables
// Storing data in accessible cariables that we can access

// Declaring variables

// var - do not use (this is because it has global scope)

// var oldSchool = "Var is an older variable declaration method that should be avoided";

// console.log(oldSchool);

// Let is the modern way to declare variables. 

let changeable = "modern way to delcare a variable";

console.log(changeable)

changeable = "changeable is something new";

console.log(changeable);

var oldSchool = "new value";

// let changeable = "I'm new will I work";

console.log(changeable)


// For variables that will remain constant
const constant = "A value that can not be redeclared"

// Redeclaring a variable

let x = 100;
console.log(x);

x = x + 100;
x +=100
console.log(x);


// Data types

// 1 - Strings - text enclosed in quote marks - single or double ('' or "")

let string = "I am a string";
console.log(string);

// 2 - Numbers - dealing with either whole numbers or decimals
console.log(100);
console.log(0.55);

// Example of a string containing a number
let question = "1000";
console.log(question);

// Boolean values - Either true or false. 
console.log(x == 300);

// Null
console.log(null);

// Undefined 
console.log(undefined);

// Good reference:  https://www.programiz.com/javascript/data-types

// Properties & Methods

// Property - Qualities or information about the data
let propertyString = "Hello world";
console.log(propertyString.length);

// A Method is an action or doing something with the data
console.log("Argument");

console.log(propertyString.toUpperCase());

// Math library

// In build Mathematical methods and properties
// Javascript is a 0 indexed language.

// Generate a random number 

console.log(Math.random());

console.log(Math.random() * 10);

// Math.floor - rounds down 0-9
console.log(Math.floor(Math.random() * 10) );
// Math.floor - rounds up 1-10
console.log(Math.ceil(Math.random() *10));
// Math.round - Rounds up or down dependent on the number 1-10
console.log(Math.round(Math.random() * 10));

// Access variables & template literals ``

// let firstName = "Mohammed";

// console.log("My name is " + firstName);

// template literals
// console.log(`my name is ${firstName}.`);


// 1: Create a variable that stores your name and log a string to the console that greets you using template literals. 
let firstName = "Mohammed";
console.log(`my name is ${firstName}.`);


// 2: Create Variables storing your name, your age and your favourite film or tv series. Using template literals I want you to log a sentence including these values to the console. 

let myName = "Mohammed";
let age = 'secret';
let favouriteMovie = "The Lord of the rings";

console.log(`My name is ${myName} and I am ${age} and one of my favourite movies is ${favouriteMovie}`)

// 3: Generate a number between 1 and 50 and log it to the console. 

let randomNumberOnetoFify = Math.ceil(Math.random() * 50 );

console.log(randomNumberOnetoFify);

// 4: Create variables storing what you ate for breakfast, lunch and dinner yesterday and a log a sentence to the console. Without overwriting the initial variable declarations I would like you to set new variable values to what you have eaten / plan to eat today and log another sentence to the console.

let breakfast = "Weetabix";
let lunch = "banana";
let dinner = "Pad Thai";

console.log(`I had ${breakfast} for breakfast and a ${lunch} for lunch, ${dinner} for dinner`);

breakfast = "Weetabix";
lunch = "nothing";
dinner = "Lamb Curry";

console.log(`I had ${breakfast} for breakfast and a ${lunch} for lunch,  will have a ${dinner} for dinner`);

























































