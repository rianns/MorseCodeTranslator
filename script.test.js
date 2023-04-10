// TESTING
/**
 * @jest-environment jsdom
 */

import { strArr } from "./script";
import {
	emptyError,
	wrongOptionsError,
	emptyStrError,
	langValues,
} from "./assets/scripts/dom";

// Should handle alphanumeric characters

// BONUS
// Should handle numbers
// Detect if input is english or morse

describe("Morse Code Translator tests", () => {
	it("Test for valid parameters", () => {
		expect(() => {
			strArr("hello");
		}).toBe(["h", "e", "l", "l", "o"]);
		expect(() => {
			strArr(".--. --- - .- - ---");
		}).toBe([".--.", "---", "-", ".-", "-", "---"]);
	});

	// Input cannot be empty
	it("Input cannot be empty", () => {
		expect(() => {
			emptyError("");
		}).toThrow(emptyStrError);
	});

	// Invalid characters
	it("Input can only be alphanumeric characters", () => {
		expect().toThrow();
	});

	// drop down language options test
	it("Drop down options wrong combination", () => {
		expect(() => {
			langValues();
		}).toThrow(wrongOptionsError);
	});
});
