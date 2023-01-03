import React,{ useReducer }  from "react";
import reducer from "./reducer"


const UseReducerr = () => {
	const [{ r, g, b }, dispatch] = useReducer(reducer, {
		r: 0,
		g: 105,
		b: 105,
	});
	return (
		<div>
			<h1 style={{color: `rgb(${r}, ${g}, ${b})`}}>UseReducer</h1>UseReducerr
			<div>
				<span>R</span>
				<button onClick={() => dispatch({type: "INCREMENT_R"})}>+</button>
				<button onClick={() => dispatch({type: "DECREMENT_R"})}>-</button>
			</div>
			<div>
				<span>G</span>
                <button onClick={() => dispatch({type: "INCREMENT_G"})}>+</button>
				<button onClick={() => dispatch({type: "DECREMENT_G"})}>-</button>
			</div>
			<div>
				<span>B</span>
                <button onClick={() => dispatch({type: "INCREMENT_B"})}>+</button>
				<button onClick={() => dispatch({type: "DECREMENT_B"})}>-</button>
			</div>
		</div>
	);
};

export default UseReducerr;
