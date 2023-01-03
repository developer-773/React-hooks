import React, { useState } from "react";
import UsePrevious from "./UsePrevious";

const UsePreviousMain = () => {
	const [count, setCount] = useState(0);

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

export default UsePreviousMain;
