import React, { useImperativeHandle, forwardRef, useRef } from "react";

const TextInput = forwardRef((props, ref) => {
	const { hasError, placeholder, value, update } = props;
	console.log(update);
	const InputRef = useRef();

	useImperativeHandle(ref, () => {
		return {
			focus() {
				InputRef.current.focus();
			},
		};
	});

	return (
		<input
			ref={InputRef}
			value={value}
			onChange={(evt) => update(evt.target.value)}
			placeholder={hasError ? "Error" : placeholder}
			style={{ borderColor: hasError ? "red" : "black", outline: "none" }}
			type="text"
		/>
	);
});

export default TextInput;
