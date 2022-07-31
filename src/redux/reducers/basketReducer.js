import * as types from "../constants";

const initialState = {
	basket: [],
};

export const basketReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case types.ADD_TO_BASKET:
			const newBasket = [...state.basket, actions.payload];
			return {
				...state,
				basket: newBasket,
			};
		case types.DELET_FROM_BASKET:
			const newList = [...state.basket].filter(
				(elem) => elem.id !== actions.payload
			);
			return {
				...state,
				basket: newList,
			};
		case types.SET_BASKET_EMPTY:
			return {
				...state,
				basket: [],
			};
		default:
			return state;
	}
};
