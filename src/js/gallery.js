import { colorArray } from "./binary.mjs";

document.body.onload = addElements;
const array = colorArray();

function addElements() {
  // create a new div element

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = element;
    const newContent = document.createTextNode(element);
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("div" + index);
    document.body.insertBefore(newDiv, currentDiv);
  }
  newDiv.style.backgroundColor = "#" + color;

//   and give it some content

//   add the text node to the newly created div

//   add the newly created element and its content into the DOM
// 
}
