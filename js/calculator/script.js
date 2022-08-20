//
var calculator = {
	displayValue: "0",
	tempValue: "0",
};

function bindKeyPress() {
	var keys = document.querySelector(".calculator-keys");
	keys.addEventListener("click", function (event) {
		console.log(event.target.value);
		var target = event.target;
		var value = target.value;
		handleDigit(value);
	});
}

function handleDigit(value) {
	switch (value) {
		case "clear":
			calculator.displayValue = "0";
			updateDisplay();
			break;
		default:
			var displayValue = calculator.displayValue;
			if (displayValue === "0") {
				calculator.displayValue = value;
			} else {
				calculator.displayValue = displayValue + value;
			}
			updateDisplay();
	}
}

function updateDisplay(value) {
	console.log(value);
	var screen = document.querySelector(".calculator-screen");
	console.dir(screen);
	value ? (screen.value = value) : (screen.value = calculator.displayValue);
	// screen.setAttribute("value", value);
}
bindKeyPress();
