let initials = document.querySelector("#initials");
let lastScore = document.querySelector('#last-score');
let lastScoreValue = localStorage.getItem('score')
let savedInitials = document.querySelector("#saved-initials");
let savedScore = document.querySelector("#saved-score");
let saveButton = document.querySelector("#save");

init();

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
}

saveButton.addEventListener('click', function (event) {
    event.preventDefault();
        saveLastResult();
        renderLastResult();
        initials.value = '';
        lastScore.textContent = "Your Score: ";
});

function init() {
    lastScore.textContent = "Your Score: " + lastScoreValue;

    renderLastResult();
}

//Activity 26 to create ul and appendChild