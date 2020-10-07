const startButton = document.getElementById('start-btn') 
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.addClass('hide')
    shuffledQuestions = questions.sort} 

    var highScore = document.querySelector('#highScore');
    var backBtn = document.querySelector('#backBtn');
    var clearBtn = document.querySelector('#clearScores');
    var scoreList = document.getElementById('scoreList');
    var intialText = document.getElementById('intialText');
    var timerE1 = document.getElementById('timer')
    var submitScores
    var questionsDiv = document.querySelector('#questionsDiv');

const questions = [     
    {
        question: 'What is the correct syntax for an external script called "script.js"',
        A: '<script href = "script.js">',
        B: '<script src = "script.js">',
        C: '<script var ="script.js">',  
        answer: "B"
    },
    {
        question: 'Which of the following array functions adds or removes elements from an array?',
        A: 'Shift()',
        B: 'Splice()',
        C: 'Sort()',
        correct: "B"
    },
    {
        question: 'What are variables called that are part of an object?',
        A: 'Function',
        B: 'Method',
        C: 'Property',
        correct: "C"
    },
    {
        question: 'Which tool is useful for debugging in Javascript?',
        A: 'console.log',
        B: 'Alert()',
        C: 'Array',
        correct: "A"
    },
    {
        question: 'What is the condition enclosed in an If/Else statement?',
        A: 'curly brackets',
        B: 'parenthesis',
        C: 'square brackets',
        correct: "B"
    }
];

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
   } 

var score = 0;

var currentTime = document.querySelector('#currentTime');
var timer = document.querySelector('#startTime');

var wrapper = document.querySelector('#wrapper');

//populate questions div 
//use first question and first possible answers
//set up click event handler .onClick (line 40)
//move onto next question
//start timer when start button pushed
//questions answered same till last
//last 

startButton.onClick="startGame()"

var startTimer = document.getElementById('startTimer');
var secondsLeft = 76;

questionsDiv.innerHTML="";

function startTimer() {
    setTimer();
};

function setTimer() {
    var countdown = setInterval(function () {
        secondsLeft--;
        timerE1.textContent = "Time:" + secondsLeft;

        if secondsLeft === 0 || questionNumber === questions.length) {
            clearInterval(countdown);
            setTimeout(displayScore)
        }
} 


    if (answer === event.target.textContent) {   
     pEl.innerHTML = "Correct!";
     setTimeout(hideFeedback,1000);
        showFeedback();   
    } else {
        pEl.innerHTML = "Wrong!";
        setTimeout(hideFeedback,1000);
        secondsLeft = secondsLeft - 10;
        showFeedback();

        var newScore
        name=userNameInput;
        score=userScoreInput

        //punctuation errors

    var totalScores = JSON.parse(localStorage.getItem("allScores");
    totalScores = JSON.parse(allScores);

    if (totalScores !== null) {

    for (var i = 0; i < totalScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = totalScores[i].initials + " " + totalScores[i].score;
        highScore.appendChild(createLi);

        submitBtn.onclick = saveHighScore;

        //add user initials

        //add clear button
    clear.addEventListener("click", function() {
        localStorage.clear();
        location.reload();
    });
