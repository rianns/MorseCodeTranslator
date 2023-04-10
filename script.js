import { AlphaToMorse, MorsetoAlpha } from "./assets/scripts/morseCode.js";
import {
	translatedOutput,
	btnSubmit,
	input,
	errDiv,
	fromLang,
	toLang,
	addToTranslateList,
	emptyError,
	langValues,
} from "./assets/scripts/dom.js";

// input string to array, trim whitespace
export const strArr = (str) => {
	// getting which translation to use alpha -> morse or morse -> alpha
	const strToArr = langValues(str);

	// clean up str to remove empty spaces
	const filtered = strToArr.filter((i) => {
		return i != null && i != " " && i != undefined;
	});
	return filtered;
};

// translate the trimmed array
const translate = (arr) => {
	return arr.map((char) => {
		if (fromLang.value === "alphanumeric" || toLang.value === "morseCode") {
			return AlphaToMorse[char];
		}
		return MorsetoAlpha(AlphaToMorse)[char];
	});
};

// translate button click
if (btnSubmit) {
	btnSubmit.addEventListener("click", (e) => {
		e.preventDefault();

		// checks if there are anything translated, removes "Nothing to translate" card
		if (document.getElementById("noTranslate")) {
			translatedOutput.removeChild(
				document.querySelector(".no-translate-card")
			);
		}

		// calls to transform str to array and transfor to upper case
		const toTranslate = strArr(input.value);
		const upper = toTranslate.map((char) => char.toUpperCase());

		// translate from MorseCode.js
		const toTranslateArr = translate(upper);

		// join translated array with space between characters
		const translated = toTranslateArr.join(" ");

		// checks if input is empty, returns empty error, if not returns translated block
		if (input.value.trim() == "") {
			emptyError("");
		} else {
			errDiv.style.display = "none";
			addToTranslateList(
				"p",
				"div",
				input.value,
				translated,
				translatedOutput
			);
			input.value = "";
		}
	});
}
