
//Select all Elements
const startButton = document.getElementById("start")
const startQuiz = document.getElementById("quiz")
const questionElement = document.getElementById("question")
const timerElement = getElementById("timer")
const scoreElement = getElementById("score")
// const answerButton = document.getElementById("answer-btn")
const choiceA = document.getElementById("A")
const choiceB = document.getElementById("B")
const choiceC = document.getElementById("C")
const choiceD = document.getElementById("D")

questions[0].question
questions[0].choiceA
questions[0].choiceB
questions[0].choiceC
questions[0].choiceD
questions[0].correct

startButton.addEventListener("click", startQuiz)

function startQuiz(){
  startButton.style.display = "none";
  timerElement = setInterval(100000);
  renderQuestion();
  startQuiz.style.display = "block";
}

let lastQuestionIndex = questions.length- 1;
let runningQuestionIndex = 0;

function renderQuestion(){
  let q = questions[runningQuestionIndex];
  question.innerHTML = "<h2>" + q.question + "</h2>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

function correctAnswer() {
  document.getElementById(runningQuestionIndex).style.backgroundColor = "green";
  
}

function wrongAnswer() {
  document.getElementById(runningQuestionIndex).style.backgroundColor = "red";
  
}

let score = 0;

function checkAnswer(answer){
  if (questions[runningQuestionIndex].correct == answer){
    score++;
    correctAnswer();
  }else{
    wrongAnswer();
  }
  if(runningQuestionIndex < lastQuestionIndex) {
    count = 0;
    runningQuestionIndex++;
    renderQuestion();
  }else{
    clearInterval("timer");
  }
  }
  }
  }
}

function scoreElement(){
  let scorePerCent = Math.round(100 * score / questions.length);
  score.innerHTML = "<li>" + scorePerCent + "</li>";
  
}

let questions = [
  {
    question: "What does HTML stand for?";
    choiceA: "Hyperactive Markup Language";
    choiceB: "Hover Tool Markup Language";
    choiceC: "HyperText Markup Language";
    choiceD: "Hyperlink Markup Lnguage";
    correct: "C"

  };

  {
    question: "What does CSS stand for?";
    choiceA: "Cats So Soft";
    choiceB: "Hover Tool Markup Language";
    choiceC: "HyperText Markup Language";
    choiceD: "Hyperlink Markup Lnguage";
    correct: "C"

  };

  {
    question: "What does HTML stand for?";
    choiceA: "Hyperactive Markup Language";
    choiceB: "Hover Tool Markup Language";
    choiceC: "HyperText Markup Language";
    choiceD: "Hyperlink Markup Lnguage";
    correct: "C"

  };

  {
    question: "What does HTML stand for?";
    choiceA: "Hyperactive Markup Language";
    choiceB: "Hover Tool Markup Language";
    choiceC: "HyperText Markup Language";
    choiceD: "Hyperlink Markup Lnguage";
    correct: "C"

  };

  {
    question: "What does HTML stand for?";
    choiceA: "Hyperactive Markup Language";
    choiceB: "Hover Tool Markup Language";
    choiceC: "HyperText Markup Language";
    choiceD: "Hyperlink Markup Lnguage";
    correct: "C"

  }
]


// startButton.addEventListener("click", startQuiz)

// function startQuiz() {
//     console.log("Started")
//     startQuestion.classList.add("hide")
// }

// function startQuestion() {
//     questionElement.innerText = question.question
//     question.answers.forEach(answer => {
//         const button = document.createElement("button")
//         button.innerText = answer.text
//         button.classList.add("btn")
//         if (answer.correct) {
//             button.dataset.correct = answer.correct
//          }
//          button.addEventListener("click", selectAnswer)
//          answerButton.appendChild(button)
//     });
// }


// function selectAnswer {

// }

// const question = [
//     {
//         question: "What does HTML stand for? ",
//         answers: [
//             { text: "Hypertext Markup Language ", correct: true}
//             { text: "How to apply Makeup"}
//         ]
//     }

// ]






// // Elements for buttons and containers pulled

// const questionContainerElement = document.getElementById('question-section');
// const questionElement = document.getElementById('question');
// const answerButtonsElement = document.getElementById('answer-buttons');
// const highscoresButton = document.getElementById('highscores-btn');
// const startButton = document.getElementById('start-btn');
// const nextButton = document.getElementById('next-btn');

// //Timer Variables

// const startingTime = 600;
// let time = startingTime ;
// const timerElement = document.getElementById('timer');

// / Function for the timer
// function updatecountdown(wrong,) {
//   let timeleft = setInterval(() => {
//     time--;
//     if(timeleft == 0) {
//       clearInterval(timeleft);
//       window.alert('Sorry you have ran out of time.');
//     }
//   }, 1000);
//   console.log(timeleft)

//   timerElement.innerText = "Timer: " + timeleft;
// };










































// const startButton = document.getElementById("start-btn")
// const startQuestion = document.getElementById("question-box")
// const questionElement = document.getElementById("question")
// const answerButton = document.getElementById("answer-btn")


// startButton.addEventListener("click", startQuiz)

// function startQuiz() {
//     console.log("Started")
//     startQuestion.classList.add("hide")
// }

// function startQuestion() {
//     questionElement.innerText = question.question
//     question.answers.forEach(answer => {
//         const button = document.createElement("button")
//         button.innerText = answer.text
//         button.classList.add("btn")
//         if (answer.correct) {
//             button.dataset.correct = answer.correct
//          }
//          button.addEventListener("click", selectAnswer)
//          answerButton.appendChild(button)
//     });
// }


// function selectAnswer {

// }

// const question = [
//     {
//         question: "What does HTML stand for? ",
//         answers: [
//             { text: "Hypertext Markup Language ", correct: true}
//             { text: "How to apply Makeup"}
//         ]
//     }

// ]