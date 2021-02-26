import { combineReducers } from "redux";
import shoppingCartReducer from "./shoppingCart";
import transactionReducer from "./transaction";

const allReducers = combineReducers({
	shoppingCart: shoppingCartReducer,
	transaction: transactionReducer,
});

export type RootState = ReturnType<typeof allReducers>;

export default allReducers;
