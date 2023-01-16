import "./index.css";
import commands from "./commands.json";

console.log(commands);

// Cookie clicker button 
document.getElementById("cookie").addEventListener("click", function() {
  scoreNow.innerHTML = "Score: " + (parseInt(scoreNow.innerHTML.split(':')[1]) + ((bonusActive ? 2 : 1) * (multiplierCount + 1)));
  //update line of codes to show in terminal per click
  totalScore.innerHTML = "Cookie clicked. Score: " + scoreNow.innerHTML.split(':')[1];
  console.log("Cookie clicked. Score: " + scoreNow.innerHTML.split(':')[1]);
});

let multiplier = document.getElementById("bonusMultiplier");
let autoClicker = document.getElementById("bonusAutoClick");
let bonus = document.getElementById("bonusBoost");
let refreshRate = 10;

setInterval(function() {
  if (parseInt(scoreNow.innerHTML.split(':')[1]) < multiplierCost){
  multiplier.disabled = true;
  multiplier.style.opacity = "0.5";
  }
  else {
  multiplier.disabled = false;
  multiplier.style.opacity = "1";
  }  
}, refreshRate);

setInterval(function() {
  if (parseInt(scoreNow.innerHTML.split(':')[1]) < autoClickerCost){
    autoClicker.disabled = true;
    autoClicker.style.opacity = "0.5";
  }
  else {
    autoClicker.disabled = false;
    autoClicker.style.opacity = "1";
  }  
}, refreshRate);

setInterval(function() {
  if (parseInt(scoreNow.innerHTML.split(':')[1]) < bonusCost){
    bonus.disabled = true;
    bonus.style.opacity = "0.5";
  }
  else {
    bonus.disabled = false;
    bonus.style.opacity = "1";
  }  
}, refreshRate);

// Multiplier button start

let scoreNow = document.getElementById("scoreShow");
let totalScore = document.getElementById("totalScoreShow");
scoreNow.innerHTML = "Score: 0";
let multiplierText = document.getElementById("bonusMultiplierText");
let multiplierCount = 0;
let multiplierCost = 10;

// Increase the multiplier and update the multiplier button text when the bonusMultiplier button is clicked
multiplierText.innerHTML = "Multiplier [Cost: " + multiplierCost + "]";
multiplier.addEventListener("click", function() {
  if (parseInt(scoreNow.innerHTML.split(':')[1]) >= multiplierCost) {
    scoreNow.innerHTML = "Score: " + (parseInt(scoreNow.innerHTML.split(':')[1]) - multiplierCost);
    multiplierCount++;
    multiplierCost = multiplierCost * 2;
    multiplierText.innerHTML = "Multiplier x" + (multiplierCount + 1) + " [Cost: " + multiplierCost + "]";
    console.log("Multiplier x" + (multiplierCount + 1) + " purchased. Score: " + scoreNow.innerHTML.split(':')[1]);
    totalScore.innerHTML = "Multiplier x" + (multiplierCount + 1) + " purchased. Score: " + scoreNow.innerHTML.split(':')[1]
  } else {
    // do nothing
  }
});


// Multiplier button end

// Autoclick button start 

let autoClickerText = document.getElementById("bonusAutoClickText");
let autoClickerCount = 0;
let autoClickerCost = 30;
let autoClickerInterval = null;

// Set up auto-clicker button
autoClickerText.innerHTML = "Auto-Clicker [Cost: " + autoClickerCost + "]";
autoClicker.addEventListener("click", function() {
  if (parseInt(scoreNow.innerHTML.split(':')[1]) >= autoClickerCost) {
    scoreNow.innerHTML = "Score: " + (parseInt(scoreNow.innerHTML.split(':')[1]) - autoClickerCost);
    autoClickerCount++;
    autoClickerCost = autoClickerCost * 2;
    autoClickerText.innerHTML = "Auto-Clicker x" + (autoClickerCount + 1) + " [Cost: " + autoClickerCost + "]";
    clearInterval(autoClickerInterval);
    autoClickerInterval = setInterval(addAutoClick, 1000 / autoClickerCount);
    totalScore.innerHTML = "Auto Clicker x" + (autoClickerCount + 1) + " purchased. Score: " + scoreNow.innerHTML.split(':')[1]
  }
});

function addAutoClick() {
  scoreNow.innerHTML = "Score: " + (parseInt(scoreNow.innerHTML.split(':')[1]) + ((bonusActive ? 2 : 1) *  autoClickerCount * (multiplierCount + 1)));

  for (let i = 0; i < (autoClickerCount + multiplierCount) * (bonusActive ? 2 : 1) ; i++) {
    showRandomElement();
  }

}

// Autoclick button end 

// Bonus boost button start 

let bonusText = document.getElementById("bonusBoostText");
let bonusCount = 0;
let bonusCost = 20;
let bonusTimer = null;
let bonusActive = false;

bonusText.innerHTML = "Boost [Cost: " + bonusCost + "]";
bonus.addEventListener("click", function() {
  if (parseInt(scoreNow.innerHTML.split(':')[1]) >= bonusCost) {
    scoreNow.innerHTML = "Score: " + (parseInt(scoreNow.innerHTML.split(':')[1]) - bonusCost);
    bonusCount++;
    bonusCost = bonusCost * 2;
    bonusText.innerHTML = "Boost x" + (bonusCount + 1) + " [Cost: " + bonusCost + "]";
    activateBonus();
  } else {
    // do nothing
  }
});

// Add boost function
function activateBonus() {
    if (!bonusActive) {
      bonusActive = true;
      bonusTimer = 30;
      bonus.innerHTML = "Boost (Time remaining: " + bonusTimer + ")";
      var countdown = setInterval(function() {
        bonusTimer--;
        bonus.innerHTML = "Boost (Time remaining: " + bonusTimer + ")";
        totalScore.innerHTML = "Boost Activated - (Time remaining: " + bonusTimer + ")";
        if (bonusTimer == 0) {
          clearInterval(countdown);
          bonus.innerHTML = "Boost (Cost: " + bonusCost + ")";
          bonusActive = false;
          }
      }, 1000);
    } else {
      //do nothing
    }
  }

// Boost button end;

// Reset button start
var resetButton = document.getElementById('reset');
resetButton.addEventListener("click", function() {

  var response = confirm("Are you sure you want to reset the game? Your progress will be lost.");
  if (response) {
    localStorage.removeItem("gameState");
    window.location.reload();
  }
});
// Reset button end

// store the terminal commande inside an array and make them not displayed in the html 

const randomCommandTextElements = Array.from(document.querySelectorAll(".randomCommandText"));
randomCommandTextElements.forEach(function(element) {
  element.remove();
});
 
// end

// function that pick a random terminal command and diplay it on the terminal 

const button = document.getElementById("cookie");
const container = document.getElementById("screen");


function showRandomElement() {
  const command = commands[Math.floor(Math.random()* commands.length)];
  container.insertBefore(createCommandElement(command), container.children[container.children.length === 0 ? 0 : 1]);

  container.scrollTop = container.scrollHeight;
}

// Add an event listener to the button to call the showRandomElement function when clicked
button.addEventListener("click", () => {
  for (let i = 0; i < (1 + multiplierCount) * (bonusActive ? 2 : 1) ; i++) {
    showRandomElement();
  }
});

const debug = false;
let lineNum = 0;

function createCommandElement(command) {
  const container = document.createElement("div");
  container.className = "randomCommandText";
  
  const lineContainer = document.createElement("p");
  container.appendChild(lineContainer);

  if (debug) {
    const lineElement = document.createElement("span");
    lineElement.className = `command-white`;
    lineElement.appendChild(document.createTextNode(`${++lineNum} - `));
    lineContainer.appendChild(lineElement);
  }

  for (const line of command) {
    const lineElement = document.createElement("span");
    lineElement.className = `command-${line.color}`;
    lineElement.appendChild(document.createTextNode(line.text));

    lineContainer.appendChild(lineElement);
  }

  return container;
};

(() => {
  const command = [
    {text: "$", color: "white"},
    {text: "_", color: "white cursor"},
  ];

  container.insertBefore(createCommandElement(command), container.children[container.children.length === 0 ? 0 : 1]);
})();