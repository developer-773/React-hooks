import React, { useEffect, useState } from "react";

const UseLocalStorage = (initialState, key) => {
	const get = () => {
		const storage = window.localStorage.getItem(key);

        return storage ? +storage : initialState 
	};

    const [value, setValue] = useState(get)

    useEffect(() => {
        localStorage.setItem(key, value)
    },[value])

    return [value, setValue]
};

export default UseLocalStorage;
