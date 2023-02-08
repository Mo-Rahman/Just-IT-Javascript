// function timer() {
//   let date = new Date();
//   // console.log(date);

//   document.querySelector("#demo").innerHTML = date.toLocaleTimeString();
// }
// timer();
// This deals with the timer
// A function that sets the current time.
function time() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}
// Call the time function and it calls the function once!
// time();
// Set interval calls the time() function every second
setInterval(time, 1000);

function timesUP() {
  alert("Times Up");
}

// This calls the function timesUp after 10 seconds
let timeTosolve = setTimeout(timesUP, 20000);
// console.log(setTimeout);

// let array = document.querySelectorAll("input");
// console.log(array);
// for (let i = 0; i < array.length; i++) {
//   document.querySelectorAll("input")[i].addEventListener("click", function () {
//     let test = this.innerHTML;
//     console.log(test);
//     alert("this has been clicked");
//   });
// }

// try a for each
// let array = document.querySelectorAll("input");

// TO SELECT MY BUTTONS!
document.querySelectorAll("button").forEach((element) => {
  element.addEventListener("click", function () {
    // let buttonPressed = this.innerHTML;
    let value = element.value;
    // alert(buttonPressed);
    // timerStop();
    // console.log(buttonPressed);
    // console.log(value);
    // timesUP();
    if (value === "btn") {
      buttonAnimation();
    } else {
      let answer = getInputValue();
      // console.log(answer);
      timerStop(answer);
    }
  });
});

function timerStop(inputValue) {
  const answer = "10";
  //   let test = document.getElementById("answer").value;
  //   console.log(test);
  if (answer === inputValue) {
    // console.log(inputValue);
    // console.log(answer);
    clearTimeout(timeTosolve);
    alert(`Timer stopped you guessed right:${inputValue}`);
  } else {
    alert("Wrong answer");
  }
}

// if (10 === document.getElementById("display").value) {
// }

// let test = document.getElementById("display").value;
// function aaa() {
//   alert(test);
// }
// aaa();

// var lolz = document.querySelector("#display");
// var kk = $("#kk");
// kk.click(function () {
//   alert(lolz.val());
// });

// document.getElementById("#myInput").addEventListener("click", function () {
//   getInputValue();
// });

function getInputValue() {
  // Selecting the input element and get its value
  var inputVal = document.getElementById("myInput").value;

  // return the value
  return inputVal;
}

// Counter that counts up!
var count = 1;
function counter() {
  document.getElementById("div_1").innerHTML = `count:${count}`;
  count++;
  setTimeout(counter, 1000);
}

counter();

// Animation!
function buttonAnimation() {
  let activeButton = document.querySelector(".btn");

  // console.log(activeButton);
  activeButton.classList.add("pressed");
  document.querySelector(".btn").innerHTML = "BOOM";

  setTimeout(function () {
    activeButton.classList.remove("pressed");
    document.querySelector(".btn").innerHTML = "Button";
  }, 2000);
}
