import * as types from "../constants";
import { auth } from "../../Firebase/firebaseConfig";

export const addToBasket = (item) => {
	return {
		type: types.ADD_TO_BASKET,
		payload: item,
	};
};

export const removeFromBasket = (id) => {
	return {
		type: types.DELET_FROM_BASKET,
		payload: id,
	};
};

export const setBasketEmpty = () => {
	return {
		type: types.SET_BASKET_EMPTY,
	};
};
const registerStart = () => {
	return {
		type: types.REGISTER_START,
	};
};

const registerSuccess = (user) => {
	return {
		type: types.REGISTER_SUCCESS,
		payload: user,
	};
};

const registerFail = (err) => {
	return {
		type: types.REGISTER_FAIL,
		payload: err,
	};
};

const loginStart = () => {
	return {
		type: types.LOGIN_START,
	};
};
const loginSucess = (user) => {
	return {
		type: types.LOGIN_SUCCESS,
		payload: user,
	};
};
const loginFail = (err) => {
	return {
		type: types.LOGIN_FAIL,
		payload: err,
	};
};
const logoutStart = () => {
	return {
		type: types.LOGOUT_START,
	};
};
const logoutSucess = () => {
	return {
		type: types.LOGOUT_SUCCESS,
	};
};
const logoutFail = (err) => {
	return {
		type: types.LOGOUT_FAIL,
		payload: err,
	};
};
export const setUser = (user) => {
	return {
		type: types.SET_USER,
		payload: user,
	};
};

export const registerInitiate = (email, password) => {
	return function (dispatch) {
		dispatch(registerStart());
		auth
			.createUserWithEmailAndPassword(email, password)
			.then(({ user }) => {
				dispatch(registerSuccess(user));
			})
			.catch((err) => {
				dispatch(registerFail(err.message));
			});
	};
};

export const loginInitiate = (email, password) => {
	return function (dispatch) {
		dispatch(loginStart());
		auth
			.signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				dispatch(loginSucess(user));
			})
			.catch((err) => {
				dispatch(loginFail(err));
			});
	};
};

export const logoutInitiate = () => {
	return function (dispatch) {
		dispatch(logoutStart);
		auth
			.signOut()
			.then((res) => dispatch(logoutSucess()))
			.catch((err) => {
				dispatch(logoutFail(err));
			});
	};
};
