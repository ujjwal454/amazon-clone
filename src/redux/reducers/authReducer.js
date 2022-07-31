import * as types from "../constants";

const initialState = {
	loading: false,
	basket: [],
	user: null,
	error: [],
};

export const authReducers = (state = initialState, actions) => {
	switch (actions.type) {
		case types.REGISTER_START:
		case types.LOGIN_START:
		case types.LOGOUT_START:
			return {
				...state,
				loading: true,
			};
		case types.REGISTER_SUCCESS:
		case types.LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				user: actions.payload,
			};
		case types.SET_USER:
			return {
				...state,
				user: actions.payload,
			};
		case types.REGISTER_FAIL:
		case types.LOGIN_FAIL:
		case types.LOGOUT_FAIL:
			return {
				...state,
				laoding: false,
				error: actions.payload,
			};
		case types.LOGOUT_SUCCESS:
			return {
				...state,
				loading: false,
				user: null,
			};
		default:
			return state;
	}
};
