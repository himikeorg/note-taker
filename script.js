"use strict";

const button = document.querySelector(".btn");
const note = document.querySelector("textarea");
const table = document.querySelector("table");

let buttonClick = false;

// Cut a string to a certain number of characters and add a ...
function shortenStr(string) {
  if (string.length > 150) {
    string = string.substring(0, 150);
    string += " ...";
    return string;
  } else {
    return string;
  }
}

button.addEventListener("click", function () {
  if (buttonClick) {
    let row = document.querySelector("tr");
    let c1 = row.insertCell(1);
    c1.innerText = shortenStr(note.value);

    console.log(row, c1);

    console.log(buttonClick);
  } else {
    let row = table.insertRow(0);
    let c1 = row.insertCell(-1);
    c1.innerText = shortenStr(note.value);
    console.log(buttonClick);
  }
  buttonClick = !buttonClick;
});

// let's figure out how to pick a certain length for the string while still having the actual value in the <td>
/*

I need to have the value that was entered store in a variable.
Then I need to send the string to the cell but somehow cut it off at a certain point.

*/
