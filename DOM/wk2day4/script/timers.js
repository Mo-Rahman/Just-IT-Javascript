const timeout = setTimeout(timer, 10000);
// const myTimeOut = setTimeout()
//Preconditions:
//Postconditions:
function timerStop(trigger) {
  //   let test = document.getElementById("answer").value;
  //   console.log(test);
  if (trigger == document.getElementById("answer").value) {
    clearTimeout(timeout);
    alert("Timer Stopped!");
  } else {
    alert("Wrong answer");
  }
}
function timer() {
  alert("Times Up!");
}

function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
