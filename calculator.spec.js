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
	

	test("When digit 7 button is clicked show digit in screen", () => {
		const screen = document.querySelector(".screen");
		const digitButton = document.querySelectorAll(".digits button")[0];

		digitButton.click();
		
		expect(screen.textContent).toBe("7");
	});

	test("When random digit button is clicked show digit in screen", () => {
		const screen = document.querySelector(".screen");
		screen.textContent = "";
		const digitButtons = document.querySelectorAll(".digits button");
		const randomIndex = Math.floor(Math.random() * 10);

		const randomDigitButton = digitButtons[randomIndex] ;
		
		randomDigitButton.click();

		expect(screen.textContent).toBe(randomDigitButton.textContent);
	});


	test("When multiple digit buttons are clicked, show digit in screen", () => {
		const screen = document.querySelector(".screen");
		screen.textContent = "";
		const digitButtons = document.querySelectorAll(".digits button");
		
		let randomNumber = "";

		for (let i = 0; i < 3; i++) {
			const randomIndex = Math.floor(Math.random() * 10);
			const randomDigitButton = digitButtons[randomIndex];
			const randomDigit = randomDigitButton.textContent;
			randomNumber += randomDigit;

			randomDigitButton.click();
		}

		expect(Number(screen.textContent)).toBe(Number(randomNumber));

	});
});

describe('allClear', () => {
	test('when AC button clicked screen stays clear if it is already clear', () => {
		const screen = document.querySelector(".screen");
		const allClearButton = document.querySelector("#ac");
		
		allClearButton.click();

		expect(screen.textContent).toBe("");
	});

	test('when AC button clicked after digits were clicked screen clears', () => {
		const screen = document.querySelector(".screen");
		const allClearButton = document.querySelector("#ac")
		const digitButtons = document.querySelectorAll(".digits button");

		let randomNumber = "";

		for (let i = 0; i < 3; i++) {
			const randomIndex = Math.floor(Math.random() * 10);
			const randomDigitButton = digitButtons[randomIndex];
			const randomDigit = randomDigitButton.textContent;
			randomNumber += randomNumber;

			randomDigitButton.click();
		}

		allClearButton.click();

		expect(screen.textContent).toBe("");
	});
});
