let initials = document.querySelector("#initials");
let lastScore = document.querySelector('#last-score');
let lastScoreValue = localStorage.getItem('score')
let savedInitials = document.querySelector("#saved-initials");
let savedScore = document.querySelector("#saved-score");
let saveButton = document.querySelector("#save");
let scoreList = document.querySelector("#score-list");
let initialList = document.querySelector('#initial-list');
let scores = JSON.parse(localStorage.getItem('scores')) || [];
let lastResult;

init();

saveButton.addEventListener('click', function (event) {
    if (initials.value) {
        event.preventDefault();
    saveLastResult();
        renderLastResult();
        initials.value = '';
        lastScore.textContent = "Your Score: ";
        window.location.href = './highscores2.html'
    }
});

function saveLastResult() {
    let results = {
        initials: initials.value,
        lastScore: lastScoreValue
    };    

    scores.push(results)
    localStorage.setItem('scores', JSON.stringify(scores));
    
}    

function renderLastResult() {
    lastResult = JSON.parse(localStorage.getItem('results'));
    addScore()
}


function init() {
    lastScore.textContent = "Your Score: " + lastScoreValue;
    renderLastResult();
}

function addScore() {
    scoreList.textContent = '';
    for (let i = 0; i < scores.length; i++) {
        let score = scores[i];
    
        let li = document.createElement("li");
        li.textContent = `${score.initials}: ${score.lastScore}`;
        li.classList.add('popout')
        li.setAttribute("data-index", i);
        scoreList.appendChild(li);
        
    }
}