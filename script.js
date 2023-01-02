
//Select all Elements

let startButton = document.getElementById("start-btn")
const quizStart = document.getElementById("quiz")
const titleElement = document.getElementById("title")
const choiceA = document.getElementById("A")
const choiceB = document.getElementById("B")
const choiceC = document.getElementById("C")
const choiceD = document.getElementById("D")

//Timer

let time = 60;
const counter = document.getElementById(`timer`);
// setInterval(startTimer, 1000)
let timeInterval;
function startTimer() {
  counter.innerHTML = `Timer: ${time}`;
  timeInterval = setInterval(function () {
    time--;
    counter.innerHTML = `Timer: ${time}`;
    if (time <= 0) {
      clearInterval(timeInterval);
      time = 0;
      counter.innerHTML = `Timer: ${time}`;
      scoreElement();
    }
  }, 1000);
}

//Create Questions

let titleQuestion = document.getElementById("question")

let questions = [
  {
    question: "What does HTML stand for?",
    choiceA: "Hyperactive Markup Language",
    choiceB: "Hover Tool Markup Language",
    choiceC: "HyperText Markup Language",
    choiceD: "Hyperlink Markup Lnguage",
    correct: "C"

  },

  {
    question: "What are the boolean values?",
    choiceA: "Yes and No",
    choiceB: "True and False",
    choiceC: "Let and Const",
    choiceD: "If and Else",
    correct: "B"

  },

  {
    question: "What is an Array?",
    choiceA: "A collection of items, or data, stored in contiguous memory locations",
    choiceB: "A text editor App",
    choiceC: "An HTML element",
    choiceD: "None of the above",
    correct: "A"

  },

  {
    question: "What are the JavaScript data types?",
    choiceA: "Number, String, Boolean, Class and Array",
    choiceB: "Number, String, Boolean, Object and Body",
    choiceC: "Number, String, Boolean, Object and Undefined",
    choiceD: "Number, Class, ID, Oject and String",
    correct: "C"

  },

  {
    question: "What does SQL stand for?",
    choiceA: "Single Query Language",
    choiceB: "Statement Query Language",
    choiceC: "Stylesheet Query Language",
    choiceD: "Structured Query Language",
    correct: "D"

  }
]

//Create Variables

let lastQuestionIndex = questions.length- 1;
let runningQuestionIndex = 0;

// Render a Question

function renderQuestion(){
  let q = questions[runningQuestionIndex];

  titleQuestion.textContent= q.question
  // titleElement.innerHTML = "<h2>" + q.question + "</h2>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
 
}

// let title = document.getElementsByClassName("hide")

startButton.addEventListener("click", function startQuiz() {
  // title.classList.add('hide')
  startButton.classList.add('hide');
  titleElement.classList.add('hide');
  quizStart.classList.remove('hide');
  renderQuestion();
  startTimer();
});



//checkAnswer

function checkAnswer(){
 if (answer == questions [runningQuestionIndex].correct) {
  scoreElement++;
  correctAnswer();
 }else{
  wrongAnswer();
}
  
 if(runningQuestionIndex < lastQuestionIndex) {
  runningQuestionIndex++;
  renderQuestion();
 }else{
  clearInterval("timer");
  scoreElement();
 }
}

function correctAnswer() {
  document.getElementById(runningQuestionIndex).style.backgroundColor = "#0f0";
  
}

function wrongAnswer() {
  document.getElementById(runningQuestionIndex).style.backgroundColor = "#f00";
  
}

function scoreElement(){
  let scorePerCent = Math.round(100 * score / questions.length);
  score.innerHTML = "<li>" + scorePerCent + "</li>";
  
}


// // // questions[0].question
// // // questions[0].choiceA
// // // questions[0].choiceB
// // // questions[0].choiceC
// // // questions[0].choiceD
// // // questions[0].correct


