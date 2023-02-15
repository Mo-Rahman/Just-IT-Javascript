// Get element by ID
const title = document.getElementById("title");
console.log(title);

// Get elemnt by ClassName
const listItems = document.getElementsByClassName("listItems");
console.log(listItems);

// getElementsBytagName
const liElements = document.getElementsByTagName("li");
console.log(liElements);

// Get elemnts by querySelector
const qSelector = document.querySelector("p");
console.log(qSelector);
// Get Element by Query selectorAll
const qSelectorAll = document.querySelectorAll("p");
console.log(qSelectorAll);

// Styling an element with JS
title.style.color = "red";

// Style multiple elements with a loop
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.color = "blue";
}

// Store our UL element in a constant
const ul = document.querySelector("ul");
console.log(ul);

// Creating an element in Javascript via the DOM
const newListItem = document.createElement("li");
console.log(newListItem);

// Add the new 'li' to the 'ul'
ul.append(newListItem);

// Add text to the list item
newListItem.textContent = "Item Five added via append";

//Add an attribute to an element
newListItem.setAttribute("id", "item5");

// Remove an attribute from an elment
newListItem.removeAttribute("id");

// Add a class to an elment
newListItem.classList.add("listItems");

// Remove a class from an element
newListItem.classList.remove("listItems");
// classList.toggle()
// Remove an element from the Dom
newListItem.remove();

// append vs append child
// https://flexiple.com/javascript/javascript-appendchild/

// innerHTML vs textContent
// https://dev.to/mohananagavenkat/textcontent-vs-innertext-1i83
