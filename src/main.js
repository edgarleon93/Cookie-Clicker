import "./index.css";

// Cookie clicker button 
document.getElementById("cookie").addEventListener("click", function() {
  scoreNow.innerHTML = "Score: " + (parseInt(scoreNow.innerHTML.split(':')[1]) + (1 * (multiplierCount + 1)));
  //update line of codes to show in terminal per click
  console.log("Cookie clicked. Score: " + scoreNow.innerHTML.split(':')[1]);
});

setInterval(function() {
  if (parseInt(scoreNow.innerHTML.split(':')[1]) < multiplierCost){
  multiplier.disabled = true;
  multiplier.style.borderColor = "black";
  }
  else {
  multiplier.disabled = false;
  multiplier.style.borderColor = "white";
  }  
}, 1);

setInterval(function() {
  if (parseInt(scoreNow.innerHTML.split(':')[1]) < autoClickerCost){
    autoClicker.disabled = true;
    autoClicker.style.borderColor = "black";
  }
  else {
    autoClicker.disabled = false;
    autoClicker.style.borderColor = "white";
  }  
}, 1);

setInterval(function() {
  if (parseInt(scoreNow.innerHTML.split(':')[1]) < bonusCost){
    bonus.disabled = true;
    bonus.style.borderColor = "black";
  }
  else {
    bonus.disabled = false;
    bonus.style.borderColor = "white";
  }  
}, 1);

// Multiplier button start

let scoreNow = document.getElementById("scoreShow");
scoreNow.innerHTML = "Score: 0";
let multiplier = document.getElementById("bonusMultiplier");
let multiplierCount = 0;
let multiplierCost = 10;

// Increase the multiplier and update the multiplier button text when the bonusMultiplier button is clicked
multiplier.addEventListener("click", function() {
  if (parseInt(scoreNow.innerHTML.split(':')[1]) >= multiplierCost) {
    scoreNow.innerHTML = "Score: " + (parseInt(scoreNow.innerHTML.split(':')[1]) - multiplierCost);
    multiplierCount++;
    multiplierCost = multiplierCost * 2;
    multiplier.innerHTML = "Multiplier x" + (multiplierCount + 1) + " (Cost: " + multiplierCost + ")";
    console.log("Multiplier x" + (multiplierCount + 1) + " purchased. Score: " + scoreNow.innerHTML.split(':')[1]);
  } else {
    // do nothing
  }
});


// Multiplier button end

// Autoclick button start 


let autoClicker = document.getElementById("bonusAutoClick");
let autoClickerCount = 0;
let autoClickerCost = 11;
let autoClickerInterval = null;

// Set up auto-clicker button
autoClicker.innerHTML = "Auto-Clicker (Cost: " + autoClickerCost + ")";
autoClicker.addEventListener("click", function() {
  if (parseInt(scoreNow.innerHTML.split(':')[1]) >= autoClickerCost) {
    scoreNow.innerHTML = "Score: " + (parseInt(scoreNow.innerHTML.split(':')[1]) - autoClickerCost);
    autoClickerCount++;
    autoClickerCost = autoClickerCost * 2;
    autoClicker.innerHTML = "Auto-Clicker x" + (autoClickerCount + 1) + " (Cost: " + autoClickerCost + ")";
    clearInterval(autoClickerInterval);
    autoClickerInterval = setInterval(addAutoClick, 1000);
  } else {
    // do nothing
  }
});

function addAutoClick() {
  scoreNow.innerHTML = "Score: " + (parseInt(scoreNow.innerHTML.split(':')[1]) + (1 * (multiplierCount + 1)));
}

// Autoclick button end 

// Bonus boost button start 
let bonus = document.getElementById("bonusBoost");
let bonusCount = 0;
let bonusCost = 12;
let bonusTimer = null;
let bonusActive = false;

bonus.innerHTML = "Bonus (Cost: " + bonusCost + ")";
bonus.addEventListener("click", function() {
  if (parseInt(scoreNow.innerHTML.split(':')[1]) >= bonusCost) {
    scoreNow.innerHTML = "Score: " + (parseInt(scoreNow.innerHTML.split(':')[1]) - bonusCost);
    bonusCount++;
    bonusCost = bonusCost * 2;
    bonus.innerHTML = "Bonus x" + (bonusCount + 1) + " (Cost: " + bonusCost + ")";
    activateBonus();
  } else {
    // do nothing
  }
});

// Add bonus function
function activateBonus() {
    if (!bonusActive) {
      bonusActive = true;
      bonusTimer = 30;
      bonus.innerHTML = "Bonus (Time remaining: " + bonusTimer + ")";
      var countdown = setInterval(function() {
        bonusTimer--;
        bonus.innerHTML = "Bonus (Time remaining: " + bonusTimer + ")";
        if (bonusTimer == 0) {
          clearInterval(countdown);
          bonus.innerHTML = "Bonus (Cost: " + bonusCost + ")";
          bonusActive = false;
          }
      }, 1000);
    } else {
      //do nothing
    }
  }
  
  function addPointsWithBonus() {
    scoreNow.innerHTML = "Score: " + (parseInt(scoreNow.innerHTML.split(':')[1]) + (1 * (multiplierCount + 1)) * 2);
  };
  

// Boost button end;

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
  // Remove all elements
  console.log(randomCommandTextElements)
  randomCommandTextElements.forEach(function(element) {
    element.remove();
  });
  
  // Select a random element
  const randomIndex = Math.floor(Math.random() * randomCommandTextElements.length);
  const randomElement = randomCommandTextElements[randomIndex];

  // Create new element 
  const newDiv = document.createElement("div");
  newDiv.innerHTML = randomElement.innerHTML;
  newDiv.classList.add("randomCommandText");
  // Add the new element to the DOM
  document.body.appendChild(newDiv);
  container.appendChild(newDiv);

}

// Add an event listener to the button to call the showRandomElement function when clicked
button.addEventListener("click", showRandomElement);

