import "./index.css";

// Multiplier button start

let score = document.getElementById("scoreShow");
let multiplier = document.getElementById("bonusMultiplier");
let multiplierCount = 0;
let multiplierCost = 100;

document.getElementById("cookie").addEventListener("click", function() {
  score.innerHTML = "Score: " + (parseInt(score.innerHTML.split(':')[1]) + (1 * (multiplierCount + 1)));
});

multiplier.addEventListener("click", function() {
  if (parseInt(score.innerHTML.split(':')[1]) >= multiplierCost) {
    score.innerHTML = "Score: " + (parseInt(score.innerHTML.split(':')[1]) - multiplierCost);
    multiplierCount++;
    multiplierCost = multiplierCost * 2;
    multiplier.innerHTML = "Multiplier x" + (multiplierCount + 1) + " (Cost: " + multiplierCost + ")";
  } else {
    alert("You don't have enough points");
  }
});


// Multiplier button end

// Bonus boost button start 
let bonusCost = 250;
let bonusTimer = 0;
let bonusInterval;
let boost = document.getElementById("bonusBoost");

boost.addEventListener("click", function() {
    if (score >= bonusCost) {
      score -= bonusCost;
      bonusCost = bonusCost * 2;
      document.getElementById("bonus").innerHTML = "Bonus (Cost: " + bonusCost + ")";
      document.getElementById("score").innerHTML = "Score: " + score;
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

});

