import { useRef, useEffect } from "react";

const UsePrevious = (value) => {
	const ref = useRef(null);

	useEffect(() => {
		ref.current = value;
	});

	return ref.current;
};

export default UsePrevious;
