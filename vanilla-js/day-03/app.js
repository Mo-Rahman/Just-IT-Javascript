// ---------------- Main topics - Arrays and Loops

let coffeeOrder = ["Mocha", "Americano", "Frap", "Hot-Chocolate"];

// ---------------- Log the array to the console.

console.log(coffeeOrder);

// ---------------- Log a specific array item.

console.log(coffeeOrder[1]);

// ---------------- Re-assign a item.
coffeeOrder[1] = "English Tea";

console.log(coffeeOrder);

// ---------------- Example of array property - (length)
console.log(coffeeOrder.length);

// ---------------- Array Method push
coffeeOrder.push("Still water");

console.log(coffeeOrder);

// ---------------- Array Method pop - removes last element from the array

coffeeOrder.pop();
console.log(coffeeOrder);

// ---------------- Loops
// let i = 0
// increment
// i = i + 1
// same as: i++

let colours = ["Blue", "Green", "Yellow", "Black", "Orange", "Red"];
// ---------------- console.log(colours[0]);

for (let i = 0; i < colours.length; i++) {
  console.log(colours[i]);
}

// ---------------- Second example - Multiples of two: for loop
// ---------------- Declare an empty array
let multipleTwo = [];

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    multipleTwo.push(i);
  }
}

console.log(multipleTwo);

// ---------------- While loop - Runs continuously until a condition is met.

let number = 1;

while (number <= 10) {
  console.log(number);
  number++;
}

//  ---------------- Do while loop
// ---------------- A do while checks the condition while the code has run - therefore will always run at least once.

let x = 5;
let y = 0;

do {
  x = x + y;
  console.log(x);
  y++;
  console.log(y);
} while (y <= 10);

// ------------ Another example of a while loop ----------------

let cards = ["diamond", "spade", "club", "heart"];
let currentCard = "club";

while (currentCard != "spade") {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * cards.length)];
}
console.log(currentCard);

// Task 1:  Create an array of your favourite films / TV shows, up to 5 items. Use an array method to add 2 more items to your array. Use a loop to cycle through the array and log each item to the console.

let favShowsandMovies = [
  "Lord of the rings",
  "Matrix",
  "Game of thrones",
  "Breaking bad",
  "One-piece",
];
// console.log(favShowsandMovies);

let addMovies = ["This is us", "Die hard"];
// favShowsandMovies.push(addMovies[0]);
// favShowsandMovies.push(addMovies[1]);
// console.log(favShowsandMovies);

for (let i = 0; i < addMovies.length; i++) {
  favShowsandMovies.push(addMovies[i]);
  // console.log(i);
}
console.log(favShowsandMovies);

// Chris's solution - task-1

let favFilms = [
  "Lord of the rings",
  "Matrix",
  "Game of thrones",
  "Breaking bad",
  "One-piece",
];
console.log(favFilms);
favFilms.push("Snatch", "Star wars");
console.log(favFilms);

for (let i = 0; i < favFilms; i++) {
  console.log(favFilms[i]);
}

// Task 2: Generate 10 random numbers between 1-100 and log them to the console.

// let randomNumbers;

for (let i = 0; i < 10; i++) {
  // randomNumbers.push(Math.floor(Math.random() * 100));
  let randomNumbers = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumbers);
}

// Chris solution task 2

for (let i = 0; i < 10; i++) {
  let randomnumber = Math.round(Math.random() * 100) + 1;
  console.log(randomnumber);
}

// Task 3: Create a loop that counts backwards from 20-0. Logging the numbers to the console.

let twenty = 20;
while (twenty >= 1) {
  console.log(twenty);
  twenty--;
}

// Chris's solution task 3

for (let i = 20; i > 0; i--) {
  console.log(i);
}

// Task 4: Using a loop generate 5 random numbers between 1-50. For each number generated, check if the number is divisible by 5 or not. Log whether it is divisible by 5 or not to the console.

// let counter = 5

for (let i = 0; i < 5; i++) {
  let newNumber = Math.floor(Math.random() * 50) + 1;
  if (newNumber % 5 === 0) {
    console.log(`${newNumber} is divisable by 5`);
  } else {
    console.log(`${newNumber} isn't divisable by 5`);
  }
}

// Chris's solution task 4

for (let i = 0; i < 5; i++) {
  let testnumber = Math.floor(Math.random() * 50) + 1;
  if (testnumber % 5 === 0) {
    console.log(`${testnumber} is divisable by 5`);
  } else {
    console.log(`${testnumber} isn't divisable by 5`);
  }
}
