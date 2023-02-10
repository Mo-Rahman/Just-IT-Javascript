// document.getElementById("example7").addEventListener("click", function () {
//   document.getElementById("example7").innerHTML = "Something Else";
//   alert("i've been clicked");
// });

// Event binding solution.

// I didn't have to bind the event to the click for it to work

document.getElementById("example7").addEventListener("click", (e) => {
  // e.currentTarget.innerHTML = "Hello world";
  // e.target.innerHTML = "something else"; // Now to change the innerHTML using target.
  // alert("I've been clicked");
  // document.getElementById("example7").style.color = "red";
  document.getElementById("example7").style.color = "red";
  console.log(e); // see the value of "e" in console
  console.log(e.target);
  console.log(`e.target: ${e.target}`); // the I get <p id="example7">something else</p>
  console.log(e.target.innerHTML); // to target the p tag use innerHTML - see console for result
  e.target.innerHTML = "I've been clicked and changed!"; // Now to change the innerHTML using target.

  // What happens when you have two returnable lines of code?

  // e.target.style.color = "red"; // Example to change style
  console.log(e.target.innerHTML); // See the new value for innerHTML after the pointer click!
});
