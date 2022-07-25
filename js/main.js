let input = document.querySelector(".input");

function enter(el) {
  if (input.textContent === "0") {
    input.textContent = "";
    input.textContent += el;
  } else {
    input.textContent += el;
  }
}

function del() {
  input.textContent = "0";
}

function remove() {
  let numRow = input.textContent;
  input.textContent = numRow.substring(0, numRow.length - 1);

  if (input.textContent == 0) {
    input.textContent = "0";
  }
}

function output() {
  let numRow = input.textContent;

  if (input.textContent.includes("^")) {
    let tmp = input.textContent.split("^");
    let num = eval();
    let pow = +tmp[1];
    input.textContent = Math.pow(num, pow);
    exponent = "";
    return;
  }
  if (numRow) {
    input.textContent = eval(numRow);
  }
}

function sup(el) {
  if (el == "sqr") input.textContent = Math.pow(eval(input.textContent), 2);
  if (el == "^-1") input.textContent = Math.pow(eval(input.textContent), -1);
  if (el == "sqrt") input.textContent = Math.sqrt(eval(input.textContent));
}
