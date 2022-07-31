import { combineReducers } from "redux";
import { authReducers } from "./authReducer";
import { basketReducer } from "./basketReducer";
const rootReducer = combineReducers({
	auth: authReducers,
	cart: basketReducer,
});

export default rootReducer;
