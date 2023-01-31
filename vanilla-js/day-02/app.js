// Conditions in Javascript

// Weather If / Else example

let weather = "Scobby Do";
// let age = Math.floor(Math.random() * 50 ) + 1;
// console.log(age);

if (weather === "Sunny") {
  console.log("Grab a par of sunglasses");
} else if (weather === "Rain") {
  console.log("It's going to rain today - Grab an Umbrella.");
} else {
  console.log("Look at the sky and work it out!");
}

// Comparators & Equality

// "=" - assigns the value.

// Equal To - Comparison operator - "==" but not strict.

let a = "10";

// Equal To - Comparison operator === strick, it checks the type also.

let trafficLight = "Green";

// if (trafficLight === "Red" || trafficLight === "Amber") {
//   console.log("Stop!");
// } else {
//   console.log("Go")
// }

if (trafficLight !== "Green") {
  console.log("Stop!");
} else {
  console.log("Go!");
}

// Numbers Example If / Else
// Check whether a number is between 5 and 10

let num = 5;

if (num >= 5 && num <= 10) {
  console.log(`I am ${num} - So I am between 5 & 10`);
} else {
  console.log("I am something else");
}

// Switch statements - An alternative to the IF/Else conditional statements

let day = "holiday";

switch (day) {
  case "Monday":
    console.log("Weekday is over - Happy coding!");
    break;
  case "Tuesday":
    console.log("Weekday is over - Happy coding!");
    break;
  case "Wednesday":
    console.log("Weekday is over - Happy coding!");
    break;
  case "Thursday":
    console.log("Weekday is over - Happy coding!");
    break;
  case "Friday":
    console.log("Weekday is over - Happy coding!");
    break;
  default:
    console.log("It's the weekend");
}

// Switch statement - Grade Example

// let testScore = 65;

// switch (true) {
//   case testScore >= 70:
//     console.log("distiction");
//     break;
//   case testScore >= 60:
//     console.log("Merit");
//     break;
//   case testScore >= 50:
//     console.log("Pass");
//     break;
//   default:
//     console.log("Merit");
// }

// Ternary operator - is a shorthand conditional statement.
// let marks = 49;
//  condition ? True : False;
// marks >= 50 ? console.log("Yes") : console.log("No");

// Tasks

// Tasks: 1: Write an if statement that checks whether a customer is old enough to be served alcohol at a bar. Declare a variable called age and write an if statement that checks whether age is 18 or above. If age is less than 18 log "Sorry, I can't serve you" to the console, if age is 18 or above log "No problem, what would you like to drink?"

let age = 17;

if (age >= 18) {
  console.log(`You are ${age} - here is your drink`);
} else {
  console.log("Too young");
}

// 2: Declare a variable called "Password". Write an if statement that checks how many characters are in the password, if the password has more than 8 characters log the password to the console, if the password has less than 8 characters log to the console that the password is too short.

let password = "Pass";

if (password.length >= 8) {
  console.log(`This is your password: ${password}`);
} else {
  console.log("Your password is too short");
}

// 3: Create a variable that stores a number. Check whether the number is divisible by 3 or 5, if so log "This number is divisible by 3 or 5" to the console. Otherwise log an alternate message to the console.

let number = 14;

if (number % 3 === 0 || number % 5 === 0) {
  console.log("number is divisible by 3 and 5");
} else {
  console.log("Number isn't divisible");
}

// 4: Create a variable that stores a number. If the number is divisible by 3, if so log "fizz" to the console. If the number is divisible by 5 log "buzz" to the console. If the number is divisible by both 3 and 5, log "fizz buzz" to the console. Otherwise log the number to the console.

if (number % 3 === 0 && number % 5 === 0) {
  console.log("FizzBuzz");
} else if (number % 3 === 0) {
  console.log("Fiz");
} else if (number % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(`${number}`);
}

// Create variable that stores a number. Check if the number is a palindrome.

// let isPalindrome = "anna";

function isPalindrome(word) {
  let reversed = word.split("").reverse().join("").toLowerCase();
  if (reversed === word.toLowerCase()) {
    return "Is a Palindrome";
  } else {
    return "Isn't a palindrome";
  }
}

let testPalidrome = isPalindrome("anna");
console.log(testPalidrome);
