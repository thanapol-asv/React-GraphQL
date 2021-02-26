import { ShoppingCart, createEmptyCart } from "../../components/Interface";

export const addItem = (product: ShoppingCart) => {
	return {
		type: "addItem",
		product: product,
	};
};

export const increaseItem = (product: ShoppingCart) => {
	return {
		type: "increaseItem",
		product: product,
	};
};

export const decreaseItem = (product: ShoppingCart) => {
	return {
		type: "decreaseItem",
		product: product,
	};
};

export const resetCart = () => {
	const empty: ShoppingCart = createEmptyCart();
	return {
		type: "resetCart",
		product: empty,
	};
};

export const addNewTransaction = (transactionID: string) => {
	return {
		type: "addNewTransaction",
		tid: transactionID,
	};
};
