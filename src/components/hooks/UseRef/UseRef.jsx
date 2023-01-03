import React, { useState, useRef, useEffect } from "react";

const UseRef = () => {
	const [value, setValue] = useState("default");
	const renderCount = useRef(1);
	const inputRef = useRef(null);
	const prevValue = useRef('');

	useEffect(() => {
		renderCount.current++;
	}, []);

	useEffect(() => {
		prevValue.current = value;
	}, [value]);

	const wait = () => inputRef.current.focus();
	return (
		<div className="bg-primary w-100 p-5">
			<p className="text-white fs-3">
				Amount of rendering: {renderCount.current}
			</p>
			<p>Last value: {prevValue.current}</p>
			<input
				type="text"
				value={value}
				ref={inputRef}
				onChange={(evt) => setValue(evt.target.value)}
			/>
			<button className="btn btn-success" onClick={wait}>
				Click Me
			</button>
		</div>
	);
};

export default UseRef;
