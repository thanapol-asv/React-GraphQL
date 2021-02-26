const { v4 } = require("uuid");

const generateItemTrans = (id, name, quantity, price) => {
	return {
		PRODUCT_ID: id,
		PRODUCT_NAME: name,
		QUANTITY: quantity,
		THISPRICE: price,
	};
};

const Mutation = {
	// addItem(parent, args, ctx, info) {
	// 	const {
	// 		PRODUCT_ID,
	// 		PRODUCT_NAME,
	// 		PRODUCT_DESCRIPTION,
	// 		PRODUCT_IMGSRC,
	// 		PRODUCT_PRICE,
	// 		PRODUCT_SELLER,
	// 		PRODUCT_STOCK,
	// 	} = args;
	// 	const { products } = ctx;

	// 	const product = products.find((item) => item.PRODUCT_ID === PRODUCT_ID);
	// 	if (product) {
	// 		throw new Error(`Item with ITEM_ID:(${PRODUCT_ID}) is already exist`);
	// 	}

	// 	items.push({
	// 		PRODUCT_ID,
	// 		PRODUCT_NAME,
	// 		PRODUCT_DESCRIPTION,
	// 		PRODUCT_IMGSRC,
	// 		PRODUCT_PRICE,
	// 		PRODUCT_SELLER,
	// 		PRODUCT_STOCK,
	// 	});

	// 	return products;
	// },
	// updateItem(parent, args, ctx, info) {
	// 	const {
	// 		PRODUCT_ID,
	// 		PRODUCT_NAME,
	// 		PRODUCT_DESCRIPTION,
	// 		PRODUCT_IMGSRC,
	// 		PRODUCT_PRICE,
	// 	} = args;
	// 	const { products } = ctx;
	// 	const product = products.find((item) => item.PRODUCT_ID === PRODUCT_ID);
	// 	if (!product) {
	// 		throw new Error(`Item with ITEM_ID:(${PRODUCT_ID}) does not exist`);
	// 	}

	// 	if (PRODUCT_NAME) {
	// 		item.PRODUCT_NAME = PRODUCT_NAME;
	// 	}

	// 	if (PRODUCT_DESCRIPTION) {
	// 		item.PRODUCT_DESCRIPTION = PRODUCT_DESCRIPTION;
	// 	}

	// 	if (PRODUCT_PRICE) {
	// 		item.PRODUCT_PRICE = PRODUCT_PRICE;
	// 	}

	// 	if (PRODUCT_IMGSRC) {
	// 		item.PRODUCT_IMGSRC = PRODUCT_IMGSRC;
	// 	}

	// 	return product;
	// },
	// updateStock(parent, args, ctx, info) {
	// 	const { PRODUCT_ID, type, changeStock } = args;
	// 	const { products } = ctx;
	// 	const product = products.find((item) => item.PRODUCT_ID === PRODUCT_ID);
	// 	if (!product) {
	// 		throw new Error(`Item with ITEM_ID:(${PRODUCT_ID}) does not exist`);
	// 	}

	// 	if (type === "PURCHASE") {
	// 		item.PRODUCT_STOCK += changeStock;
	// 	} else if (type === "SELL") {
	// 		item.PRODUCT_STOCK -= changeStock;
	// 	} else {
	// 		throw new Error(`Cannot define Type`);
	// 	}

	// 	return product;
	// },
	// deleteItem(parent, args, ctx, info) {
	// 	const { PRODUCT_ID } = args;
	// 	const { products } = ctx;
	// 	const itemIndex = products.findIndex(
	// 		(item) => item.PRODUCT_ID === PRODUCT_ID
	// 	);
	// 	if (itemIndex === -1) {
	// 		throw new Error(`Item with ITEM_ID:(${PRODUCT_ID}) does not exist`);
	// 	}
	// 	products.splice(itemIndex, 1);
	// 	return products;
	// },
	requestItem(parent, args, ctx, info) {
		const { form } = args;
		const { products, transaction } = ctx;
		var Success = [];
		var unSuccess = [];
		var thisTrans = { tid: v4(), items: [], totalPrice: 0 };
		for (let i = 0; i < form.length; i++) {
			let product = products.find(
				(item) => item.PRODUCT_ID === form[i].PRODUCT_ID
			);
			if (!product) {
				unSuccess.push(form[i].PRODUCT_ID);
				continue;
			} else {
				if (
					product.PRODUCT_STOCK < form[i].quantity ||
					form[i].quantity === 0
				) {
					unSuccess.push(form[i].PRODUCT_ID);
					continue;
				}

				let price = 0;
				product.PRODUCT_STOCK -= form[i].quantity;
				price = product.PRODUCT_PRICE * form[i].quantity;

				thisTrans.totalPrice += price;
				thisTrans.items.push(
					generateItemTrans(
						product.PRODUCT_ID,
						product.PRODUCT_NAME,
						form[i].quantity,
						price
					)
				);
				Success.push(form[i].PRODUCT_ID);
			}
		}
		if (thisTrans.items.length === 0 || thisTrans.totalPrice <= 0) {
			return { tid: "", unSuccess: unSuccess, ResponseStatus: false };
		}
		transaction.push(thisTrans);
		return { tid: thisTrans.tid, unSuccess: unSuccess, ResponseStatus: true };
	},
};

module.exports = Mutation;
