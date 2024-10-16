const screen = document.querySelector(".screen");

const numberButtons = document.querySelectorAll(".numbers button");

numberButtons.forEach( (numberButton) => {
	numberButton.addEventListener("click", () => {
		screen.textContent += numberButton.textContent;
	})
});

// const randomNumberButton = numberButtons[0] ;

// //console.log(randomNumberButton);

// randomNumberButton.click();
// console.log(screen.textContent);
