var startButton


function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

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

  // Click a start button addeventlistener to hide the button/start the timer.. define the timer in a function elsewhere along with the show question function
  // 