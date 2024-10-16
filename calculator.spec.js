/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');


// Load HTML file content into the document
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
document.body.innerHTML = html;

require('./calculator.js');

const screen = document.querySelector(".screen");
const digitButtons = document.querySelectorAll(".digits button");
const allClearButton = document.querySelector("#ac");
const addButton = document.querySelector("#add");
const substractButton = document.querySelector("#substract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const equalButton = document.querySelector("#equal");

describe('screenPrint', () => {
	test("When digit 7 button is clicked show digit in screen", () => {		
		const digitButton = digitButtons[0];

		digitButton.click();
		
		expect(screen.textContent).toBe("7");
	});

	test("When random digit button is clicked show digit in screen", () => {
		screen.textContent = "";

		const randomIndex = Math.floor(Math.random() * 10);
		const randomDigitButton = digitButtons[randomIndex] ;
		
		randomDigitButton.click();

		expect(screen.textContent).toBe(randomDigitButton.textContent);
	});


	test("When multiple digit buttons are clicked, show digit in screen", () => {
		screen.textContent = "";
		
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
		allClearButton.click();

		expect(screen.textContent).toBe("");
	});

	test('when AC button clicked after digits were clicked screen clears', () => {

		for (let i = 0; i < 3; i++) {
			const randomIndex = Math.floor(Math.random() * 10);
			const randomDigitButton = digitButtons[randomIndex];

			randomDigitButton.click();
		}

		allClearButton.click();

		expect(screen.textContent).toBe("");
	});
});

describe("add", () => {
	test("clicking addition button when screen is clear does nothing", () => {
		allClearButton.click();
		addButton.click();

		expect(screen.textContent).toBe("");
	});

	test("clicking add button when screen shows a number clears the screen", () => {		
		allClearButton.click();
		for (let i = 0; i < 3; i++) {
			const randomIndex = Math.floor(Math.random() * 10);
			const randomDigitButton = digitButtons[randomIndex];

			randomDigitButton.click();
		}

		addButton.click();

		expect(screen.textContent).toBe("");

	});
	
	test("entering a number then clicking addition button then another number and finally equal sign shows the result of the addition in the screen", () => {
		allClearButton.click();
		let result = 0;

		let randomNumber = "";
		for (let i = 0; i < 3; i++) {
			const randomIndex = Math.floor(Math.random() * 10);
			const randomDigitButton = digitButtons[randomIndex];
			const randomDigit = randomDigitButton.textContent;
			randomNumber += randomDigit;

			randomDigitButton.click();
		}

		result = Number(randomNumber);
		addButton.click();
		
		randomNumber = "";
		for (let i = 0; i < 3; i++) {
			const randomIndex = Math.floor(Math.random() * 10);
			const randomDigitButton = digitButtons[randomIndex];
			const randomDigit = randomDigitButton.textContent;
			randomNumber += randomDigit;

			randomDigitButton.click();
		}

		result += Number(randomNumber);
		
		equalButton.click();

		expect(Number(screen.textContent)).toBe(result);
	});
});

describe("substract", () => {
	test("clicking substraction button when screen is clear does nothing", () => {
		allClearButton.click();
		substractButton.click();

		expect(screen.textContent).toBe("");
	});

	test("clicking substract button when screen shows a number clears the screen", () => {		
		allClearButton.click();

		for (let i = 0; i < 3; i++) {
			const randomIndex = Math.floor(Math.random() * 10);
			const randomDigitButton = digitButtons[randomIndex];

			randomDigitButton.click();
		}

		substractButton.click();

		expect(screen.textContent).toBe("");

	});
	
	test("entering a number then clicking substract button then another number and finally equal sign shows the result of the substraction in the screen", () => {
		allClearButton.click();
		let result = 0;

		let randomNumber = "";
		for (let i = 0; i < 3; i++) {
			const randomIndex = Math.floor(Math.random() * 10);
			const randomDigitButton = digitButtons[randomIndex];
			const randomDigit = randomDigitButton.textContent;
			randomNumber += randomDigit;

			randomDigitButton.click();
		}

		result = Number(randomNumber);
		substractButton.click();
		
		randomNumber = "";
		for (let i = 0; i < 3; i++) {
			const randomIndex = Math.floor(Math.random() * 10);
			const randomDigitButton = digitButtons[randomIndex];
			const randomDigit = randomDigitButton.textContent;
			randomNumber += randomDigit;

			randomDigitButton.click();
		}

		result -= Number(randomNumber);
		
		equalButton.click();

		expect(Number(screen.textContent)).toBe(result);
	});
});

describe("multiply", () => {
	test("clicking multiplication button when screen is clear does nothing", () => {
		allClearButton.click();
		multiplyButton.click();

		expect(screen.textContent).toBe("");
	});

	test("clicking multiply button when screen shows a number clears the screen", () => {		
		allClearButton.click();

		for (let i = 0; i < 3; i++) {
			const randomIndex = Math.floor(Math.random() * 10);
			const randomDigitButton = digitButtons[randomIndex];

			randomDigitButton.click();
		}

		multiplyButton.click();

		expect(screen.textContent).toBe("");

	});
	
	test("entering a number then clicking multiply button then another number and finally equal sign shows the result of the multiplication in the screen", () => {
		allClearButton.click();
		let result = 1;

		let randomNumber = "";
		for (let i = 0; i < 3; i++) {
			const randomIndex = Math.floor(Math.random() * 10);
			const randomDigitButton = digitButtons[randomIndex];
			const randomDigit = randomDigitButton.textContent;
			randomNumber += randomDigit;

			randomDigitButton.click();
		}

		result = Number(randomNumber);
		multiplyButton.click();
		
		randomNumber = "";
		for (let i = 0; i < 3; i++) {
			const randomIndex = Math.floor(Math.random() * 10);
			const randomDigitButton = digitButtons[randomIndex];
			const randomDigit = randomDigitButton.textContent;
			randomNumber += randomDigit;

			randomDigitButton.click();
		}

		result *= Number(randomNumber);
		
		equalButton.click();

		expect(Number(screen.textContent)).toBe(result);
	});
})

