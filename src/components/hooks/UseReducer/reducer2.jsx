export function reducer2(state, action) {
	console.log(action);
	switch (action.type) {
		case "INCREMENT":
			return (state = state + 1);
		case "DECREMENT":
			return (state = state - 1);
		default:
			return state;
	}
}
