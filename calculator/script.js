//
var calculator = {
    displayValue: "0"
  };
  
  function bindKeyPress() {
    var keys = document.querySelector(".calculator-keys");
    keys.addEventListener("click", function(event) {
      // console.log(event);
      var target = event.target;
      var value = target.value;
      handleDigit(value);
    });
  }
  
  function handleDigit(value) {
    var displayValue = calculator.displayValue;
    if (displayValue === "0") {
      calculator.displayValue = value;
    } else {
      calculator.displayValue = displayValue + value;
    }
  
    updateDisplay();
  }
  
  function updateDisplay() {
    var screen = document.querySelector(".calculator-screen");
    console.dir(screen);
    screen.value = calculator.displayValue;
    // screen.setAttribute("value", value);
  }
  
  bindKeyPress();