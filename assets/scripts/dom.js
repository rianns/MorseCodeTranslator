// ERRORS
export const emptyStrError = new Error("Text input must not be empty");
export const wrongOptionsError = new Error(
	"Choose either Alpha -> Morse or Morse -> Alpha"
);
export const wrongTypeInputError = new Error(
	"Only alphanumeric characters can be translated"
);

// Get doms
export const translatedOutput = document.getElementById("translateOutput");
export const btnSubmit = document.getElementById("submitBtn");
export const input = document.querySelector(".input-text");
export const errDiv = document.getElementById("errorMsg");
export const emptyErrP = document.querySelector(".input-error");
export const fromLang = document.querySelector("#fromLang");
export const toLang = document.querySelector("#toLang");

// add translated input in card
export const addToTranslateList = (
	element,
	parentElement,
	original,
	translated,
	grandparentNode
) => {
	// add class to parent node
	const parentElem = document.createElement(parentElement);
	parentElem.className = "translate-output__div translate-card";

	const originalText = document.createElement(element);
	const ogText = document.createTextNode(original);
	originalText.className = "translate-output__div--og";

	const translatedText = document.createElement(element);
	const transText = document.createTextNode(translated);
	translatedText.className = "translate-output__div--tr";

	originalText.appendChild(ogText);
	translatedText.appendChild(transText);
	parentElem.appendChild(originalText);
	parentElem.appendChild(translatedText);
	grandparentNode.appendChild(parentElem);
};

// shows text if input is empty
export const emptyError = (str) => {
	if (input.value.trim() === "") {
		emptyErrP.innerHTML =
			"Empty Input. Please enter valid alphanumeric characters.";
		errDiv.style.display = "block";
		throw emptyStrError;
	}
};

// getting which translation to use alpha -> morse or morse -> alpha
export const langValues = (str) => {
	if (toLang.value === "morseCode" && fromLang.value === "alphanumeric") {
		return str.split("");
	}
	if (toLang.value === "alphanumeric" && fromLang.value === "morseCode") {
		return str.split(" ");
	}
	throw wrongOptionsError;
};
