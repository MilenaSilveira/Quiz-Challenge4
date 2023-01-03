
//Select all Elements

let startButton = document.getElementById("start-btn")
const quizStart = document.getElementById("quiz")
const titleElement = document.getElementById("title")
const initEl = document.getElementById("init")
const scoreEl = document.getElementById("score")
// const checkAnswer = document.getElementById("answer")

const choiceA = document.getElementById("A")
const choiceB = document.getElementById("B")
const choiceC = document.getElementById("C")
const choiceD = document.getElementById("D")

//Timer
let score = 0;
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
    correct: "HyperText Markup Language",

    
  },

  {
    question: "What are the boolean values?",

    
    choiceA: "Yes and No",
    choiceB: "True and False",
    choiceC: "Let and Const",
    choiceD: "If and Else",
    correct: "True and False",
    

  },

  {
    question: "What is an Array?",

    
    choiceA: "A collection of items, or data, stored in contiguous memory locations",
    choiceB: "A collection of variables called into a function",
    choiceC: "A collection of elements stored in contiguous memory locations",
    choiceD: "A collection of classes and ID`s stored in a CSS file",
    correct: "A collection of items, or data, stored in contiguous memory locations",
    

  },

  {
    question: "What are the JavaScript data types?",

    
    choiceA: "Number, String, Boolean, Class and Array",
    choiceB: "Number, String, Boolean, Object and Body",
    choiceC: "Number, String, Boolean, Object and Undefined",
    choiceD: "Number, Class, ID, Oject and String",
    correct: "Number, String, Boolean, Object and Undefined",
    

  },

  {
    question: "What does SQL stand for?",

    
    choiceA: "Single Query Language",
    choiceB: "Statement Query Language",
    choiceC: "Stylesheet Query Language",
    choiceD: "Structured Query Language",
    correct: "Structured Query Language",
    

  }
]

//Create Variables

// let lastQuestionIndex = questions.length- 1;
let runningQuestionIndex = 0;
const btnGrid = document.getElementById("btn-grid")
let q = questions[runningQuestionIndex];
// Render a Question

function renderQuestion(){
  if (runningQuestionIndex === questions.length){
    endQuiz()
  }
  

  titleQuestion.textContent= questions[runningQuestionIndex].question
  choiceA.innerHTML = questions[runningQuestionIndex].choiceA;
  choiceB.innerHTML = questions[runningQuestionIndex].choiceB;
  choiceC.innerHTML = questions[runningQuestionIndex].choiceC;
  choiceD.innerHTML = questions[runningQuestionIndex].choiceD;
  
  choiceA.setAttribute("value", questions[runningQuestionIndex].choiceA)
  choiceB.setAttribute("value", questions[runningQuestionIndex].choiceB)
  choiceC.setAttribute("value", questions[runningQuestionIndex].choiceC)
  choiceD.setAttribute("value", questions[runningQuestionIndex].choiceD)
}

startButton.addEventListener("click", function startQuiz() {
 startButton.classList.add('hide');
  titleElement.classList.add('hide');
  quizStart.classList.remove('hide');
  renderQuestion();
  startTimer();
});

//checkAnswer

function checkAnswer(answer){
  console.log(answer, "user answer", q.correct, "correct answer")
 if ( answer === questions[runningQuestionIndex].correct) {
  console.log(answer === q.correct)
  score = score + 5
  // scoreEl.innerHTML = "score:" + score
  // scoreElement++;
  runningQuestionIndex++
  // correctAnswer();
  renderQuestion();
 }else{
  runningQuestionIndex++
  // wrongAnswer();
  renderQuestion();
}
  
//  if(runningQuestionIndex < lastQuestionIndex) {
//   runningQuestionIndex++;
//   renderQuestion();
//  }else{
//   clearInterval("timer");
//   scoreElement();
//  }
}

function endQuiz(){
  quizStart.classList.add('hide');
  initEl.classList.remove("hide")
  clearInterval(timeInterval)
  scoreEl.innerHTML = "score:" + score
}

btnGrid.addEventListener("click", () => {
  const answer = this.event.target.value
  // console.log (answer)
  checkAnswer(answer)
})

0

// function scoreElement(){
//   let scorePerCent = Math.round(100 * score / questions.length);
//   scoreEl.innerHTML = "<li>" + scorePerCent + "</li>";
  
// }


