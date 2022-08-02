const calculator = document.querySelector(".calculator");
const output = document.querySelector("#output");

calculator.addEventListener("click", (event) => {
  if (!event.target.classList.contains("calc-btn")) {
    return;
  }
  const item = event.target.innerText;

  function factorial(i) {
    return i != 1 ? i * factorial(i - 1) : 1;
  }

  switch (item) {
    case "AC":
      output.innerText = "";
      output.innerText = 0;
      break;

    case "C":
      if (output.innerText.length - 1 == 0) {
        output.innerText = 0;
      } else {
        output.innerText = output.innerText.substr(
          0,
          output.innerText.length - 1
        );
      }
      break;

    case "π":
      output.innerText += Math.PI.toFixed(5);
      break;

    case "e":
      output.innerText += Math.E.toFixed(5);
      break;

    case "sin":
      output.innerText = Math.sin(output.innerText).toFixed(5);
      break;

    case "cos":
      output.innerText = Math.cos(output.innerText).toFixed(5);
      break;

    case "tan":
      output.innerText = Math.tan(output.innerText).toFixed(5);
      break;

    case "ctg":
      output.innerText = (1 / Math.tan(output.innerText)).toFixed(5);
      break;

    case "=":
      if (output.innerText.length == 0) {
        output.innerText = 0;
      } else {
        output.innerText = eval(output.innerText);
      }
      break;

    case "log":
      output.innerText = Math.log(output.innerText).toFixed(5);
      break;

    case "±":
      output.innerText = output.innerText * -1;
      break;

    case "x!":
      output.innerText = factorial(output.innerText);
      break;

    case "%":
      output.innerText = output.innerText / 100;
      break;

    case "√":
      if (output.innerText < 0) {
        output.innerText = "Error";
      } else if ((output.innerText = 0)) {
        output.innerText = 0;
      } else {
        output.innerText = Math.sqrt(output.innerText).toFixed(5);
      }
      break;

    case "x²":
      output.innerText = Math.pow(output.innerText, 2);
      break;

    default:
      if (output.innerText == 0) {
        output.innerText = "";
        output.innerText += item;
      } else output.innerText += item;
  }
});
