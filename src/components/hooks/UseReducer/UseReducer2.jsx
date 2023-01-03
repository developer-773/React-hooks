import React, { useReducer } from "react";
import { reducer2 } from "./reducer2";

const initialState = 0;

const UseReducer2 = () => {
	const [count, dispatch] = useReducer(reducer2, initialState);

	return (
		<div>
			<h2>Counter: {count}</h2>
			<button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
			<button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
		</div>
	);
};

export default UseReducer2;
