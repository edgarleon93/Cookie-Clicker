import "./index.css";

// Clicker button & score start 

// let cookieButton = document.getElementById("cookie");

// let score = 0;

// const countScoreVariable = function countScore() {

//     score += 1;

//     let scoreVariable = document.getElementById("scoreShow");
    
//     scoreShow.innerHTML = score;  

//     console.log(score)

// };

// Clicker button & score end

// Multiplier button start

let scoreNow = document.getElementById("scoreShow");
scoreNow.innerHTML = "Score: 0";
let multiplier = document.getElementById("bonusMultiplier");
let multiplierCount = 0;
let multiplierCost = 100;

// Cookie clicker button 
document.getElementById("cookie").addEventListener("click", function() {
  scoreNow.innerHTML = "Score: " + (parseInt(scoreNow.innerHTML.split(':')[1]) + (1 * (multiplierCount + 1)));
  
  //update line of codes to show in terminal per click
  console.log("Cookie clicked. Score: " + scoreNow.innerHTML.split(':')[1]);
});

// Increase the multiplier and update the multiplier button text when the bonusMultiplier button is clicked
multiplier.addEventListener("click", function() {
  if (parseInt(scoreNow.innerHTML.split(':')[1]) >= multiplierCost) {
    scoreNow.innerHTML = "Score: " + (parseInt(scoreNow.innerHTML.split(':')[1]) - multiplierCost);
    multiplierCount++;
    multiplierCost = multiplierCost * 2;
    multiplier.innerHTML = "Multiplier x" + (multiplierCount + 1) + " (Cost: " + multiplierCost + ")";
    console.log("Multiplier x" + (multiplierCount + 1) + " purchased. Score: " + scoreNow.innerHTML.split(':')[1]);
  } else {
    alert("You don't have enough points");
  }
});




// Multiplier button end

// Autoclick button start 

// const bonusAutoclick = document.getElementById("bonusAutoClick");

// cookieButton.addEventListener("click", countScoreVariable);

// const interval = function autoclickInterval() { 
//     setInterval(countScoreVariable,1000)};

// bonusAutoclick.addEventListener("click", interval);

let autoClicker = document.getElementById("bonusAutoClick");
let autoClickerCount = 0;
let autoClickerCost = 500;
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
    alert("You don't have enough points");
  }
});

function addAutoClick() {
  scoreNow.innerHTML = "Score: " + (parseInt(scoreNow.innerHTML.split(':')[1]) + (1 * (multiplierCount + 1)));
}


// Autoclick button end 

// Bonus boost button start 
let bonus = document.getElementById("bonusBoost");
let bonusCount = 0;
let bonusCost = 1000;
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
    alert("You don't have enough points");
  }
});

// Add bonus function
function activateBonus() {
  if (!bonusActive) {
    bonusActive = true;
    document.getElementById("cookie").removeEventListener("click", addPoints);
    document.getElementById("cookie").addEventListener("click", addPointsWithBonus);
    bonusTimer = 30;
    bonus.innerHTML = "Bonus (Time remaining: " + bonusTimer + ")";
    var countdown = setInterval(function() {
      bonusTimer--;
      bonus.innerHTML = "Bonus (Time remaining: " + bonusTimer + ")";
      if (bonusTimer <= 0) {
        clearInterval(countdown);
        document.getElementById("cookie").removeEventListener("click", addPointsWithBonus);
        document.getElementById("cookie").addEventListener("click", addPoints);
        bonus.innerHTML = "Bonus (Cost: " + bonusCost + ")";
        bonusActive = false;
        }
        }, 1000);
        } else {
        alert("Bonus is already active");
        }
        }
        
        function addPointsWithBonus() {
        scoreNow.innerHTML = "Score: " + (parseInt(scoreNow.innerHTML.split(':')[1]) + (1 * (multiplierCount + 1)) * 2);
        };

// Boost button end;

// Active/Disabled buttons start
if (value === false) {
  button.classList.add("disabled");
} else {
  button.classList.remove("disabled");
}

if (value === true) {
  button.classList.add("active");
} else {
  button.classList.remove("active");
};




