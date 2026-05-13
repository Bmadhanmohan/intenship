const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
      display.value = "";
    } 
    else if (value === "=") {
      try {
        let expression = currentInput
          .replace(/×/g, "*")
          .replace(/÷/g, "/")
          .replace(/−/g, "-");

        display.value = eval(expression);
        currentInput = display.value;
      } catch {
        display.value = "Error";
      }
    } 
    else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});