let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add() {
  document.getElementById("answer-el").textContent = "Answer:";
  let ans = num1 + num2;
  document.getElementById("answer-el").textContent += ans;
}
function sub() {
  document.getElementById("answer-el").textContent = "Answer:";
  let ans = num1 - num2;
  document.getElementById("answer-el").textContent += ans;
}
function mul() {
  document.getElementById("answer-el").textContent = "Answer:";
  let ans = num1 * num2;
  document.getElementById("answer-el").textContent += ans;
}
function div() {
  document.getElementById("answer-el").textContent = "Answer:";
  let ans = num1 / num2;
  document.getElementById("answer-el").textContent += ans;
}
