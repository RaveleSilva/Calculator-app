const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.keys button');
const del = document.querySelector('#del');
const reset = document.querySelector('#reset');
const result = document.querySelector('#result');
const operators = ['+', '-', '/', 'x', '.'];

function showNum(num){
  const currentText = display.innerHTML;
  const lastChar = currentText.charAt(currentText.length - 1);

  if (currentText.length < 1 && operators.includes(num)) {

  } else if (operators.includes(lastChar) && operators.includes(num)) {

  } else if (currentText.slice(-2) == '/0') {
    display.innerHTML = Infinity;

  } else {
    display.innerHTML += num;
  }
}

function delNum(str) {
  if (str.length > 0) {
    display.innerHTML = str.slice(0, -1);
  }
}

function showResult() {
  const formatedString = display.innerHTML.replace(/x/g, '*');
  display.innerHTML = eval(formatedString);
}

function clearDisplay() {
  display.innerHTML = '';
}

buttons.forEach(button =>{
  const num = button.innerHTML;

  if (isNaN(num) == false || operators.includes(button.innerHTML)){
    button.addEventListener('click', () => showNum(num));
  }
});

del.addEventListener('click', () => delNum(display.innerHTML));
reset.addEventListener('click', () => clearDisplay());
result.addEventListener('click', () => showResult());
