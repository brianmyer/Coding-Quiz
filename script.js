// timer = 120

// let timerId = setInterval(function(){
//     timer -= 1
//     console.log(timer)
// }, 1000)
let container = document.querySelector('.container');
let answer1 = document.querySelector('#answer1');
let answer2 = document.querySelector('#answer2');
let answer3 = document.querySelector('#answer3');
let answer4 = document.querySelector('#answer4');

let currentQuestion = 0;

container.addEventListener('click', function(event) {
    let element = event.target;
    if (element.matches('.answers')) {
        console.log('clicked')
        renderQuestion()
        currentQuestion++
    }
})

let questions = 
[{question: 'Which programming languages provides the structure of a webpage?', answers: ['HTML', 'CSS', 'JavaScript', 'README'], correctAnswer: 'HTML'},
{question: 'A class selector in CSS is determined by adding what before the value?', answers: ['#', 'Nothing', '.', '$'], correctAnswer: '.'},
{question: 'A README file uses what kind of programming language?', answers: ['CSS', 'JavaScript', 'Markdown', 'API'], correctAnswer: 'Markdown'},
{question: 'In order to clone a repository to your computer from gitHub, you use which command?', answers: ['git pull', 'git push', 'git commit', 'git add'], correctAnswer: 'git pull'},
{question: 'querySelector parameters use which programming language to target elements?', answers: ['JavaScript', 'Markdown','CSS',  'API'], correctAnswer: 'CSS'}
]

// console.log(questions[0].question)
// console.log(questions[0].answers[0])
// console.log(questions[0].answers[1])
// console.log(questions[0].answers[2])
// console.log(questions[0].answers[3])
// console.log(questions[0].correctAnswer)

function renderQuestion(event) {
    answer1.textContent = questions[currentQuestion].answers[0]
    answer2.textContent = questions[currentQuestion].answers[1]
    answer3.textContent = questions[currentQuestion].answers[2]
    answer4.textContent = questions[currentQuestion].answers[3]

    console.log(questions[currentQuestion].question)
    console.log(questions[currentQuestion].answers[0])
    console.log(questions[currentQuestion].answers[1])
    console.log(questions[currentQuestion].answers[2])
    console.log(questions[currentQuestion].answers[3])
    console.log('Correct answer: ' +questions[currentQuestion].correctAnswer)
}
