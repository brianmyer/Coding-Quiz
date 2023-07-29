let initials = document.querySelector("#initials");
let lastScore = document.querySelector('#last-score');
let lastScoreValue = localStorage.getItem('score')
let savedInitials = document.querySelector("#saved-initials");
let savedScore = document.querySelector("#saved-score");
let saveButton = document.querySelector("#save");
let scoreList = document.querySelector("#score-list");
let initialList = document.querySelector('#initial-list');
let scores = [];
let inits = [];

init();

saveButton.addEventListener('click', function (event) {
    event.preventDefault();
        saveLastResult();
        renderLastResult();
        initials.value = '';
        lastScore.textContent = "Your Score: ";
});

function saveLastResult() {
    let results = {
        initials: initials.value,
        lastScore: lastScoreValue
    };    

    localStorage.setItem('results', JSON.stringify(results));
    
}    

function renderLastResult() {
    let lastResult = JSON.parse(localStorage.getItem('results'));
    
    if (lastResult !== null) {
        savedInitials.textContent = lastResult.initials;
        savedScore.textContent = lastResult.lastScore;
    }
    addInitials()
    addScore()
}


function init() {
    lastScore.textContent = "Your Score: " + lastScoreValue;

    renderLastResult();
}

//this does not work
function addScore() {
    scoreList.textContent = '';
    for (let i = 0; i < scores.length; i++) {
        let score = scores[i];
    
        let li = document.createElement("li");
        li.textContent = score;
        li.setAttribute("data-index", i);
    
        scoreList.appendChild(li);
      }
}

//this does not work
function addInitials() {
    initialList.textContent = '';
    for (let i = 0; i < inits.length; i++) {
        let init = inits[i];
    
        let li = document.createElement("li");
        li.textContent = init;
        li.setAttribute("data-index", i);
    
        initialList.appendChild(li);
      }
}

//Activity 26 to create ul and appendChild