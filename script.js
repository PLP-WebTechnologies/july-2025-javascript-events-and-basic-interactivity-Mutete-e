// Part 1: Variables and Conditionals
let userName = prompt("What is your name?");
let userAge = parseInt(prompt("Enter your age:"));

if (userAge >= 18) {
  console.log(`${userName}, you are eligible to vote.`);
  document.getElementById("output").innerText = `Hi ${userName}, you're eligible to vote!`;
} else {
  console.log(`${userName}, you are too young to vote.`);
  document.getElementById("output").innerText = `Hi ${userName}, you're too young to vote.`;
}

// Part 2: Functions
function calculateTotal(a, b) {
  return a + b;
}

function formatName(first, last) {
  return `${first.trim().toUpperCase()} ${last.trim().toUpperCase()}`;
}

console.log("Total:", calculateTotal(10, 5));
console.log(formatName("john", "doe"));

// Part 3: Loops
const fruits = ["Apple", "Banana", "Cherry", "Mango"];
for (let i = 0; i < fruits.length; i++) {
  const li = document.createElement("li");
  li.textContent = fruits[i];
  document.getElementById("fruit-list").appendChild(li);
}

document.getElementById("countBtn").addEventListener("click", () => {
  let count = 5;
  let interval = setInterval(() => {
    if (count === 0) {
      document.getElementById("output").innerText = "Countdown Complete!";
      clearInterval(interval);
    } else {
      document.getElementById("output").innerText = `Countdown: ${count}`;
      count--;
    }
  }, 1000);
});

// Part 4: DOM Manipulation
document.getElementById("page-title").textContent = "JavaScript DOM in Action";

document.getElementById("toggleBtn").addEventListener("click", () => {
  const output = document.getElementById("output");
  if (output.innerText.includes("toggled")) {
    output.innerText = "Toggled message removed.";
  } else {
    output.innerText = "This is a toggled message!";
  }
});

const footer = document.createElement("footer");
footer.textContent = "Created by a JavaScript Pro ✨";
document.body.appendChild(footer);
