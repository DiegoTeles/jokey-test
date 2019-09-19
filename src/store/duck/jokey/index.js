import { JokeyTypes } from "./types";

const INITIAL_JOKEY = {
	data: [],
	error: "",
	loading: true,
};

const reducer = (state = INITIAL_JOKEY, action) => {
	switch (action.type) {
		case JokeyTypes.SYSTEM:
			return {
				...state,
			};
		case JokeyTypes.SYSTEM_SUCCESS:
			return {
				...state,
				data: action.payload || undefined,
				loading: false,
			};
		case JokeyTypes.SYSTEM_FAILURE:
			return {
				...state,
				data: INITIAL_JOKEY,
				error: action.payload,
			};
		case JokeyTypes.CLEAR_STATUS:
			return {
				...state,
				updated: false,
				error: "",
			};
		default:
			return state;
	}
};

export default reducer;
