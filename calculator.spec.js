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
		
		const firstRandomIndex = Math.floor(Math.random() * digitButtons.length);
		const secondRandomIndex = Math.floor(Math.random() * digitButtons.length);
		const thirdRandomIndex = Math.floor(Math.random() * digitButtons.length);

		const firstRandomDigitButton = digitButtons[firstRandomIndex] ;
		const secondRandomDigitButton = digitButtons[secondRandomIndex] ;
		const thirdRandomDigitButton = digitButtons[thirdRandomIndex] ;

		const firstRandomDigit = firstRandomDigitButton.textContent;
		const secondRandomDigit = secondRandomDigitButton.textContent;
		const thirdRandomDigit = thirdRandomDigitButton.textContent;

		const randomDigit = firstRandomDigit + secondRandomDigit + thirdRandomDigit ;

		firstRandomDigitButton.click();
		secondRandomDigitButton.click();
		thirdRandomDigitButton.click();

		expect(Number(screen.textContent)).toBe(Number(randomDigit));

	});
})