
let container = document.querySelector('.container');
let codingQuestion = document.querySelector('#question')
let answer1 = document.querySelector('#answer1');
let answer2 = document.querySelector('#answer2');
let answer3 = document.querySelector('#answer3');
let answer4 = document.querySelector('#answer4');
let beginTest = document.querySelector('button');
let countdown = document.querySelector('#countdown');
let currentQuestion = 0;
let intervalId;

init()

beginTest.addEventListener('click', function (event) {
    currentQuestion = 0
    timer = 120
    clearInterval(intervalId)
    intervalId = setInterval(function () {
            timer -= 1
            // console.log(timer)
            countdown.textContent = timer
        }, 1000)
        renderQuestion()
        codingQuestion.style.visibility = "visible"
        answer1.style.visibility = "visible"
        answer2.style.visibility = "visible"
        answer3.style.visibility = "visible"
        answer4.style.visibility = "visible"
        currentQuestion++
})
container.addEventListener('click', function (event) {
    let element = event.target;
    if (element.matches('.answers') && currentQuestion < questions.length) {
        console.log(currentQuestion)
        renderQuestion()
        currentQuestion++
    }
}
)

let questions =
    [{ question: 'Which programming languages provides the structure of a webpage?', answers: ['HTML', 'CSS', 'JavaScript', 'README'], correctAnswer: 'HTML' },
    { question: 'A class selector in CSS is determined by adding what before the value?', answers: ['#', 'Nothing', '.', '$'], correctAnswer: '.' },
    { question: 'A README file uses what kind of programming language?', answers: ['CSS', 'JavaScript', 'Markdown', 'API'], correctAnswer: 'Markdown' },
    { question: 'In order to clone a repository to your computer from gitHub, you use which command?', answers: ['git pull', 'git push', 'git commit', 'git add'], correctAnswer: 'git pull' },
    { question: 'querySelector parameters use which programming language to target elements?', answers: ['JavaScript', 'Markdown', 'CSS', 'API'], correctAnswer: 'CSS' }
    ]

function init (){
    clearInterval(intervalId)
    codingQuestion.style.visibility = "hidden"
    answer1.style.visibility = "hidden"
    answer2.style.visibility = "hidden"
    answer3.style.visibility = "hidden"
    answer4.style.visibility = "hidden"
}

function renderQuestion(event) {
    codingQuestion.textContent = questions[currentQuestion].question
    answer1.textContent = questions[currentQuestion].answers[0]
    answer2.textContent = questions[currentQuestion].answers[1]
    answer3.textContent = questions[currentQuestion].answers[2]
    answer4.textContent = questions[currentQuestion].answers[3]

    console.log(questions[currentQuestion].question)
    console.log(questions[currentQuestion].answers[0])
    console.log(questions[currentQuestion].answers[1])
    console.log(questions[currentQuestion].answers[2])
    console.log(questions[currentQuestion].answers[3])
    console.log('Correct answer: ' + questions[currentQuestion].correctAnswer)
}

function gameOver() {
    clearInterval(intervalId)
    codingQuestion.style.visibility = "hidden"
    answer1.style.visibility = "hidden"
    answer2.style.visibility = "hidden"
    answer3.style.visibility = "hidden"
    answer4.style.visibility = "hidden"
}