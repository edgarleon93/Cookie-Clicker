import "./index.css";



const cookieButton = document.getElementById("cookie");
const bonusAutoclick = document.getElementById("bonusAutoClick");


let score = 0;

const countScoreVariable = function countScore() {

    score += 1;

    let scoreVariable = document.getElementById("scoreShow");
    
    scoreShow.innerHTML = score;  

    console.log(score)

};

cookieButton.addEventListener("click", countScoreVariable);

const interval = function autoclickInterval() { 
    setInterval(countScoreVariable,1000)};

bonusAutoclick.addEventListener("click", interval);

