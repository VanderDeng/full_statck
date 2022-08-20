//calculator 对象
var calculator = {
	displayValue: "0",
	tempValue: "0",
	flag: "", // 标记当前操作
	prevOpt: "", //标记前一步操作
};

// 10次历史记录
var historyList = [];
var historyPoint = 0;

// 绑定按键
function bindKeyPress() {
	var keys = document.querySelector(".calculator-keys");
	keys.addEventListener("click", function (event) {
		var target = event.target;
		var value = target.value;
		handleDigit(value);
	});
}

// 主要操作
function handleDigit(value) {
	switch (value) {
		case "clear":
			this.clear();
			break;
		case "=":
			if (this.calculator.prevOpt == "=") {
				break;
			} else {
				this.calculator.prevOpt = "=";
				this.equal();
				if (this.historyList.length < 10) {
					this.historyList.push(this.calculator.displayValue);
				} else {
					this.historyList.shift();
					this.historyList.push(this.calculator.displayValue);
				}
				break;
			}
		case "+":
			this.equal();
			this.addMark("+");
			break;
		case "-":
			this.equal();
			this.addMark("-");
			break;
		case "*":
			this.equal();
			this.addMark("*");
			break;
		case "/":
			this.equal();
			this.addMark("/");
			break;
		case "clock":
			if (this.calculator.prevOpt == "clock") {
				if (this.historyPoint >= 1) {
					this.historyPoint -= this.historyPoint;
					this.calculator.displayValue =
						this.historyList[this.historyPoint];
				} else {
					this.calculator.displayValue = "0";
				}
			} else {
				this.historyPoint -= this.historyList.length;
				this.calculator.displayValue =
					this.historyList[this.historyPoint];
				this.calculator.prevOpt = "clock";
			}
			this.updateDisplay();
			break;
		default:
			this.tempCalculate(value);
	}
}

// 清除
function clear() {
	this.calculator = {
		displayValue: "0",
		tempValue: "0",
		flag: "",
		prevOpt: "",
	};
	this.updateDisplay();
}

function clearTemp() {
	this.calculator.tempValue = "0";
	this.updateDisplay();
	this.calculator.flag = "";
}

// addMark
function addMark(mark) {
	this.calculator.tempValue = this.calculator.displayValue;
	this.calculator.flag = mark;
	this.calculator.prevOpt = mark;
}

// 等于运算
function equal() {
	switch (this.calculator.flag) {
		case "+":
			this.calculator.displayValue =
				parseFloat(this.calculator.tempValue) +
				parseFloat(this.calculator.displayValue);
			this.clearTemp();
			break;
		case "-":
			this.calculator.displayValue =
				parseFloat(this.calculator.tempValue) -
				parseFloat(this.calculator.displayValue);
			this.clearTemp();
			break;
		case "*":
			this.calculator.displayValue =
				parseFloat(this.calculator.tempValue) *
				parseFloat(this.calculator.displayValue);
			this.clearTemp();
			break;
		case "/":
			this.calculator.displayValue =
				parseFloat(this.calculator.tempValue) /
				parseFloat(this.calculator.displayValue);
			this.clearTemp();
			break;
	}
}

// 临时显示运算
function tempCalculate(value) {
	if (this.calculator.prevOpt) {
		this.calculator.displayValue = value;
		this.calculator.prevOpt = "";
	} else {
		var displayValue = this.calculator.displayValue;
		if (displayValue === "0" && value != ".") {
			this.calculator.displayValue = value;
		} else {
			this.calculator.displayValue = displayValue + value;
		}
	}
	this.updateDisplay();
}

// 更新面板数据
function updateDisplay(value) {
	var screen = document.querySelector(".calculator-screen");
	value
		? (screen.value = value)
		: (screen.value = this.calculator.displayValue);
}

this.bindKeyPress();
