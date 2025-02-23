const display = document.getElementById("display");
function ondisplay(input) {
display.value += input;
}
function cleardisplay() {
display.value = "";
}
function calculate() {
let expr = display.value;
let result = eval(expr);
display.value = result;
let history = JSON.parse(localStorage.getItem("calcHistory") || "[]");
history.push(expr  + result);
localStorage.setItem("calcHistory", JSON.stringify(history));
}

function popup() {
let history = JSON.parse(localStorage.getItem("calcHistory") || "[]");
alert(history.length ? history.join("\n") : "no history available");
}