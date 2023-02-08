// console.log("Hello");

document.addEventListener("keydown", function (event) {
  if (event.code === "Digit3") {
    // alert("Numpad3 was pressed");
  } else if (event.code === "ArrowRight") {
    // alert("right was pressed");
    document.getElementById("circ").style.fill = "blue";
  } else if (event.code === "ArrowDown") {
    // alert("arrow down was pressed");
    document.getElementById("rect1").style.fill = "red";
    // document.getElementById("rect1").style.transform = "rotate(360deg)";
    document.getElementById("rect1").style.transition = "all 2s";
    document
      .getElementById("rect1")
      .setAttribute("transform", "translate(100, 50)");
  }
});

document.addEventListener("keyup", function (event) {
  if (event.code === "Digit4") {
    alert("Digit 4 was pressed");
  }
});

document.addEventListener("");

// transform: translate(100px, 100px);
// transform: translate(100px, 100px, 100px);

// document.addEventListener()

// function move(id, pixelsDown, pixelsRight) {
//   let svg = document.getElementById("rect1");
//   let x = svg.getAttribute('rect1: "cx"', x) + pixelsRight;
//   svg.setAttribute('rect1: "cx"');
//   let y = svg.getAttribute('rect1: "cx"', y) + pixelsDown;
//   svg.setAttribute('rect1: "cx"');
// }
