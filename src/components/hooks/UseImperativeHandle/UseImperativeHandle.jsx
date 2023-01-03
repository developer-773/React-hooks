import React, { useRef, useState } from "react";
import TextInput from "./TextInput";

const UseImperativeHandle = () => {
	const [card, setCard] = useState("");
	const [phone, setPhone] = useState("");
	const [error, setError] = useState("");

	const cardEl = useRef(null);
	const phoneEl = useRef(null);

	const validate = () => {
		if (card.length < 16) {
			setError("card");
			cardEl.current.focus();
			return;
		}

		if (phone.length < 10) {
			setError("phone");
			cardEl.current.focus();
			return;
		}

		setError("");
	};
	return (
		<div className="w-50 mx-auto p-5 bg-primary">
			<TextInput
				hasError={error === "card"}
				placeholder="Card"
				update={setCard}
				value={card}
				ref={cardEl}
				type="text"
			/>

			<TextInput
				hasError={error === "phone"}
				placeholder="Phone"
				update={setPhone}
				value={phone}
				ref={phoneEl}
				type="text"
			/>

			<button className="btn btn-primary" onClick={validate}>Send</button>
		</div>
	);
};

export default UseImperativeHandle;
