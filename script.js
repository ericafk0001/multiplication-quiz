let timeLimit = 0;
let timer = 0;
let currentQuestion = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", function () {
  function startTimer(seconds) {
    let timeRemaining = seconds;
    document.getElementById("timer").innerText = timeRemaining;

    timer = setInterval(function () {
      timeRemaining--;
      document.getElementById("timer").innerText = timeRemaining;
      if (timeRemaining <= 0) {
        clearInterval(timer);
        endQuiz();
      }
    }, 1000);
  }

  function loadQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const correctAnswer = num1 * num2;
    currentQuestion = { num1, num2, correctAnswer };

    document.getElementById("question").innerText = `${num1} x ${num2}`;

    // random options for answers
    const options = [
      correctAnswer,
      correctAnswer + 1,
      correctAnswer - 1,
      correctAnswer + 2,
    ];
    options.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 4; i++) {
      document.getElementById(`answer${i + 1}`).innerText = options[i];
    }
  }

  function checkAnswer(selected) {
    const selectedAnswer = document.getElementById(
      `answer${selected}`
    ).innerText;
    if (parseInt(selectedAnswer) === currentQuestion.correctAnswer) {
      score++;
    }
    loadQuestion();
  }

  function startQuiz() {
    timeLimit = parseInt(document.getElementById("time-limit").value);
    document.getElementById("time-limit").classList.add("disabled");
    document.getElementById("start-btn").classList.add("disabled");
    document.getElementById("answer1").classList.remove("disabled");
    document.getElementById("answer2").classList.remove("disabled");
    document.getElementById("answer3").classList.remove("disabled");
    document.getElementById("answer4").classList.remove("disabled");
    score = 0;
    loadQuestion();
    if (timeLimit > 0) {
      startTimer(timeLimit);
    }
  }

  function endQuiz() {
    document.getElementById("end-screen").classList.remove("hidden");
    document.getElementById("score").innerText = score;
  }

  function restartQuiz() {
    score = 0;
    document.getElementById("score").classList.add("hidden");
    alert("skibidi toilet");
  }

  document
    .getElementById("restart-quiz")
    .addEventListener("click", function () {
      restartQuiz();
    });

  //for loop to loop through answers
  for (let i = 1; i <= 4; i++) {
    document
      .getElementById(`answer${i}`)
      .addEventListener("click", function () {
        checkAnswer(i);
      });
  }
});
