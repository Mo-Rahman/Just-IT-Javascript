// function add() {
//   const num1Var = document.getElementById("num1");
//   const num2Var = document.getElementById("num2");
//   const demoVar = document.getElementById("demo");
//   demoVar.innerHTML = Number(num1Var.innerHTML) + Number(num2Var.innerHTML);
// }

// add(2, 3);

// let firstNumber = document
//   .querySelectorAll("calculator-keys.button")
//   .forEach((element) => {
//     element.addEventListener("click", function () {
//       let buttonInnerHTML1 = Number(this.innerHTML);
//       console.log(buttonInnerHTML1);
//     });
//   });

// let secondNumber = document.querySelectorAll("button").forEach((element) => {
//   element.addEventListener("click", function () {
//     let buttonInnerHTML1 = Number(this.innerHTML);
//     console.log(buttonInnerHTML1);
//     // console.log(typeof buttonInnerHTML1);
//     // console.log();
//     // console.log(add);
//     return buttonInnerHTML1;
//   });
// });

// console.log(secondNumber);

// let result = add(firstNumber, secondNumber);
// console.log(result);

// document.querySelectorAll("button").forEach((element) => {
//   element.addEventListener("click", function () {
//     let buttonInnerHTML1 = this.innerHTML;
//     console.log(buttonInnerHTML1);
//   });
// });

// let button0 = document.querySelector("#one");
// let acvalue = button0.value;
// button0.addEventListener("click", function () {
//   let display = document.querySelector("#display");
//   // console.log(display.name);
//   display.value += 1;
//   // return Number(display.placeholder);
// });

// document.querySelectorAll("button").forEach((element) => {
//   element.addEventListener("click", function () {
//     // alert("i've been clicked");
//     // let display = document.querySelector("#display");
//     let display = document.querySelector("#display");
//     display.value += 1;
//   });
// });

// THIS WORKS!! for 1 button
// document.querySelector("#one").addEventListener("click", function (e) {
//   let varName = document.getElementById("one").value;
//   // console.log(varName);
//   // console.log();
//   // alert("I've been clicked");
//   // let tValue = document.querySelector("#one");
//   // let display = document.querySelector("#display");
//   // console.log(display.value);
//   // display.value = display.value + display.value;
//   // display.value += tValue;
//   // display = diplay.value;
//   // console.log(display.value);
//   display.value += varName;
//   // display.value = eval(display.value)
//   // console.log(tValue);
//   // console.log(e.value);
// });

// -------------- Working code ------------------------------

document.querySelectorAll("input").forEach((element) => {
  element.addEventListener("click", function () {
    // alert("I've been clicked");
    // console.log(typeof Number(element.value));
    // console.log(typeof element.value);
    // let number = Number(element.value);
    // console.log(number1);
    // console.log(typeof number1);
    // console.log(typeof number1 == "number");
    console.log(element.value);
    if (element.value === "AC") {
      // element.value = "";
      display.value = "";
      console.log(display.value);
      // console.log(element.value);
    } else if (element.value != "=") {
      display.value += element.value;
    } else if (element.value === "=") {
      // eval(Number(display.value));
      display.value = eval(display.value);
    }
    // console.log(display.value);
    // clickedEqual(display.value);
  });
});

// -------------- Working code ------------------------------

// function clickedEqual(value) {
//   document
//     .querySelector("input[value='=']")
//     .addEventListener("click", function () {
//       eval(Number(value));
//     });
// }
/* <button class="btn">Click me!</button> */

// let button = document.querySelector('button[value="my task"]');
// button.click();
