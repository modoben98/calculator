/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');


// Load HTML file content into the document
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
document.body.innerHTML = html;

require('./calculator.js');


describe('screenPrint', () => {
	

	test("When number 7 button is clicked show number in screen", () => {
		const screen = document.querySelector(".screen");
		const numberButton = document.querySelectorAll(".numbers button")[0];

		numberButton.click();
		expect(screen.textContent).toBe("7");

	});

	test("When random number button is clicked show number in screen", () => {
		const screen = document.querySelector(".screen");
		screen.textContent = "";
		const numberButtons = document.querySelectorAll(".numbers button");
		const randomIndex = Math.floor(Math.random() * 10);

		const randomNumberButton = numberButtons[randomIndex] ;
		randomNumberButton.click();

		expect(screen.textContent).toBe(randomNumberButton.textContent);
	});


	test("When multiple number buttons are clicked, show number in screen", () => {
		const screen = document.querySelector(".screen");
		screen.textContent = "";
		const numberButtons = document.querySelectorAll(".numbers button");
		
		const firstRandomIndex = Math.floor(Math.random() * numberButtons.length);
		const secondRandomIndex = Math.floor(Math.random() * numberButtons.length);
		const thirdRandomIndex = Math.floor(Math.random() * numberButtons.length);

		const firstRandomNumberButton = numberButtons[firstRandomIndex] ;
		const secondRandomNumberButton = numberButtons[secondRandomIndex] ;
		const thirdRandomNumberButton = numberButtons[thirdRandomIndex] ;

		const firstRandomNumber = firstRandomNumberButton.textContent;
		const secondRandomNumber = secondRandomNumberButton.textContent;
		const thirdRandomNumber = thirdRandomNumberButton.textContent;

		const randomNumber = firstRandomNumber + secondRandomNumber + thirdRandomNumber ;

		firstRandomNumberButton.click();
		secondRandomNumberButton.click();
		thirdRandomNumberButton.click();

		expect(Number(screen.textContent)).toBe(Number(randomNumber));

	});
})