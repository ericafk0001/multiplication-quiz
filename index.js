// make x and y numbers
const x = Math.ceil(Math.random() * 12);
const y = Math.ceil(Math.random() * 12);

const question = document.getElementById("question");
const input = document.getElementById("input");
const form = document.getElementById("form");
const scoreNum = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}
scoreNum.innerText = `score: ${score}`;
question.innerText = `What is ${x} multiplied by ${y}?`;
//answer
const answer = x * y;
//user answer
form.addEventListener("submit", () => {
  const userAns = +input.value;
  if (userAns === answer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
