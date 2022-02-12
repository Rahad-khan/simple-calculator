//Value id variable
const inputValue = document.getElementById("input-value");

const total = document.getElementById("total");
const valueEqual = document.getElementById("equal");
const valueDel = document.getElementById("delete");

function input (para) {
    const inputValueText = inputValue.innerText;
    inputValue.innerText = inputValueText + para.innerText;
}
// Functionality
document.getElementById("all-clear").addEventListener("click", function () {
  inputValue.innerText = "";
  total.innerText = "";
});
const buttons = document.getElementsByClassName('button');
for (const button of buttons){
  button.addEventListener("click", function () {
    input(button);
  })
};
valueDel.addEventListener("click", function () {
  const inputValueText = inputValue.innerText;
var lastCharOfHello=inputValueText.slice(0, -1);
inputValue.innerText = lastCharOfHello;
});
valueEqual.addEventListener("click", function () {
  total.innerText = eval(inputValue.innerText);
});
