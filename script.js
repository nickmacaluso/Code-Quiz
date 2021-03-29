var quizArea = document.getElementById("quiz")

var quizObj = {
  secondsDown: 60,
  timeIntervalUp: null,
  isSubmitted: false,
  isTimeLeft: true,
  myQuestionsIndex: 0
}
const myQuestions = [
  {
    question: "What is a boolean value?",
    answers: {
      a: "True/False",
      b: "A string value",
      c: "A number value",
      d: "All of the above",
    },
    correctAnswer: "True/False"
  },
  {
    question: "What is a string?",
    answers: {
      a: "Words",
      b: "Numeric values",
      c: "Blocks",
      d: "True or false values",
    },
    correctAnswer: "Words"
  },
  {
    question: "Commonly used data types do not include which of the following?",
    answers: {
      a: "Booleans",
      b: "Blocks",
      c: "Strings",
      d: "Numbers"
    },
    correctAnswer: "Blocks"
  },
  {
      question: "How old am I?",
      answers: {
          a: "19",
          b: "31",
          c: "22",
          d: "14"
      },
      correctAnswer: "19"
  },

];
function hideButton(id) {
document.getElementById(id).style.visibility="hidden";
}

function startTimer(){ 
  hideButton("startButton")
  quizObj.timeIntervalUp = setInterval(function(){countTimer()}, 1000);
  driver()}

function countTimer() {
  document.getElementById("countDown").innerHTML = "Time Remaining: " + quizObj.secondsDown;
  quizObj.secondsDown--;

    if (quizObj.secondsDown == 0) {
      clearInterval(timeIntervalUp);
      endTimer();
      reload(); }
    }
    
function endTimer() {   
  document.getElementById("countDown").innerHTML = "Time ran out";}

function createQuestion(index){
  q= document.createElement("p")
  q.textContent= myQuestions[index].question
  quizArea.appendChild(q)
  }

function driver(){
  while(quizObj.isSubmitted===false && quizObj.isTimeLeft===true){
    createQuestion(quizObj.myQuestionsIndex)
    break;
  }
} 



// on submit, show results
  // Click a start button addeventlistener to hide the button/start the timer.. define the timer in a function elsewhere along with the show question function
  // 

  // GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
