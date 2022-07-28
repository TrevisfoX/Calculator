const calculator = document.querySelector(".calculator");
const output = document.querySelector("#output");

calculator.addEventListener("click", (event) => {
  if (!event.target.classList.contains("calculator-button")) {
    return;
  }
  const item = event.target.innerText;

  switch (item) {
    case "AC":
      output.innerText = "";
      break;

    // case "^":
    //   output.innerText = Math.pow(output.innerText, 2);
    //   break;

    // case "^-1":
    //   output.innerText = Math.pow(output.innerText, -1);
    //   break;

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
      output.innerText = Math.ctg(output.innerText).toFixed(5);
      break;

    case "=":
      output.innerText = eval(output.innerText);
      break;

    default:
      output.innerText += item;
  }
});
