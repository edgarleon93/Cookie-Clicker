import "./index.css";

// Clicker button & score start 

let cookieButton = document.getElementById("cookie");

let score = 0;

const countScoreVariable = function countScore() {

    score += 1;

    let scoreVariable = document.getElementById("scoreShow");
    
    scoreShow.innerHTML = score;  

    console.log(score)

};

// Clicker button & score end

// Multiplier button start

let scoreNow = document.getElementById("scoreShow");
let multiplier = document.getElementById("bonusMultiplier");
let multiplierCount = 0;
let multiplierCost = 100;

document.getElementById("cookie").addEventListener("click", function() {
  scoreNow.innerHTML = "Score: " + (parseInt(scoreNow.innerHTML.split(':')[1]) + (1 * (multiplierCount + 1)));
});

multiplier.addEventListener("click", function() {
  if (parseInt(scoreNow.innerHTML.split(':')[1]) >= multiplierCost) {
    scoreNow.innerHTML = "Score: " + (parseInt(scoreNow.innerHTML.split(':')[1]) - multiplierCost);
    multiplierCount++;
    multiplierCost = multiplierCost * 2;
    multiplier.innerHTML = "Multiplier x" + (multiplierCount + 1) + " (Cost: " + multiplierCost + ")";
  } else {
    alert("You don't have enough points");
  }
});




// Multiplier button end

// Autoclick button start 

const bonusAutoclick = document.getElementById("bonusAutoClick");

cookieButton.addEventListener("click", countScoreVariable);

const interval = function autoclickInterval() { 
    setInterval(countScoreVariable,1000)};

bonusAutoclick.addEventListener("click", interval);

// Autoclick button end 

// Bonus boost button start 
let bonusCost = 250;
let bonusTimer = 0;
let bonusInterval;
let boost = document.getElementById("bonusBoost");

boost.addEventListener("click", function() {
    if (scoreNow >= bonusCost) {
      scoreNow -= bonusCost;
      bonusCost = bonusCost * 2;
      boost.innerHTML = "Bonus (Cost: " + bonusCost + ")";
      scoreNow.innerHTML = "Score: " + scoreNow;
      bonusTimer = 30;
      clearInterval(bonusInterval);
      bonusInterval = setInterval(function() {
        bonusTimer--;
        document.getElementById("bonus-timer").innerHTML = "Bonus time remaining: " + bonusTimer;
        if (bonusTimer === 0) {
          clearInterval(bonusInterval);
        }
      }, 1000);
    }
// Boost button end
});





