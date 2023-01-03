import React from "react";
import UseLocalStorage from "./UseLocalStorage";
import UsePrevious from "./UsePrevious";

const UseLocalStorageMain = () => {
	const [count, setCount] = UseLocalStorage(0, 'count');

	const prevCount = UsePrevious(count);
	return (
		<div>
			UsePreviousMain
			<h2>Custom hooks</h2>
			<p>Current: {count}</p>
			<p>Previous: {prevCount}</p>
			<button onClick={() => setCount(count + 1)}>Count</button>
		</div>
	);
};

export default UseLocalStorageMain;
