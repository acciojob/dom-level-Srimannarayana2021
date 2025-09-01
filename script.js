// your JS code here
let element = document.getElementById("level");
let currentLevel = 0;

function calculateLevel(node) {
  if (node) {
    currentLevel++;
    calculateLevel(node.parentElement);
  }
}

calculateLevel(element);

alert(`The level of the element is: ${currentLevel}`);
