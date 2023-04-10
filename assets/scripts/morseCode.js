// A to Z in Morse Code

export const AlphaToMorse = {
	A: ".-",
	B: "-...",
	C: "-.-.",
	D: "-..",
	E: ".",
	F: "..-.",
	G: "--.",
	H: "....",
	I: "..",
	J: ".---",
	K: "-.-",
	L: ".-..",
	M: "--",
	N: "-.",
	O: "---",
	P: ".--.",
	Q: "--.-",
	R: ".-.",
	S: "...",
	T: "-",
	U: "..-",
	W: ".--",
	X: "-..-",
	Y: "-.--",
	Z: "--..",
};

export const MorsetoAlpha = (obj) => {
	return Object.fromEntries(Object.entries(obj).map(([a, b]) => [b, a]));
};
