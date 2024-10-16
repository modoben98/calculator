const screen = document.querySelector(".screen");

const digitButtons = document.querySelectorAll(".digits button");

digitButtons.forEach( (digitButton) => {
	digitButton.addEventListener("click", () => {
		screen.textContent += digitButton.textContent;
	})
});

const allClearButton = document.querySelector("#ac");

allClearButton.addEventListener("click", () => {
	screen.textContent = "";
});