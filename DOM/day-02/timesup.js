// function timesup() {
//   alert("Hello");
// }

// <!-- 1 - Web Page set up

// 2 - Timer

// 3 - Event such as key press

// 4 - Change the page once the timer is up -->

document.querySelector("button").addEventListener("click", function () {
  // let innerHTML = this.innerHTML;
  // // console.log(innerHTML);
  buttonAnimation();
});

function buttonAnimation() {
  let activeButton = document.querySelector(".btn");

  // console.log(activeButton);
  activeButton.classList.add("pressed");
  document.querySelector("button").innerHTML = "BOOM";

  setTimeout(function () {
    activeButton.classList.remove("pressed");
    document.querySelector("button").innerHTML = "Click Me!";
  }, 2000);
}
