document.getElementById("colourChange").addEventListener("click", function () {
  document.getElementById("heading").classList.toggle("bigger-color");
});

document.querySelector("input").addEventListener("keydown", function () {
  document.querySelector("#keydown").textContent = this.value;
});
