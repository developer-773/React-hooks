import React from "react";

const reducer = (state, {type, payload = 50}) => {
	const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);
	const step = 50;

	switch (type) {
		case "INCREMENT_R":
			return {
				...state,
				r: limitRGB(state.r + payload),
			};
		case "DECREMENT_R":
			return {
				...state,
				r: limitRGB(state.r - payload),
			};
		case "INCREMENT_G":
			return {
				...state,
				g: limitRGB(state.g + payload),
			};
		case "DECREMENT_G":
			return {
				...state,
				g: limitRGB(state.g - payload),
			};
		case "INCREMENT_B":
			return {
				...state,
				b: limitRGB(state.b + payload),
			};
		case "DECREMENT_B":
			return {
				...state,
				b: limitRGB(state.b - payload),
			};
		default:
			return state;
	}
};

export default reducer;
