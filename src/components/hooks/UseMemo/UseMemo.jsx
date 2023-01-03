import React, { useMemo, useState, useEffect } from "react";

function complete(num) {
	console.log("Completed");
	let i = 0;
	while (i < 10000000) i++;
    num * 2
	return num;
}

const UseMemo = () => {
	const [number, setNumber] = useState(8);
	const [colored, setColored] = useState(false);
	// const styles = {
	// 	color: colored ? "crimson" : "white",
	// };

    const styles = useMemo(() => {
        console.log("styles")
        return {
            color: colored ? "crimson" : "white"
        }
    },[colored])

	const computed = useMemo(() => {
        console.log("Computed")
	    return complete(number)
	},[number])

	// const computed = complete(number);

    // useEffect(() => {
    //     console.log("Styles changed")
    // },[styles])
	return (
		<div className="mx-auto w-50 bg-primary p-5">
			UseMemo
			<p style={styles} className={` fs-`}>
				Amount: {number}
			</p>
			<button
				className="btn btn-success"
				onClick={() => setNumber((prev) => prev + 1)}
			>
				Add
			</button>
			<button
				className="btn btn-danger"
				onClick={() => setNumber((prev) => prev - 1)}
			>
				Remove
			</button>
			<button
				className="btn btn-warning"
				onClick={() => setColored((prev) => !prev)}
			>
				Edit
			</button>
		</div>
	);
};

export default React.memo(UseMemo);
