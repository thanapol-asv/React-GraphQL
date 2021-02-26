import { ShoppingCart } from "../../components/Interface";

interface Action {
	type: string;
	product: ShoppingCart;
}

const shoppingCartReducer = (state: ShoppingCart[] = [], action: Action) => {
	switch (action.type) {
		case "addItem": {
			state.push(action.product);
			return state;
		}
		case "increaseItem": {
			const index = state.findIndex(
				(item) =>
					item.products.PRODUCT_ID === action.product.products.PRODUCT_ID
			);
			if (index === -1) return state;
			else {
				state[index].quantity += 1;
				return state;
			}
		}
		case "decreaseItem": {
			const index = state.findIndex(
				(item) =>
					item.products.PRODUCT_ID === action.product.products.PRODUCT_ID
			);
			if (index === -1) return state;
			else {
				state[index].quantity -= 1;
				return state;
			}
		}
		case "resetCart": {
			state = [];
			return state;
		}
		default:
			return state;
	}
};
export default shoppingCartReducer;
