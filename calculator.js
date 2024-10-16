let firstOperand = 0;
let secondOperand = 0;
let result = 0;
let currentOperation = "";

const screen = document.querySelector(".screen");
const digitButtons = document.querySelectorAll(".digits button");
const allClearButton = document.querySelector("#ac");
const addButton = document.querySelector("#add");

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

equal.addEventListener("click", () => {
	secondOperand = Number(screen.textContent);

	if (currentOperation == "addition"){
		result += secondOperand;
		currentOperation = "";
		screen.textContent = result;
	} else {
		firstOperand = Number(screen.textContent);
		result = firstOperand ;
		screen.textContent = result;
	}

	
});