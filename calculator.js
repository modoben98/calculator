let firstOperand = 0;
let secondOperand = 0;
let result = 0;
let currentOperation = "";

const screen = document.querySelector(".screen");
const digitButtons = document.querySelectorAll(".digits button");
const allClearButton = document.querySelector("#ac");
const addButton = document.querySelector("#add");
const substractButton = document.querySelector("#substract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const equalButton = document.querySelector("#equal");

digitButtons.forEach( (digitButton) => {
	digitButton.addEventListener("click", () => {
		screen.textContent += digitButton.textContent;
	})
});


allClearButton.addEventListener("click", () => {
	screen.textContent = "";
	currentOperation = "";
	firstOperand = 0;
	secondOperand = 0;
	result = 0;
});

addButton.addEventListener("click", () => {
	currentOperation = "addition";

	if (screen.textContent == "") {
		result = firstOperand;
		return ;
	}
	firstOperand = Number(screen.textContent);
	result = firstOperand;
	screen.textContent = "";
});

substractButton.addEventListener("click", () => {
	currentOperation = "substraction";

	if (screen.textContent == "") {
		result = firstOperand;
		return ;
	}
	
	firstOperand = Number(screen.textContent);
	result = firstOperand;
	screen.textContent = "";

});


multiplyButton.addEventListener("click", () => {
	currentOperation = "multiply";

	if (screen.textContent == "") {
		result = firstOperand;
		return ;
	}
	
	firstOperand = Number(screen.textContent);
	result = firstOperand;
	screen.textContent = "";

});

divideButton.addEventListener("click", () => {
	currentOperation = "divide";

	if (screen.textContent == "") {
		result = firstOperand;
		return ;
	}
	
	firstOperand = Number(screen.textContent);
	result = firstOperand;
	screen.textContent = "";

});

equalButton.addEventListener("click", () => {
	secondOperand = Number(screen.textContent);

	if (currentOperation == "addition"){
		result += secondOperand;
		currentOperation = "";
		screen.textContent = result;
	} else if (currentOperation == "substraction") {
		result -= secondOperand;
		currentOperation = "";
		screen.textContent = result;
	} else if (currentOperation == "multiply") {
		result *= secondOperand;
		currentOperation = "";
		screen.textContent = result;		
	} else if (currentOperation == "divide") {
		if (secondOperand == 0) {
			screen.textContent = "Are you ok?";
			currentOperation = "";
		} else{			
			result /= secondOperand;
			currentOperation = "";
			screen.textContent = result;		
		}
	} else {
		firstOperand = Number(screen.textContent);
		result = firstOperand ;
		screen.textContent = result;
	}
});