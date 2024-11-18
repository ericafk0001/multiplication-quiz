let timeLimit = 0;
let timer = 0;
let currentQuestion = 0;
let score = 0;

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

function startQuiz() {
  timeLimit = parseInt(document.getElementById("time-limit").value);
  document.getElementById("settings").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("end-screen").classList.remove("hidden");
  score = 0;
  loadQuestion();
  if (timeLimit > 0) {
    startTimer(timeLimit);
  }
}

function loadQuestion() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const correctAnswer = num1 * num2;
  currentQuestion = { num1, num2, correctAnswer };

  document.getElementById("question").innerText = `${num1} x ${num2}`;

  //random questions
  const options = [
    correctAnswer,
    correctAnswer + 1,
    correctAnswer - 1,
    correctAnswer + 2,
  ];
  options.sort(() => Math.random() - 0.5);

  for (let i = 0; i < 4; i++) {
    document.getElementById(`option${i + 1}`).innerText = options[i];
  }
}

function checkAnswer(selected) {
  const selectedAnswer = document.getElementById(`option${selected}.innerText`);
  if (parseInt(selectedAnswer) === currentQuestion.correctAnswer) {
    score++;
  }
  loadQuestion();
}

function endQuiz() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("end-screen").classList.add("hidden");
  document.getElementById("score").classList.add("hidden");
}

function restartQuiz() {
  document.getElementById("settings").classList.add("hidden");
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("endScreen").classList.add("hidden");
}
