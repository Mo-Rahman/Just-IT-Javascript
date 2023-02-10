// document.getElementById("example7").addEventListener("click", function () {
//   document.getElementById("example7").innerHTML = "Something Else";
//   alert("i've been clicked");
// });

// Event binding solution.

document.getElementById("example7").addEventListener("click", (e) => {
  e.currentTarget.innerHTML = "Hello world";
  // console.log(e.currentTarget.alert("HELLO"));
  // e.currentTarget.alert("I've been clicked");
});

// document.getElementById("btn").addEventListener("click", (e) => {
//   // e.currentTarget.innerHTML = "Something else";
//   e.currentTarget.alert("I've been clicked");
// });
