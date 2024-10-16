const operations = require('./operations');


describe('add', () => {
	test("adds positive numbers", () => {
		expect(operations.add(23 , 12)).toBe(35);
	});

	test('add negative numbers', () => {
		expect(operations.add(-23, -12)).toBe(-35);
	} )
});

describe('substract', () => {
	test("substract positive numbers", () => {
		expect(operations.substract(15 , 12)).toBe(3);
	});

	test("substract positive and negative numbers", () => {
		expect(operations.substract(15, -12)).toBe(27);
	});

	test("substract negative numbers", () => {
		expect(operations.substract(-15, -12)).toBe(-3);
	});

	test("substract negative and positive numbers", () => {
		expect(operations.substract(-15, 12)).toBe(-27);
	});

});

describe('multiply', () => {
	test("multiply positive numbers", () => {
		expect(operations.multiply(15, 17)).toBe(255);
	});

	test("multiply negative and positive numbers", () => {
		expect(operations.multiply(15, -17)).toBe(-255);
	})

	test("multiply negative numbers", () => {
		expect(operations.multiply(-15, -17)).toBe(255);
	})
});

describe('divide', () => {
	test("divide positive numbers", () => {
		expect(operations.divide(15, 3)).toBe(5);
	});

	test("divide by 0", () => {
		expect(operations.divide(15, 0)).toBe("Hello? Are you sick ?");
	});

	test("divide negative numbers", () => {
		expect(operations.divide(15, -3)).toBe(-5);
	});
})